# FPVibe Mobile App - Login Screen Redesign Prompt

## Design Philosophy
Create a cinematic, FPV drone-inspired login screen that mirrors the FPVibe web landing page experience. The login screen should feel like piloting an FPV drone - immersive, dynamic, and visually stunning.

---

## Core Visual Elements

### 1. Background & Logo
- **Full-screen dark background**: Pure black (#000000) with subtle purple/blue light leaks at edges
- **Centered FPVibe logo**: Large, prominent placement
- **Interactive zoom effect**: Logo should respond to user input (scroll, gesture, or auto-play)
- **Scale range**: Start at normal size, zoom dramatically (up to 90x scale) when transitioning to login form
- **Purple light effects**: Soft glowing purple streaks radiating from logo (like FPV speed lines)

### 2. Inception-Style Vertigo Effect (CRITICAL)
This is the signature effect that makes the web experience unique:

**Technical Implementation:**
- Apply a **sine wave Y-offset oscillation** during zoom animation
- Formula: `vertigoIntensity = sin(progress * π) * 100`
- Creates a "dolly zoom" effect where the logo appears to:
  - Move closer while simultaneously feeling farther away
  - Drift vertically (up/down) during zoom, creating disorientation
  - Mimic the famous Inception/Hitchcock vertigo effect

**Visual Result:**
- User feels like they're diving into the logo while it's pulling away
- Adds cinematic tension and FPV immersion
- Peak oscillation at 50% of animation, smooth at start/end

### 3. FPV Target Lock Animation (For Login Form Elements)
When login form appears, elements should animate like FPV drone HUD targeting:

**Input Fields Animation:**
- **Initial state**: Blurred (20px), scaled down (0.3x), wide letter-spacing (30px), low opacity (0.3)
- **Final state**: Sharp (0px blur), full scale (1.0x), normal spacing (0px), full opacity (1.0)
- **Duration**: 1.5-2 seconds
- **Easing**: Power curve for opacity (feels like camera auto-focus)
- **Stagger**: Username field animates first, then password (100ms delay)

**Visual Details:**
- Use glassmorphism for input fields:
  ```css
  background: rgba(255, 255, 255, 0.08)
  border: 1px solid rgba(255, 255, 255, 0.2)
  backdrop-filter: blur(20px)
  ```
- White text on dark background
- Subtle glow on focus

### 4. Login Button
- **Style**: Primary action button with glassmorphism
- **Colors**:
  - Background: `rgba(255, 255, 255, 0.12)`
  - Border: `rgba(255, 255, 255, 0.25)`
  - Text: White
- **Hover/Press**: Slight scale (1.02x), increased opacity
- **Font**: Bold, 16-18px, -2% letter spacing

### 5. Smooth Transitions
**Zoom-In Flow (Auto-play or gesture-triggered):**
1. Logo starts centered, normal size
2. User triggers animation (swipe up, tap, or auto-play after 1 second)
3. Logo zooms in dramatically over **5 seconds** (slow, cinematic)
4. During zoom:
   - Apply vertigo Y-offset oscillation (0→100→0 pixels)
   - Purple light streaks intensify
   - Background darkens
5. At peak zoom (logo fills screen):
   - Logo fades out
   - "COMING SOON" or "FPVIBE" text appears briefly (500ms)
   - Blur + scale + letter-spacing animation
6. Login form fades in with target lock animation
7. Total transition: ~6-7 seconds

**Reverse Animation (Optional):**
- Allow user to swipe down to return to logo
- Reverse all animations smoothly
- Duration: 3.2 seconds (faster than forward)

---

## Color Palette

### Primary Colors
- **Background**: `#000000` (pure black)
- **Text Primary**: `rgba(255, 255, 255, 0.95)`
- **Text Secondary**: `rgba(255, 255, 255, 0.75)`
- **Accent**: Purple/blue light leaks (subtle gradients)

### Glassmorphism Elements
- **Input Fields**: `rgba(255, 255, 255, 0.08)` background
- **Borders**: `rgba(255, 255, 255, 0.2)`
- **Backdrop Blur**: 20px
- **Button**: `rgba(255, 255, 255, 0.12)` background

### Effects
- **Glow/Shadows**: Soft purple/blue glows around focused elements
- **Light Leaks**: Purple streaks at screen edges (like FPV flight blur)

---

## Typography

### Font Family
- **Primary**: SF Pro Display (iOS) / Roboto (Android) / System font
- **Weight**:
  - Headings: 700 (Bold)
  - Body: 500 (Medium)
  - Buttons: 600 (Semi-bold)

### Font Sizes
- **Logo text (if text-based)**: 48-64px
- **"COMING SOON" reveal**: 36-48px
- **Input labels**: 14px
- **Input text**: 16px
- **Buttons**: 16-18px
- **Links (Sign Up, Forgot Password)**: 14px

### Letter Spacing
- **Headings**: -3% (tight, modern)
- **Body**: -1%
- **Buttons**: -2%
- **Target lock animation**: 30px → 0px (during reveal)

---

## Animation Specifications

### Timing Functions
- **Zoom animation**: `easeInOutCubic`
- **Vertigo oscillation**: `sine wave (smooth)`
- **Target lock reveal**: `power curve for opacity`, `easeOutQuart for scale/blur`
- **Button press**: `easeOutQuad`

### Durations
- **Forward zoom**: 5000ms (5 seconds)
- **Reverse zoom**: 3200ms (3.2 seconds)
- **Target lock reveal**: 1500-2000ms
- **Input field focus**: 200ms
- **Button press**: 150ms

### Keyframe Examples

**Vertigo Effect (pseudocode):**
```
progress = currentTime / duration
yOffset = sin(progress * π) * 100
finalPosition = basePosition + yOffset
```

**Target Lock (input field):**
```
0%:   blur(20px) scale(0.3) spacing(30px) opacity(0.3)
100%: blur(0px) scale(1.0) spacing(0px) opacity(1.0)
```

---

## User Interaction Flow

### Option A: Auto-Play (Recommended)
1. App opens to logo screen
2. Wait 1 second (let user see logo)
3. Auto-trigger zoom animation
4. Show login form at end
5. Allow swipe-down to return to logo

### Option B: Gesture-Triggered
1. App opens to logo screen
2. Show subtle hint: "Swipe up to login" or tap icon
3. User swipes up or taps
4. Trigger zoom animation
5. Show login form

### Option C: Hybrid
1. Auto-play after 2-3 seconds if no interaction
2. User can trigger early with swipe/tap

---

## Technical Notes for Implementation

### Performance Optimization
- Use native animations (Core Animation on iOS, Android Animator)
- Pre-load logo and background assets
- Use hardware acceleration for blur/scale effects
- Reduce animation complexity on lower-end devices

### Accessibility
- Provide option to skip/reduce animations in settings
- Ensure sufficient contrast for text (WCAG AA)
- Support VoiceOver/TalkBack for input fields
- Allow tab navigation on form elements

### Platform-Specific Considerations

**iOS (SwiftUI):**
- Use `.scaleEffect()` for zoom
- Use `.blur()` for gaussian blur
- Use `.offset()` for vertigo Y-movement
- Use `.overlay()` for glassmorphism
- Use `withAnimation()` with custom timing curves

**Android (Jetpack Compose):**
- Use `Modifier.scale()` for zoom
- Use `Modifier.blur()` for blur effect
- Use `Modifier.offset()` for Y-movement
- Use `Modifier.background()` with blur for glassmorphism
- Use `animateFloatAsState()` with custom easing

---

## Design References

### Web Implementation Details (FPVibeWeb)
The current web version uses:
- **Scroll-based zoom**: 2.0x → 93.7x scale
- **Y-offset range**: -50% → +15% (65 units)
- **Vertigo intensity**: `sin(progress * π) * 100px`
- **Coming Soon reveal**: 85% → 95% of zoom progress
- **Background**: Pure black with purple light effects
- **Navigation**: Glassmorphism with `backdrop-filter: blur(20px)`

### Key Differences for Mobile
- Replace scroll with gesture/auto-play
- Adapt zoom scale for smaller screens (maybe 2.0x → 50x)
- Ensure touch targets are 44x44pt minimum
- Simplify animations for 60fps performance
- Add haptic feedback on iOS for button presses

---

## Example Screen States

### State 1: Initial (Logo Screen)
```
[Full Screen]
┌─────────────────────┐
│                     │
│                     │
│                     │
│     [FPVibe Logo]   │  ← Centered, normal size
│                     │
│                     │
│                     │
└─────────────────────┘
Purple light leaks at edges
```

### State 2: Mid-Zoom (Vertigo Peak)
```
[Full Screen]
┌─────────────────────┐
│                     │
│   [HUGE LOGO]       │  ← 40x scale, Y-offset +100px
│   [PART VISIBLE]    │  ← Logo overflowing screen
│                     │
│                     │
└─────────────────────┘
Intense purple streaks
Logo drifting upward (vertigo)
```

### State 3: Login Form (Final)
```
[Full Screen]
┌─────────────────────┐
│                     │
│      FPVIBE         │  ← Small logo/text
│                     │
│  [Email Input]      │  ← Glassmorphism
│  [Password Input]   │
│                     │
│  [Login Button]     │
│                     │
│  Sign up · Forgot?  │  ← Links
└─────────────────────┘
Clean, minimal, glass effects
```

---

## Success Criteria

The redesigned login screen should:
✅ Feel cinematic and immersive (like FPV flying)
✅ Use Inception-style vertigo effect prominently
✅ Include FPV target lock animation for form elements
✅ Maintain 60fps animation performance
✅ Use dark theme with glassmorphism
✅ Match the visual quality of the web landing page
✅ Create emotional connection before user even logs in
✅ Be memorable and unique compared to standard login screens

---

## Additional Features (Optional)

### Background Particle Effects
- Subtle floating particles (like dust in FPV goggles)
- Slight parallax movement
- Purple/blue glow

### Sound Effects (Optional)
- Subtle "zoom" whoosh sound during animation
- Target lock "beep" when form appears
- Haptic feedback on button press (iOS)

### Easter Egg
- Triple-tap logo to skip animation
- Long-press for debug menu (dev builds)

---

## File Structure Recommendation

```
LoginScreen/
├── Components/
│   ├── LogoZoom.swift / .kt
│   ├── VertigoEffect.swift / .kt
│   ├── TargetLockInput.swift / .kt
│   └── GlassButton.swift / .kt
├── Animations/
│   ├── ZoomAnimation.swift / .kt
│   └── VertigoCalculator.swift / .kt
└── LoginScreen.swift / .kt (main view)
```

---

## Final Notes

This design transforms a standard login screen into a memorable brand experience. The key is **smooth, cinematic animations** that make users feel like they're entering an FPV drone flight simulator, not just an app.

**Priority order:**
1. Vertigo zoom effect (signature feature)
2. Glassmorphism styling
3. Target lock input animation
4. Polish and performance

Good luck! This should create a stunning login experience that matches the web landing page quality.

---

**Prepared for:** FPVibe Mobile App Development AI
**Based on:** FPVibeWeb landing page (fpvibe.app)
**Date:** October 2025
**Version:** 1.0
