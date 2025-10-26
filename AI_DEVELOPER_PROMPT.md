# FPVibe - AI Developer Briefing & Prompt

Bu belge, FPVibe projesini geliştirmek üzere görevlendirilen AI Assistant'lar için hazırlanmış kapsamlı bir rehberdir.

---

## 🎯 PROJE ÖZET

**Proje Adı:** FPVibe
**Açıklama:** FPV drone pilotları için sosyal platform
**Domain:** https://fpvibe.app
**Tech Stack:** Vanilla JS, HTML5, CSS3 (No frameworks, no build tools)
**Hosting:** GitHub Pages
**Durum:** Pre-launch (Coming Soon page live)

---

## 📁 PROJE YAPISI

```
/FPVibeWeb
├── index.html           # Landing page (scroll-zoom effect, i18n, analytics)
├── support.html         # Support & FAQ page
├── privacy.html         # Privacy policy (GDPR compliant)
├── style.css            # Design system (glassmorphism, dark theme)
├── analytics.js         # Privacy-friendly analytics (localStorage)
├── analytics.html       # Analytics dashboard
├── manifest.json        # PWA manifest
├── sitemap.xml          # SEO sitemap (3 pages)
├── robots.txt           # Crawler instructions
├── ICONS_GUIDE.md       # PWA icon generation guide
├── AI_DEVELOPER_PROMPT.md  # This file
├── logo-400.png         # Logo 400x400
├── logo-800.png         # Logo 800x800
├── logo-1200.png        # Logo 1200x1200
├── icon-192.png         # PWA icon 192x192 (TODO: Generate)
├── icon-512.png         # PWA icon 512x512 (TODO: Generate)
└── CNAME                # fpvibe.app
```

---

## 🧬 PROJE DNA

