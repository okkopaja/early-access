# FASTCREW LANDING PAGE REDESIGN PRD
## Complete Transformation from SaaS to Marketplace

**Version:** 2.0  
**Status:** Ready for Implementation  
**Prepared For:** Indian Youth (West Bengal Focus)  
**Primary Goal:** Transform from "Complex B2B SaaS" to "Simple, Trustworthy Job Marketplace"

---

## EXECUTIVE SUMMARY

Your current landing page signals "expensive tech startup" to a 21-year-old waiter in Kolkata. It needs to signal "get a real job today with real money." This PRD provides pixel-perfect, section-by-section specifications to transform every element into something **minimalist, trustworthy, and action-driven**.

**Core Philosophy:** Remove abstraction. Add trust. Show outcomes, not features.

---

## PART 1: COLOR SYSTEM & TYPOGRAPHY

### Color Palette (Final)
```
Primary Background:    #FFFFFF (Clean White - 95% of page)
Secondary Background:  #F8F8F8 (Off-white for cards/sections - 5% usage)
Accent/Highlight:      #1DBF73 (Brand Green - CTAs, borders, highlights)
Dark Neutral:          #404145 (Charcoal - Nav, footers, text)
Text Primary:          #1A1A1A (Deep Black - Body copy)
Text Secondary:        #666666 (Medium Grey - Subtext, descriptions)
Border/Divider:        #E8E8E8 (Light Grey - 1px borders)
Success Green:         #1DBF73 (Same as accent)
Subtle BG Tint:        #F0F7F4 (Very light green, 5% opacity for backgrounds)
```

### Typography System
```
Headlines (H1):        Inter Bold, 42-48px, Line-height 1.2, #1A1A1A
Headlines (H2):        Inter SemiBold, 28-32px, Line-height 1.3, #1A1A1A
Headlines (H3):        Inter SemiBold, 20-24px, Line-height 1.4, #1A1A1A
Body Copy:             Inter Regular, 14-16px, Line-height 1.6, #1A1A1A
Button Text:           Inter SemiBold, 14px, Line-height 1.5, #FFFFFF
Labels/Tags:           Inter Medium, 12px, Line-height 1.4, #404145
```

**Rationale:** Inter is modern, widely supported, and reads clean on Indian screens. Weights are minimal (Regular, Medium, SemiBold, Bold) to avoid complexity. Only green accent means fast decision-making for users.

---

## PART 2: NAVIGATION BAR REDESIGN

### Current State Problem
- Dark background with glowing text feels "futuristic but impersonal"
- Logo blends into background
- No clear distinction between "Browse" vs "Sign Up"

### New Specification

#### Layout
```
[Logo] [Nav Links Centered] [Auth Buttons Right]
- Logo: Fastcrew text-based logo, 24px height, #1A1A1A, no glossy effects
- Nav links: Home | How It Works | For Partners | FAQ
- Right side: "Login" (outline button) | "Start Hiring/Working" (solid green button)
```

#### Navigation Bar CSS Specs
```
Background:          #FFFFFF
Height:              60px (desktop), 56px (mobile)
Padding:             0 24px
Border-bottom:       1px solid #E8E8E8
Position:            sticky top (z-index: 1000)
Alignment:           flex, space-between, items-center
```

#### Logo Treatment
```
Format:              SVG or high-quality PNG
Size:                140px width, 24px height (maintain aspect)
Color:               #404145 (charcoal)
Font:                Inter Bold if text-based
Hover Effect:        None (solid brand mark)
```

#### Nav Links
```
Font:                Inter Regular, 14px
Color:               #666666 (medium grey)
Hover State:         #1DBF73 (green) with bottom border 2px green
Active State:        #1A1A1A (dark) + bottom border 2px green
Transition:          0.2s ease
Spacing:             32px between links
```

#### Auth Buttons
```
Login Button:
  - Background: transparent
  - Border: 1px solid #404145
  - Color: #404145
  - Padding: 10px 20px
  - Border-radius: 6px
  - Hover: background #F8F8F8

CTA Button (Primary):
  - Background: #1DBF73
  - Color: #FFFFFF
  - Padding: 10px 24px
  - Border-radius: 6px
  - Font: Inter SemiBold, 14px
  - Hover: background #16A557 (darker green)
  - Transition: 0.2s ease
  - Cursor: pointer
  - Box-shadow: 0 2px 8px rgba(29, 191, 115, 0.15) [subtle shadow on hover]
```

