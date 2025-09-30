# Vercel Environment Variables Setup Guide

## Current Status: No Variables Required Yet ✅

Your site is a **static HTML/CSS/JS site** with no backend, so you don't need any environment variables right now for the site to work. However, here's what to add as you implement new features:

---

## Phase 1: Current Deployment (No Variables Needed)

**Status**: Site works perfectly without any environment variables  
**Action**: None required - you can deploy immediately

---

## Phase 2: Analytics & Tracking (Add When Ready)

### Priority: HIGH (Recommended for investor meetings)

Add these when you want to track visitor behavior:

#### Google Analytics 4
```
Name: NEXT_PUBLIC_GA_ID
Value: G-XXXXXXXXXX
Environments: Production, Preview, Development
```

**How to get it:**
1. Go to https://analytics.google.com
2. Create account/property for coppercloud.ai
3. Copy your Measurement ID (starts with G-)

#### Hotjar (Optional - User Behavior)
```
Name: NEXT_PUBLIC_HOTJAR_ID
Value: 1234567
Environments: Production, Preview
```

**How to get it:**
1. Sign up at https://hotjar.com
2. Create site for coppercloud.ai
3. Copy your Site ID

---

## Phase 3: Contact Forms (Add When Implementing)

### Priority: MEDIUM (For investor inquiries)

When you add the contact form functionality:

#### Form Endpoint
```
Name: NEXT_PUBLIC_CONTACT_FORM_ENDPOINT
Value: https://formspree.io/f/YOUR_FORM_ID
Environments: Production, Preview, Development
```

**Options:**
- **Formspree** (https://formspree.io) - Easiest, free tier available
- **SendGrid** (https://sendgrid.com) - More powerful
- **EmailJS** (https://emailjs.com) - Client-side only

#### reCAPTCHA (Spam Protection)
```
Name: NEXT_PUBLIC_RECAPTCHA_SITE_KEY
Value: 6Lc...your-site-key
Environments: Production, Preview, Development

Name: RECAPTCHA_SECRET_KEY
Value: 6Lc...your-secret-key  
Environments: Production (only - keep secret!)
```

**How to get it:**
1. Go to https://www.google.com/recaptcha/admin
2. Register coppercloud.ai
3. Get Site Key (public) and Secret Key (private)

---

## Phase 4: Advanced Features (Future)

### Interactive Map
```
Name: NEXT_PUBLIC_MAPBOX_TOKEN
Value: pk.eyJ...your-token
Environments: Production, Preview, Development
```

### CMS Integration
```
Name: CMS_API_KEY
Value: your-api-key
Environments: Production

Name: CMS_API_URL
Value: https://your-cms.com/api
Environments: Production, Preview, Development
```

---

## How to Add Variables in Vercel

### Method 1: Via Dashboard (Recommended)

1. Go to https://vercel.com/mabspro/copper-cloud-ai
2. Click **Settings** tab
3. Click **Environment Variables** in left sidebar
4. For each variable:
   - Enter **Key** (e.g., NEXT_PUBLIC_GA_ID)
   - Enter **Value** (e.g., G-ABC123)
   - Select environments (Production, Preview, Development)
   - Click **Save**

### Method 2: Via CLI

```bash
vercel env add NEXT_PUBLIC_GA_ID production
# Enter value when prompted
```

---

## Important Notes

### Public vs Private Variables

**Public (NEXT_PUBLIC_)**: Can be exposed to browser
- Use for: Analytics IDs, API endpoints, feature flags
- Safe to use in frontend JavaScript
- Example: `NEXT_PUBLIC_GA_ID`

**Private (no prefix)**: Server-side only
- Use for: API keys, secrets, credentials
- Never exposed to browser
- Example: `RECAPTCHA_SECRET_KEY`

### Variable Priority

**Must Have Now**: None! Site works without any variables

**Should Add Soon** (for tracking):
1. `NEXT_PUBLIC_GA_ID` - Track visitor metrics
2. `NEXT_PUBLIC_SITE_URL` - Site URL for metadata

**Can Add Later** (when implementing features):
3. Contact form variables
4. reCAPTCHA keys
5. Map tokens
6. CMS credentials

---

## Quick Start: Minimal Setup

If you want to add just the essentials for tracking after launch:

```bash
# 1. Set up Google Analytics first
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# 2. Add your site URL
NEXT_PUBLIC_SITE_URL=https://www.coppercloud.ai

# That's it! You're done.
```

---

## Testing Environment Variables

### Local Development

Create `.env.local` file (already gitignored):

```bash
# Copy from .env.example
cp .env.example .env.local

# Edit with your values
NEXT_PUBLIC_GA_ID=G-ABC123
```

### Verify Variables Are Set

In your browser console (F12):
```javascript
// These should return undefined for now (no variables set)
console.log(process.env.NEXT_PUBLIC_GA_ID)
```

---

## Current Recommendation

### For Monday's ZDA Meeting:

**✅ Deploy Now** - No environment variables needed!

Your static site works perfectly without any configuration. Add analytics later after the meeting to track engagement.

### Post-Meeting:

1. **Week 1**: Add Google Analytics to track visitors
2. **Week 2-3**: Add contact form with reCAPTCHA  
3. **Month 2**: Add Hotjar for user behavior insights
4. **Phase 2**: Add map and CMS integrations

---

## Summary Checklist

- [ ] **Now**: Deploy without any variables (site works perfectly!)
- [ ] **After ZDA meeting**: Set up Google Analytics
- [ ] **When adding forms**: Set up Formspree + reCAPTCHA
- [ ] **Phase 2**: Set up advanced integrations

**Current Action Required**: None! You can push to GitHub and deploy immediately.

---

*Last Updated: September 29, 2025*  
*Next Review: After implementing analytics (post-launch)*
