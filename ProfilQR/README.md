# FPVibe Profile QR Cards

Kullanıcı profili paylaşımı için şık, modern profil kartları.

## 📱 Varyantlar

### 1. **profile-card-v1.html** - Vertical Layout
**Stil:** Simple, functional
**Kullanım:** Mobil paylaşım, Instagram Stories, sosyal medya
**Özellikler:**
- Dikey düzen
- QR kod üstte
- Emoji icons
- Compact tasarım
- 420px max genişlik

---

### 2. **profile-card-v2-horizontal.html** - Horizontal Split
**Stil:** Simple, functional
**Kullanım:** Desktop paylaşım, website embed
**Özellikler:**
- Yatay split layout
- QR sol, profil sağ
- Stats grid
- 800px max genişlik

---

### 3. **profile-card-v3-premium.html** - Premium Minimalist ✨
**Stil:** Luxury, elegant, subtle
**Kullanım:** Premium profil paylaşımı, high-end presentation
**Özellikler:**
- Minimalist lüks tasarım
- NO emojis, pure CSS
- Animated floating background
- Verification badge (CSS-only checkmark)
- Decorative QR frame corners
- Meta info with dots separator
- Staggered fade-in animations
- 480px max, perfect for mobile

**Ne zaman kullan:**
- Premium brand identity
- Professional showcase
- High-quality screenshot
- Elegant social media post

---

### 4. **profile-card-v4-futuristic.html** - Futuristic HUD 🎮
**Stil:** Tech-forward, FPV cockpit inspired, sci-fi
**Kullanım:** Gaming community, tech enthusiasts, FPV pilots
**Özellikler:**
- FPV drone HUD interface
- Animated grid background
- Scanline effect
- Corner bracket decorations
- Monospace fonts (SF Mono)
- Pulsing status indicators
- Border glow animations
- Flight statistics terminology
- 560px max

**Ne zaman kullan:**
- FPV pilot community
- Tech/gaming aesthetic
- Futuristic branding
- Unique, bold statement

---

### 5. **profile-card-v5-elegant.html** - Business Elegance 🏆
**Stil:** Professional, business card, sophisticated
**Kullanım:** Professional networking, business context
**Özellikler:**
- Business card inspired layout
- Split design (sidebar + content)
- Detailed info sections
- Professional typography
- Subtle gradient overlays
- Multiple detail cards
- Footer meta information
- 700px max, desktop-optimized

**Ne zaman kullan:**
- Professional networking
- LinkedIn-style sharing
- Business presentations
- Portfolio showcase

---

### 6. **profile-card-v6-goggles.html** - Goggles Vision 👓
**Stil:** Logo-inspired, FPV identity, immersive
**Kullanım:** Brand-focused sharing, FPV community
**Özellikler:**
- Goggles-shaped frame (`border-radius: 48% 48% 45% 45%`)
- Concentric ring animations (target lock aesthetic)
- Rotating conic gradient QR border
- Wing decorations on sides
- HUD corner brackets
- Particle float background
- Circular QR lens with glow
- 520px max, goggles-optimized

**Ne zaman kullan:**
- Brand identity showcase
- FPV community engagement
- Logo-inspired aesthetic
- Immersive pilot experience

---

### 7. **profile-card-v7-motion.html** - Motion Blur ⚡
**Stil:** Speed, kinetic energy, dynamic movement
**Kullanım:** Racing pilots, action-focused profiles
**Özellikler:**
- Motion trail effect on text (::before/::after)
- Horizontal speed lines background
- Diagonal card composition (rotate -2deg)
- Velocity indicator bars
- Border scan line animation
- Asymmetric grid layout
- Speed badge footer
- 600px max, kinetic-optimized

**Ne zaman kullan:**
- Racing community
- Speed-focused branding
- Dynamic personality showcase
- High-energy profiles

---

### 8. **profile-card-v8-analog.html** - Analog Signal 📺
**Stil:** VHS/FPV analog feed, retro CRT, OSD overlay
**Kullanım:** Analog FPV enthusiasts, retro aesthetic lovers
**Özellikler:**
- Green phosphor CRT aesthetic
- Scan line animations
- Static noise overlay
- RGB split glitch effect
- OSD header/footer (REC, signal strength)
- Telemetry bar display
- Live timestamp
- Courier monospace font
- 600px max, analog-optimized