#### Mobile Navigation
```
For screens < 768px:
- Hamburger menu icon (3 lines, #404145) on right
- Logo stays left
- Auth buttons move into hamburger menu
- Dropdown slides from top with full-width items
- Menu items: 16px padding, stacked vertically
- Overlay: semi-transparent rgba(0,0,0,0.1)
```

---

## PART 3: HERO SECTION REDESIGN

### Current State Problem
- "Skip the Wait. Unlock Hidden Job Market" — too abstract
- Dark gradient background → feels intimidating
- No real-world context (no images of people/restaurants)
- Two separate CTAs confusing ("Find Work" vs "Hire Talent")

### New Specification

#### Layout (Split or Full-Width Option A: RECOMMENDED)
```
Left 50%: Text Content
  - Headline
  - Subheading
  - Two CTAs (side-by-side on desktop, stacked on mobile)
  - Trust signal (small text: "1,200+ jobs posted this week")

Right 50%: Hero Visual
  - Realistic image of happy workers/happy restaurant scenario
  - OR interactive element showing "Live Job Ticker" with 3 real-looking job cards
```

#### Hero Text Content

**Headline:**
```
"Work Shifts You Love. Get Paid Today."
- Font: Inter Bold, 42px (desktop), 32px (mobile)
- Color: #1A1A1A
- Line-height: 1.2
- Margin-bottom: 16px
- Character limit: ~50 chars (fits on 2 lines naturally)
```

**Why this works:** 
- "Work Shifts You Love" = emotional appeal (autonomy, choice)
- "Get Paid Today" = direct benefit, removes payment anxiety

**Subheading:**
```
"Find verified jobs at top restaurants in Kolkata. No agencies. No delays. Just real work and real money."
- Font: Inter Regular, 16px
- Color: #666666
- Line-height: 1.6
- Margin-bottom: 24px
- Character limit: ~120 chars
```

**Why this works:**
- "verified jobs" = trust signal
- "no agencies, no delays" = directly addresses worker pain points
- "real work, real money" = addresses skepticism

#### Hero CTAs

**CTA 1: Primary (Green)**
```
Text: "Find Work Now"
Background: #1DBF73
Color: #FFFFFF
Padding: 14px 32px
Border-radius: 8px
Font: Inter SemiBold, 16px
Icon: None (text only, clean)
Hover: background #16A557, box-shadow 0 4px 12px rgba(29, 191, 115, 0.2)
Transition: 0.3s ease
Width on mobile: 100%
```

**CTA 2: Secondary (Outline)**
```
Text: "Post a Job"
Background: transparent
Border: 2px solid #404145
Color: #404145
Padding: 12px 28px (smaller due to border)
Border-radius: 8px
Font: Inter SemiBold, 16px
Hover: background #F8F8F8
Transition: 0.3s ease
Width on mobile: 100%
```

#### Trust Signal
```
Text: "1,200+ jobs posted this week. 5,400+ workers earning daily."
Font: Inter Regular, 13px
Color: #999999
Icon: Optional checkmark (12x12px, #1DBF73) before text
Margin-top: 20px
Alignment: left-aligned
```

#### Hero Visual (Right Side) - Option A: Static Image
```
Container:
  - Width: 50% (desktop), 100% (mobile, below text)
  - Height: 450px (desktop)
  - Border-radius: 12px
  - Overflow: hidden
  - Box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08)
  - Aspect-ratio: 16 / 12

Image Requirements:
  - High-quality photo of Indian hospitality workers (smiling, diverse)
  - OR real restaurant/kitchen scene with staff
  - NOT stock photo (too fake)
  - Color graded: natural, warm tones
  - File format: WebP with JPEG fallback
  - Lazy load with blur placeholder
```

