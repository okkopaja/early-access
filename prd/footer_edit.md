# PRD: "Mega-Typography" Footer Enhancement

## 1. Goal
Replace the standard footer with a high-impact "Mega-Footer" inspired by Webild and Google Antigravity. The defining feature is the brand name rendered in massive, edge-to-edge typography at the very bottom of the page, anchoring the design with a premium, bold aesthetic.

***

## 2. Visual Layout & Hierarchy

The footer will consist of two distinct vertical layers:

### 2.1 Layer A: Navigation & Utility (Top)
*   **Position**: Floating above the massive text or stacked directly on top of it.
*   **Content**:
    *   **Left Column**: Small brand icon (optional), tagline ("The modern platform..."), and copyright text.
    *   **Right/Center Columns**: The 3-column link grid defined in the previous PRD (Product, Company, Legal).
    *   **Far Right**: Social media icons.
*   **Styling**:
    *   Text size: Small, discrete (14px–16px).
    *   Opacity: High contrast but visually lighter than the massive text below.

### 2.2 Layer B: The "Mega-Brand" Anchor (Bottom)
*   **Content**: The `FastCrew` logotype using the provided SVG files.
*   **Sizing**:
    *   **Width**: 90%–100% of the viewport width.
    *   **Height**: Auto-scaled to fit width (likely 15vw–25vw height).
    *   **Placement**: Pinned to the absolute bottom of the page. It should be the last element the user sees.
*   **Padding**: Minimal or zero bottom padding; the text should feel "grounded."

***

## 3. Theming & Assets

The footer must respond dynamically to the theme toggle using the provided assets.

### 3.1 Dark Mode (Default)
*   **Background**: Deep black/charcoal (matches page background).
*   **Mega-Text Asset**: Use `public/logo-dark.svg`.
*   **Visual Treatment**:
    *   The SVG should look like a subtle, massive watermark.
    *   **Opacity**: Set to **20%–40%** to prevent it from overpowering the links if they overlap, or **100%** if it sits strictly below the links.
    *   **Gradient Mask (Optional)**: A subtle linear gradient `to top` (transparent -> opaque) can make the text appear to fade in from the bottom.

### 3.2 Light Mode
*   **Background**: Light gray/off-white.
*   **Mega-Text Asset**: Use `public/logo-light.svg`.
*   **Visual Treatment**:
    *   **Opacity**: **10%–15%** (black text on white can be very harsh; low opacity makes it look architectural and premium).

***

## 4. Responsiveness

| Device | Behavior |
| :--- | :--- |
| **Desktop (>1024px)** | **Full Span.** The SVG spans the full container width. Links are arranged in a row above it. |
| **Tablet (768px–1023px)** | **Scaled.** SVG remains full width. Link columns may wrap to 2 rows. |
| **Mobile (<768px)** | **Stacked & Bleed.** The SVG is allowed to "bleed" off the edges (overflow-hidden) or stack vertically. Links are stacked in a single column *above* the text. The massive text height is capped to avoid taking up more than 30% of the mobile screen height. |

***

## 5. Interactions & Animation

### 5.1 Reveal Effect ("Curtain Raise")
*   As the user reaches the bottom of the page, the massive text should have a subtle parallax or reveal effect.
*   **Implementation**:
    *   Set the footer as `position: sticky` or use a fixed z-index stack where the content "scrolls away" to reveal the footer behind it (common in premium sites).
    *   *Alternative (Simpler)*: As the footer enters the viewport, the massive text translates `y: 100% -> 0%` with a slow, heavy easing curve.

### 5.2 Hover States
*   **Links**: Standard hover brightness/underline.
*   **Mega-Text**: Non-interactive (cursor: default). It is purely decorative.

***

## 6. Implementation Notes

*   **SVG Handling**: Ensure the SVG `viewBox` is preserved so the text scales without distortion.
*   **Accessibility**:
    *   The massive footer logo is decorative. Use `aria-hidden="true"` on the mega-SVG image to avoid screen readers announcing "FastCrew" twice (once for the header, once for the footer).
    *   Ensure contrast ratios for the "Layer A" navigation links remain compliant (4.5:1), even if they overlap the massive logo.

### Code Snippet (React/Tailwind Concept)

```tsx
<footer className="relative w-full overflow-hidden pt-20 pb-0">
  {/* Layer A: Content */}
  <div className="relative z-10 container mx-auto px-6 mb-12">
    <div className="flex flex-col md:flex-row justify-between gap-10">
      {/* Links and standard footer content here */}
    </div>
  </div>

  {/* Layer B: Mega Typography */}
  <div className="w-full flex justify-center items-end select-none pointer-events-none opacity-30 dark:opacity-40">
     {/* Dynamically switch src based on theme */}
    <img 
      src={isDarkMode ? "/logo-dark.svg" : "/logo-light.svg"} 
      alt="" 
      className="w-full h-auto max-h-[300px] object-cover md:object-contain"
    />
  </div>
</footer>
```