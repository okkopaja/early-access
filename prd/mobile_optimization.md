# PRD: Native-Quality Mobile Optimization for FastCrew

## 1. Goal
Optimize the FastCrew web experience to behave and feel like a high-end native mobile application. The interface should feel "finger-friendly," responsive, and fluid, eliminating the friction typically associated with mobile web browsing.

***

## 2. Core Mobile Principles
To achieve a "Native App" feel, the implementation must adhere to these four pillars:
1.  **Bottom-Heavy Ergonomics:** Primary interactions (navigation, critical actions) should be within the "thumb zone" (bottom 30% of the screen).[1]
2.  **Touch Physics:** Scrolling and animations must use momentum and standard OS-easing curves (e.g., Apple’s `ease-out` for entry, `ease-in` for exit).[2]
3.  **No-Friction Input:** Touch targets must exceed 48x48px, and inputs should auto-trigger appropriate keyboards.[3]
4.  **Immersive View:** Eliminate browser UI distractions where possible and utilize the full safe-area.

***

## 3. Structural Changes for Mobile

### 3.1 The "Thumb-Zone" Navigation
*Replace the sticky top header with a Bottom Navigation Bar on mobile only.*

*   **Design:**
    *   **Position:** Fixed at bottom (z-index: 50).
    *   **Height:** 60px + safe-area-inset-bottom.
    *   **Appearance:** Glassmorphism (blur: 20px), slightly more opaque than desktop (90%) to hide content scrolling underneath.
    *   **Border:** 1px top border (white/black at 10% opacity).
*   **Items (Left to Right):**
    1.  **Home** (Icon: House) - Scrolls to top.
    2.  **Jobs** (Icon: Briefcase) - Anchor link to "Why Choose" or Jobs placeholder.
    3.  **Main Action** (Center): "Get Started" (Icon: Plus or Rocket) - Floating Action Button (FAB) style. It visually breaks the top border of the nav bar slightly. Triggers the **Early Access Modal**.
    4.  **Dashboard** (Icon: Grid/Chart).
    5.  **Menu** (Icon: Hamburger/Avatar) - Triggers a "Sheet" for settings, theme toggle, and profile.
*   **Behavior:**
    *   Hides on rapid scroll *down* (to maximize reading area).
    *   Immediately reveals on any scroll *up*.

### 3.2 Hero Section Optimization
*   **Headline:** Scale down text to roughly 32px–40px. Ensure no word breaks awkwardly.
*   **Layout:**
    *   Stack buttons vertically.
    *   "Find Work" (Primary) -> Full width, 56px height.
    *   "Hire Talent" (Secondary) -> Full width, 56px height, transparent background to reduce visual clutter.
*   **Visuals:**
    *   If using complex background/3D, disable it or replace it with a static, high-res image/gradient to save battery and performance on mobile.

### 3.3 Cards (Features & Pricing)
*   **Horizontal Snap Scrolling (Carousels):**
    *   Instead of stacking all cards vertically (which makes the page huge), use a horizontal scroll container.
    *   **Features Section:** Cards display 1.1 at a time. The right edge of the second card "peeks" in to suggest scrollability.
    *   **CSS:** `overflow-x: auto`, `scroll-snap-type: x mandatory`.
    *   **Indicators:** Add small dot indicators below the carousel.

### 3.4 Footer Mobile Layout
*   **Stacking:**
    *   Standard links (Layer A) stack vertically or in a 2x2 grid (accordion style for "Product", "Company", "Legal" is acceptable to save space).
    *   **Mega-Text (Layer B):** Allow the massive SVG logo to overflow the sides of the screen. It should look like a "cropped" abstract graphic pattern at the bottom.

***

## 4. Interaction & Physics

### 4.1 Native Bottom Sheets (vs. Modals)
*Replace center-screen modals with Bottom Sheets for mobile.*
*   **Trigger:** Clicking "Get Started" or "Early Access".
*   **Design:**
    *   Sheet slides up from the bottom, covering 80% of the screen.
    *   **Handle:** Small gray pill at the top center to indicate "drag to close".[4]
    *   **Backdrop:** Dimmed background.
*   **Gesture:** User can swipe the sheet down to close it (key native feel characteristic).

### 4.2 Touch Feedback
*   **Active States:** Remove the 300ms tap delay. Ensure `:active` states trigger immediately.
*   **Effect:**
    *   **Buttons:** Scale down to 0.96 on press.
    *   **Lists/Cards:** subtle background flash (gray tint) on touch.

***

## 5. Technical Requirements (CSS/Meta)

### 5.1 Viewport & SafeArea
To prevent notch interference and "rubber banding" issues:
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover">
```
*   **Note:** `user-scalable=0` is controversial for accessibility, but often used in "app-like" experiences. If accessibility is a strict priority, allow scaling but handle layout gracefully.
*   **CSS Env Variables:** Use `padding-bottom: env(safe-area-inset-bottom)` on the Bottom Nav and Footer.

### 5.2 Typography Scale
*   **Base size:** 16px (never smaller for readable text).[5]
*   **Input text:** 16px (prevents iOS from zooming in on focus).
*   **Headings:**
    *   H1: 32px (Tight leading: 1.1)
    *   H2: 24px
    *   H3: 20px

### 5.3 Performance
*   **Images:** Serve WebP/AVIF sized specifically for mobile (e.g., `w_400`).
*   **Animations:** Disable parallax on mobile (often jittery). Use `will-change: transform` only on the active Bottom Sheet.

***

## 6. Implementation Checklist

### Global
- [ ] Add `viewport-fit=cover` meta tag.
- [ ] Ensure all tappable targets are min 48x48px (including padding).[3]
- [ ] Prevent text selection on UI elements (`user-select: none`) but allow it on content paragraphs.

### Components
- [ ] **Nav:** Hide Desktop Nav; Implement Bottom Nav Bar with icons.
- [ ] **Hero:** Stack buttons, resize text, simplify background.
- [ ] **Features:** Convert grid to horizontal snap-scroll carousel.
- [ ] **Pricing:** Convert grid to horizontal snap-scroll carousel.
- [ ] **Early Access:** Convert Modal component to "Drawer/Bottom Sheet" component on mobile breakpoint (`<md`).
- [ ] **Inputs:** Set `input type="email"` (triggers @ keyboard) and `autocomplete="email"`.

### Polish
- [ ] Verify "Overscroll-behavior-y: none" on body to prevent page bounce if desired.
- [ ] Test on actual device (iOS Safari and Android Chrome) to verify "100vh" address bar jumping issues (use `100dvh`).
