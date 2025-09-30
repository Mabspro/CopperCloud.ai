# CopperCloud.ai - Post-Launch Setup & Recommendations

**Document Purpose**: Step-by-step guide for implementing enhancements after initial launch  
**Current Status**: Site deployed and operational ✅  
**Target Audience**: Development team, stakeholders  
**Last Updated**: September 30, 2025

---

## Table of Contents

1. [Phase 1: Week 1 - Analytics & Monitoring](#phase-1-week-1---analytics--monitoring)
2. [Phase 2: Week 2-3 - SEO & Performance](#phase-2-week-2-3---seo--performance)
3. [Phase 3: Month 1 - Contact Forms & User Interaction](#phase-3-month-1---contact-forms--user-interaction)
4. [Phase 4: Month 2-3 - Advanced Features](#phase-4-month-2-3---advanced-features)
5. [Phase 5: Quarter 2 - Automation & CI/CD Enhancement](#phase-5-quarter-2---automation--cicd-enhancement)
6. [Environment Variables Reference](#environment-variables-reference)
7. [Troubleshooting Guide](#troubleshooting-guide)

---

## Phase 1: Week 1 - Analytics & Monitoring

**Timeline**: First week after ZDA meeting  
**Priority**: HIGH  
**Estimated Time**: 2-3 hours

### 1.1 Google Analytics 4 Setup

**Why**: Track visitor behavior, conversion rates, and site performance

#### Step-by-Step Implementation

**Step 1: Create Google Analytics Account**
1. Go to https://analytics.google.com
2. Click "Start measuring" or "Admin" → "Create Property"
3. Fill in property details:
   - Property name: `CopperCloud`
   - Reporting time zone: Your timezone
   - Currency: USD
4. Click "Next" → Select industry category: Technology
5. Click "Create" and accept Terms of Service

**Step 2: Get Your Measurement ID**
1. In Admin → Data Streams → Web
2. Click "Add stream" → Enter website URL: `https://www.coppercloud.ai`
3. Stream name: `CopperCloud Production`
4. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

**Step 3: Add to Vercel Environment Variables**
1. Go to Vercel Dashboard: https://vercel.com/mabspro/coppercloud-ai
2. Settings → Environment Variables
3. Add new variable:
   ```
   Key: NEXT_PUBLIC_GA_ID
   Value: G-XXXXXXXXXX (your actual ID)
   Environments: ✓ Production ✓ Preview ✓ Development
   ```
4. Click "Save"

**Step 4: Add GA4 Script to index.html**

Add this code to your `<head>` section in `index.html`:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    'anonymize_ip': true,
    'cookie_flags': 'SameSite=None;Secure'
  });
</script>
```

**Step 5: Deploy Changes**
```bash
git add index.html
git commit -m "Add Google Analytics 4 tracking"
git push origin main
```

**Step 6: Verify Installation**
1. Visit your site: https://www.coppercloud.ai
2. In GA4, go to Reports → Realtime
3. Verify you see your own visit in real-time

**Expected Outcome**: ✅ Visitor tracking active within 24-48 hours of data collection

---

### 1.2 Hotjar Setup (Optional)

**Why**: Understand user behavior through heatmaps and session recordings

#### Step-by-Step Implementation

**Step 1: Create Hotjar Account**
1. Go to https://www.hotjar.com/signup
2. Sign up for free plan (2,000 pageviews/day)
3. Create new site:
   - Website URL: `https://www.coppercloud.ai`
   - Industry: Technology/Software
   - Purpose: Business website

**Step 2: Get Your Site ID**
1. After account creation, go to Sites & Organizations
2. Click on your site → Tracking Code
3. Copy your **Site ID** (6-7 digit number)

**Step 3: Add to Vercel Environment Variables**
```
Key: NEXT_PUBLIC_HOTJAR_ID
Value: 1234567 (your actual Site ID)
Environments: ✓ Production ✓ Preview
```

**Step 4: Add Hotjar Script to index.html**

Add before closing `</head>` tag:

```html
<!-- Hotjar Tracking Code -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1234567,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

**Step 5: Deploy and Verify**
```bash
git add index.html
git commit -m "Add Hotjar tracking for user behavior insights"
git push origin main
```

**Expected Outcome**: ✅ Heatmaps and session recordings available after 24 hours

---

### 1.3 Vercel Analytics (Already Included)

**Status**: ✅ Automatically enabled with Vercel deployment

**To Access**:
1. Go to Vercel Dashboard → coppercloud-ai
2. Click "Analytics" tab
3. View Web Vitals, page views, and performance metrics

**No action required** - already collecting data!

---

### 1.4 Set Up Deployment Notifications

**Why**: Get notified immediately when deployments succeed or fail

#### Slack Notification Setup

**Step 1: Create Slack Webhook**
1. Go to https://api.slack.com/apps
2. Create New App → From scratch
3. App name: `Vercel Deployments`
4. Select your workspace
5. Features → Incoming Webhooks → Activate
6. Add New Webhook to Workspace
7. Select channel (e.g., #deployments)
8. Copy the Webhook URL

**Step 2: Add to Vercel Integrations**
1. Vercel Dashboard → coppercloud-ai → Settings
2. Integrations → Browse Marketplace
3. Search "Slack" → Add Slack Integration
4. Paste webhook URL
5. Configure notification preferences:
   - ✓ Deployment Started
   - ✓ Deployment Ready
   - ✓ Deployment Failed

**Expected Outcome**: ✅ Instant Slack notifications for all deployments

---

## Phase 2: Week 2-3 - SEO & Performance

**Timeline**: 1-2 weeks after launch  
**Priority**: MEDIUM-HIGH  
**Estimated Time**: 3-4 hours

### 2.1 Add robots.txt

**Why**: Control search engine crawling and improve SEO

**Step 1: Create robots.txt**

Create file `robots.txt` in project root:

```txt
# Allow all search engines to crawl all pages
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://www.coppercloud.ai/sitemap.xml

# Crawl-delay (optional - adjust based on server capacity)
Crawl-delay: 1

# Block specific paths (if needed in future)
# Disallow: /admin/
# Disallow: /private/
```

**Step 2: Deploy**
```bash
git add robots.txt
git commit -m "Add robots.txt for SEO optimization"
git push origin main
```

**Step 3: Verify**
- Visit: https://www.coppercloud.ai/robots.txt
- Should display the content correctly

---

### 2.2 Create sitemap.xml

**Why**: Help search engines discover and index all pages

**Step 1: Create sitemap.xml**

Create file `sitemap.xml` in project root:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    
    <!-- Homepage -->
    <url>
        <loc>https://www.coppercloud.ai/</loc>
        <lastmod>2025-09-30</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    
    <!-- Add future pages here as they're created -->
    <!--
    <url>
        <loc>https://www.coppercloud.ai/about</loc>
        <lastmod>2025-10-15</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    -->
    
</urlset>
```

**Step 2: Deploy**
```bash
git add sitemap.xml
git commit -m "Add sitemap.xml for improved SEO"
git push origin main
```

**Step 3: Submit to Google Search Console**
1. Go to https://search.google.com/search-console
2. Add property: `https://www.coppercloud.ai`
3. Verify ownership (DNS or file upload method)
4. Sitemaps → Add new sitemap → Enter: `sitemap.xml`
5. Submit

**Expected Outcome**: ✅ Better search engine indexing and visibility

---

### 2.3 Add Favicon and App Icons

**Why**: Professional branding in browser tabs and mobile home screens

**Step 1: Create Favicon Files**

You'll need these files (use a tool like https://realfavicongenerator.net):
- `favicon.ico` (16x16, 32x32, 48x48)
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` (180x180)
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

**Step 2: Add to index.html `<head>` section**

```html
<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```

**Step 3: Create site.webmanifest**

```json
{
    "name": "CopperCloud",
    "short_name": "CopperCloud",
    "icons": [
        {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "theme_color": "#F38218",
    "background_color": "#0A0A0B",
    "display": "standalone"
}
```

**Step 4: Deploy**
```bash
git add favicon.ico favicon-*.png apple-touch-icon.png android-chrome-*.png site.webmanifest index.html
git commit -m "Add favicon and app icons for better branding"
git push origin main
```

---

### 2.4 Create OG Image for Social Sharing

**Why**: Beautiful previews when sharing on LinkedIn, Twitter, Facebook

**Step 1: Create OG Image**
- Dimensions: 1200x630px
- Format: JPG or PNG
- Include: CopperCloud logo, tagline, key visual
- Tools: Canva, Figma, or Adobe

**Step 2: Add to project**
Save as `og-image.jpg` in root directory

**Step 3: Update index.html meta tags**

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.coppercloud.ai/">
<meta property="og:title" content="CopperCloud - Africa's Sovereign AI Infrastructure">
<meta property="og:description" content="Transforming Africa's renewable energy into sovereign AI infrastructure. Building the intelligent grid that keeps African data in African hands.">
<meta property="og:image" content="https://www.coppercloud.ai/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.coppercloud.ai/">
<meta property="twitter:title" content="CopperCloud - From Copper to Cloud">
<meta property="twitter:description" content="Africa's first sovereign AI infrastructure. Data sovereignty meets renewable energy.">
<meta property="twitter:image" content="https://www.coppercloud.ai/og-image.jpg">
```

**Step 4: Deploy**
```bash
git add og-image.jpg index.html
git commit -m "Add OG image for social media sharing"
git push origin main
```

**Step 5: Test**
- Use https://www.opengraph.xyz/ to preview
- Share on LinkedIn/Twitter to verify

---

### 2.5 Run Lighthouse Performance Audit

**Why**: Identify and fix performance issues

**Step 1: Run Audit**
1. Open site in Chrome: https://www.coppercloud.ai
2. Open DevTools (F12)
3. Lighthouse tab → Generate report
4. Select: ✓ Performance ✓ Accessibility ✓ Best Practices ✓ SEO

**Step 2: Target Scores**
- Performance: 95+ ✅
- Accessibility: 90+ ✅
- Best Practices: 95+ ✅
- SEO: 95+ ✅

**Step 3: Address Any Issues**
Common fixes:
- Optimize images (WebP format)
- Minimize JavaScript
- Leverage browser caching (already done in vercel.json)
- Add missing alt text
- Fix contrast issues

**Expected Outcome**: ✅ All scores 90+ (target: 95+)

---

## Phase 3: Month 1 - Contact Forms & User Interaction

**Timeline**: After Phase 2 completion  
**Priority**: MEDIUM  
**Estimated Time**: 4-6 hours

### 3.1 Implement Contact Form

**Why**: Enable direct communication with potential investors and partners

#### Option 1: Formspree (Recommended - Easiest)

**Step 1: Create Formspree Account**
1. Go to https://formspree.io/
2. Sign up (free plan: 50 submissions/month)
3. Create new form:
   - Form name: `CopperCloud Contact`
   - Notification email: `hello@coppercloud.ai`

**Step 2: Get Form Endpoint**
Copy the form endpoint: `https://formspree.io/f/YOUR_FORM_ID`

**Step 3: Add to Vercel Environment Variables**
```
Key: NEXT_PUBLIC_CONTACT_FORM_ENDPOINT
Value: https://formspree.io/f/YOUR_FORM_ID
Environments: ✓ Production ✓ Preview ✓ Development
```

**Step 4: Add Contact Form HTML**

Add this section to `index.html` (replace existing contact section or add new):

```html
<section class="contact-form-section" id="contact-form">
    <div class="container">
        <h2>Get in Touch</h2>
        <p>Interested in partnering with CopperCloud? Let's discuss how we can work together.</p>
        
        <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
            <div class="form-group">
                <label for="name">Name *</label>
                <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email *</label>
                <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
                <label for="organization">Organization</label>
                <input type="text" id="organization" name="organization">
            </div>
            
            <div class="form-group">
                <label for="interest">Area of Interest *</label>
                <select id="interest" name="interest" required>
                    <option value="">Select...</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="partnership">Strategic Partnership</option>
                    <option value="government">Government Relations</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="message">Message *</label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <!-- Honeypot for spam protection -->
            <input type="text" name="_gotcha" style="display:none">
            
            <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
        
        <div id="form-status" style="display:none;"></div>
    </div>
</section>
```

**Step 5: Add Form Handling JavaScript**

Add to `script.js`:

```javascript
// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('form-status');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Submit form
            fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    status.innerHTML = '<p class="success">Thank you! Your message has been sent. We\'ll be in touch soon.</p>';
                    status.style.display = 'block';
                    form.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                status.innerHTML = '<p class="error">Oops! There was a problem. Please try again or email us directly at hello@coppercloud.ai</p>';
                status.style.display = 'block';
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }
});
```

**Step 6: Add Form Styles**

Add to `styles.css`:

```css
.contact-form-section {
    padding: 80px 20px;
    background: linear-gradient(135deg, #0A0A0B 0%, #1a1a1b 100%);
}

.contact-form-section h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #F38218;
}

.contact-form-section p {
    text-align: center;
    margin-bottom: 40px;
    color: rgba(255, 255, 255, 0.8);
}

#contactForm {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    color: #FFD700;
    font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(243, 130, 24, 0.3);
    border-radius: 4px;
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #F38218;
    box-shadow: 0 0 0 3px rgba(243, 130, 24, 0.1);
}

#form-status {
    margin-top: 20px;
    padding: 15px;
    border-radius: 4px;
    text-align: center;
}

#form-status.success {
    background: rgba(0, 255, 0, 0.1);
    border: 1px solid rgba(0, 255, 0, 0.3);
    color: #0f0;
}

#form-status.error {
    background: rgba(255, 0, 0, 0.1);
    border: 1px solid rgba(255, 0, 0, 0.3);
    color: #ff6b6b;
}
```

**Step 7: Deploy**
```bash
git add index.html script.js styles.css
git commit -m "Add contact form with Formspree integration"
git push origin main
```

**Step 8: Test**
1. Visit site and submit test form
2. Verify email received at hello@coppercloud.ai
3. Test error handling by submitting with network offline

**Expected Outcome**: ✅ Functional contact form with email notifications

---

### 3.2 Add reCAPTCHA v3 (Spam Protection)

**Why**: Prevent spam form submissions

**Step 1: Create reCAPTCHA Keys**
1. Go to https://www.google.com/recaptcha/admin
2. Register a new site:
   - Label: `CopperCloud Contact Form`
   - reCAPTCHA type: reCAPTCHA v3
   - Domains: `coppercloud.ai`, `www.coppercloud.ai`, `coppercloud-ai.vercel.app`
3. Accept Terms of Service
4. Copy **Site Key** (public) and **Secret Key** (private)

**Step 2: Add to Vercel Environment Variables**
```
Key: NEXT_PUBLIC_RECAPTCHA_SITE_KEY
Value: 6Lc...your-site-key
Environments: ✓ Production ✓ Preview ✓ Development

Key: RECAPTCHA_SECRET_KEY
Value: 6Lc...your-secret-key
Environments: ✓ Production ONLY (keep secret!)
```

**Step 3: Add reCAPTCHA Script to index.html**

Add to `<head>`:
```html
<script src="https://www.google.com/recaptcha/api.js?render=YOUR_SITE_KEY"></script>
```

**Step 4: Update Form Submission**

Update `script.js` form handler:

```javascript
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Execute reCAPTCHA
    grecaptcha.ready(function() {
        grecaptcha.execute('YOUR_SITE_KEY', {action: 'contact'})
        .then(function(token) {
            // Add token to form
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = 'g-recaptcha-response';
            input.value = token;
            form.appendChild(input);
            
            // Continue with form submission
            // ... existing submission code ...
        });
    });
});
```

**Step 5: Deploy**
```bash
git add index.html script.js
git commit -m "Add reCAPTCHA v3 spam protection"
git push origin main
```

**Expected Outcome**: ✅ Spam-protected contact form

---

## Phase 4: Month 2-3 - Advanced Features

**Timeline**: 2-3 months post-launch  
**Priority**: LOW-MEDIUM  
**Estimated Time**: 10-15 hours

### 4.1 Interactive African Map

**Why**: Visual representation of continental expansion strategy

**Technology Options**:
1. **Mapbox GL JS** (Recommended)
2. **Leaflet.js** (Open source)
3. **D3.js** (Custom SVG)

#### Mapbox Implementation

**Step 1: Create Mapbox Account**
1. Go to https://www.mapbox.com/
2. Sign up (free tier: 50,000 map loads/month)
3. Go to Account → Tokens
4. Copy default public token

**Step 2: Add to Vercel Environment Variables**
```
Key: NEXT_PUBLIC_MAPBOX_TOKEN
Value: pk.eyJ...your-token
Environments: ✓ Production ✓ Preview ✓ Development
```

**Step 3: Implementation** (detailed code in separate doc when ready)

---

### 4.2 Blog/News Section

**Why**: Share updates, thought leadership, press releases

**Options**:
1. **Static Markdown files** (simplest)
2. **Headless CMS** (Contentful, Sanity, Strapi)
3. **Notion API** (easy content management)

**Recommendation**: Start with static files, migrate to CMS later

---

### 4.3 Team/Leadership Profiles

**Why**: Add credibility and human element

**Implementation**: Create new page with team member cards

---

### 4.4 Multi-language Support

**Why**: Reach French-speaking African markets

**Languages**:
- English (default)
- French (priority)
- Portuguese (future)

**Implementation**: Use i18n library or build custom solution

---

## Phase 5: Quarter 2 - Automation & CI/CD Enhancement

**Timeline**: 3+ months post-launch  
**Priority**: LOW  
**Estimated Time**: 8-12 hours

### 5.1 GitHub Actions Workflows

**Why**: Automated testing, quality checks, security scanning

#### Workflow 1: Code Quality Check

Create `.github/workflows/quality.yml`:

```yaml
name: Code Quality

on:
  pull_request:
    branches: [ main ]
  push:
    branches: [ main ]

jobs:
  quality:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: HTML Validation
      uses: Cyb3r-Jak3/html5validator-action@v7
      with:
        root: .
    
    - name: CSS Validation
      run: npm install -g css-validator && css-validator styles.css
    
    - name: Check for broken links
      uses: lycheeverse/lychee-action@v1
      with:
        args: --verbose --no-progress './**/*.html'
```

#### Workflow 2: Lighthouse CI

Create `.github/workflows/lighthouse.yml`:

```yaml
name: Lighthouse CI

on:
  pull_request:
    branches: [ main ]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
    
    - name: Install Lighthouse CI
      run: npm install -g @lhci/cli
    
    - name: Run Lighthouse
      run: lhci autorun --upload.target=temporary-public-storage
```

#### Workflow 3: Security Audit

Create `.github/workflows/security.yml`:

```yaml
name: Security Audit

on:
  schedule:
    - cron: '0 0 * * 1'  # Weekly on Monday
  push:
    branches: [ main ]

jobs:
  security:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Run Trivy vulnerability scanner
      uses: aquasecurity/trivy-action@master
      with:
        scan-type: 'fs'
        scan-ref: '.'
```

---

### 5.2 Branch Protection Rules

**Why**: Prevent accidental pushes to production

**Settings to Enable** (GitHub → Settings → Branches):

1. **Require pull request reviews before merging**
   - Required approvals: 1
2. **Require status checks to pass**
   - Require branches to be up to date
   - Add: Lighthouse CI, Code Quality checks
3. **Require conversation resolution**
   - All PR comments must be resolved
4. **Do not allow bypassing** (enforce for admins too)

---

### 5.3 Automated Dependency Updates

**Why**: Keep dependencies secure and up-to-date

**Option 1: Dependabot** (GitHub native)

Create `.github/dependabot.yml`:

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 5
```

**Option 2: Renovate Bot** (more flexible)

Install from GitHub Marketplace

---

### 5.4 Preview Deployments for PRs

**Status**: ✅ Already enabled with Vercel!

**How it works**:
1. Create feature branch: `git checkout -b feature/new-section`
2. Make changes and push
3. Create PR in GitHub
4. Vercel automatically deploys preview
5. Test preview URL before merging
6. Merge PR → automatically deploys to production

**No setup needed** - this is already working!

---

## Environment Variables Reference

### Complete List (Organized by Priority)

#### Current (No Variables) ✅
- Site works perfectly without any environment variables

#### Phase 1: Analytics (Week 1-2)
```bash
# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Hotjar (Optional)
NEXT_PUBLIC_HOTJAR_ID=1234567
```

#### Phase 3: Contact Forms (Month 1)
```bash
# Formspree
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lc...public-site-key
RECAPTCHA_SECRET_KEY=6Lc...private-secret-key
```

#### Phase 4: Advanced Features (Month 2-3)
```bash
# Mapbox
NEXT_PUBLIC_MAPBOX_TOKEN=pk.eyJ...your-token

# CMS (if using)
CMS_API_KEY=your-api-key
CMS_API_URL=https://your-cms.com/api
CMS_SPACE_ID=your-space-id

# Email service (if using)
EMAIL_SERVICE_API
