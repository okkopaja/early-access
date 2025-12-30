# Product Requirements Document (PRD)

## Feature: Context-Aware Motion Graphics for "How It Works" Section
**Date:** December 20, 2025  
**Version:** 1.0  
**Status:** Draft  

***

### 1. Executive Summary
**Objective:** Replace current static Bento Grid images with lightweight, interactive Lottie (JSON) animations to create a premium, "living" product feel.  
**Inspiration:** [Attio](https://attio.com), [Linear](https://linear.app), [Webild](https://webild.io) – specifically their "dark mode glass" aesthetic with neon accents and fluid motion.  
**Goal:** Increase user engagement and understanding of the core "3-Step Value Loop" (Profile -> Shift -> Pay) through visual storytelling.

***

### 2. Design Aesthetics & Style Guide
The animations must strictly adhere to the "Fastcrew Dark Mode" brand identity.

*   **Color Palette:**
    *   **Background:** Transparent (or matching `#09090b` charcoal).
    *   **Primary Accent:** Neon Emerald (`#10b981`) for success states (checkmarks, money, buttons).
    *   **Secondary:** Muted Zinc (`#71717a`) for skeletons/inactive UI.
    *   **Glass Effect:** White with 5-10% opacity for card backgrounds.
*   **Motion Style:**
    *   **"Snappy & Smooth":** Ease-out cubic-bezier curves (Start fast, end slow).
    *   **Looping:** Subtle "breathing" or "hover" loops when idle; active animation on viewport entry.
    *   **Frame Rate:** 60fps.

***

### 3. Functional Requirements (The 3 Cards)

#### **Animation A: "Smart Resume" (Main Vertical Card)**
*   **Trigger:** Plays once on scroll-into-view, then subtle loop.
*   **Narrative:** A blank glass card fills with data -> Profile Pic pops in -> Green "Verified" Badge stamps on top.
*   **Key Elements:**
    *   **Skeleton Loading:** Lines of text fading in (shimmer effect).
    *   **The Stamp:** A 3D-style shield icon scaling up and slamming down with a small "shockwave" (scale bounce).
    *   **Loop:** The "Verified" badge gently floats/bobs up and down (y-axis: +/- 5px).

#### **Animation B: "Interview Request" (Top Right Card)**
*   **Trigger:** Plays on hover (Desktop) or Loop (Mobile).
*   **Narrative:** A notification banner slides in from the top -> "New Interview Request" text types out -> Cursor clicks "Chat Now" -> Button turns green.
*   **Key Elements:**
    *   **Notification:** Glassmorphism banner with a blurred background.
    *   **Cursor:** A stylized vector arrow (Linear style) moving in a natural curve.
    *   **Interaction:** Button "press" effect (scale down to 0.95) when clicked.

#### **Animation C: "Instant Pay" (Bottom Right Card)**
*   **Trigger:** Continuous subtle loop.
*   **Narrative:** A large number "₹1200" counts up from 0 to 1200 rapidly. Confetti particles explode softly in the background.
*   **Key Elements:**
    *   **Counter:** Rolling numbers effect (slot machine style) stopping at 1200.
    *   **Particles:** Small emerald dots/coins floating upwards and fading out (simulating zero gravity).
    *   **Glow:** The number pulses with a neon green glow every 3 seconds.

***

### 4. Technical Implementation Steps

#### **Step 1: Asset Creation (Design Team)**
*   **Tools:** After Effects (exported via Bodymovin) OR LottieCreator / Rive.
*   **Constraints:**
    *   Max file size: <50KB per JSON.
    *   No raster images (use Vectors only) to ensure crispness on 4K screens.
    *   Use `stroke-width` scaling for responsive resizing.

#### **Step 2: Frontend Integration (Dev Team)**
*   **Library:** `lottie-react` or `@dotlottie/react-player` (lighter).
*   **Component Structure:**
    ```tsx
    // Example Component
    import Lottie from "lottie-react";
    import resumeAnimation from "@/assets/lottie/smart-resume.json";

    export const ResumeCard = () => (
      <div className="relative w-full h-64 bg-zinc-900/50 rounded-xl overflow-hidden">
         <Lottie 
            animationData={resumeAnimation} 
            loop={true} 
            className="w-full h-full object-cover"
         />
      </div>
    );
    ```
*   **Performance:** Lazy load animations (only load JSON when component is near viewport).

***

### 5. Success Metrics
*   **Visual Check:** Animations must match the "Dark/Neon" theme perfectly (no white backgrounds).
*   **Performance:** Lighthouse "Performance" score must not drop by more than 2 points.
*   **Engagement:** Increased time-on-page (users watching the loops).

***
### 6. Inspiration References
*   **Linear:** Their "Issue Tracking" animations (clean lines, subtle motion).
*   **Attio:** Their "Kanban" card movements (smooth physics).
*   **Aceternity UI:** Their "Bento Grid" hover states.