#### Hero Visual - Option B: Interactive Job Ticker (BETTER UX)
```
Container:
  - Width: 50% (desktop), 100% (mobile)
  - Height: 450px (desktop), 300px (mobile)
  - Background: #F8F8F8
  - Border-radius: 12px
  - Padding: 24px
  - Box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08)
  - Border: 1px solid #E8E8E8

Card Stack (showing 3 jobs):
  - Card 1: On top, fully visible, slight shadow
  - Card 2: Below, 80% visible (peeking)
  - Card 3: Below Card 2, 60% visible (peeking)
  
Each Card:
  - Width: 100%
  - Padding: 16px
  - Background: #FFFFFF
  - Border-radius: 8px
  - Border-left: 4px solid #1DBF73
  - Transition: transform 0.5s ease (for auto-rotation)
  
Card Content:
  [Restaurant Logo 24x24] [Job Title] [Salary Badge]
  Restaurant Name
  Location • Experience Level
  Posted 30 mins ago [green dot]
  
Auto-rotate: Every 4 seconds, top card fades out, next card slides up
Hover: Pause rotation
Animation: Smooth fade-in/out, no jarring transitions
```

**Why Option B is better:** Shows real jobs instantly, builds trust, proves market exists.

#### Hero Section Layout (Responsive)

**Desktop (1024px+):**
```
Container: max-width 1200px, margin 0 auto, padding 0 24px
Layout: Grid 2 columns, gap 48px
Text Column: 1fr, vertical-align top
Visual Column: 1fr
Min height: 500px
Padding (vertical): 64px 0
```

**Tablet (768px - 1023px):**
```
Container: max-width 100%, padding 0 20px
Layout: Grid 2 columns, gap 32px
Min height: 450px
Padding (vertical): 48px 0
```

**Mobile (< 768px):**
```
Container: max-width 100%, padding 0 16px
Layout: Stack vertically (1 column)
Text Column: Order 1, padding-bottom 24px
Visual Column: Order 2, width 100%, height 300px
Min height: auto
Padding (vertical): 40px 0
```

---

## PART 4: "HOW IT WORKS" SECTION REDESIGN

### Current State Problem
- Generic feature cards (building resume, matching, payment)
- Icons don't show actual product usage
- Feels like explaining software, not showing a job

### New Specification

### Section Container
```
Background: #F8F8F8 (light grey)
Padding: 64px 24px (desktop), 48px 16px (mobile)
Max-width: 1200px
Margin: 0 auto
```

### Section Header
```
Eyebrow Text: "THE PROCESS"
  - Font: Inter SemiBold, 12px
  - Color: #1DBF73
  - Letter-spacing: 1px
  - Margin-bottom: 8px

Headline: "Get a Job in 3 Steps"
  - Font: Inter Bold, 32px
  - Color: #1A1A1A
  - Margin-bottom: 12px

Subheading: "Fast, simple, and designed for hospitality workers in India."
  - Font: Inter Regular, 16px
  - Color: #666666
  - Margin-bottom: 40px
  - Max-width: 500px
```

### Step Cards (3 Column Layout)

#### Card Structure
```
Container:
  - Grid layout: 3 columns (desktop), 1 column (mobile), gap 24px
  - Card background: #FFFFFF
  - Padding: 32px
  - Border-radius: 12px
  - Border: 1px solid #E8E8E8
  - Box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04)
  - Transition: all 0.3s ease
  - Hover: box-shadow 0 8px 24px rgba(0, 0, 0, 0.08), translateY -4px
```

#### Card Elements (In Order)

**1. Step Number Circle**
```
Size: 56px x 56px
Background: #1DBF73
Color: #FFFFFF
Font: Inter Bold, 24px
Border-radius: 50%
Display: flex, center items
Margin-bottom: 20px
```

**2. Card Title (H3)**
```
Font: Inter SemiBold, 20px
Color: #1A1A1A
Margin-bottom: 12px
Line-height: 1.3
Character limit: ~30 chars
```

**3. Card Description**
```
Font: Inter Regular, 14px
Color: #666666
Line-height: 1.6
Margin-bottom: 16px
Character limit: ~100 chars
```

**4. Visual Representation (Choose one per card)**

**Option A: Icon + Micro-illustration**
```
- Use a 64x64px SVG icon/illustration
- Color: #1DBF73 or #E8E8E8 background circle
- Matches the step narrative
- Simple, not photorealistic
```

