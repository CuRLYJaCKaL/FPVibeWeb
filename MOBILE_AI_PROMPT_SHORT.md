# FPVibe Login Screen Redesign - Quick Prompt

## Task
Redesign the FPVibe mobile app login screen inspired by the web landing page (https://fpvibe.app). This is NOT a direct copy - creatively adapt the design philosophy and animation architecture for a mobile login experience.

---

## Design DNA to Implement

### 1. **FPV Target Lock Animation**
Apply to "Welcome to FPVibe" heading and form labels:
```
- Blur: 20px → 0px (sharp focus)
- Scale: 0.3x → 1.0x (zoom in from distance)
- Letter-Spacing: 30px → 0px (compress)
- Opacity: Power curve (fast appear, slow sharpen)
- Duration: 800-2000ms
```

### 2. **Inception Dolly Zoom Effect**
Logo entrance with Y-axis oscillation:
```
Vertigo: Math.sin(progress * π) * 100
- Creates "approaching while receding" sensation
- Asymmetric timing: 5s forward (cinematic), 3.2s backward (quick)
- Peak distortion at 50% animation progress
```

### 3. **Glassmorphism UI**
Input fields and buttons:
```
background: rgba(255, 255, 255, 0.1)
backdrop-filter: blur(10px)
border: rgba(255, 255, 255, 0.2)
border-radius: 8-12px
```

### 4. **Progressive Staggered Reveal**
Form elements slide up + fade in with 100-150ms delays:
```
Logo (blur → sharp, 2000ms)
  ↓ 200ms delay
Title (target lock, 800ms)
  ↓ 150ms delay
Email field (slide up, 400ms)
  ↓ 150ms delay
Password field (slide up, 400ms)
  ↓ 150ms delay
Sign In button (slide up, 400ms)
```

### 5. **Success/Error Momentum**
- **Success**: 5s cinematic forward animation → Main app
- **Error**: 3.2s quick bounce-back + field shake
- Radial glow pulse on success
- Red border pulse on error

---

## Color System

**Dark Mode (Primary)**
```
Background: #000
Text: #fff, rgba(255,255,255,0.6), rgba(255,255,255,0.4)
Glass: rgba(255,255,255,0.1) with blur(10px)
Border: rgba(255,255,255,0.2)
```

**Light Mode (Optional)**
```
Background: #fff
Text: #000, rgba(0,0,0,0.7), rgba(0,0,0,0.5)
Glass: rgba(0,0,0,0.05) with blur(10px)
Border: rgba(0,0,0,0.15)
Transition: 600ms ease
```

---

## Typography

```
Font: SF Pro Display (Apple system font)
Title: 32-40px, weight 700, spacing -0.03em
Labels: 14px, weight 600, spacing -0.01em
Input: 16px, weight 400
Button: 16px, weight 600, spacing 0.03em, uppercase
```

---

## Animation Specs

**Timing**
```
Tap feedback: 150ms
Focus transitions: 300ms ease-out
Validation: 400ms cubic-bezier(0.4,0,0.2,1)
Success/Error: 500ms spring
Screen transition: 600-800ms
Cinematic (logo): 2000-5000ms
```

**Easing**
- Use spring animations for organic feel
- Combine opacity + transform for depth
- One animation at a time (cancel previous)

---

## Key Principles

✅ **DO**
- Make it feel like piloting FPV drone into the app
- Target lock effect = pilot locking onto account
- Cinematic, slower, more deliberate than typical login
- Glassmorphism for modern, lightweight HUD feel
- Stagger all animations (never appear instantly)
- Bilingual support (EN/TR)

❌ **DON'T**
- Don't copy web's scroll-based system (no scrolling needed)
- Don't make it overly complex (login should be fast)
- Don't use exact web pixel values (adapt for mobile)
- Don't skip error/success states (critical UX)

---

## Reference

Full specs: `MOBILE_LOGIN_DESIGN_PROMPT.md`
Web: https://fpvibe.app

---

**Philosophy**: "Every login should feel like you're piloting into the FPVibe universe - immersive, precise, cinematic."
