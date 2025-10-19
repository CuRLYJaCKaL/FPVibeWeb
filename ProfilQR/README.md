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

## 🎨 Tasarım DNA

Her iki varyant da FPVibe web sitesinin tasarım dilini kullanıyor:

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

**V1 (Vertical):**
- [ ] Instagram Stories paylaşımı
- [ ] Twitter/X profile card
- [ ] Mobil wallpaper
- [ ] QR kod kartı (basılabilir)

**V2 (Horizontal):**
- [ ] Website profile embed
- [ ] LinkedIn banner
- [ ] Desktop wallpaper
- [ ] Presentation slides

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
**Versiyon:** 1.0