**Option B: Mini Screenshot / UI Preview**
```
- Small 240x160px screenshot or mockup
- Shows actual app state
- Rounded corners 8px
- Border 1px #E8E8E8
- More trustworthy than icons
```

### Step Card Copy (Exact)

**Card 1: Sign Up & Build Profile**
```
Title: "Create Your Profile in 2 Minutes"
Description: "Upload a photo, add your skills, and you're ready. No complex forms—just the essentials."
Visual: Simple form layout or profile card screenshot
Icon color: #1DBF73
```

**Card 2: Get Verified (Optional)**
```
Title: "Become Verified for Better Jobs"
Description: "Pass a quick background check to access premium shifts at top restaurants. Only ₹99, once."
Visual: Checkmark badge or verification card
Icon color: #1DBF73
```

**Card 3: Start Earning**
```
Title: "Get Hired & Get Paid Same Day"
Description: "Apply to jobs, get matched instantly. Work your shift. Money hits your account by 11 PM."
Visual: Mobile phone showing transfer confirmation
Icon color: #1DBF73
```

---

## PART 5: "LIVE OPPORTUNITIES" SECTION (NEW)

### Purpose
Replace abstract "features" with proof that jobs actually exist. This directly addresses the "first impression" feedback.

### Section Container
```
Background: #FFFFFF
Padding: 64px 24px
Max-width: 1200px
Margin: 0 auto
```

### Section Header
```
Headline: "Jobs Available Right Now in Kolkata"
  - Font: Inter Bold, 32px
  - Color: #1A1A1A

Subheading: "Scroll through real jobs posted by verified restaurants and cafes."
  - Font: Inter Regular, 16px
  - Color: #666666
  - Margin-bottom: 32px
```

### Job Cards Grid
```
Grid: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
Gap: 20px
Max-width: 1200px

Each Job Card:
  - Background: #FFFFFF
  - Border: 1px solid #E8E8E8
  - Border-radius: 8px
  - Padding: 20px
  - Hover state: border 2px solid #1DBF73
  - Transition: 0.2s ease
```

### Job Card Content
```
[Restaurant Logo 40x40] [Restaurant Name] [⭐ 4.8 Rating]
Job Title (e.g., "Head Chef Needed")
₹800-1000 per shift | 4 hours | Thakurpukur
Posted by [Restaurant] • 20 mins ago 🟢 (live indicator)

[Quick Apply Button: "Apply Now" in green]
```

### Data Requirements
```
Must display:
- Real or realistic restaurant/cafe names
- Actual shift rates (₹600-2000 range, real)
- Location (specific Kolkata neighborhoods)
- Time stamps ("20 mins ago", "2 hours ago")
- Job title (Chef, Waiter, Dishwasher, etc.)
- Green "live" indicator (shows job is active)
- 3-5 sample jobs visible
- "View All 340 Jobs" link at bottom
```

### Design Notes
- Use a live job feed API or mock data (similar to Apna.co)
- Update every 30 seconds (or show "Updated X mins ago")
- Do NOT show fake data—if data unavailable, hide section or show placeholder
- Cards should feel like real marketplace listings, not marketing copy

---

## PART 6: PRICING / MEMBERSHIP SECTION REDESIGN

### Current State Problem
- 3-column SaaS pricing table feels transactional
- Workers don't think "pricing," they think "what do I get?"
- Positioning confuses premium as "business feature" not "worker benefit"

### New Positioning
Rename to "Unlock More Opportunities" and show membership as a **Status Badge**, not a software subscription.

### Section Container
```
Background: #F8F8F8
Padding: 64px 24px
Max-width: 1200px
Margin: 0 auto
```

### Section Header
```
Eyebrow: "MEMBERSHIP"
Headline: "Work More. Earn More."
Subheading: "Our verified members get hired 3x faster and access premium shifts."
- Margin-bottom: 40px
```

### Pricing Cards Layout
```
Grid: 3 columns (desktop), 1 column (mobile)
Gap: 24px
```

