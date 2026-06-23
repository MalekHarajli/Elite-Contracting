# Elite Contracting — Marketing Website

A high-end, single-page marketing site for **Elite Contracting**, a residential
construction & remodeling company serving Dearborn Heights and Metro Detroit.

Built with **Vite + React + TypeScript + Tailwind CSS**. Fully static — no
backend, no database. The contact form submits directly to
[Web3Forms](https://web3forms.com), so emails land in your inbox with zero server.

---

## 🚀 Quick start (local preview)

```bash
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:5173
```

To build and preview the production output exactly as it will deploy:

```bash
npm run build    # outputs static files to /dist
npm run preview  # serves /dist locally → http://localhost:4173
```

---

## 🔑 Where to paste your Web3Forms key

The contact form needs a free Web3Forms access key:

1. Go to **https://web3forms.com**, enter the email where you want to receive
   form submissions, and copy your **Access Key**.
2. Open **`src/data/site.ts`** and replace the placeholder at the very top:

   ```ts
   export const WEB3FORMS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY_HERE'
   ```

   with your real key:

   ```ts
   export const WEB3FORMS_KEY = 'a1b2c3d4-....'
   ```

3. Save, rebuild/redeploy. Done — submissions now email you directly.

> All other business content (phone, email, services, reviews, areas, etc.)
> also lives in **`src/data/site.ts`** so every text edit happens in one file.

---

## 🖼️ Add your images (no renaming needed)

**Portfolio photos:** drop any number of images into **`src/assets/portfolio/`** —
`.jpg`, `.png`, `.jpeg` or `.webp`, named anything you like. They appear in the
gallery automatically, in alphabetical filename order. Delete the
`sample-*.png` placeholders once your own photos are in.

- The **first** image (alphabetically) is also the darkened hero background, so
  if you want a specific one to lead, name it something early like `1-hero.jpg`.

**Logo:** replace **`public/logo.png`** with your logo (keep that exact name).
The favicon is already generated at `public/favicon.svg`.

---

## ☁️ Deploy (zero config)

The repo ships with both `netlify.toml` and `vercel.json`, so either host works
out of the box.

### Netlify
- **Drag & drop:** run `npm run build`, then drag the `dist/` folder onto
  https://app.netlify.com/drop.
- **Git:** connect the repo — build command `npm run build`, publish dir `dist`
  (already set in `netlify.toml`).

### Vercel
- Import the repo at https://vercel.com/new. Framework preset **Vite** and the
  settings in `vercel.json` are detected automatically. No config needed.

---

## 🧱 Project structure

```
public/
  favicon.svg            generated brand favicon
  logo.png               (you provide)
  portfolio/1–9.png      (you provide)
src/
  data/site.ts           ← ALL content + WEB3FORMS_KEY live here
  hooks/useReveal.ts     scroll-reveal (IntersectionObserver)
  components/            Header, Hero, Stats, Services, Portfolio,
                         Lightbox, About, Reviews, Areas, Contact, Footer
  App.tsx  main.tsx  index.css
```

© 2026 Elite Contracting.
