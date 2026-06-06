# GrowStack — Portfolio Website

AI-Powered Social Media Marketing Agency Website

## 🚀 Deploy on GitHub Pages

### Step 1 — Create GitHub Repository
1. Go to [github.com](https://github.com) → New Repository
2. Name it exactly: `growstack` (so URL becomes `yourusername.github.io/growstack`)
3. Set to **Public**
4. Click **Create Repository**

### Step 2 — Upload Files
**Option A (Easy — via browser):**
1. Open your new repo
2. Click **"uploading an existing file"**
3. Drag & drop ALL files and folders (index.html, services.html, portfolio.html, contact.html, css/, js/)
4. Click **Commit changes**

**Option B (Via Git CLI):**
```bash
git init
git add .
git commit -m "Initial GrowStack website"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/growstack.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to repo **Settings** → **Pages** (left sidebar)
2. Under **Source** → Select branch: `main`, folder: `/ (root)`
3. Click **Save**
4. Wait ~2 minutes → Your site is live at: `https://YOURUSERNAME.github.io/growstack`

---

## 📁 File Structure
```
growstack/
├── index.html          ← Home page
├── services.html       ← Services & Pricing
├── portfolio.html      ← Portfolio showcase
├── contact.html        ← Contact page
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Cursor, animations, FAQ, filter
└── README.md
```

## 🎨 Brand Colors
- Orange: `#F4771E`
- Background: `#0D0D0D`
- Text: `#F0EDE8`

## ✏️ What to Update Before Publishing
- [ ] Replace `@growstack` with your actual Instagram handle in all files
- [ ] Replace `+91 XXXXX XXXXX` with your WhatsApp number in contact.html
- [ ] Replace `hello@growstack.in` with your actual email
- [ ] Add your real portfolio images (replace gradient placeholders in portfolio.html)
- [ ] Update `© 2025 GrowStack` year if needed

## 📸 Adding Real Portfolio Images
In `portfolio.html`, find the `.port-img` divs and add:
```html
<div class="port-img" style="background-image: url('images/your-ad.jpg')">
```
Place images in an `/images` folder.

---
Built with pure HTML, CSS & JS — No frameworks, fast load, GitHub Pages ready.