### Free Tier Card
```
Container:
  - Background: #FFFFFF
  - Border: 1px solid #E8E8E8
  - Padding: 32px
  - Border-radius: 12px
  - Box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04)

Header:
  - Title: "Basic" (Inter SemiBold, 18px)
  - Subtext: "Free forever" (Inter Regular, 13px, #666666)
  - Price display: "₹0" (Inter Bold, 28px, green)

Features (bullet list):
  ✓ Basic profile with photo
  ✓ Access to all job listings
  ✓ Standard job alerts
  ✓ Email support
  ✓ Get paid by next morning

CTA: "Sign Up Free" (outline button, #404145)
  - Border: 2px solid #404145
  - Full width
  - Padding: 12px
  - Border-radius: 8px
```

### Premium Tier Card (HIGHLIGHTED)
```
Container:
  - Background: #1DBF73
  - Color: #FFFFFF (all text white)
  - Border: 2px solid #1DBF73
  - Padding: 32px
  - Border-radius: 12px
  - Box-shadow: 0 8px 24px rgba(29, 191, 115, 0.2)
  - Transform: scale(1.05) or translateY(-8px) [lift effect]
  - Position: relative, z-index: 10

Badge (top-right corner):
  - "Most Popular"
  - Font: Inter SemiBold, 11px, #FFFFFF
  - Background: rgba(255,255,255,0.3)
  - Padding: 6px 12px
  - Border-radius: 20px

Header:
  - Title: "Verified Pro" (Inter SemiBold, 18px, #FFFFFF)
  - Subtext: "Trusted by restaurants" (Inter Regular, 13px, rgba(255,255,255,0.8))
  - Price display: "₹199/month" (Inter Bold, 28px, #FFFFFF)
  - OR "₹49/week" if monthly feels too expensive

Features (bullet list, #FFFFFF):
  ✓ Verified Pro badge (shows in all applications)
  ✓ See jobs 30 mins early (VIP early access)
  ✓ Unlimited job alerts + SMS notifications
  ✓ Priority in matches (3x more callbacks)
  ✓ Get paid same day (instant payouts)
  ✓ 24/7 priority support
  ✓ ₹5,000 on-shift insurance included

CTA: "Upgrade Now" (solid white button)
  - Background: #FFFFFF
  - Color: #1DBF73
  - Full width
  - Padding: 14px
  - Border-radius: 8px
  - Font: Inter SemiBold, 16px
  - Hover: box-shadow 0 4px 12px rgba(0,0,0,0.1)
```

### Enterprise/Partner Tier Card
```
Container:
  - Background: #FFFFFF
  - Border: 1px solid #E8E8E8
  - Padding: 32px
  - Border-radius: 12px

Header:
  - Title: "For Teams/Agencies" (Inter SemiBold, 18px)
  - Subtext: "Custom bulk hiring" (Inter Regular, 13px, #666666)
  - Price display: "Custom Pricing" (Inter Bold, 18px, #1A1A1A)

Features (bullet list):
  ✓ Bulk hire 5+ workers per shift
  ✓ Agency workspace (team management)
  ✓ Dedicated account manager
  ✓ Custom contract terms
  ✓ Priority support + SLA guarantees
  ✓ API access for integrations
  ✓ Advanced reporting & analytics

CTA: "Contact Sales" (outline green button)
  - Border: 2px solid #1DBF73
  - Color: #1DBF73
  - Full width
  - Padding: 12px
  - Border-radius: 8px
  - Hover: background #F0F7F4
```

### Responsive Behavior (Mobile)
```
On mobile (< 768px):
- Remove scale effect on Premium card
- Stack cards vertically, all same size
- Premium card still highlighted with green background
- CTAs remain full-width
- Price display stays prominent (28px)
```

---

## PART 7: FAQ SECTION REDESIGN

### Current State Problem
- Questions don't address real worker fears
- Copy is generic ("How does it work?")
- Missing core trust-building questions

### New FAQ Questions (Exact)