### Design Principles
- **Dark Theme:** #000 background, #fff text
- **Glassmorphism:** `rgba()` + `backdrop-filter: blur(20px)`
- **Color Palette:** Purple (#8b5cf6) + Cyan (#06b6d4) gradients
- **Typography:** SF Pro Display, -apple-system fallback
- **Animations:** 0.3s ease transitions, physics-based scroll
- **Mobile-First:** Responsive, touch-optimized

### Code Standards
- ✅ **Pure Vanilla JS** - No frameworks (React/Vue/Svelte yok)
- ✅ **No Build Tools** - No webpack/vite/rollup
- ✅ **Progressive Enhancement** - Core content works without JS
- ✅ **Performance-First** - Target: Lighthouse 95+ score
- ✅ **Accessibility** - WCAG 2.1 AA compliance, ARIA labels
- ✅ **SEO-Optimized** - Semantic HTML, schema markup, meta tags
- ✅ **Privacy-Focused** - No cookies, localStorage only, GDPR compliant

### Constraints
❌ **Asla yapma:**
- Dependencies ekleme (CDN hariç)
- Mevcut animasyonları bozma
- SEO/accessibility'yi göz ardı etme
- İçerikleri hardcode etme (i18n pattern kullan)
- Build tool requirement oluşturma

---

## 🌍 INTERNATIONALIZATION (i18n)

### Desteklenen Diller (10)
1. **en** - English (default)
2. **tr** - Turkish
3. **es** - Spanish
4. **de** - German
5. **fr** - French
6. **pt** - Portuguese
7. **it** - Italian
8. **ru** - Russian
9. **zh** - Chinese
10. **ja** - Japanese

### i18n Implementation
```javascript
// Language detection priority:
// 1. URL parameter (?lang=tr)
// 2. localStorage ('fpvibe-lang')
// 3. Browser language (navigator.language)
// 4. Default (en)

const translations = {
  en: { title: 'The FPV social platform', ... },
  tr: { title: 'FPV sosyal platformu', ... },
  // ... 8 more languages
};
```

### Yeni Dil Ekleme
1. `translations` object'ine yeni dil ekle
2. Tüm keys'leri translate et (title, subtitle, comingSoon, vb.)
3. `index.html` hreflang tags'e ekle
4. Test et: `?lang=NEW_LANG`

---

## 🎨 DESIGN SYSTEM

### Colors
```css
--primary: #8b5cf6;      /* Purple */
--secondary: #ec4899;    /* Pink */
--accent: #06b6d4;       /* Cyan */
--bg-dark: #000;
--text-primary: #fff;
--text-secondary: rgba(255, 255, 255, 0.6);
--border: rgba(255, 255, 255, 0.1);
```

### Typography
```css
font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif;
--heading-weight: 700;
--body-weight: 400;
--letter-spacing: -0.02em; /* Tight */
```

### Spacing Scale
```css
--space-xs: 8px;
--space-sm: 16px;
--space-md: 24px;
--space-lg: 40px;
--space-xl: 80px;
```

### Border Radius
```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
```

### Animations
```css
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.6s ease;
```

---

## 📊 SEO CONFIGURATION

### Current SEO Features
✅ Sitemap.xml (3 pages)
✅ Robots.txt
✅ Schema.org (Organization + WebSite)
✅ Hreflang tags (10 languages)
✅ Open Graph tags
✅ Twitter Cards
✅ Semantic HTML (header, main, article, footer)
✅ ARIA labels
✅ Meta keywords (FPV focused)

### Target Keywords
- FPV social network
- FPV community
- FPV pilots connect
- FPV video sharing
- FPV drone app
- FPV flying spots
- FPV freestyle community
- Drone racing social

### Google Search Console
- Verification tag: `zu4isbCuK_aoB38Qta1aqqzLILHIgd7728g8eT-4MRc`
- Sitemap URL: https://fpvibe.app/sitemap.xml

---

## 📱 PWA (Progressive Web App)

### Manifest.json
- ✅ Created
- ✅ Linked in index.html
- 🔄 Icons: 192x192, 512x512 (generate from logo-1200.png)

### Install Prompt
PWA install prompt mobile'da otomatik görünecek:
- Android Chrome: "Add to Home Screen"
- iOS Safari: "Add to Home Screen"

### Service Worker
❌ Henüz yok (ileride eklenebilir offline support için)

---

## 🔒 SECURITY

### Implemented
✅ CSP (Content Security Policy)
✅ X-Frame-Options: SAMEORIGIN
✅ X-Content-Type-Options: nosniff
✅ X-XSS-Protection
✅ Referrer-Policy
✅ Permissions-Policy

### GitHub Pages Limitations
- ⚠️ HTTP headers server-side control yok
- ✅ Meta tag equivalents kullanıldı
- 🔄 İleride Cloudflare Pages'e taşıma düşünülebilir (full header control)

---

## 📈 ANALYTICS

### FPVibe Analytics (Privacy-Friendly)
- **Storage:** localStorage (no cookies!)
- **GDPR:** Compliant (no tracking, no external services)
- **Dashboard:** `/analytics.html`

### Tracked Events
- Page views
- Scroll depth (25%, 50%, 75%, 100%)
- Time on page
- Navigation clicks
- Language switches
- Email clicks
- Logo clicks (auto-zoom)

### Usage
```javascript
// Analytics is auto-initialized
// Access via: window.FPVibeAnalytics

// Custom event tracking:
FPVibeAnalytics.trackEvent('custom_action', { data: 'value' });

// Get summary:
const summary = FPVibeAnalytics.getSummary();

// Export data:
FPVibeAnalytics.exportData(); // Downloads JSON

// Clear data:
FPVibeAnalytics.clearData();
```

---

## 🚀 PERFORMANCE OPTIMIZATION

### Current Optimizations
✅ CSS preload
✅ Image preload (critical images)
✅ Responsive images (srcset)
✅ Deferred JavaScript (analytics.js)
✅ DNS prefetch (cdn.jsdelivr.net)
✅ Minimal dependencies (only QRCode.js CDN for ProfilQR)

### Target Metrics
- **LCP (Largest Contentful Paint):** <2.5s
- **FID (First Input Delay):** <100ms
- **CLS (Cumulative Layout Shift):** <0.1
- **Lighthouse Score:** 95+

### Future Optimizations
🔄 WebP images (smaller file size)
🔄 Service worker (offline caching)
🔄 HTTP/2 Push (if migrating from GitHub Pages)

---

## 🎯 GÖREV ÖRNEKLERİ

### Yeni Bir Özellik Eklemek

**Örnek: Email Waitlist Formu Ekle**

```markdown
# Task Briefing

**Objective:** Add an email waitlist capture form to index.html

**Requirements:**
1. Form should appear below "Coming Soon" badge
2. Simple design: email input + submit button
3. Validation: Check email format client-side
4. Storage: Save emails to localStorage (array)
5. Prevent duplicate submissions
6. Success message after submission
7. i18n support (EN + TR minimum)
8. Mobile-optimized, accessible (ARIA labels)
9. Match FPVibe design system (glassmorphism, gradients)

**Constraints:**
- No backend (yet) - localStorage only
- No external libraries
- Must work without JS (progressive enhancement)
- GDPR compliant (clear consent message)

**Files to Modify:**
- index.html (add form HTML)
- style.css (add form styles)
- index.html <script> (add form logic + i18n)

**Deliverables:**
- Functional waitlist form
- Success/error states
- localStorage integration
- i18n translations (EN, TR)
- Mobile responsive
- Accessibility compliant
```

### SEO İyileştirme

**Örnek: Blog Section Ekle**

```markdown
# Task Briefing

**Objective:** Create a /blog/ section for SEO content

**Requirements:**
1. Create blog/index.html (blog listing page)
2. Create blog/post-template.html (reusable post structure)
3. Create 3 sample posts:
   - "Top 10 FPV Flying Spots in USA"
   - "FPV for Beginners: Complete Guide 2025"
   - "Best FPV Goggles Under $500"
4. Add Schema.org BlogPosting markup
5. Add to sitemap.xml
6. Add breadcrumb navigation
7. Social share buttons (no tracking)
8. Reading time estimator
9. Related posts section

**SEO Focus:**
- Long-tail keywords
- Internal linking
- Image alt texts
- Meta descriptions
- Structured data

**Files to Create:**
- blog/index.html
- blog/post-template.html
- blog/top-10-fpv-spots.html
- blog/fpv-beginners-guide.html
- blog/best-fpv-goggles.html

**Files to Modify:**
- sitemap.xml (add blog pages)
- index.html (add blog link in nav)
```

### Performance Optimization

**Örnek: Service Worker Ekle**

```markdown
# Task Briefing

**Objective:** Implement a service worker for offline support

**Requirements:**
1. Create sw.js (service worker)
2. Cache static assets:
   - HTML files (index, support, privacy)
   - CSS (style.css)
   - JS (analytics.js)
   - Images (logo-*.png)
3. Offline fallback page
4. Cache-first strategy for static assets
5. Network-first strategy for API calls (future-ready)
6. Update manifest.json (add service worker)
7. Register service worker in index.html

**Constraints:**
- Must not break existing functionality
- Graceful degradation (works without SW)
- Clear cache versioning strategy

**Testing:**
- Chrome DevTools → Application → Service Workers
- Test offline mode (DevTools → Network → Offline)
- Lighthouse PWA audit

**Deliverables:**
- sw.js (service worker)
- offline.html (fallback page)
- Updated manifest.json
- Registration script in index.html
```

---

## 🧪 TESTING CHECKLIST

### SEO Testing
- [ ] Google Search Console verification
- [ ] Sitemap submit
- [ ] Rich Results Test (https://search.google.com/test/rich-results)
- [ ] Mobile-Friendly Test
- [ ] Meta Tags Preview (https://metatags.io)

### Performance Testing
- [ ] Lighthouse audit (95+ score)
- [ ] WebPageTest (https://webpagetest.org)
- [ ] PageSpeed Insights
- [ ] Core Web Vitals

### Accessibility Testing
- [ ] WAVE (https://wave.webaim.org)
- [ ] Axe DevTools
- [ ] Keyboard navigation test
- [ ] Screen reader test (VoiceOver/NVDA)

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### PWA Testing
- [ ] PWA Builder (https://www.pwabuilder.com)
- [ ] Lighthouse PWA audit
- [ ] Install prompt test (Android/iOS)
- [ ] Offline mode test

---

## 📞 İLETİŞİM & DESTEK

**Email:** asd@Royal.Net
**Domain:** fpvibe.app
**GitHub Repo:** (Eğer public ise buraya ekle)

---

## 🔮 ROADMAP (Gelecek Özellikler)

### Phase 1: Pre-Launch (✅ Completed)
- [x] Landing page
- [x] SEO optimization
- [x] Analytics infrastructure
- [x] i18n (10 languages)
- [x] PWA manifest

### Phase 2: Beta Launch (🔄 In Progress)
- [ ] Generate PWA icons (192px, 512px)
- [ ] User authentication (backend)
- [ ] Video upload system
- [ ] Profile pages
- [ ] Feed/timeline

### Phase 3: Full Launch
- [ ] Mobile app (React Native / Flutter)
- [ ] Real-time messaging
- [ ] Event organization
- [ ] Flying spots map
- [ ] Community features

### Phase 4: Growth
- [ ] Monetization strategy
- [ ] Premium features
- [ ] Partnership program
- [ ] Content creator tools

---

## 💡 PROMPTING BEST PRACTICES

AI'ya görev verirken şu format'ı kullan:

```markdown
# Task: [Kısa başlık]

## Context
[Projenin mevcut durumu, neden bu görev gerekli]

## Objective
[Ne yapılması gerekiyor - net ve ölçülebilir]

## Requirements
1. [Requirement 1]
2. [Requirement 2]
...

## Constraints
- [Kısıt 1]
- [Kısıt 2]

## Files to Modify
- file1.html
- file2.css

## Success Criteria
- [ ] Criterion 1
- [ ] Criterion 2

## Testing
[Nasıl test edilecek]
```

---

## 🎓 ÖĞRENME KAYNAKLARI

### FPV Community Research
- Reddit: r/fpv, r/Multicopter, r/fpvracing
- YouTube: JohnnyFPV, Mr Steele, Rotor Riot
- Discord: Major FPV communities

### Web Development
- Lighthouse: https://developers.google.com/web/tools/lighthouse
- PWA: https://web.dev/progressive-web-apps/
- Schema.org: https://schema.org/

### SEO
- Google Search Central: https://developers.google.com/search
- Ahrefs Blog: https://ahrefs.com/blog
- Moz: https://moz.com/learn/seo

---

## ✅ QUICK START

AI'ya ilk görev verirken:

```
Merhaba! FPVibe projesinde görevlendirildin.

Lütfen şu dosyayı oku ve anla:
/Users/macos/Documents/FPVibeWeb/AI_DEVELOPER_PROMPT.md

Ardından mevcut dosya yapısını incele:
- index.html (landing page)
- style.css (design system)
- analytics.js (analytics logic)

Proje hakkında sorularım:
[Buraya sorularını yaz]

İlk görevim:
[Buraya görevi yaz]
```

---

**Son Güncelleme:** 2025-10-26
**Versiyon:** 1.0
**Hazırlayan:** Claude Code (Anthropic)

---

## 🚀 HEMEN BAŞLA

AI olarak bu projeyi devralıyorsan, şu adımları izle:

1. ✅ Bu dökümanı oku (tamamı!)
2. 📁 Proje dosyalarını incele (index.html, style.css, analytics.js)
3. 🌐 Siteyi ziyaret et: https://fpvibe.app
4. 🧪 Analytics dashboard'u kontrol et: /analytics.html
5. 📝 İlk görevi al ve başla!

**İyi geliştirmeler!** 🎯
