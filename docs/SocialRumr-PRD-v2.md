# SocialRumr - Product Requirements Document

**Version:** 2.0  
**Last Updated:** April 4, 2026  
**Status:** Active  
**Owner:** SocialRumr Founding Team

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Product Vision](#2-product-vision)
3. [Target Users](#3-target-users)
4. [Problem Statement](#4-problem-statement)
5. [Solution Overview](#5-solution-overview)
6. [Success Metrics](#6-success-metrics)
7. [Feature Requirements](#7-feature-requirements)
8. [Technical Requirements](#8-technical-requirements)
9. [Non-Functional Requirements](#9-non-functional-requirements)
10. [Constraints and Dependencies](#10-constraints-and-dependencies)
11. [Release Plan](#11-release-plan)
12. [Pricing and Packaging](#12-pricing-and-packaging)
13. [Open Questions](#13-open-questions)
14. [Appendices](#14-appendices)

---

## 1. Executive Summary

**SocialRumr** is a SaaS-based social media listening and consulting platform designed to help startups monitor online conversations, detect risks early, and extract actionable insights from social and web data.

### Key Value Proposition
Unlike enterprise tools that overwhelm users with raw data, SocialRumr delivers **actionable insights through AI-powered analysis, intelligent filtering, and structured reports**, at a price point accessible to early-stage companies.

### Target Market
Early-stage and funded startups (primarily Series A and below) who need brand monitoring but cannot afford or justify enterprise-grade solutions like Brandwatch or Sprout Social.

### Business Model
Tiered SaaS subscription with consulting upsell:
- **Basic Tier:** $9/month
- **Growth Tier:** $49/month
- **Premium Tier:** $89/month

### Core Differentiators
- AI-powered narrative synthesis and risk detection
- Competitor share of voice analysis
- Human-backed consulting layer
- Reports-first approach with intelligent prioritization

---

## 2. Product Vision

### Vision Statement
> Empower startups to move from social media data overload to confident, timely decision-making through intelligent listening and human-backed insights.

### Strategic Objectives

| Objective | Description |
|-----------|-------------|
| **Enable real-time brand monitoring** | Help startups monitor brand perception and sentiment across key platforms |
| **Deliver actionable insights** | Transform raw data into AI-synthesized, decision-ready reports and narratives |
| **Enable early risk detection** | Alert companies to negative PR and emerging risks before they escalate |
| **Provide competitive intelligence** | Track share of voice and competitor mentions |
| **Combine software + human expertise** | Differentiate through optional consulting layer for deeper strategic value |

### Product Principles
1. **Insights over data** - Users should receive answers, not more questions
2. **Relevance is king** - Noise reduction is as valuable as data collection
3. **Time-to-value matters** - Users should see value within their first week
4. **Progressive complexity** - Simple by default, powerful when needed
5. **AI-assisted, human-verified** - Leverage AI for scale while maintaining quality

---

## 3. Target Users

### Primary Persona 1: Early-Stage Founder / CEO

| Attribute | Description |
|-----------|-------------|
| **Role** | Founder, CEO, or Co-founder at seed to Series A startup |
| **Company Size** | 2-50 employees |
| **Technical Skill** | Low to moderate; not a power user |
| **Primary Goals** | Understand brand perception, identify growth signals, manage reputation |
| **Key Behaviors** | Checks reports weekly, delegates daily monitoring, wants executive summaries |
| **Pain Points** | Information overload, no time for manual analysis, needs strategic insights not raw data |
| **Success Criteria** | Can make informed decisions from weekly reports without additional effort |

### Primary Persona 2: Marketing / Growth Manager

| Attribute | Description |
|-----------|-------------|
| **Role** | Head of Marketing, Growth Lead, or Marketing Manager |
| **Company Size** | 10-100 employees |
| **Technical Skill** | Moderate to high; comfortable with tools and filters |
| **Primary Goals** | Track campaigns, monitor competitors, identify content opportunities |
| **Key Behaviors** | Daily platform checks, sets up custom alerts, exports data for presentations |
| **Pain Points** | Manual effort to find relevant mentions, fragmented tools, delayed insights |
| **Success Criteria** | Saves 5+ hours/week on monitoring, catches all relevant mentions |

### User Pain Points Summary
- Information overload from multiple social platforms
- Difficulty distinguishing relevant vs. irrelevant mentions
- Lack of actionable insights from existing tools
- Delayed awareness of negative sentiment or PR risks
- No visibility into competitor performance
- High cost of enterprise solutions

---

## 4. Problem Statement

### The Core Problem
Startups today have access to large volumes of social and web data but struggle to convert this data into meaningful, actionable insights.

### Why Existing Solutions Fall Short

| Gap | Impact |
|-----|--------|
| **Excessive, unfiltered data** | Users spend hours sifting through noise |
| **Manual effort required** | No intelligent relevance scoring or prioritization |
| **No decision-ready outputs** | Raw data dumps instead of synthesized insights |
| **Limited competitive analysis** | No share of voice or competitor tracking |
| **Prohibitive pricing** | Enterprise tools cost $500-2000+/month |

### Consequences of Unsolved Problem
- Companies miss early warning signs of negative sentiment
- PR crises escalate before detection
- Marketing teams waste time on manual monitoring
- Strategic decisions made without social context
- Competitors gain advantage through better market awareness

### Why Now?
- Social media increasingly drives B2B purchasing decisions
- Startup ecosystem is growing globally (especially in India)
- AI/ML capabilities now enable intelligent filtering and synthesis at scale
- Gap exists between free tools (Google Alerts) and enterprise platforms

---

## 5. Solution Overview

### Core Approach
SocialRumr addresses the data-to-insight gap through four pillars:

```
[Data Collection] → [Intelligent Filtering] → [AI Processing] → [Actionable Delivery]
      |                   |                        |                       |
   Multiple          Relevance scoring       Sentiment analysis,        Reports, Alerts
   platforms         Noise reduction         Risk Detection,            Dashboards, Consulting
                                             Narrative Synthesis
```

### Solution Components

#### 1. Automated Monitoring
- Aggregate mentions from Twitter, Reddit, Facebook, LinkedIn, and Google Alerts
- Centralized view of all brand-related conversations
- Platform-specific keyword configuration with exclusions

#### 2. Intelligent Filtering
- Rule-based relevance scoring
- Excluded keywords and language filtering
- User feedback mechanism (mark as irrelevant)
- Noise reduction to highlight meaningful signals

#### 3. AI-Powered Analysis
- Sentiment analysis (positive/neutral/negative)
- Risk scoring and prioritization
- Narrative digest synthesis
- Trending topic detection
- Share of voice calculation

#### 4. Structured Delivery
- Real-time dashboard with key metrics
- Weekly/daily automated reports
- Configurable alerts system
- Priority triage for high-risk mentions

#### 5. Consulting Services (Premium)
- Scheduled consultation reports
- Custom report deep-dives
- Strategic recommendations

---

## 6. Success Metrics

### Product Metrics

| Metric | Definition | Target (6 months) |
|--------|------------|-------------------|
| **Activation Rate** | % of organizations that set up monitoring within 24 hours of onboarding | >60% |
| **Weekly Active Organizations (WAO)** | Unique orgs engaging with platform weekly | Track growth |
| **Report Open Rate** | % of weekly reports opened via email | >40% |
| **Report Engagement** | % of users who click through from report to dashboard | >25% |
| **Feature Adoption** | % of users using filters, alerts, and custom settings | Track by tier |
| **AI Feature Usage** | % of users viewing narrative digest and priority triage | >50% |

### Business Metrics

| Metric | Definition | Target (6 months) |
|--------|------------|-------------------|
| **Demo-to-Paid Conversion** | % of demo attendees who convert to paid | >15% |
| **Monthly Recurring Revenue (MRR)** | Total monthly subscription revenue | Track growth |
| **Customer Acquisition Cost (CAC)** | Total cost to acquire one customer | Track and optimize |
| **30-Day Retention** | % of customers active after 30 days | >30% |
| **90-Day Retention** | % of customers active after 90 days | >20% |
| **Net Revenue Retention** | Revenue retained including upgrades/downgrades | >100% |

### Leading Indicators
- Demo request rate (interest signal)
- Keyword configuration completion rate (activation signal)
- Report download/export frequency (value signal)
- Alert configuration rate (engagement signal)
- Consultation request rate (upsell signal)
- Support ticket volume (health signal)

---

## 7. Feature Requirements

### 7.1 Dashboard Overview (Action Center)

| Attribute | Details |
|-----------|---------|
| **Priority** | P0 (MVP Critical) |
| **Description** | Primary landing page providing at-a-glance brand health and key metrics |
| **User Benefit** | Immediate understanding of brand status without deep analysis |

**Dashboard Elements:**
1. **Stats Row**
   - Brand Health Score (0-100 with trend indicator)
   - Risk Score (0-100 with trend indicator)
   - Total Mentions Today (with change percentage)
   - Sentiment Distribution Bar (positive/neutral/negative percentages)

2. **Filter Row**
   - Keyword multi-select filter
   - Date range picker
   - Sentiment filter
   - Platform filter
   - Apply filters button

3. **Mentions Chart**
   - Time-series visualization of mention volume
   - Configurable time range

4. **Trending Topics Widget**
   - Top topics by mention count
   - Visual progress bars showing relative volume

5. **Sources Distribution (Donut Chart)**
   - Platform breakdown of mentions
   - Interactive hover for details

6. **Share of Voice (Donut Chart)**
   - Competitive comparison of mention share
   - Your brand vs. competitors

7. **Priority Triage**
   - High-risk mentions requiring attention
   - Risk score badge
   - Source and issue preview

8. **24-Hour Narrative Digest**
   - AI-synthesized brand intelligence
   - Three categories: Reception Surge, Risk Detection, Competitive Shift
   - Natural language summaries

**Acceptance Criteria:**
- [ ] Dashboard loads within 3 seconds
- [ ] All widgets display correctly with real data
- [ ] Filters apply across all widgets
- [ ] Dashboard is responsive (desktop primary, tablet/mobile functional)
- [ ] User can click through to detailed views
- [ ] Generate brief button creates shareable summary
- [ ] Download report button exports current view

---

### 7.2 Mentions Feed

| Attribute | Details |
|-----------|---------|
| **Priority** | P0 (MVP Critical) |
| **Description** | Paginated list of all collected mentions with filtering and actions |
| **User Benefit** | Detailed access to individual mentions with bulk management |

**Stats Row:**
- Total Mentions count
- High Risk Alerts (Today) with trend
- Positive Sentiment percentage with trend
- Negative Sentiment percentage with trend

**Filter Row:**
- Keyword filter
- Date range picker
- Sentiment filter
- Platform filter

**View Toggles:**
- Flagged mentions filter
- Saved mentions filter
- Viewing count indicator

**Mentions Table Columns:**
| Column | Description |
|--------|-------------|
| Author | Username/handle of mention author |
| Platform | Source platform with icon (Twitter, Facebook, Instagram, LinkedIn, Reddit) |
| Content | Mention text (truncated with expand) |
| Sentiment | Badge (positive/neutral/negative) |
| Risk | Risk score badge (color-coded) |
| Actions | Flag button, Save/Bookmark button |

**Visual Indicators:**
- Left border color based on sentiment/risk
- Row highlighting for high-risk mentions
- Platform-specific icons and colors

**Acceptance Criteria:**
- [ ] Mentions displayed with all columns
- [ ] Filters functional and combinable
- [ ] Pagination works correctly
- [ ] Flag and save actions persist
- [ ] Export to CSV functional
- [ ] Click-through to original source works
- [ ] Download button exports current filtered view

---

### 7.3 Monitoring Profile (Keyword Configuration)

| Attribute | Details |
|-----------|---------|
| **Priority** | P0 (MVP Critical) |
| **Description** | Configure keywords, platforms, exclusions, and alerts for monitoring |
| **User Benefit** | Customizable and precise monitoring tailored to each organization |

**Supported Platforms:**
- Twitter (X)
- Reddit
- Facebook
- LinkedIn
- Web Alerts (Google Alerts)

**Keyword Configuration:**
1. **Add Keyword**
   - Keyword input field
   - Platform selection (multi-select from available platforms)

2. **Advanced Settings (Expandable)**
   - **Excluded Languages**: Multi-select from language list (English, Spanish, French, German, Italian, Portuguese, Russian, Japanese, Chinese, Korean, Arabic, Hindi)
   - **Excluded Keywords**: Add keywords to filter out (e.g., "scam", "cheap")

3. **Alert Setup (Per Keyword)**
   - **Trigger Types**:
     - Spike in mentions (volume spike)
     - Spike in negative sentiment
     - Competitors overtake me
     - My share of voice drops
     - Competitors grow faster than me
   - **Sensitivity**: Low / Medium / High
   - **Notification Channels**: In-app notifications, Email notifications

**Keyword Management:**
- View all configured keywords in table
- Edit existing keywords (inline editing)
- Delete keywords
- Per-platform keyword limits based on tier (configurable)

**Bulk Import:**
- CSV upload with template download
- CSV format: `keyword,platforms,excluded_languages,excluded_keywords,volume_spike,sentiment_spike,competitor_overtake,share_of_voice_drop,competitor_growth`
- Import preview before confirmation
- Error handling with row-level feedback

**Acceptance Criteria:**
- [ ] User can add keywords with platform selection
- [ ] User can configure excluded languages and keywords
- [ ] User can set up alerts per keyword
- [ ] System enforces tier-based limits per platform
- [ ] User can edit and delete existing keywords
- [ ] CSV import works with validation
- [ ] Changes take effect within 1 hour

---

### 7.4 Reports

| Attribute | Details |
|-----------|---------|
| **Priority** | P0 (MVP Critical) |
| **Description** | Access and manage generated reports |
| **User Benefit** | Actionable insights without manual analysis |

**Report Card Display:**
- Report title and date range
- Risk Score with visual indicator (circle)
- Risk Level badge (Low Risk / In Review / High Risk)
- Content snippet/executive summary
- Emerging topics tags
- Trend changes (mention delta %, sentiment delta %, spike dates)
- Published timestamp
- Action button (View Full Analysis / Investigate Now)

**Report Contents:**
- Summary of mention volume and trends
- Sentiment breakdown (positive/negative/neutral)
- Top discussions and key highlights
- Risk indicators and emerging topics
- Brand Health Score
- Platform distribution breakdown
- Competitive share of voice

**Delivery Options:**
- Email delivery (primary - all tiers)
- In-app dashboard access
- PDF export/download

**Frequency Options:**
| Tier | Frequency |
|------|-----------|
| Basic | Weekly only |
| Growth | Weekly + Daily digest |
| Premium | Weekly + Daily + On-demand (with limits) |

**Acceptance Criteria:**
- [ ] Reports generated automatically every week (Sunday night / Monday morning)
- [ ] Reports delivered via email with formatted HTML
- [ ] Reports accessible in-app with PDF download option
- [ ] Daily digests sent for Growth/Premium tiers
- [ ] Report includes all sections listed above
- [ ] Report rendering takes <30 seconds
- [ ] Risk-based visual indicators display correctly

---

### 7.5 Consultation (Premium Tier)

| Attribute | Details |
|-----------|---------|
| **Priority** | P1 (Growth Tier and above) |
| **Description** | Human consulting services for Premium subscribers |
| **User Benefit** | Expert analysis and strategic recommendations |

**Consultation Features:**
1. **Consultation Reports**
   - List of past consultation reports
   - Title and date
   - Snippet
   - Emerging topics discussed
   - Trend changes discussed
   - Published timestamp
   - View full analysis button

2. **Request Consultation**
   - Modal form for scheduling
   - **Discussion Points**: Optional textarea for agenda items
   - Confirm Consultation Request button
   - Sends email to support team with formatted details

**Services Included:**
- Custom report deep-dives (written analysis)
- Competitor benchmarking reports
- Strategic recommendations

**Acceptance Criteria:**
- [ ] Premium users can request consultation via in-app form
- [ ] Email sent to support team with all details
- [ ] Past consultations viewable
- [ ] Consultation deliverables uploaded and accessible in-app

---

### 7.6 Brand Health Score

| Attribute | Details |
|-----------|---------|
| **Priority** | P0 (MVP Critical) |
| **Description** | Composite score indicating overall brand health |
| **User Benefit** | Quick understanding of brand status without deep analysis |

**Score Components:**
| Factor | Weight | Description |
|--------|--------|-------------|
| Sentiment Polarity | 40% | Ratio of positive to negative mentions |
| Mention Volume | 20% | Total volume relative to baseline |
| Rate of Change | 25% | Spike detection (sudden increases) |
| Source Influence | 15% | Quality/reach of mention sources |

**Score Display:**
- 0-100 scale
- Trend indicator (up/down percentage vs. last period)
- Color coding based on score value

**Acceptance Criteria:**
- [ ] Score calculated daily and displayed on dashboard
- [ ] Score included in weekly reports
- [ ] Score breakdown available on hover/click
- [ ] Historical score trend visible (last 30 days)

---

### 7.7 Risk Score

| Attribute | Details |
|-----------|---------|
| **Priority** | P0 (MVP Critical) |
| **Description** | Score indicating current risk level and potential issues |
| **User Benefit** | Early warning of potential PR crises |

**Score Display:**
- 0-100 scale
- Trend indicator (down is good, shown with green even for decrease)
- Values above 50 shown in red as warning

**Risk Factors:**
- Negative sentiment concentration
- Volume spikes in negative mentions
- High-engagement negative discussions
- Competitor mention ratio changes

**Acceptance Criteria:**
- [ ] Risk score calculated and updated daily
- [ ] High risk (>70) triggers visual alerts
- [ ] Risk score visible on dashboard and in reports

---

### 7.8 Alerts System

| Attribute | Details |
|-----------|---------|
| **Priority** | P1 (MVP Important) |
| **Description** | Real-time notifications for significant events |
| **User Benefit** | Early detection of risks and opportunities |

**Alert Types:**
| Trigger | Description |
|---------|-------------|
| Volume Spike | Mention volume exceeds threshold |
| Sentiment Spike | Negative sentiment exceeds threshold |
| Competitor Overtake | Competitor share of voice exceeds yours |
| Share of Voice Drop | Your share of voice decreases significantly |
| Competitor Growth | Competitor mentions growing faster than yours |

**Configuration Options:**
- Trigger type selection
- Sensitivity (Low / Medium / High)
- Delivery channels (In-app, Email)
- Scope (All keywords or specific keywords)

**Delivery Channels:**
- In-app notifications (bell icon in navbar)
- Email alerts

**Acceptance Criteria:**
- [ ] User can configure alert triggers per keyword
- [ ] User can set sensitivity levels
- [ ] Alerts delivered within 15 minutes of trigger
- [ ] Alert history viewable in-app
- [ ] Alerts respect tier limits

---

### 7.9 Share of Voice (Competitive Analysis)

| Attribute | Details |
|-----------|---------|
| **Priority** | P1 (MVP Important) |
| **Description** | Track your brand's mention share vs. competitors |
| **User Benefit** | Understand competitive positioning |

**Features:**
- Donut chart showing share of voice percentages
- Compare your brand against configured competitors
- Hover for mention counts
- Trend tracking over time

**Acceptance Criteria:**
- [ ] User can configure competitor keywords
- [ ] Share of voice calculated daily
- [ ] Visual comparison on dashboard
- [ ] Included in reports

---

### 7.10 Trending Topics

| Attribute | Details |
|-----------|---------|
| **Priority** | P1 (MVP Important) |
| **Description** | Identify trending discussion topics |
| **User Benefit** | Spot emerging conversations and opportunities |

**Features:**
- List of top topics by mention count
- Visual progress bars showing relative volume
- Topic labels with mention counts (e.g., "8.2k")
- Color-coded by category/sentiment

**Acceptance Criteria:**
- [ ] Topics extracted from mention content
- [ ] Updated daily or in real-time
- [ ] Displayed on dashboard
- [ ] Included in reports

---

### 7.11 24-Hour Narrative Digest

| Attribute | Details |
|-----------|---------|
| **Priority** | P1 (MVP Important) |
| **Description** | AI-synthesized summary of brand intelligence |
| **User Benefit** | Natural language summary of key events |

**Digest Categories:**
| Category | Description |
|----------|-------------|
| Reception Surge | Positive sentiment spikes and their drivers |
| Risk Detection | Negative patterns and potential issues |
| Competitive Shift | Changes in competitive landscape |

**Content:**
- Category type with color indicator
- Headline title
- Natural language description
- Mention count reference

**Acceptance Criteria:**
- [ ] Digest generated daily from mention data
- [ ] Three categories always present
- [ ] Natural language summaries (not just data)
- [ ] Displayed prominently on dashboard

---

### 7.12 Priority Triage

| Attribute | Details |
|-----------|---------|
| **Priority** | P1 (MVP Important) |
| **Description** | Prioritized list of high-risk mentions requiring attention |
| **User Benefit** | Focus on most important issues first |

**Triage Item Display:**
- Author initials avatar
- Source platform
- Issue summary
- Risk score badge (color-coded)
- Click to view details

**Acceptance Criteria:**
- [ ] Shows top high-risk mentions
- [ ] Risk score determines ordering
- [ ] Click navigates to mention detail
- [ ] Count of high-risk items shown

---

### 7.13 Team Management

| Attribute | Details |
|-----------|---------|
| **Priority** | P1 (MVP Important) |
| **Description** | Basic invite and access management for organization members |
| **User Benefit** | Teams can collaborate on monitoring |

**MVP Scope:**
- Invite team members
- Basic roles: Admin, Member
- Shared access to all organization data

**Team Limits by Tier:**
| Tier | Team Members |
|------|--------------|
| Basic | 1 |
| Growth | 5 |
| Premium | Unlimited |

**Acceptance Criteria:**
- [ ] Admin can invite members via email
- [ ] Invited users receive onboarding email
- [ ] All members see same organization data
- [ ] Admin can remove members
- [ ] Tier limits enforced

---

### 7.14 Navigation

| Attribute | Details |
|-----------|---------|
| **Priority** | P0 (MVP Critical) |
| **Description** | Main navigation structure |

**Navigation Items:**
| Item | Path | Description |
|------|------|-------------|
| Overview | / | Action Center dashboard |
| Mentions | /Mentions | Mentions feed and management |
| Reports | /AllReports | Generated reports |
| Consultation | /Consulting | Consultation scheduling (Premium) |
| Profile | /MonitoringProfile | Keyword configuration |

**Header Elements:**
- Logo (SocialRumr)
- Navigation tabs (pill-style, active state highlighted)
- Messages icon (future)
- Notifications bell icon
- User avatar

---

## 8. Technical Requirements

### 8.1 Technology Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React + TypeScript + Vite |
| **UI Components** | Radix UI + TailwindCSS 3 |
| **State Management** | TanStack Query (React Query) |
| **Charts** | Recharts |
| **Backend** | Node.js / Express |
| **Database** | PostgreSQL |
| **Authentication** | Clerk (with Organizations) |
| **Auth Methods** | Email/Password, Google OAuth |
| **Hosting** | Azure Web App Service (current) |

### 8.2 Third-Party Integrations

| Service | Purpose | Platforms Covered |
|---------|---------|-------------------|
| **KWatch** | Keyword monitoring | Reddit, Twitter (X), Facebook, LinkedIn |
| **f5Bot** | Reddit monitoring backup | Reddit (350 keywords) |
| **Google Alerts** | Web mention monitoring | Web Alerts |
| **Clerk** | Authentication and user management | - |

### 8.3 Data Architecture

**Data Entities:**
- Organization (tenant)
- User (belongs to organization)
- Keyword (belongs to organization, many-to-many with platforms)
- Mention (belongs to organization, linked to keyword)
- Report (belongs to organization)
- Alert (belongs to organization)
- AlertConfig (belongs to keyword)
- Consultation (belongs to organization)

**Data Retention (Tier-Based):**
| Tier | Retention Period |
|------|------------------|
| Basic | 30 days |
| Growth | 90 days |
| Premium | 365 days |

### 8.4 API Requirements

**Internal APIs:**
- Mention ingestion API (from third-party services)
- Report generation API
- Dashboard data API
- User/Organization management API
- Alert configuration API
- Consultation scheduling API

**Webhook Support:**
- Incoming webhooks from KWatch/f5Bot
- Scheduled polling fallback

---

## 9. Non-Functional Requirements

### 9.1 Performance

| Requirement | Target |
|-------------|--------|
| Dashboard load time | <3 seconds |
| Report generation | <30 seconds |
| Mention sync latency | <1 hour from source posting |
| API response time | <500ms (p95) |
| Concurrent users | Support 100 concurrent users (MVP) |

### 9.2 Availability

| Requirement | Target |
|-------------|--------|
| Uptime | 99% (MVP target) |
| Scheduled maintenance | Off-peak hours with 24hr notice |
| Data backup | Daily backups, 7-day retention |

### 9.3 Security (MVP)

| Requirement | Implementation |
|-------------|----------------|
| Authentication | Clerk-managed (industry-standard security) |
| Data encryption | HTTPS for transit, encrypted at rest |
| Access control | Organization-level data isolation |
| Session management | Clerk-managed secure sessions |

**Future Compliance (Post-MVP):**
- GDPR compliance for EU users
- SOC 2 certification for enterprise customers

### 9.4 Scalability

| Requirement | Approach |
|-------------|----------|
| User growth | Horizontal scaling via Azure |
| Data growth | Database indexing and archival strategy |
| Multi-tenancy | Organization-based data partitioning |

---

## 10. Constraints and Dependencies

### 10.1 Constraints

| Constraint | Impact | Mitigation |
|------------|--------|------------|
| **Small team (2 members)** | Limited development capacity | Prioritize ruthlessly, use managed services |
| **Limited budget** | Must optimize costs | Start with existing third-party services |
| **3-week MVP timeline** | Aggressive scope management | Reports-first approach, minimal dashboard |
| **Third-party data dependency** | Limited control over data quality/availability | Multiple providers, monitoring for issues |

### 10.2 Dependencies

| Dependency | Risk Level | Contingency |
|------------|------------|-------------|
| KWatch API availability | Medium | f5Bot as partial backup for Reddit |
| f5Bot API availability | Medium | KWatch as partial backup |
| Google Alerts delivery | Low | Generally reliable, manual fallback |
| Clerk authentication | Low | Industry-standard, strong SLA |
| Azure hosting | Low | Standard cloud reliability |

### 10.3 Assumptions

| Assumption | Validation Plan |
|------------|-----------------|
| Startups will pay for insights over raw data | Customer interviews, demo feedback |
| Reports-first approach provides immediate value | Track report engagement metrics |
| Consulting increases retention and perceived value | Monitor Premium tier churn vs. other tiers |
| Demo-first model will convert well | Track demo-to-paid conversion rate |
| Indian startup market is price-sensitive but reachable | Initial customer acquisition data |
| AI features drive engagement | Track AI feature usage metrics |

---

## 11. Release Plan

### Phase 1: MVP

**Goal:** Launchable product for demos and early customers

| Feature | Priority | Status |
|---------|----------|--------|
| User authentication (Clerk) | P0 | - |
| Organization setup | P0 | - |
| Hosting | P0 | - |
| Keyword configuration with platforms | P0 | - |
| Third-party integration (KWatch, f5Bot, Google Alerts) | P0 | - |
| Mention ingestion and storage | P0 | - |
| Basic relevance filtering | P0 | - |
| Dashboard with all widgets | P0 | - |
| Mentions feed with filters | P0 | - |
| Weekly report generation | P0 | - |
| Email report delivery | P0 | - |
| Brand Health Score | P0 | - |
| Risk Score | P0 | - |
| Sentiment analysis | P0 | - |

**Exit Criteria:**
- [ ] Complete user journey from signup to receiving first report
- [ ] Dashboard displays real data with all widgets
- [ ] Reports delivered via email
- [ ] At least one successful demo completed

---

### Phase 2: Enhancement

**Goal:** Production-ready with alerts and improved UX

| Feature | Priority |
|---------|----------|
| Real-time alerts system | P0 |
| Alert configuration UI | P0 |
| Email and in-app notifications | P0 |
| Share of Voice (competitor analysis) | P1 |
| Trending Topics | P1 |
| 24-Hour Narrative Digest | P1 |
| Priority Triage | P1 |
| Advanced filtering (boolean rules) | P1 |
| Daily digest reports | P1 |
| Team management | P1 |
| On-demand report generation | P2 |
| UI/UX polish | P1 |

---

### Phase 3: Scale

**Goal:** Differentiated product with ML capabilities

| Feature | Priority |
|---------|----------|
| ML-based relevance scoring | P1 |
| Adaptive learning from user feedback | P1 |
| Consulting workflow (Premium) | P1 |
| Competitor benchmarking tool | P2 |
| Expanded platform integrations | P2 |
| Reduced third-party dependency (in-house monitoring) | P2 |

---

## 12. Pricing and Packaging

### Tier Comparison

| Feature | Basic ($9/mo) | Growth ($49/mo) | Premium ($89/mo) |
|---------|---------------|-----------------|------------------|
| **Platforms** | All 5 | All 5 | All 5 |
| **Keyword Limits** | Config-driven | Config-driven | Config-driven |
| **Data Retention** | 30 days | 90 days | 365 days |
| **Report Frequency** | Weekly | Weekly + Daily | Weekly + Daily + On-demand |
| **Alerts** | - | Yes | Yes |
| **Team Members** | 1 | 5 | Unlimited |
| **Boolean Rules** | Basic | Advanced | Advanced |
| **AI Insights** | - | Yes | Yes |
| **Share of Voice** | - | Yes | Yes |
| **Narrative Digest** | - | Yes | Yes |
| **Priority Triage** | - | Yes | Yes |
| **Consulting** | - | - | Yes |

### Billing Model
- Monthly billing (default)
- Annual billing with 15-20% discount
- Payment processing via Dodo Payments

### Onboarding Model
- **Demo-first** approach (no self-serve trial)
- **Basic tier:** Demo → Self-serve setup
- **Growth/Premium tier:** Demo → 1:1 guided setup → Boolean configuration consulting

---

## 13. Open Questions

### Strategic Questions

| Question | Owner | Status | Notes |
|----------|-------|--------|-------|
| How to differentiate strongly from Mention/Brand24? | Founders | Open | Focus on AI insights + consulting |
| What acquisition channel will work best initially? | Founders | Open | Test: Cold outreach, SEO, partnerships |
| How to validate pricing sensitivity? | Founders | Open | A/B test during demos |

### Technical Questions

| Question | Owner | Status | Notes |
|----------|-------|--------|-------|
| Optimal polling frequency for third-party services? | Dev | Open | Balance freshness vs. API limits |
| How to handle data when trial/subscription expires? | Dev | Open | Grace period? Immediate deletion? |
| Brand Health Score algorithm validation? | Dev | Open | May need iteration based on real data |
| AI narrative generation approach? | Dev | Open | LLM integration vs. rule-based |

### Product Questions

| Question | Owner | Status | Notes |
|----------|-------|--------|-------|
| Exact keyword limits per platform per tier? | Founders | Open | Config-driven, but need initial values |
| On-demand report limits for Premium? | Founders | Open | e.g., 4/month? 10/month? |
| Consulting delivery format and SLA? | Founders | Open | Turnaround time, deliverable format |

---

## 14. Appendices

### Appendix A: User Flow - Onboarding

```
[Demo Request] → [Demo Call] → [Account Creation]
                                      ↓
                              [Organization Setup]
                                      ↓
                              [Keyword Configuration]
                                      ↓
                              [Platform Selection]
                                      ↓
                              [Alert Setup (Optional)]
                                      ↓
                              [Wait for First Data Sync]
                                      ↓
                              [View Dashboard / Receive First Report]
```

### Appendix B: User Flow - Weekly Report

```
[Sunday Night: Report Generation Triggered]
              ↓
[System aggregates week's mentions]
              ↓
[AI analysis applied (sentiment, risk, topics)]
              ↓
[Brand Health Score calculated]
              ↓
[Narrative digest generated]
              ↓
[Report PDF rendered]
              ↓
[Email sent to all org members]
              ↓
[Report accessible in-app]
```

### Appendix C: Dashboard Layout (Conceptual)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [Logo] SocialRumr    [Overview] [Mentions] [Reports] [Consult] [Profile]   │
│                                                           [🔔] [👤]          │
├─────────────────────────────────────────────────────────────────────────────┤
│  Workspace / Action Center                    [⚙️] [Generate brief] [📥]    │
│  ═══════════════════════════════════════════════════════════════════════════│
│                                                                             │
│  ┌─────────────┬─────────────┬─────────────┬─────────────────────────────┐  │
│  │Brand Health │ Risk Score  │ Mentions    │ Sentiment Distribution      │  │
│  │    92/100   │   57/100    │  14,208     │ [===========|======|====]   │  │
│  │    ↑12.5%   │   ↓2.1%     │  ↓12.5%     │  40%    35%    25%          │  │
│  └─────────────┴─────────────┴─────────────┴─────────────────────────────┘  │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │  [Keywords ▼] [Date Range ▼] [Sentiment ▼] [Platform ▼] [Apply]    │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                             │
│  ┌───────────────────────────────────────────┐ ┌───────────────────────┐    │
│  │          Mentions Over Time               │ │   Trending Topics     │    │
│  │     📈 [Line chart visualization]         │ │   Product Launch 8.2k │    │
│  │                                           │ │   Support      6.1k   │    │
│  └───────────────────────────────────────────┘ └───────────────────────┘    │
│                                                                             │
│  ┌────────────┐ ┌────────────┐ ┌───────────────────────────────────────┐    │
│  │  Sources   │ │ Share of   │ │         Priority Triage               │    │
│  │  [Donut]   │ │   Voice    │ │  [JD] Twitter - Account lockout  92   │    │
│  │            │ │  [Donut]   │ │  [SW] Reddit - Pricing issues    85   │    │
│  └────────────┘ └────────────┘ └───────────────────────────────────────┘    │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │  ⭐ 24-Hour Narrative Digest                                        │    │
│  │  AI-synthesized brand intelligence from 14.2k mentions              │    │
│  │  ┌──────────────┬──────────────┬──────────────┐                     │    │
│  │  │ 🔵 Reception │ 🔴 Risk      │ 🟡 Competitive│                     │    │
│  │  │ UI Launch    │ Login Issues │ Pricing      │                     │    │
│  │  │ Success      │ Detected     │ Comparison   │                     │    │
│  │  └──────────────┴──────────────┴──────────────┘                     │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                             │
│                    © 2026 SocialRumr AI Engine • V4.2.0                     │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Appendix D: Competitive Landscape

| Competitor | Pricing | Strengths | Weaknesses | Our Advantage |
|------------|---------|-----------|------------|---------------|
| **Brandwatch** | $800+/mo | Comprehensive, enterprise features | Expensive, complex | Price, simplicity, AI synthesis |
| **Mention** | $41+/mo | Good UI, broad coverage | Limited insights, noise | Intelligent filtering, AI reports |
| **Brand24** | $79+/mo | Real-time, good alerts | Data overload, no consulting | Actionable reports, consulting |
| **Google Alerts** | Free | Simple, broad web coverage | No analytics, no filtering | Full platform with AI insights |

### Appendix E: Platform Icons and Colors

| Platform | Icon | Color |
|----------|------|-------|
| Twitter (X) | Twitter bird | Sky blue (#1DA1F2) |
| Reddit | Reddit alien | Orange (#FF4500) |
| Facebook | Facebook F | Blue (#1877F2) |
| LinkedIn | LinkedIn in | Blue (#0A66C2) |
| Web Alerts | Globe | Purple |

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | March 21, 2026 | SocialRumr Team | Initial PRD creation |
| 2.0 | April 4, 2026 | SocialRumr Team | Major rewrite based on dashboard mockups: added AI features (Narrative Digest, Priority Triage, Share of Voice, Trending Topics), updated platform list, consolidated consulting section, detailed dashboard specifications |

---

*This PRD is a living document and will be updated as requirements evolve and decisions are made.*
