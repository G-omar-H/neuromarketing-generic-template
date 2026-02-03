# 🚀 Brand Setup Guide: Zero to Launch

This guide walks you through transforming this **Generic Neuromarketing Template** into your unique brand instance.

Follow these 5 steps to launch your high-converting e-commerce site.

---

## 📋 Prerequisites

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/neuromarketing-generic-template.git my-brand-shop
    ```
2.  **Open in Editor**: Open the folder in VS Code or your preferred editor.

---

## 1️⃣ Step 1: Define Identity (`config.js`)

Open `config.js`. This file controls your global brand settings.

*   **Brand Name**: Change `"StoreName"` to your actual brand (e.g., `"Apex Athletics"`).
*   **Tagline**: Set your persuasive tagline.
*   **Contact**: Update email, phone, and address.
*   **Social**: Add your Instagram/Facebook links.

```javascript
const CONFIG = {
    brandName: "Apex Athletics", // <--- UPDATE THIS
    brandTagline: "Peak Performance for Elite Athletes",
    // ...
};
```

---

## 2️⃣ Step 2: Visual Branding (`styles.css`)

Open `styles.css`. Look for the **"BRAND IDENTITY SYSTEM"** section at the very top.

*   **Primary Color**: Your main brand color (Button backgrounds, key headers).
*   **Accent Color**: High-contrast color for Call-to-Actions (CTAs).
*   **Fonts**: (Optional) Update the `@import` URL for Google Fonts if you want different typography.

```css
:root {
    /* Main Brand Color */
    --primary-color: #FF4500;  /* e.g., Energetic Orange */
    
    /* Contrast/Action Color */
    --accent-color: #000000;   /* e.g., Solid Black */
}
```

> **NEUROMARKETING TIP:** Use "Trust Blue" (`#0056b3`) or "Action Green" (`#28a745`) if you are unsure. Avoid low-contrast pastels for primary buttons.

---

## 3️⃣ Step 3: Brand Voice & Copy (`translations.js`)

Open `translations.js`. This handles all text for English (`en`), French (`fr`), and Arabic (`ar`).

**Crucial:** Do not just "fill in the blanks". Use **Persuasive Copy**.

*   **Hero Title**: Instead of "Welcome", use "Unlock Your Potential".
*   **Values**: Use "Authority" and "Social Proof" (e.g., "Trusted by 500+ Pros").

The file has instructional placeholders to guide you:
```javascript
hero: {
    title: "[Main Headline - e.g., Elevate Your Game]", 
    subtitle: "[Subheadline - e.g., Premium Gear for Winners]",
    shop: "Shop Now" // <--- Action Verb
}
```

---

## 4️⃣ Step 4: Visual Assets (`assets/`)

1.  **Logo**:
    *   Place your logo file in `assets/logo/`.
    *   Update the path in `config.js` (`logoConfig.image`).
2.  **Favicon**:
    *   Update `favicon.ico` in the root folder.
3.  **Product Images**:
    *   Add images to `assets/products/` or link to external URLs in `products.js`.

---

## 5️⃣ Step 5: Products (`products.js`)

Open `products.js`. This is your database.

*   **ID**: Unique identifier (e.g., `'racket-pro-v1'`).
*   **Name**: Benefit-driven name.
*   **Price**: In MAD (Moroccan Dirham) by default.
*   **Category**: Used for filtering (`'classic'`, `'modern'`, etc.).

```javascript
{
    id: 'apex-pro-racket',
    name: 'Apex Pro V1',
    price: 1200, // 1200 MAD
    image: 'assets/products/racket1.jpg',
    category: 'rackets'
}
```

---

## ✅ Launch Checklist

1.  [ ] `config.js` updated with Brand Name?
2.  [ ] `styles.css` updated with Brand Colors?
3.  [ ] `translations.js` updated with Persuasive Copy?
4.  [ ] PayPal/Sendit keys configured in `.env`? (See `QUICKSTART.md`)
5.  [ ] **Deploy!** (Push to GitHub/Netlify/Vercel).

**You are ready to sell!** 🚀
