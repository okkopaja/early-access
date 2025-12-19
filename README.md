# Fastcrew Early Access Landing Page

This is the marketing landing page for Fastcrew, built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [Framer Motion](https://www.framer.com/motion/).

## Features

- **Responsive Design**: Works on Desktop, Tablet, and Mobile.
- **Dark/Light Mode**: Toggleable theme with system preference detection.
- **Glassmorphism**: Premium visual effects using backdrop filters.
- **Micro-interactions**: Smooth animations and hover states.

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme Management**: next-themes

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Theme Tokens
To adjust colors (e.g., the primary Green accent), edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --color-primary: #00e05e; /* Change this hex code */
}
```

### Animations
Animations are handled within each component (e.g., `src/components/Hero.tsx`) using `framer-motion` props like `initial`, `animate`, and `transition`.

### Fonts
The project uses `Geist Sans` and `Geist Mono` via `next/font`.
