# Food Lover — Restaurant Website & Admin Dashboard (RTL, Arabic)

A simple front‑end project for a restaurant that includes a public marketing website **and** a lightweight admin dashboard (no backend). The UI is fully RTL and Arabic.

## ✨ Features

### Public Website (`index.html`)
- Responsive navigation bar with mobile hamburger menu.
- Hero section with call‑to‑action buttons.
- **Dynamic menu** rendered from JavaScript data with category filters (main/appetizer/dessert/drink).
- **Testimonials** section populated from JS data.
- **Cart sidebar** with add/remove, quantity controls, total calculation, and checkout alert.
- **Reservation form** (front‑end only, shows success alert).
- Footer with social links and newsletter subscription form.

### Admin Dashboard (`dashboard.html`)
- **Login screen** (demo users only; auth stored in `localStorage`).
  - `username: admin` — `password: admin123`
  - `username: employee` — `password: emp123`
- Fixed sidebar navigation and sticky topbar.
- KPI cards (customers, orders, reservations, revenue).
- **Charts** (Chart.js): weekly revenue (line), top dishes (doughnut).
- **Menu management** table + “Add Item” modal to append items in-memory.
- Reservations sample table with status badges/actions.

> ⚠️ This is a **front‑end demo**: data is in-memory only; no database or API. Credentials are for demo use and **not secure**.

---

## 🧱 Tech Stack & External Dependencies

- **HTML5, CSS3, Vanilla JavaScript**
- **Bootstrap 5.3** (CSS & JS via CDN) — layout & components
- **Font Awesome 6.4** (CDN) — icons
- **Google Fonts – Cairo** — Arabic-friendly font
- **Chart.js** — dashboard charts

CDNs are referenced directly in the HTML files.

---

## 📁 Project Structure

```
/
├── index.html         # Public website (marketing site)
├── dashboard.html     # Admin dashboard (login + panels)
├── script.js          # Front-end logic for public site (menu, cart, testimonials, etc.)
├── style.css          # Site styles (expected by index.html)
└── img/               # Images used by menu items (food1.png ... food6.png, etc.)
```

> If you don’t have `style.css` or `/img` assets, create them or update image paths/links in `script.js` and the HTML files.

---

## 🚀 Getting Started (Local)

### Option A — Open directly
1. Double‑click `index.html` to view the public site.
2. Double‑click `dashboard.html` to open the admin dashboard.
   - Log in with the demo credentials above.

### Option B — Serve with a local server (recommended for CORS/SPA behavior)
- Using Python (any directory):
  ```bash
  # Python 3
  python -m http.server 5500
  # then visit http://localhost:5500/
  ```
- Or use VS Code **Live Server** extension.

---

## 🛠️ Configuration & Customization

- **Menu items / prices / images:** Edit the `menuItems` array in `script.js`.
- **Testimonials:** Edit the `testimonials` array in `script.js`.
- **Dashboard data:** Edit the `users`, `menuItems`, and `reservations` arrays inside `dashboard.html` (inline `<script>` section).
- **Branding:** Update logo text, colors, and images in HTML/CSS. The UI is RTL (`dir="rtl"`).

### Assets
- Local images referenced like `img/food1.png` … `img/food6.png`. Add these files under `/img` or replace with your own.
- Some images (e.g., testimonial avatars, certain menu items) are remote URLs; they’ll load from the web.

---

## 🌐 Deploy (GitHub Pages)

1. Push the project to a GitHub repository.
2. In **Settings → Pages**, choose the branch (e.g., `main`) and root folder.
3. Save. Your site will be live at the Pages URL.  
   - Public site: `index.html` (root)  
   - If you want a link to the dashboard, add a visible link on the site or share the `/dashboard.html` path directly.

---

## 🔒 Important Notes

- **Demo Auth Only:** Login is hard‑coded; do not use in production.
- **No Backend:** All changes are in-memory (lost on refresh unless persisted to storage manually).
- **LocalStorage:** Only stores the current logged-in user; not secure.

---

## 🧪 Quick Test Checklist

- [ ] Open `index.html` — does the navbar toggle on mobile?
- [ ] Filter menu by category — items update correctly.
- [ ] Add items to cart — quantity & total update; remove and +/- work.
- [ ] Submit reservation form — success alert and form resets.
- [ ] Open `dashboard.html` — login works with demo users.
- [ ] Charts render without console errors.
- [ ] Add new menu item in dashboard — appears in the table.

---

## ❓ Troubleshooting

- **Missing styles?** Ensure `style.css` exists and is linked (or remove the link if you aren’t using it).
- **Images not showing?** Check `/img` paths or replace with valid URLs.
- **Charts not rendering?** Make sure you’re online (Chart.js CDN) or provide a local copy.
- **Arabic/RTL layout issues?** Confirm `lang="ar"` and `dir="rtl"` are set on `<html>`.

---

## 📄 License

Add your preferred license here (e.g., MIT).

---

## 👤 Author

- Ayman Zakaria — `aymanzakaria641@gmail.com` (update as needed)
