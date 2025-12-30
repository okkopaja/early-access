This PRD defines a single-page marketing landing frontend for FastCrew that visually matches the provided reference image and feels premium, smooth, and “Apple‑like” in quality.[1][2]

***

## 1. Goal and Scope

- Build a responsive landing page for the FastCrew platform (no backend logic required beyond basic form/toggle wiring).
- The page must visually match the provided screenshot layout, spacing, and copy as closely as possible.
- Include a dark/light mode toggle, glassmorphism effects, and subtle high‑quality animations/transitions.
- Scope excludes: auth flows, dashboard, jobs listing pages, CMS, and payments.

***

## 2. Target Platforms and Tech

- Target devices: modern desktops and laptops first; tablet and mobile support required (responsive).
- Browsers: latest Chrome, Safari, Edge, and Firefox.
- Tech stack (suggested, can be adjusted):
  - React / Next.js frontend.
  - Tailwind CSS or CSS Modules with custom design tokens for theming.
  - Framer Motion or GSAP for animations (or CSS-based where sufficient).
- No external backend dependencies except optional analytics script placeholder.

***

## 3. Page Information Architecture

The landing page contains the following sections, following the exact order and layout of the screenshot:

1. **Global Navigation Bar**
2. **Hero Section**
3. **“Why Choose FastCrew?” Feature Section**
4. **Pricing Section**
5. **CTA “Ready to Get Started?” Section**
6. **Footer**

### 3.1 Global Navigation

- Left: FastCrew logo (same styling as screenshot: green accent, italic, with small tagline if present in image).
- Center: Text links “Jobs” and “Dashboard”.
- Right:
  - Dark/Light mode toggle icon (moon/sun style, minimal).
  - Notification or settings icon (if visible in screenshot).
  - User avatar circle (solid color or gradient fill as per screenshot).
- Behavior:
  - Sticky to top on scroll with subtle glassmorphism background and blur.
  - Hover states: slight brightness increase and underline / color change for links.
  - On theme change, nav background and typography colors update smoothly.

### 3.2 Hero Section

- Large headline matching the screenshot:
  - Line 1: “fastcrew…” (white or light gray).
  - Line 2–3: “ACTUALLY gets you hired FAST” (bright green accent on some words).
- Subheading: one paragraph describing connecting with top‑tier talent and gigs (copy from screenshot).
- Primary CTAs:
  - Left: “Find Work” (bright green pill button with right arrow icon).
  - Right: “Hire Talent” (neutral glass / dark button).
- Layout:
  - Centered vertically above the fold.
  - Background: dark gradient with subtle vignette similar to reference.
  - Optional subtle animated gradient or noise texture behind hero to support glassmorphism.
- Interaction:
  - Buttons have hover scale (1.03) and shadow/glow; active state presses inward.
  - On initial page load, headline and buttons fade/slide in with small, smooth stagger.

### 3.3 “Why Choose FastCrew?” Section

- Section title: “Why Choose FastCrew?”
- Subtitle: Single line explaining value (e.g., “Everything you need to succeed in the gig economy…”).
- Three feature cards arranged horizontally on desktop:
  1. **Lightning Fast**  
     - Icon (lightning symbol in green circle).
     - Short description (post gig & get proposals quickly).
  2. **100% Secure**  
     - Shield icon.
     - Description about escrow, encrypted data, dispute resolution.
  3. **Real-Time Dashboard**  
     - Dashboard/graph icon.
     - Description about tracking progress and communication.
- Styling:
  - Cards use glassmorphism: semi‑transparent dark surfaces, backdrop‑blur, subtle inner border, soft glow on hover.[2][3]
  - On hover, card elevates slightly and icon animates (e.g., small bounce or rotate).
- Layout responsive:
  - Desktop: 3 columns.
  - Tablet: 2 columns.
  - Mobile: stacked cards.

### 3.4 Pricing Section

- Title: “Simple, Transparent Pricing”.
- Subtitle: “Choose the plan that fits your needs. No hidden fees.”
- Three pricing cards exactly matching screenshot:

  - **Starter**
    - Label: “Perfect for trying out the platform”.
    - Price: “₹0 /month”.
    - Bullet features: 5% commission, basic support, standard verification, community access (per screenshot).
    - Button: “Get Started”.

  - **Professional** (center card, marked as “Most Popular”)
    - Badge ribbon at top: “Most Popular” (green pill label).
    - Price: “₹299 /month”.
    - Features: 2% commission, priority support, enhanced profile, advanced analytics, custom proposals.
    - Button: “Get Started”.
    - Visual emphasis: slightly larger, brighter border/gradient background, subtle glow.

  - **Enterprise**
    - Subtitle: “For large organizations”.
    - Price: “Custom”.
    - Features: negotiable commission, dedicated account manager, API access, custom integrations, SLA guarantee.
    - Button: “Contact Sales”.

- Glassmorphism:
  - Same style as feature cards, but with stronger blur and border to look premium.