```
1. Q: "When do I actually get paid?"
   A: "Same day. Work your shift from 11 AM to 3 PM, and money hits your account by 11 PM that night. No delays, no waiting till Friday. Instant payouts via UPI, bank transfer, or wallet."

2. Q: "Are these jobs actually real, or will nobody hire me?"
   A: "100% real. Every restaurant and cafe on Fastcrew is verified. We show you their ratings (average 4.2/5). You can see exactly how many workers they've hired before you apply. Verified members get hired 3x faster."

3. Q: "What if the restaurant doesn't show up or cancels?"
   A: "We have your back. If a restaurant cancels within 2 hours, you get ₹200 cancellation fee. If they don't show up, you earn full shift payment + extra ₹500 compensation. This is guaranteed."

4. Q: "Do I need 'verification' to work, or can I start immediately?"
   A: "You can start immediately for FREE. Verification (₹99, one-time) unlocks premium shifts at top restaurants and guarantees faster hiring. Not required, but highly recommended."

5. Q: "Is this safe? Will I get cheated?"
   A: "Yes, it's safe. All workers have ₹5,000 accident insurance. You can rate restaurants, and bad ones get removed. We have a 24/7 support team to handle disputes. Zero hidden charges."

6. Q: "Can I choose my hours, or do I have to work fixed shifts?"
   A: "100% your choice. You see jobs, you decide. Work 2 shifts a day or 1 shift a month. No commitment. No penalties. Zero contracts."

7. Q: "I'm not experienced. Can I still get hired?"
   A: "Yes! We have jobs for beginners (Dishwasher, Helper, Delivery). Experienced workers earn more, but everyone starts somewhere. Average beginner makes ₹600-800 per 4-hour shift."
```

### FAQ Section Structure

**Container:**
```
Background: #FFFFFF
Padding: 64px 24px
Max-width: 800px
Margin: 0 auto
```

**Header:**
```
Headline: "We Answer Your Questions"
Font: Inter Bold, 28px
Color: #1A1A1A
Margin-bottom: 40px
Text-align: center
```

**Accordion Items:**
```
Each item:
  - Background: #FFFFFF
  - Border-bottom: 1px solid #E8E8E8
  - Padding: 20px 0
  - Cursor: pointer

Question (Trigger):
  - Font: Inter SemiBold, 16px
  - Color: #1A1A1A
  - Display: flex, justify-between, items-center
  - Hover: color #1DBF73
  - Transition: 0.2s ease

Chevron Icon:
  - 12x12px SVG, #404145
  - Rotate 180deg on open state
  - Transition: transform 0.3s ease

Answer (Hidden by default):
  - Font: Inter Regular, 14px
  - Color: #666666
  - Line-height: 1.6
  - Padding-top: 12px
  - Max-height: 0, overflow hidden
  - Transition: max-height 0.3s ease
  - On open: max-height 500px (or content height)
```

---

## PART 8: FOOTER REDESIGN

### Current State
Footer layout stays (mega typography logo at bottom), but colors/styling changes.

### Footer Container
```
Background: #404145 (charcoal)
Color: #FFFFFF
Padding: 64px 24px 24px
```

### Footer Content Sections (Top Layer)

**Layout: 4 Columns**
```
Column 1 (Brand):
  - Heading: "Fastcrew"
  - Tagline: "Find shifts. Earn daily. Build your future."
  - Font: Inter Regular, 14px
  - Opacity: 0.7

Column 2 (For Workers):
  - Heading: "For Workers" (Inter SemiBold, 14px, #FFFFFF)
  - Links: Browse Jobs, How It Works, Earnings FAQ, Blog
  - Each link: Inter Regular, 13px, opacity 0.7, hover opacity 1

Column 3 (For Partners):
  - Heading: "For Partners" (Inter SemiBold, 14px, #FFFFFF)
  - Links: Post a Job, Partner FAQ, Pricing, Support
  
Column 4 (Company):
  - Heading: "Company" (Inter SemiBold, 14px, #FFFFFF)
  - Links: About, Contact, Terms, Privacy, Security
```

### Footer Bottom Layer (Mega Typography)

```
Background: #404145 (same as footer)
Padding: 40px 0 20px
Border-top: 1px solid rgba(255, 255, 255, 0.1)
Display: flex, justify-center, align-items: center

Logo/Text Display:
  - Image: /logo-dark.svg or /logo-white.svg
  - Max-width: 80% of viewport
  - Height: auto
  - Opacity: 0.1 (very subtle, background element)
  - Pointer-events: none
  - Select: none

Legal Text (centered, below logo):
  - "© 2025 Fastcrew. All rights reserved."
  - Font: Inter Regular, 12px
  - Color: rgba(255, 255, 255, 0.5)
  - Margin-top: 20px

Social Icons (optional):
  - Twitter, LinkedIn, Instagram (if active)
  - 16x16px, opacity 0.6, hover opacity 1
  - Margin-top: 12px
```

