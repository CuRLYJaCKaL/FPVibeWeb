# FPVibe Mobile Login Screen - Design Architecture Prompt

## Context
You are tasked with redesigning the FPVibe mobile app login screen to match the sophisticated, cinematic experience of the FPVibe.app web landing page. This is NOT a direct copy - you should understand the design philosophy, animation architecture, and user experience principles, then creatively adapt them for a mobile login flow.

---

## Web Landing Page Design Philosophy

### Core Principles
1. **FPV Drone Cinematography** - Everything should feel like piloting an FPV drone
2. **Progressive Revelation** - Information reveals through interaction (scroll-based zoom)
3. **Inception-style Vertigo** - Perspective manipulation creates immersive depth
4. **Target Lock Precision** - UI elements sharpen and focus like FPV targeting systems
5. **Minimalist Brutalism** - Clean, bold, no unnecessary elements

### Brand Identity
- **Primary Color**: Pure black (#000) with white contrast
- **Typography**: SF Pro Display (Apple system font)
  - Font weights: 500 (regular), 600 (semibold), 700-800 (bold/heavy)
  - Tight letter-spacing: -0.02em to -0.04em
- **Theme Inversion**: Background transitions from black → white at 70% journey
- **Glassmorphism**: Subtle blur effects (backdrop-filter: blur(10px))
- **Language Support**: Bilingual (EN/TR) with localStorage persistence

---

## Technical Animation Architecture

### 1. **Scroll-Based Zoom Animation**

**Concept**: Logo scales from 2.0x to 93.7x based on scroll position
```
Scale Formula: 2.0 + (scrollProgress * 91.7)
ScrollProgress: min(scrollY / (windowHeight * 1.2), 1)
```

**Key Characteristics**:
- Smooth logarithmic scaling
- Fixed position center-screen during zoom
- 120% viewport height scroll range (extended scroll area)

**Mobile Adaptation for Login**:
- Could use **gesture-based zoom** (pinch/swipe)
- Or **time-based auto-animation** on screen load
- Or **tap-to-focus** interaction

---

### 2. **Inception Dolly Zoom / Vertigo Effect**

**Concept**: Y-axis oscillation during zoom creates "approaching while receding" paradox
```
Vertigo Intensity: Math.sin(progress * Math.PI) * 100
Y Offset: baseOffset + vertigoIntensity
```

**Visualization**:
- At 0% progress: vertigoIntensity = 0 (start point)
- At 50% progress: vertigoIntensity = 100 (peak distortion)
- At 100% progress: vertigoIntensity = 0 (end point)

**Mobile Adaptation for Login**:
- Apply subtle Y-axis shift to logo during login form appearance
- Asymmetric animation timing: 5s forward, 3.2s backward
- Use sine wave for organic, non-linear motion

---

### 3. **FPV Target Lock Animation**

**Concept**: Text sharpens from blurry/distant to crisp/focused like drone camera target lock
```
Blur: (1 - progress) * 20px    // 20px → 0px
Scale: 0.3 + (progress * 0.7)  // 0.3x → 1.0x
Letter-Spacing: (1 - progress) * 30px  // 30px → 0px
Opacity: progress^0.5          // Power curve (fast appear, slow sharpen)
```

**Trigger**: Starts at 85% zoom, fully locked at 95%

**Mobile Adaptation for Login**:
- Apply to **"Welcome to FPVibe"** or **"Sign In"** heading
- Use for **input field labels** appearing
- Stagger animation for each form element (email → password → button)

---

### 4. **Momentum Scrolling System**

**Concept**: Bi-directional auto-completion based on scroll velocity and direction
```
Forward Animation: 5000ms (slow, cinematic)
Backward Animation: 3200ms (quick return)
Easing: Custom cubic-bezier
```

**State Management**:
- `currentAnimationFrame` tracking
- `stopCurrentAnimation()` cleanup function
- Distance validation (< 10px threshold)
- Proper velocity/direction reset

**Mobile Adaptation for Login**:
- Form submission triggers **smooth transition animation**
- Error states trigger **gentle bounce-back** (3.2s quick return)
- Success triggers **forward momentum** (5s celebratory)

---

### 5. **Speed Lines / Zoom Effect**

**Concept**: Radial gradient pulse effect during high-velocity scrolling
```css
background: radial-gradient(
  circle,
  transparent 0%,
  transparent 30%,
  rgba(255,255,255,0.05) 50%,
  transparent 70%
)
opacity: min(scrollVelocity / 50, 0.8)
```

**Mobile Adaptation for Login**:
- Subtle radial glow behind logo during loading states
- Pulse animation on button tap
- Success/error state visual feedback

---

### 6. **Progressive Content Reveal**

**Concept**: Content fades in with vertical slide from 50% to 100% scroll
```
Content Opacity: min((progress - 0.5) / 0.5 * 1.5, 1)
Content Y-Position: 30px - (progress * 30)  // Slides up
```

**Mobile Adaptation for Login**:
- Stagger form field appearances (100-150ms delay each)
- Slide up from bottom: Logo → Title → Email → Password → Button
- Opacity + transform combined for depth

---

## Color System & Theme Transitions

### Dark Mode (Default)
```
Background: #000
Primary Text: #fff
Secondary Text: rgba(255, 255, 255, 0.6)
Tertiary Text: rgba(255, 255, 255, 0.4)
Glass Background: rgba(255, 255, 255, 0.1)
Glass Border: rgba(255, 255, 255, 0.2)
```

### Light Mode (Inverted at 70% journey)
```
Background: #fff
Primary Text: #000
Secondary Text: rgba(0, 0, 0, 0.7)
Tertiary Text: rgba(0, 0, 0, 0.5)
Glass Background: rgba(0, 0, 0, 0.05)
Glass Border: rgba(0, 0, 0, 0.15)
```

### Transition
```
transition: background-color 0.6s ease, color 0.6s ease
```

**Mobile Adaptation for Login**:
- Could trigger light mode on successful login
- Or use system theme preference (iOS/Android)
- Smooth 600ms transition between modes

---

## Typography Hierarchy

### Web Implementation
```
Hero Title: clamp(48px, 8vw, 72px), weight: 700, spacing: -0.04em
Subtitle: 20px, weight: 400, spacing: normal
Badge: 18px, weight: 600, spacing: 0.05em, uppercase
Navigation: 14-16px, weight: 500-600, spacing: -0.02em
```

### Mobile Login Adaptation
```
Welcome Title: 32-40px, weight: 700, spacing: -0.03em
Input Labels: 14px, weight: 600, spacing: -0.01em
Input Text: 16px, weight: 400
Button Text: 16px, weight: 600, spacing: 0.03em
Helper Text: 13px, weight: 500
```

---

## Glassmorphism Pattern

### Web Navigation Bar
```css
background: rgba(255, 255, 255, 0.1)
backdrop-filter: blur(10px)
-webkit-backdrop-filter: blur(10px)
border: 1px solid rgba(255, 255, 255, 0.2)
border-radius: 8px
```

### Hover State
```css
background: rgba(255, 255, 255, 0.15)
border-color: rgba(255, 255, 255, 0.3)
transform: translateY(-1px)
```

**Mobile Login Adaptation**:
- Apply to **input fields** and **buttons**
- Floating card container with glass effect
- Tap states: `translateY(0)` active state
- iOS-style blur for native feel

---

## Animation Timing & Easing

### Web Patterns
```
Fast Interactions: 0.2s ease (hover, tap feedback)
Content Transitions: 0.6s ease (theme switch, fades)
Cinematic Animations: 3200ms - 5000ms (momentum scroll)
Pulse Effects: 2s ease-in-out infinite
```

### Recommended Mobile Timings
```
Tap Feedback: 150-200ms
Input Focus: 300ms ease-out
Form Validation: 400ms cubic-bezier(0.4, 0, 0.2, 1)
Success/Error: 500ms spring animation
Screen Transition: 600-800ms
```

---

## Bilingual System (i18n)

### Web Implementation
```javascript
localStorage.getItem('fpvibe-lang') || 'en'
{
  en: { title: 'The FPV social platform', ... },
  tr: { title: 'FPV sosyal platformu', ... }
}
```

### Mobile Adaptation
- Use native platform i18n (NSLocalizedString/strings.xml)
- Or same localStorage approach for React Native
- Language switcher in settings, not login screen
- But support both languages in all UI text

---

## State Management Architecture

### Web Animation States
```javascript
let isAutoScrolling = false
let momentumScrolling = false
let currentAnimationFrame = null
let scrollTimeout = null

function stopCurrentAnimation() {
  if (currentAnimationFrame) {
    cancelAnimationFrame(currentAnimationFrame)
    currentAnimationFrame = null
  }
  // Full cleanup...
}
```

**Principles**:
1. **One animation at a time** - Cancel previous before starting new
2. **Proper cleanup** - Always clear timeouts, cancel frames
3. **Distance validation** - Don't animate if < 10px difference
4. **Interruption checks** - Exit early if state changed

**Mobile Login Adaptation**:
```swift
// Example for SwiftUI
@State private var isAnimating = false
@State private var animationTask: Task<Void, Never>?

func startAnimation() {
  animationTask?.cancel()
  animationTask = Task {
    // Animation logic with cancellation checks
  }
}
```

---

## Mobile Login Screen Design Requirements

### **DO**: Creative Adaptation
✅ Apply FPV target lock animation to "Welcome" text
✅ Use Inception vertigo effect for logo entrance
✅ Glassmorphism on input fields and buttons
✅ Progressive reveal: Logo → Title → Form elements
✅ Staggered animations (100-150ms delays)
✅ Dark theme with potential light mode transition
✅ Cinematic timing (slower, more deliberate)
✅ Momentum-based transitions on success/error
✅ SF Pro Display typography with tight spacing
✅ Bilingual support (EN/TR)

### **DON'T**: Direct Copy
❌ Don't use scroll-based zoom (no scrolling on login)
❌ Don't make it 200vh tall
❌ Don't copy exact pixel values (adapt for mobile)
❌ Don't use web-specific CSS (use native equivalents)
❌ Don't overcomplicate - login should be fast

---

## Suggested Mobile Login Flow

### Animation Sequence (Example)
```
0ms:     Screen loads - Black background
200ms:   Logo fades in (blur 20px → 0, scale 0.3 → 1.0) [2000ms duration]
2200ms:  "Welcome to FPVibe" target locks in [800ms duration]
3000ms:  Email field slides up with glass effect [400ms]
3150ms:  Password field slides up [400ms]
3300ms:  "Sign In" button slides up [400ms]
3450ms:  Helper text fades in [300ms]

On Tap Sign In:
- Button scale down (150ms)
- If success: Momentum forward animation (5000ms) → Main app
- If error: Bounce back (3200ms), shake field, show error

On Field Focus:
- Field border glow (300ms)
- Label slides up/shrinks (300ms)
- Subtle Y-axis shift (vertigo micro-effect)
```

---

## Technical Specifications for Mobile

### iOS (SwiftUI)
- Use `.animation(.spring())` for organic motion
- `withAnimation(.easeInOut(duration: 0.6))` for transitions
- `.blur(radius:)` for target lock effect
- `.scaleEffect()` for zoom
- `.offset(y:)` for vertigo
- `.opacity()` for fades

### Android (Jetpack Compose)
- `animateFloatAsState()` for smooth values
- `animate*AsState` for colors, sizes
- Modifier blur effects
- `graphicsLayer {}` for scale/translation
- `AnimatedVisibility` for progressive reveal

### React Native
- `Animated.timing()` with custom easing
- `Animated.spring()` for bouncy effects
- `Animated.sequence()` for staggered animations
- `react-native-blur` for glassmorphism
- `Animated.loop()` for pulse effects

---

## Assets & Resources

### Logo
- High-resolution FPVibe logo (400x400px minimum)
- Rounded corners: ~90px radius (web), adapt for mobile
- PNG with transparency

### Background
- Pure black (#000000)
- Optional: Subtle noise texture overlay (opacity: 0.02)
- Optional: Purple lens flare (see web for reference)

---

## Error & Success States

### Error Animation
```
Duration: 3200ms (quick return, like backward scroll)
Effects:
- Input field shake (translateX: -10 → 10 → -10 → 0)
- Border color red pulse
- Error text fade in (blur → sharp, like target lock)
- Subtle bounce-back of form container
```

### Success Animation
```
Duration: 5000ms (slow momentum forward)
Effects:
- Logo zoom out (scale: 1.0 → 0.3, blur: 0 → 20px)
- Form fade out
- "Welcome back" text target locks in
- Radial gradient pulse
- Transition to main app
```

---

## Testing Checklist

- [ ] Animations perform at 60 FPS on target devices
- [ ] Glassmorphism renders correctly (iOS blur, Android fallback)
- [ ] All text scales properly (Dynamic Type / Font Scaling)
- [ ] Dark mode / Light mode both tested
- [ ] Bilingual support works (EN/TR)
- [ ] Animations can be cancelled/interrupted safely
- [ ] Form validation feels responsive (< 400ms)
- [ ] Accessibility: VoiceOver/TalkBack compatible
- [ ] Reduced motion preference respected
- [ ] Keyboard dismissal smooth

---

## Final Philosophy

**"Make it feel like you're piloting an FPV drone into the app"**

Every animation should serve this purpose:
- **Target Lock** = User is the pilot locking onto their account
- **Vertigo Effect** = Immersive depth, like diving through gates
- **Momentum** = Smooth, physics-based motion like drone flight
- **Progressive Reveal** = Information appears as you "fly closer"
- **Glassmorphism** = Modern, lightweight, transparent HUD
- **Speed Lines** = Visual feedback of velocity/action

The login screen should feel **cinematic, precise, and effortless** - not a boring form, but an **experience that makes you excited to use FPVibe**.

---

## Questions to Consider

1. Should login trigger light mode switch or stay dark?
2. Biometric auth (Face ID/Fingerprint) - how does it animate?
3. "Forgot password" flow - quick bounce or separate screen?
4. Social login buttons - how do they fit the aesthetic?
5. Loading states - use radial pulse or custom spinner?
6. First-time user flow - different animation?

---

## Reference Links

- Web: https://fpvibe.app
- Support: https://fpvibe.app/support
- Privacy: https://fpvibe.app/privacy

---

**Remember**: This is creative interpretation, not mechanical translation. The web experience is scroll-based exploration; the mobile login should be **gesture-based anticipation**. Adapt the principles, not the pixels.
