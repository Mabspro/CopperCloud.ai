# Assets Directory

This directory contains all static assets for the CopperCloud website.

## Structure

```
assets/
├── images/      # Product images, screenshots, og-image, etc.
├── icons/       # Custom icons, favicons, app icons
└── fonts/       # Custom fonts (if not using CDN)
```

## Guidelines

### Images
- Use WebP format for optimal performance
- Provide fallback formats (PNG/JPG) for older browsers
- Optimize images before committing (use tools like ImageOptim)
- Use descriptive filenames: `coppercloud-hero-banner.webp`

### Icons
- SVG format preferred for scalability
- Include favicon.ico (multi-size)
- App icons for PWA support
- Social media icons if needed

### Fonts
- Only include if self-hosting is required
- Consider using CDN (Google Fonts) for better performance
- Include WOFF2 format (best compression)
- Provide fallback formats for older browsers

## Naming Conventions

- Use lowercase
- Use hyphens for spaces: `my-image-name.png`
- Be descriptive: `logo-white-bg.svg` not `img1.svg`
- Include dimensions for multiple sizes: `icon-192x192.png`

## Future Enhancements

- [ ] OG image for social sharing (1200x630px)
- [ ] Favicon set (16x16, 32x32, 48x48)
- [ ] Apple touch icon (180x180px)
- [ ] Android chrome icons (192x192, 512x512)
- [ ] CopperCloud logo variations
- [ ] Infrastructure visualization graphics
- [ ] Team photos (when available)
