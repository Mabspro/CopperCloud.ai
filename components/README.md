# Components Directory

This directory is for reusable UI components when the site evolves beyond a single-page structure.

## Current Status

The site currently uses a single-page architecture (index.html). This folder is prepared for future modular development.

## Future Use Cases

### When to Add Components
- Site grows beyond single landing page
- Need for reusable UI elements across pages
- Implementing a component-based framework (React, Vue, etc.)
- Creating an interactive dashboard or portal

### Potential Components

#### Phase 1: Basic Modularity
```
components/
├── header.html          # Navigation header
├── footer.html          # Site footer
├── cta-button.html      # Call-to-action buttons
└── metric-card.html     # Statistics cards
```

#### Phase 2: Interactive Features
```
components/
├── contact-form/        # Form with validation
├── map-visualization/   # Interactive Africa map
├── calculator/          # ROI calculator
└── testimonials/        # Partner testimonials
```

#### Phase 3: Framework-Based (if needed)
```
components/
├── Header.jsx           # React/Vue component
├── MetricsDashboard.jsx # Data visualization
├── InfrastructureMap.jsx# Interactive map
└── PartnerLogos.jsx     # Logo carousel
```

## Development Guidelines

### Component Structure (when creating)
```
component-name/
├── index.html           # Component markup
├── styles.css           # Component-specific styles
├── script.js            # Component logic
└── README.md            # Usage documentation
```

### Best Practices
- Keep components self-contained
- Document props/parameters clearly
- Include usage examples
- Consider accessibility (ARIA labels)
- Test across browsers
- Optimize for performance

## Migration Path

Current approach: Monolithic (index.html)
↓
Future: Modular components
↓
Later: Framework-based (if complexity warrants)

**Note**: Only migrate when site complexity justifies the overhead. Simple is often better.