---

## PART 9: MOBILE RESPONSIVENESS GRID

### Breakpoints
```
Mobile:     < 640px
Tablet:     640px - 1023px
Desktop:    ≥ 1024px
```

### Mobile Specific Changes

**Hero Section:**
```
- Stack vertically: text top, image bottom
- Headline: 32px (from 42px)
- Subheading: 14px (from 16px)
- CTAs: stack vertically, full-width
- Visual height: 280px (from 450px)
- Padding: 32px 16px (from 64px 24px)
```

**How It Works:**
```
- Single column (3 cards stack)
- Card padding: 24px (from 32px)
- Step circle: 48px (from 56px)
- Title: 18px (from 20px)
- Illustration height: 200px (from 240px)
```

**Live Opportunities:**
```
- Single column (1 card per row)
- Card padding: 16px
- Job title: 14px
- Salary badge: 12px, compact
```

**Pricing:**
```
- Single column stack
- Remove "Most Popular" badge styling (too cluttered)
- All cards same width
- Keep Premium card green to indicate recommendation
- Price: 24px (from 28px)
- Features: 12px (from 13px)
- CTA padding: 12px (from 14px)
```

**FAQ:**
```
- Max-width: 100% (no 800px limit)
- Question font: 14px (from 16px)
- Answer font: 13px (from 14px)
- Padding: 16px 0 (from 20px 0)
```

**Navigation:**
```
- Logo size: 120px (from 140px)
- Nav bar height: 56px
- Hamburger menu shown (nav links hidden)
- Auth buttons in dropdown menu
```

### Tablet Specific Changes (640px - 1023px)
```
- Max container width: 90% (from 100%)
- Padding: 20px (from 24px)
- Font sizes: intermediate (16px body, 36px headline)
- Hero: 2 columns (image scales down)
- How It Works: 2 columns (cards wrap)
- Pricing: 1 wide column or 2 columns if space
- Live Opportunities: 2 columns
```

---

## PART 10: INTERACTION & ANIMATION SPECS

### General Principles
```
- No glassmorphism, no blur effects
- Micro-animations are subtle and purposeful
- Duration: 0.2s - 0.3s (fast, not slow)
- Easing: ease-out for appearing, ease-in for leaving
- No parallax or scroll-triggered complex animations on mobile
```

### Button Interactions
```
All buttons (.btn):
  - Hover: darker shade + subtle box-shadow 0 4px 12px rgba(0,0,0,0.1)
  - Active: slightly darker, no shadow (pressed state)
  - Focus (keyboard): 2px outline #1DBF73, 4px offset
  - Transition: all 0.2s ease-out
  - Disabled: opacity 0.5, cursor not-allowed
```

### Card Hover Effects
```
Cards (.card):
  - Hover: translateY -4px, box-shadow 0 8px 24px rgba(0,0,0,0.08)
  - Transition: all 0.3s ease-out
  - On touch devices: no hover effect (use active state instead)
```

### Section Entrance Animation (Optional)
```
Use Intersection Observer for sections:
  - Fade-in: opacity 0 → 1 (0.6s, ease-out)
  - Slight lift: translateY 20px → 0px
  - Stagger children by 0.1s
  - Reduce motion respected: no animation if prefers-reduced-motion
```

### Job Card Auto-Rotation (Hero Visual, Option B)
```
Interval: 4 seconds
Transition: opacity 0 → 1, translateY 0 → -10px
Duration: 0.5s ease-in-out
Pause on: hover or touch
Direction: new card slides up from below
```

### Form Interactions
```
Inputs:
  - Focus: border #1DBF73, box-shadow 0 0 0 3px rgba(29, 191, 115, 0.1)
  - Transition: 0.2s ease
  - Error state: border #E74C3C, box-shadow red glow
  - Success state: border #1DBF73 ✓ checkmark appears
```

---

## PART 11: CALL-TO-ACTION STRATEGY

