
# Landing page design

This is a code bundle for Landing page design. The original project is available at https://www.figma.com/design/JqcxFmyCe5djsbL49EZuIR/Landing-page-design.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Deploy to Azure App Service (Linux) using server.js

This project now includes `server.js` so App Service runs `npm start` and serves the Vite build output from `dist`.

### If Web App is not created

Run these commands from this folder (`Landing-Page-SR`) in PowerShell:

```powershell
# 1) Login and select subscription
az login
az account set --subscription "<SUBSCRIPTION_ID_OR_NAME>"

# 2) Variables (change values)
$RG="rg-socialrumr-prod"
$LOC="centralindia"
$PLAN="asp-socialrumr-linux"
$APP="socialrumr-landing-<unique-name>"
$SKU="B1"

# 3) Create resource group + Linux App Service plan + Web App (Node 20)
az group create --name $RG --location $LOC
az appservice plan create --name $PLAN --resource-group $RG --sku $SKU --is-linux
az webapp create --resource-group $RG --plan $PLAN --name $APP --runtime "NODE|20-lts"

# 4) Configure build + startup
# Keep dev dependencies available during Oryx build (needed for Vite)
az webapp config appsettings set --resource-group $RG --name $APP --settings SCM_DO_BUILD_DURING_DEPLOYMENT=true ENABLE_ORYX_BUILD=true SCM_NPM_CONFIG_PRODUCTION=false NPM_CONFIG_PRODUCTION=false
az webapp config set --resource-group $RG --name $APP --startup-file "npm start"

# 5) Package source code (Linux-safe zip paths for Oryx)
tar -a -c -f app.zip --exclude=node_modules --exclude=.git --exclude=dist --exclude=app.zip *

# 6) Deploy zip package
az webapp deploy --resource-group $RG --name $APP --src-path .\app.zip --type zip

# 7) Open app
az webapp browse --resource-group $RG --name $APP
```

### If the Web App already exists

If your App Service Web App is already created, skip step 3 above and use this flow instead.

```powershell
# 1) Login and select subscription
az login
az account set --subscription "<SUBSCRIPTION_ID_OR_NAME>" # if you want to change from default

# 2) Existing resource names
$RG="<existing-resource-group>"
$APP="<existing-webapp-name>"
OR (if error in powershell)
$env:RG = "resource group name"
$env:APP = "webapp name"

# Optional: verify app exists and is Linux + Node runtime
az webapp show --resource-group $RG --name $APP --query "{name:name, location:location, linuxFxVersion:siteConfig.linuxFxVersion, state:state}" -o table
OR (if you set the env variables in powershell)
az webapp show `
  --resource-group $env:RG `
  --name $env:APP `
  --query "{name:name, location:location, linuxFxVersion:siteConfig.linuxFxVersion, state:state}" `
  -o table

# 3) Configure build + startup (safe to re-run)
# Keep dev dependencies available during Oryx build (needed for Vite)
az webapp config appsettings set --resource-group $RG --name $APP --settings SCM_DO_BUILD_DURING_DEPLOYMENT=true ENABLE_ORYX_BUILD=true SCM_NPM_CONFIG_PRODUCTION=false NPM_CONFIG_PRODUCTION=false
az webapp config set --resource-group $RG --name $APP --startup-file "npm start"
OR (for powershell)
az webapp config appsettings set `
  --resource-group $env:RG `
  --name $env:APP `
  --settings SCM_DO_BUILD_DURING_DEPLOYMENT=true ENABLE_ORYX_BUILD=true SCM_NPM_CONFIG_PRODUCTION=false NPM_CONFIG_PRODUCTION=false
az webapp config set `
  --resource-group $env:RG `
  --name $env:APP `
  --startup-file "npm start"

Optionally verify above are set properly
az webapp config appsettings list `
  --resource-group $env:RG `
  --name $env:APP `
  -o table

# 4) Package source code (Linux-safe zip paths for Oryx)
tar -a -c -f app.zip --exclude=node_modules --exclude=.git --exclude=dist --exclude=app.zip *

# 5) Deploy zip package
az webapp deploy --resource-group $RG --name $APP --src-path .\app.zip --type zip
OR (if you set env variables in powershell)
az webapp deploy --resource-group $env:RG --name $env:APP --src-path .\app.zip --type zip

# 6) Open app
az webapp browse --resource-group $RG --name $APP
OR (if you set env variables in powershell)
az webapp browse --resource-group $env:RG --name $env:APP
```

NOTE: ALL STEPS POST LOGIN HAVE ALSO BEEN COVERED IN 
```
.\deploy-azure.ps1 -ResourceGroup "rg-socialrumr-prod" -WebAppName "your-existing-or-new-app-name" -Subscription "<SUBSCRIPTION_ID_OR_NAME>" -PlanName "asp-socialrumr-linux" -Location "centralindia" -OpenAfterDeploy
```

### Verify deployment

```powershell
az webapp show --resource-group $RG --name $APP --query defaultHostName -o tsv
az webapp log tail --resource-group $RG --name $APP
```

### Troubleshooting: `vite: not found` during Oryx build

If deployment logs show `Running 'npm run build'` and then `sh: 1: vite: not found`, run:

```powershell
# 1) Ensure Oryx build is enabled and dev dependencies are not omitted during build
az webapp config appsettings set --resource-group $RG --name $APP --settings SCM_DO_BUILD_DURING_DEPLOYMENT=true ENABLE_ORYX_BUILD=true SCM_NPM_CONFIG_PRODUCTION=false NPM_CONFIG_PRODUCTION=false

# 2) Redeploy
az webapp deploy --resource-group $RG --name $APP --src-path .\app.zip --type zip

# 3) Verify build/runtime settings
az webapp config appsettings list --resource-group $RG --name $APP -o table
az webapp show --resource-group $RG --name $APP --query "{name:name, linuxFxVersion:siteConfig.linuxFxVersion, state:state}" -o table

# 4) If build says it cannot resolve /src/main.tsx, rebuild zip with tar (not Compress-Archive)
tar -a -c -f app.zip --exclude=node_modules --exclude=.git --exclude=dist --exclude=app.zip *
az webapp deploy --resource-group $RG --name $APP --src-path .\app.zip --type zip
```

Optional (after successful deployment):

```powershell
# Set runtime env variable for app behavior
az webapp config appsettings set --resource-group $RG --name $APP --settings NODE_ENV=production
```

### Future backend plan

- Keep this app as frontend host.
- Add a second Linux Web App for API later.
- Point frontend to API base URL via environment variable.
- Use one custom domain with path-based routing (`/` frontend, `/api` backend) via Azure Front Door when ready.
  