- Animations:
  - Cards animate in with upward fade on scroll.
  - Hover: scale, shadow, and border color intensify; button color shifts.

### 3.5 CTA “Ready to Get Started?” Section

- Large centered heading: “Ready to Get Started?”
- Subheading: “Join fastcrew for your next big leap.”
- Single primary CTA button: “Create Your Free Account” (bright green pill).
- Background: wide horizontal gradient with soft light sweep; subtle parallax or animated gradient allowed but must remain calm and smooth.

### 3.6 Footer

- Left block:
  - FastCrew logo again.
  - Short tagline: “The modern platform for flexible work opportunities…” (match screenshot).
- Middle and right columns (multi-column layout like screenshot):
  - **Product**: Features, Pricing, Testimonials.
  - **Company**: About, Careers, Contact.
  - **Legal**: Privacy, Terms.
- Bottom bar:
  - Copyright: “© 2025 FastCrew. All rights reserved.”
  - Social links on right: Twitter, LinkedIn, Instagram (simple text or icons per screenshot).
- Hover: Links change color slightly, respecting theme.

***

## 4. Visual Design & Theming

### 4.1 Color and Typography

- Primary colors taken from screenshot:
  - Background dark: near‑black / very dark gray.
  - Accent green: used for headline, primary buttons, icons, and highlights.
  - Neutral text: white and light gray for body.
- Light mode:
  - Background: off‑white / light gray.
  - Cards: subtle glassmorphism with light blur and soft borders.
  - Accent green unchanged to preserve brand.
- Typography:
  - Sans-serif display font for headings (bold, round, similar to mockup).
  - Sans-serif body font for paragraphs.
  - Consistent scale: H1, H2, body, caption per screenshot.

### 4.2 Dark/Light Mode Toggle

- Placement: in the top‑right of nav bar.
- Behavior:
  - Toggle instantly switches theme tokens (backgrounds, text colors, card colors).
  - Smooth transition of 150–250 ms with CSS transitions on background-color, color, border-color.[4][5]
  - Respects system preference on first load (prefers-color-scheme), then remembers user choice in localStorage for subsequent visits.[4]

***

## 5. Animations and Micro‑Interactions

- Overall principles:
  - Easing: use cubic-bezier curves similar to Apple (ease-out with soft overshoot).
  - Duration: 150–400 ms for most transitions; longer (600–800 ms) for initial hero and background animations to feel premium.
- Specifics:
  - Initial load:
    - Nav fades and slides from top.
    - Hero text and CTAs fade/slide upward with stagger.
  - Scroll‑based:
    - Sections (Why, Pricing, CTA) fade in with slight upward motion when entering viewport.
  - Buttons:
    - Hover: scale 1.03, shadow glow; ripple or subtle gradient shift allowed.
    - Active: quick depress effect (scale 0.98) and shadow reduction.
  - Cards:
    - Glassmorphism surfaces get a slightly stronger blur and border on hover.
    - Icons animate (floating or gentle movement) on hover.
- Performance:
  - Use GPU‑friendly properties only (opacity, transform).
  - Ensure 60 fps on modern laptops; avoid heavy blur on mobile where necessary.[3]

***

## 6. Glassmorphism Requirements

- Apply glassmorphism selectively to:
  - Nav background (when scrolling), feature cards, pricing cards, and CTA background container.[2][3]
- Visual recipe:
  - Background: gradient or photo-safe dark background.
  - Element surface:
    - background-color: rgba with 10–20% opacity.
    - backdrop-filter: blur(16–24px).
    - border: 1px solid with low‑opacity white/green tint.
    - subtle inner shadow / outer glow for depth.
- Text contrast:
  - Ensure WCAG‑friendly contrast (4.5:1 for body text) in both themes.[5]

***

## 7. Responsiveness and Layout

- Desktop (~≥1024px): Layout exactly as screenshot.
- Tablet (~768–1023px):
  - Nav stays single row.
  - Feature and pricing cards use 2‑column grids where necessary.
- Mobile (<768px):
  - Stacked sections.
  - Hero text centered; buttons stacked with full width.
  - Cards full width with consistent padding and spacing.
- Ensure safe margins and paddings on all viewports.

***

## 8. Non‑Functional Requirements

- Accessibility:
  - Semantic HTML structure (nav, main, section, footer).
  - Keyboard-focus states for all interactive elements.
  - ARIA attributes for theme toggle (aria-pressed / aria-label).
- Performance:
  - Lighthouse performance score target ≥ 90 on desktop.
  - Minimize animation jank; prefer CSS transitions.
- Code quality:
  - Theme tokens defined centrally (CSS variables or theme object).
  - Components modular: Nav, Hero, Features, Pricing, CTA, Footer.

***

## 9. Deliverables

- Fully implemented landing page matching reference screenshot (Figma‑level visual fidelity).
- Dark and light modes with persisted user preference.
- Deployed preview build or Storybook/Chromatic link for review.
- Brief README describing:
  - Tech stack.
  - How to run locally.
  - How to adjust theme tokens and animations.
