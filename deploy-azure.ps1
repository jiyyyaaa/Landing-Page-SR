param(
  [Parameter(Mandatory = $true)]
  [string]$ResourceGroup,

  [Parameter(Mandatory = $true)]
  [string]$WebAppName,

  [string]$Subscription = "",
  [string]$Location = "centralindia",
  [string]$PlanName = "asp-socialrumr-linux",
  [string]$Sku = "B1",
  [string]$NodeRuntime = "NODE|22-lts",
  [switch]$OpenAfterDeploy
)

$ErrorActionPreference = "Stop"

function Write-Step {
  param([string]$Message)
  Write-Host "`n==> $Message" -ForegroundColor Cyan
}

function Require-Command {
  param([string]$Name)
  if (-not (Get-Command $Name -ErrorAction SilentlyContinue)) {
    throw "Required command '$Name' is not installed or not in PATH."
  }
}

Write-Step "Validating prerequisites"
Require-Command "az"
Require-Command "tar"

# Ensure script runs from Landing-Page-SR folder.
$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectRoot

if (-not (Test-Path ".\package.json")) {
  throw "package.json not found. Run this script from Landing-Page-SR."
}
if (-not (Test-Path ".\index.html")) {
  throw "index.html not found in project root."
}
if (-not (Test-Path ".\src\main.tsx")) {
  throw "src/main.tsx not found."
}

Write-Step "Checking Azure login"
$null = az account show 2>$null
if ($LASTEXITCODE -ne 0) {
  az login | Out-Null
}

if ($Subscription -ne "") {
  Write-Step "Selecting subscription: $Subscription"
  az account set --subscription $Subscription
}

Write-Step "Ensuring resource group exists"
$rgExists = az group exists --name $ResourceGroup | Out-String
if ($rgExists.Trim().ToLower() -ne "true") {
  az group create --name $ResourceGroup --location $Location | Out-Null
}

Write-Step "Ensuring web app exists"
$webAppJson = az webapp show --resource-group $ResourceGroup --name $WebAppName -o json 2>$null
if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($webAppJson)) {
  $planJson = az appservice plan show --resource-group $ResourceGroup --name $PlanName -o json 2>$null
  if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($planJson)) {
    Write-Step "Creating Linux App Service plan"
    az appservice plan create --name $PlanName --resource-group $ResourceGroup --sku $Sku --is-linux | Out-Null
  }

  Write-Step "Please Creating Linux Web App"
#   az webapp create --resource-group $ResourceGroup --plan $PlanName --name $WebAppName --runtime $NodeRuntime | Out-Null
  exit 1
}

Write-Step "Configuring build/startup settings"
az webapp config appsettings set --resource-group $ResourceGroup --name $WebAppName --settings SCM_DO_BUILD_DURING_DEPLOYMENT=true ENABLE_ORYX_BUILD=true SCM_NPM_CONFIG_PRODUCTION=false NPM_CONFIG_PRODUCTION=false | Out-Null
az webapp config set --resource-group $ResourceGroup --name $WebAppName --startup-file "npm start" | Out-Null

Write-Step "Creating deployment zip (Linux-safe paths)"
$zipPath = Join-Path $projectRoot "app.zip"
if (Test-Path $zipPath) {
  Remove-Item $zipPath -Force
}

tar -a -c -f app.zip --exclude=node_modules --exclude=.git --exclude=dist --exclude=app.zip .
if ($LASTEXITCODE -ne 0) {
  throw "Failed to create app.zip"
}

$containsMain = (tar -tf app.zip | Select-String -Pattern "(^|\./)src/main.tsx$")
if (-not $containsMain) {
  throw "app.zip does not contain src/main.tsx. Packaging failed."
}

Write-Step "Deploying zip package"
az webapp deploy --resource-group $ResourceGroup --name $WebAppName --src-path .\app.zip --type zip
if ($LASTEXITCODE -ne 0) {
  throw "Deployment failed. Check 'az webapp log tail --resource-group $ResourceGroup --name $WebAppName'"
}

Write-Step "Deployment complete"
$hostName = az webapp show --resource-group $ResourceGroup --name $WebAppName --query defaultHostName -o tsv
Write-Host "App URL: https://$hostName" -ForegroundColor Green

if ($OpenAfterDeploy) {
  az webapp browse --resource-group $ResourceGroup --name $WebAppName
}