### Primary CTA Placement
```
1. Navigation bar (top right): "Start Hiring/Working" [green button]
2. Hero section: "Find Work Now" [large green button]
3. How It Works section: Below cards "Sign Up Now" [green button, if not visible above]
4. Live Opportunities: "View All 340+ Jobs" [text link green]
5. Pricing Premium card: "Upgrade Now" [white button on green card]
6. Bottom of page (before footer): "Ready to Start? Sign Up Today" [large green button, full-width on mobile]
```

### CTA Copy Rules
```
- Action-first: "Find Work", "Post a Job", "Explore Jobs"
- NOT: "Learn More", "Discover", "Explore" (too abstract)
- Avoid: "Submit", "Continue" (transactional feel)
- Use urgency sparingly: "Get Started Now" OK, "Unlock Now" NO
```

### Early Access Email Popup (Modal)
```
Still use existing modal system.
Update styling:
  - Background: rgba(0, 0, 0, 0.5)
  - Modal bg: #FFFFFF (not dark)
  - Border: 2px solid #1DBF73
  - Title: Inter Bold, 20px, #1A1A1A
  - Input: white background, #E8E8E8 border, focus #1DBF73 border
  - CTA: "Get Early Access" [green button, full-width]
  - Close button: top-right, semi-transparent gray X
```

---

## PART 12: CONTENT MIGRATION CHECKLIST

| Current Element | New Element | Status |
| :--- | :--- | :--- |
| Dark hero gradient | White bg + optional hero image | REPLACE |
| "Unlock Hidden Job Market" | "Work Shifts You Love. Get Paid Today." | REPLACE |
| Generic feature cards (3) | "How It Works" cards (3) | REPLACE |
| No job showcase | "Live Opportunities" section (NEW) | ADD |
| SaaS pricing table (3 columns) | Membership cards (Free, Pro, Enterprise) | REPLACE |
| Generic FAQs | Worker-centric FAQs (7 questions) | REPLACE |
| Footer links only | Footer + mega typography logo | KEEP (restyle colors) |

---

## PART 13: TECHNICAL IMPLEMENTATION NOTES

### CSS Architecture
```
Root variables for all colors (already defined)
Utility classes: .btn, .card, .section, .grid
Component-based structure: Nav, Hero, HowItWorks, LiveOpp, Pricing, FAQ, Footer
Use CSS Grid for layouts (not Flexbox for major sections)
Responsive breakpoints: 640px, 1024px (mobile-first approach)
```

### Performance
```
- Images: WebP with JPEG fallback, lazy-loaded
- Icons: SVG inline or sprite sheet
- Font: 2 weights max (Regular 400, SemiBold 600) of Inter
- CSS: Critical path inlined, rest deferred
- Animations: use transform + opacity only (GPU-accelerated)
- No libraries needed (plain CSS for animations)
```

### Accessibility
```
- Color contrast: All text 4.5:1 or higher (WCAG AA)
- Focus rings: 2px #1DBF73 outline, 4px offset
- Keyboard nav: Tab order logical, no keyboard traps
- Images: All have alt text (descriptive, not "image1")
- Forms: Labels properly associated (<label for="id">)
- Headings: Semantic hierarchy (h1 > h2 > h3)
- Motion: Respect prefers-reduced-motion media query
```

---

## CONCLUSION

This PRD transforms Fastcrew's landing page from "expensive AI SaaS" to "trustworthy job marketplace for Indian workers." Every color choice, typography size, and button placement serves the goal of building trust and encouraging immediate action.

**Key Principles:**
1. White backgrounds = trustworthy (not futuristic)
2. Green accents = hopeful, positive energy
3. Charcoal text = serious, professional
4. Real job listings = proof
5. Worker-centric copy = emotional connection
6. Simple CTAs = clear next steps

**Success Metrics:**
- First-time visitors understand "what is this?" within 5 seconds
- Hero CTAs receive 15%+ click-through
- FAQ engagement increases (time on page +30%)
- Mobile conversion rate increases (jobs applied)
- Trust indicators (ratings, job count) build confidence

**Implementation Timeline:**
- Weeks 1-2: Update Nav, Hero, How It Works
- Weeks 3-4: Add Live Opportunities, Update Pricing
- Weeks 5-6: FAQ refresh, Footer, Responsive polish
- Week 7: QA, performance testing, launch

---

**END OF PRD**