**Ne zaman kullan:**
- Analog FPV pilots
- Retro/nostalgic branding
- Technical OSD aesthetic
- Unique vintage style

---

### 9. **profile-card-v9-bento.html** - Bento Grid 🎯
**Stil:** Modern 2025 modular layout, organized cards
**Kullanım:** Clean, organized profile showcase
**Özellikler:**
- Bento box grid system (4x4 responsive)
- Modular card cells
- Hero cell, QR cell, stat cells
- Hover interactions per cell
- Staggered fade-in animations
- Tag system
- Mini badge collection
- 800px max, grid-optimized

**Ne zaman kullan:**
- Modern professional profiles
- Organized information display
- 2025 design trends
- Clean, systematic aesthetic

---

### 10. **profile-card-v10-3d.html** - 3D Depth Layer 🌌
**Stil:** Immersive 3D depth, parallax, layered perspective
**Kullanım:** Premium showcase, interactive experience
**Özellikler:**
- Multi-layer 3D with `transform: translateZ()`
- Mouse parallax effect (desktop)
- Depth particle background
- Floating elements at different Z-levels
- Hover depth animations
- QR floats forward on hover
- Gradient depth layers
- 650px max, depth-optimized

**Ne zaman kulun:**
- Premium interactive profiles
- Immersive brand experience
- Desktop-focused showcase
- High-end presentation

---

## 🎨 Tasarım DNA

Tüm 10 varyant FPVibe web sitesinin tasarım dilini kullanıyor:

- **Dark Theme**: #000 background
- **Glassmorphism**: blur(20px), rgba opacity
- **Purple/Cyan Gradients**: FPV drone color palette
- **SF Pro Display**: Apple system font
- **Smooth Animations**: fadeIn, float, pulse
- **Responsive**: Mobil ve desktop uyumlu

---

## ⚙️ Özelleştirme

### QR Kod URL'i Değiştirme
```javascript
new QRCode(document.getElementById("qrcode"), {
    text: "https://fpvibe.app/@KULLANICI_ADI", // Buraya profil URL'i
    ...
});
```

### Profil Bilgileri
```html
<h1 class="display-name">İsim Soyisim</h1>
<p class="username">@kullaniciadi</p>
<p class="bio">Bio metni buraya...</p>
```

### Stats
```html
<div class="stat-value">1.2K</div> <!-- Sayı -->
<div class="stat-label">Followers</div> <!-- Etiket -->
```

### Profil Fotoğrafı Ekleme
Avatar'daki placeholder'ı değiştir:
```html
<div class="avatar-inner">
    <img src="profil-foto.jpg" alt="Profile">
</div>
```

---

## 🚀 Kullanım

1. HTML dosyasını browser'da aç
2. Profil bilgilerini düzenle
3. Screenshot al
4. QR kod ile paylaş!

---

## 📦 Bağımlılıklar

- **QRCode.js**: https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js
- CDN üzerinden otomatik yüklenir, kurulum gerektirmez

---

## 🎯 Use Cases

**V1-V2 (Basic Layouts):**
- [ ] Instagram Stories, Twitter/X cards
- [ ] Website embeds, LinkedIn banners
- [ ] Mobil/Desktop wallpapers
- [ ] QR kod kartı (basılabilir)

**V3-V5 (Premium Styles):**
- [ ] Premium brand presentations
- [ ] Professional networking
- [ ] Business card replacements
- [ ] High-quality screenshots

**V6-V10 (Advanced Concepts):**
- [ ] FPV community branding (V6 Goggles)
- [ ] Racing/speed profiles (V7 Motion)
- [ ] Analog/retro aesthetic (V8 Analog)
- [ ] Modern organized layouts (V9 Bento)
- [ ] Interactive experiences (V10 3D)

---

## 🔮 Gelecek Özellikler

- [ ] Dark/Light mode toggle
- [ ] Custom color themes
- [ ] Export as image (PNG/JPG)
- [ ] Dynamic data loading (API)
- [ ] Social media links section
- [ ] Achievement badges
- [ ] Video count, likes, etc.

---

**Tasarım:** FPVibe Design System
**Geliştirme:** Claude Code
**Versiyon:** 2.0 (10 Variants - Research-Driven)
