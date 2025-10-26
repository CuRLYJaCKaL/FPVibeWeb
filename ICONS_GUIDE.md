# FPVibe - PWA Icons Guide

PWA (Progressive Web App) standardları için farklı boyutlarda ikonlara ihtiyacınız var.

## 📦 GEREKLİ İKONLAR

### 1. **icon-192.png** (192x192px)
- Minimum PWA requirement
- Android home screen icon
- Notification icon

### 2. **icon-512.png** (512x512px)
- PWA splash screen
- High-resolution displays
- Google Play Store listing (eğer TWA kullanırsanız)

### 3. **logo-400.png** ✅ (Mevcut)
- Zaten var, favicon olarak kullanılıyor

## 🎨 NASIL OLUŞTURULUR?

### Yöntem 1: Mevcut logo-1200.png'den Resize Et

Komut satırından (macOS):
```bash
cd /Users/macos/Documents/FPVibeWeb

# 192x192 oluştur
sips -z 192 192 logo-1200.png --out icon-192.png

# 512x512 oluştur
sips -z 512 512 logo-1200.png --out icon-512.png
```

### Yöntem 2: Figma/Photoshop/Online Tool

**Online Tool (Ücretsiz):**
- https://realfavicongenerator.net/
- Upload: logo-1200.png
- Download: Tüm boyutlar otomatik oluşur

**Figma:**
1. logo-1200.png'i import et
2. Frame oluştur: 192x192
3. Logo'yu center'a align et
4. Export → PNG → 192x192
5. Aynı işlemi 512x512 için tekrarla

## 📱 SCREENSHOT'LAR (Opsiyonel ama önerilir)

PWA install prompt için screenshot'lar gerekli:

### Mobile Screenshot (390x844px)
- iPhone 14 boyutu
- Landing page screenshot'ı
- File: `screenshot-mobile.png`

### Desktop Screenshot (1920x1080px)
- Fullscreen landing page
- File: `screenshot-desktop.png`

**Nasıl alınır:**
1. Browser DevTools → Responsive mode
2. 390x844 boyutunu set et
3. Screenshot al
4. Desktop için: 1920x1080 set et

## ✅ KONTROL LİSTESİ

Tüm ikonlar oluştuktan sonra şunları kontrol et:

```bash
# Dosyaların varlığını kontrol et
ls -lh /Users/macos/Documents/FPVibeWeb/icon-*.png

# Boyutları doğrula
file /Users/macos/Documents/FPVibeWeb/icon-192.png
file /Users/macos/Documents/FPVibeWeb/icon-512.png
```

Çıktı:
```
icon-192.png: PNG image data, 192 x 192, 8-bit/color RGBA
icon-512.png: PNG image data, 512 x 512, 8-bit/color RGBA
```

## 🧪 TEST

PWA'nın doğru çalıştığını test et:

1. **Lighthouse PWA Audit**
   - Chrome DevTools → Lighthouse
   - "Progressive Web App" seçeneğini işaretle
   - Generate report
   - ✅ "Installable" badge'i görmeli

2. **PWA Builder Test**
   - https://www.pwabuilder.com/
   - URL gir: https://fpvibe.app
   - Manifest validation
   - Service worker check

3. **Mobile Test**
   - Android Chrome → fpvibe.app
   - "Add to Home Screen" görünmeli
   - iOS Safari → "Add to Home Screen"

## 🚀 QUICK COMMAND (macOS)

Hızlı oluşturma:
```bash
cd /Users/macos/Documents/FPVibeWeb
sips -z 192 192 logo-1200.png --out icon-192.png && \
sips -z 512 512 logo-1200.png --out icon-512.png && \
echo "✅ Icons created successfully!"
```

## 📝 NOTES

- **Maskable icons**: Manifest'te `"purpose": "any maskable"` kullanıldı
  - Icon'ların transparent background'u olmalı
  - Safe zone: Icon'un %80'i (ortadaki alan) önemli içerik olmalı
  - Kenarlar crop edilebilir (adaptive icons için)

- **WebP format**: İleride WebP'ye geçiş düşünülebilir (daha küçük file size)
  ```json
  {
    "src": "/icon-192.webp",
    "sizes": "192x192",
    "type": "image/webp"
  }
  ```

---

**Sonraki Adım:** Icon'ları oluşturduktan sonra sitemap.xml'e ekle:
```xml
<image:image>
  <image:loc>https://fpvibe.app/icon-512.png</image:loc>
</image:image>
```
