# PRD: Early Access Email Collection System for FastCrew

## 1. Objective

Transform the FastCrew landing page into an early access gate where all primary CTAs trigger an email collection popup. Users select their role (Talent or Partner) and submit their email, which is stored in Supabase for pre-launch waitlist management.[1]

***

## 2. User Flow

### 2.1 Trigger Points

All of the following interactive elements will open the email collection popup instead of navigating:

**Primary CTAs:**
- Hero section: "Find Work" button
- Hero section: "Hire Talent" button
- Pricing section: All three "Get Started" / "Contact Sales" buttons
- Bottom CTA section: "Create Your Free Account" button

**Navigation Actions:**
- Top nav: "Jobs" link
- Top nav: "Dashboard" link
- Top nav: User avatar (if present)

### 2.2 Popup Interaction Flow

1. **User clicks any trigger element** → Popup appears with smooth fade + scale animation (200ms ease-out)
2. **Popup displays:**
   - Centered modal overlay with glassmorphism background
   - Content: Role selection + email input
3. **User selects role** (Talent or Partner) → Button/toggle highlights
4. **User enters email** → Real-time validation indicator
5. **User submits** → Loading state → Success confirmation → Auto-close after 1.5s
6. **User can dismiss** → Click outside modal or "X" button → Popup fades out

***

## 3. Popup UI Design

### 3.1 Modal Structure

```
┌─────────────────────────────────────────┐
│  [X]                              Close │
│                                         │
│     Get Early Access to FastCrew        │
│   Join the waitlist for early access   │
│                                         │
│   ┌─────────────┐  ┌─────────────┐    │
│   │  👤 Talent  │  │ 🏢 Partner  │    │  ← Role Toggle
│   └─────────────┘  └─────────────┘    │
│                                         │
│   ┌───────────────────────────────┐   │
│   │  📧 Enter your email...       │   │  ← Email Input
│   └───────────────────────────────┘   │
│                                         │
│        ┌─────────────────────┐        │
│        │   Get Early Access   │        │  ← Submit Button
│        └─────────────────────┘        │
│                                         │
└─────────────────────────────────────────┘
```

### 3.2 Visual Styling

**Dark Mode:**
- Overlay: `rgba(0, 0, 0, 0.75)` with backdrop blur 8px
- Modal card: Glassmorphism with `rgba(20, 20, 20, 0.9)`, 24px blur, 1px white border at 10% opacity
- Shadow: Level 5 elevation (from depth PRD)
- Max width: 480px
- Padding: 40px (desktop), 24px (mobile)

**Light Mode:**
- Overlay: `rgba(255, 255, 255, 0.8)`
- Modal card: `rgba(255, 255, 255, 0.95)` with soft shadow

### 3.3 Interactive Elements

**Role Toggle (Segmented Control)**
- Two equal-width buttons side by side
- Unselected: Transparent with border, text at 70% opacity
- Selected: Bright green background, white text, subtle glow
- Transition: 150ms ease-out on selection
- Icons: 👤 for Talent, 🏢 for Partner (or custom SVG icons)

**Email Input**
- Full width text input
- Placeholder: "name@example.com"
- Border: 1px solid with green accent on focus
- Validation states:
  - Empty: Neutral border
  - Valid email: Green checkmark icon on right
  - Invalid: Red border + error text below ("Please enter a valid email")

**Submit Button**
- Primary green button (full width)
- States:
  - Idle: "Get Early Access"
  - Loading: Spinner animation + "Submitting..."
  - Success: Green checkmark + "You're on the list!"
  - Error: Red border + "Something went wrong. Try again."

***

## 4. Database Schema

### 4.1 Supabase Tables

**Table 1: `talent_waitlist`**

| Column | Type | Constraints | Description |
|:-------|:-----|:------------|:------------|
| `id` | `SERIAL` | `PRIMARY KEY` | Auto-incrementing unique identifier (1, 2, 3...) |
| `email` | `VARCHAR(255)` | `UNIQUE NOT NULL` | User email address |
| `created_at` | `TIMESTAMPTZ` | `DEFAULT NOW()` | Timestamp of submission |
| `source` | `VARCHAR(100)` | `DEFAULT 'landing_page'` | Optional: track where signup came from |

**Table 2: `partner_waitlist`**

| Column | Type | Constraints | Description |
|:-------|:-----|---|:------------|
| `id` | `SERIAL` | `PRIMARY KEY` | Auto-incrementing unique identifier |
| `email` | `VARCHAR(255)` | `UNIQUE NOT NULL` | User email address |
| `created_at` | `TIMESTAMPTZ` | `DEFAULT NOW()` | Timestamp of submission |
| `source` | `VARCHAR(100)` | `DEFAULT 'landing_page'` | Optional: track source |

### 4.2 SQL Creation Scripts

```sql
-- Talent Waitlist Table
CREATE TABLE talent_waitlist (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  source VARCHAR(100) DEFAULT 'landing_page'
);

-- Partner Waitlist Table
CREATE TABLE partner_waitlist (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  source VARCHAR(100) DEFAULT 'landing_page'
);

-- Indexes for performance
CREATE INDEX idx_talent_email ON talent_waitlist(email);
CREATE INDEX idx_partner_email ON partner_waitlist(email);
CREATE INDEX idx_talent_created ON talent_waitlist(created_at DESC);
CREATE INDEX idx_partner_created ON partner_waitlist(created_at DESC);
```

