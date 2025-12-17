# Cyberpunk Portfolio Design Guidelines

## Design Approach
**Reference-Based Approach**: Cyberpunk/Futuristic aesthetic inspired by neon-soaked digital interfaces, terminal screens, and sci-fi UI design. Think Blade Runner meets GitHub - dark, technological, with aggressive neon accents.

## Core Design Principles
- **Dark Immersive**: Deep, almost-black backgrounds create canvas for neon elements
- **Neon Intensity**: Electric cyan, magenta, and terminal green as primary accents
- **Digital/Glitch**: Subtle technological imperfections and hover effects
- **Terminal Aesthetic**: Code-focused, monospaced typography dominance

## Typography

**Headings & Titles**: Monospace fonts (Courier New, Roboto Mono, Fira Code)
- Large, bold, uppercase for section headers
- Neon text effects with subtle glow/shadow

**Body Text**: Clean modern sans-serif (Inter, Space Grotenica, Outfit)
- High contrast against dark background
- Medium weight for readability

**Code Blocks**: Terminal-style monospace
- Dark background (darker than main bg)
- Syntax highlighting with neon colors

## Layout System

**Spacing**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Generous spacing between sections (py-20, py-24)
- Tighter spacing within components (p-4, p-6)

**Grid System**: 
- Desktop: 2-column layouts for hero images, 3-4 column project grids
- Mobile: Single column stack
- Max-width containers: max-w-7xl for sections

## Component Library

### Header (Fixed Navigation)
- Fixed top position, dark background with slight transparency/blur
- Left: "GR" logo in pure CSS - neon glowing text or circuit-board style
- Right: Navigation links with neon underline hover effects
- Spacing: px-8 py-4

### Hero Section: "PROYECTOS DESTACADOS"
- Two large side-by-side placeholder images (600x400 aspect)
- Images with dark overlay and neon border glow
- Both images clickable, linking to #all-projects
- Below images: Introductory paragraph about skills/projects
- Prominent "VER TODOS LOS PROYECTOS" button

### Cyberpunk CTA Button
**Critical Design Element** - This button must be visually aggressive:
- Neon borders (2-3px cyan or magenta glow)
- Dark background (transparent or near-black)
- Terminal/pixel-style uppercase text
- Intense hover state: color shift, subtle position offset or glitch effect
- Padding: px-8 py-4, large text

### Project Gallery Grid (id="all-projects")
- Responsive grid: 1 col mobile, 2-3 cols tablet, 3-4 cols desktop
- Each card contains:
  - Project thumbnail image with dark filter
  - Project title (neon accent color)
  - Brief description (2-3 lines)
- Card hover: border glow intensifies, slight scale transform
- Cards clickable to project detail view

### Project Detail Template
- Large featured project image at top
- Detailed description section
- Code showcase area:
  - Terminal-style `<pre><code>` blocks
  - Dark background (darker than main)
  - Neon syntax highlighting
- "Ver Repositorio" GitHub button with icon
  - GitHub icon (FontAwesome or SVG)
  - Neon accent styling consistent with main CTA

### Footer
- Dark background, subtle from main
- Copyright text centered or left-aligned
- Social media icons with neon glow on hover
- Padding: py-12

## Color Palette (CSS Variables)

**Backgrounds**:
- Primary: Near-black (#0a0a0f, #0d1117, or very dark navy)
- Secondary: Slightly lighter dark (#151520, #161b22)

**Neon Accents**:
- Electric Cyan: #00f3ff, #0ff
- Magenta Neon: #ff00ff, #f0f
- Terminal Green: #00ff41, #0f0

**Text**:
- Primary: Near-white (#e0e0e0, #f0f0f0)
- Secondary: Gray (#999, #aaa)
- Code: Cyan/green highlights

## Animations & Effects

**Hover Interactions**:
- Buttons: Neon glow intensification, subtle transform
- Links: Neon underline slide-in
- Project cards: Border glow + scale (1.02-1.05)
- Images: Brightness increase, border pulse

**Glitch Effects** (Subtle, occasional):
- Text glitch on logo or main headings
- Scan-line overlay on images
- RGB split effect on hover (very subtle)

**Transitions**: 
- Smooth, 200-300ms
- Use for color, transform, opacity changes

## Images

**Hero Section Images**:
- Two large placeholder images (600x400 minimum)
- Dark overlay filter applied via CSS
- Neon border glow effect
- Both clickable to project gallery

**Project Thumbnails**:
- Consistent aspect ratio (16:9 or 4:3)
- Dark filter for cyberpunk aesthetic
- Neon border on hover

**Project Detail**:
- One large featured image per project
- High resolution, prominent placement

## Responsive Behavior

**Mobile (< 768px)**:
- Single column layouts
- Stack navigation vertically if needed
- Hero images stack vertically
- Project grid: 1 column
- Reduce neon glow intensity for performance

**Tablet (768px - 1024px)**:
- 2 column grids
- Moderate spacing adjustments

**Desktop (> 1024px)**:
- Full multi-column layouts
- Maximum neon effects and animations
- Generous spacing

## Accessibility

- High contrast text against dark backgrounds
- Focus states with neon outlines
- Semantic HTML structure
- Alt text for all images
- Keyboard navigation support with visible focus indicators