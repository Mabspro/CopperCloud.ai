# CopperCloud.ai Deployment Guide

## Vercel Deployment Configuration

### Current Setup

**Production URL**: https://www.coppercloud.ai  
**Vercel URL**: https://copper-cloud-ai.vercel.app  
**GitHub Repository**: https://github.com/Mabspro/CopperCloud.ai.git  
**Status**: ✅ Connected & Auto-deploying

---

## Initial Vercel Setup (Already Complete)

Your site is already connected to Vercel. The following steps document the current configuration:

### 1. Project Connection
- ✅ GitHub repository connected
- ✅ Main branch set as production
- ✅ Auto-deployment enabled
- ✅ Custom domains configured

### 2. Build Settings
```
Build Command: (none - static site)
Output Directory: ./
Install Command: (none)
```

---

## Environment Variables Setup

### Current Variables (None Required Yet)

This is a static site with no backend, so no environment variables are currently required. However, when you're ready to add analytics or contact forms, add these in the Vercel Dashboard:

### How to Add Environment Variables in Vercel:

1. Go to your project dashboard: https://vercel.com/mabspro/copper-cloud-ai
2. Navigate to **Settings** > **Environment Variables**
3. Add variables for different environments:

#### For Future Analytics (When Ready)

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Hotjar
NEXT_PUBLIC_HOTJAR_ID=your-hotjar-id
```

#### For Future Contact Forms (When Ready)

```bash
# Contact form service
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=your-endpoint

# Email service
EMAIL_SERVICE_API_KEY=your-api-key

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-site-key
RECAPTCHA_SECRET_KEY=your-secret-key
```

---

## Domain Configuration

### Custom Domains

Your production site has two domains configured:

1. **Primary Domain**: www.coppercloud.ai
2. **Vercel Domain**: copper-cloud-ai.vercel.app

### DNS Settings

Ensure these DNS records are set at your domain registrar:

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

**SSL/HTTPS**: ✅ Automatically provisioned by Vercel

---

## Deployment Process

### Automatic Deployments

Every push to the `main` branch triggers an automatic deployment:

```bash
# Make changes
git add .
git commit -m "Your commit message"
git push origin main

# Vercel automatically deploys within 1-2 minutes
```

### Manual Deployment via Vercel CLI (Optional)

If you want to deploy manually:

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

## Monitoring & Logs

### Build Logs
Access at: https://vercel.com/mabspro/copper-cloud-ai/deployments

### Runtime Logs
- Navigate to your project dashboard
- Click on **Deployments**
- Select a deployment
- View **Runtime Logs** tab

### Performance Monitoring

Vercel provides built-in analytics:
- Go to **Analytics** tab in project dashboard
- Monitor page views, performance, and Web Vitals

---

## Rollback Strategy

If a deployment causes issues:

1. Go to **Deployments** in Vercel dashboard
2. Find the last working deployment
3. Click **...** (three dots) > **Promote to Production**
4. Or use Instant Rollback feature from the deployment page

---

## Security Headers

Configured in `vercel.json`:

- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: DENY
- ✅ X-XSS-Protection: 1; mode=block
- ✅ Referrer-Policy: strict-origin-when-cross-origin
- ✅ Permissions-Policy: Restrictive

---

## Performance Optimizations

### Current Optimizations

1. **Static File Serving**: Fast edge network delivery
2. **Caching Headers**: Aggressive caching for static assets
3. **Compression**: Automatic Brotli/Gzip compression
4. **HTTP/2**: Enabled by default
5. **CDN**: Global edge network (150+ locations)

### Performance Budget

- Initial Load: < 3s
- Time to Interactive: < 1s
- Lighthouse Score: 95+

---

## Deployment Checklist

Before deploying major changes:

- [ ] Test locally (`open index.html`)
- [ ] Check responsive design (mobile/tablet/desktop)
- [ ] Verify all links work
- [ ] Check console for JavaScript errors
- [ ] Test on different browsers
- [ ] Review accessibility (WCAG AA)
- [ ] Validate HTML/CSS
- [ ] Check page load speed
- [ ] Commit with descriptive message
- [ ] Monitor deployment logs
- [ ] Test production site after deployment
- [ ] Check analytics tracking (when enabled)

---

## Troubleshooting

### Deployment Fails

1. Check build logs in Vercel dashboard
2. Verify `vercel.json` is valid JSON
3. Ensure all file paths are correct
4. Check for syntax errors in HTML/CSS/JS

### Site Not Updating

1. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
2. Check if deployment succeeded in Vercel
3. Verify correct branch is deployed
4. Check DNS propagation (can take up to 48h for new domains)

### Domain Issues

1. Verify DNS settings at registrar
2. Check SSL certificate status in Vercel
3. Wait for DNS propagation
4. Use `nslookup` or `dig` to verify DNS

```bash
nslookup www.coppercloud.ai
```

---

## Future Enhancements

When adding these features, update environment variables:

### Phase 2 (Post-MOU)
- [ ] Google Analytics 4
- [ ] Hotjar user behavior tracking
- [ ] Contact form integration
- [ ] reCAPTCHA for forms

### Phase 3 (Series A)
- [ ] Backend API integration
- [ ] User authentication
- [ ] Content Management System
- [ ] Real-time metrics dashboard

---

## Support & Resources

- **Vercel Documentation**: https://vercel.com/docs
- **GitHub Repository**: https://github.com/Mabspro/CopperCloud.ai
- **Status Page**: https://www.vercel-status.com/

---

## Quick Commands

```bash
# Check current status
git status

# Pull latest changes
git pull origin main

# Push updates
git add .
git commit -m "Description of changes"
git push origin main

# View deployment logs
vercel logs

# Check domain status
vercel domains ls

# List environment variables
vercel env ls
```

---

*Last Updated: September 29, 2025*  
*Deployment Status: Production Ready ✅*