***

## 5. Frontend Implementation

### 5.1 Component Architecture

**New Components:**
1. `<EarlyAccessModal />` - The popup container
2. `<RoleToggle />` - Talent/Partner selector
3. `<EmailInput />` - Validated email field
4. `<SubmitButton />` - Loading/success state button

**State Management:**
```typescript
interface ModalState {
  isOpen: boolean;
  selectedRole: 'talent' | 'partner' | null;
  email: string;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  errorMessage?: string;
}
```

### 5.2 Trigger Implementation

Replace all primary CTA `onClick` handlers with:
```typescript
const handleCTAClick = (e: React.MouseEvent) => {
  e.preventDefault();
  openEarlyAccessModal();
};
```

### 5.3 Form Validation

**Client-side validation:**
- Email format regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Role selection required before submission
- Prevent double-submission with loading state

**Error Handling:**
- Duplicate email (Supabase unique constraint): "This email is already on the waitlist!"
- Network error: "Connection failed. Please try again."
- Invalid email: "Please enter a valid email address."

***

## 6. Backend Integration

### 6.1 Supabase Client Setup

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
```

### 6.2 Submission Handler

```typescript
async function submitWaitlist(email: string, role: 'talent' | 'partner') {
  const table = role === 'talent' ? 'talent_waitlist' : 'partner_waitlist';
  
  const { data, error } = await supabase
    .from(table)
    .insert([{ email, source: 'landing_page' }])
    .select();

  if (error) {
    // Handle unique constraint violation (code 23505)
    if (error.code === '23505') {
      throw new Error('This email is already registered!');
    }
    throw error;
  }

  return data;
}
```

### 6.3 Row Level Security (RLS)

Enable RLS on both tables with the following policies:

**Insert Policy (Public):**
```sql
-- Allow anyone to insert into waitlist
CREATE POLICY "Enable insert for all users" ON talent_waitlist
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable insert for all users" ON partner_waitlist
  FOR INSERT WITH CHECK (true);
```

**Select Policy (Admin Only):**
```sql
-- Only authenticated admins can read waitlist
CREATE POLICY "Enable read for authenticated users only" ON talent_waitlist
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Enable read for authenticated users only" ON partner_waitlist
  FOR SELECT USING (auth.role() = 'authenticated');
```

***

## 7. Success State & Next Steps

### 7.1 Post-Submission Experience

After successful submission:
1. **Button transforms** to success state (green checkmark + "You're on the list!")
2. **Confetti animation** (optional, brief, 600ms)
3. **Message updates**: "Thanks for joining! We'll email you when we launch."
4. **Auto-close**: Modal closes after 1.5 seconds
5. **Redirect option** (future): Optional redirect to "/thank-you" page

### 7.2 Duplicate Submission Handling

If user clicks another CTA after already submitting:
- Detect email in localStorage (optional client-side cache)
- Show friendly message: "You're already on the list! Check your inbox for updates."
- Skip submission, show success state immediately

***

## 8. Animations & Micro-interactions

### 8.1 Modal Entry/Exit

**Enter:**
- Overlay: Fade in 200ms
- Modal: Scale from 0.95 to 1.0 + fade in, 250ms ease-out with slight bounce

**Exit:**
- Modal: Scale to 0.95 + fade out, 150ms ease-in
- Overlay: Fade out 200ms (wait for modal to finish)

### 8.2 Form Interactions

**Role Toggle:**
- Click: Scale active button 0.98 → 1.02 with 100ms bounce
- Background slides behind selected option (200ms ease-out)

**Email Input:**
- Focus: Border color animates to green, slight scale 1.01
- Valid state: Checkmark icon slides in from right (200ms)
- Error state: Shake animation (3 frames, 300ms total)

**Submit Button:**
- Hover: Same physics as primary CTAs (scale 1.02, glow)
- Loading: Spinner rotates infinitely, button width locks to prevent layout shift
- Success: Button background shifts to darker green, checkmark scales in with bounce

***

## 9. Responsive Behavior

| Viewport | Adjustments |
|:---------|:------------|
| **Desktop (>1024px)** | Modal centered, 480px width, full animations |
| **Tablet (768-1023px)** | Modal 90% width, max 480px, same animations |
| **Mobile (<768px)** | Modal 95% width, padding reduced to 24px, bottom-aligned on small screens, slide-up entry animation |

***

## 10. Analytics & Tracking (Optional)

Track the following events:
- `early_access_modal_opened` (with trigger source: hero, pricing, nav, etc.)
- `role_selected` (with role: talent/partner)
- `email_submitted` (with role, success/failure)
- `modal_dismissed` (with reason: X button, outside click, escape key)

***

## 11. Testing Checklist

- [ ] All CTAs trigger modal correctly
- [ ] Role toggle requires selection before submit
- [ ] Email validation works (valid/invalid states)
- [ ] Duplicate emails show friendly error
- [ ] Success state displays and auto-closes
- [ ] Modal closes on outside click, X button, Escape key
- [ ] Data correctly inserts into respective Supabase tables
- [ ] IDs auto-increment properly (1, 2, 3...)
- [ ] Animations smooth at 60fps
- [ ] Works in light and dark mode
- [ ] Responsive on mobile, tablet, desktop
- [ ] Keyboard navigation accessible (Tab, Enter, Escape)
