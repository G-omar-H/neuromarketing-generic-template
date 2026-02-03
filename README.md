# StoreName - Premium Moroccan Heritage Website

A modern, multilingual e-commerce website for StoreName, featuring premium Moroccan Fez Tarbouch caps with contemporary design.

## 🌟 Features

- **Multilingual Support**: English, French, and Arabic (with RTL support)
- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Beautiful animations and smooth transitions
- **Product Catalog**: Filterable product pages optimized for ad campaigns
- **Shopping Cart**: Full cart functionality with localStorage persistence
- **SEO Optimized**: Complete meta tags and Open Graph support
- **Brand Identity**: Reflects quality, Moroccan nationalism, and winning mindset

## 📁 Project Structure

```
storename/
├── index.html              # Homepage
├── products.html           # Products listing page
├── product-detail.html     # Individual product detail page
├── cart.html              # Shopping cart page
├── checkout.html          # Checkout page
├── confirmation.html      # Order confirmation page
├── track-order.html       # Order tracking page
├── styles.css             # Main stylesheet
├── script.js              # Main JavaScript functionality
├── translations.js        # Multilingual translations
├── cart.js                # Shopping cart logic
├── checkout.js            # Checkout functionality
├── paypal-config.js       # PayPal configuration
├── analytics.js           # Google Analytics & Vercel Analytics
├── sendit-config.js       # Sendit API configuration
├── sendit-integration.js  # Sendit shipping integration
├── sendit-config.local.js.example  # Sendit config template
├── test-sendit.html       # Sendit API testing page (optional)
├── Sendit_API_docs.txt   # Sendit API documentation
├── SENDIT_INTEGRATION_README.md  # Sendit integration guide
├── SETUP_SENDIT.md        # Sendit setup instructions
└── README.md              # This file
```

## 🚀 Getting Started

### Local Development

1. **Clone or download** this repository
2. **Open** `index.html` in a web browser
3. **No build process required** - it's pure HTML/CSS/JS

### Using a Local Server (Recommended)

For better development experience, use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🌐 Deployment

### Static Hosting Options

- **Netlify**: Drag and drop the folder or connect via Git
- **Vercel**: Deploy via CLI or GitHub integration
- **GitHub Pages**: Push to repository and enable Pages
- **Cloudflare Pages**: Connect repository for automatic deployments

### Steps for Deployment

1. Upload all files to your hosting provider
2. Ensure `index.html` is in the root directory
3. Configure custom domain (optional)
4. Set up SSL certificate (usually automatic)

## 🛠️ Customization

### Adding Products

Edit `products.html` and add new product items following the existing structure:

```html
<div class="product-item" data-category="classic">
    <!-- Product content -->
</div>
```

### Updating Translations

Edit `translations.js` and add new keys to all three language objects (en, fr, ar).

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #C8102E;
    --secondary-color: #FFD700;
    --accent-color: #006233;
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Features Breakdown

### Multilingual System
- Language switcher in navigation
- RTL support for Arabic
- Persistent language selection (localStorage)
- All content translatable

### Shopping Cart
- Add/remove products
- Quantity management
- Price calculations
- Persistent cart (localStorage)
- Cart page with checkout flow

### Product Pages
- Category filtering
- Product detail pages
- Image placeholders (ready for real images)
- Responsive grid layout

### SEO Features
- Meta descriptions
- Open Graph tags
- Semantic HTML
- Mobile-friendly viewport

## 📝 Adding Real Product Images

Replace the placeholder divs with actual images:

```html
<div class="product-image">
    <img src="images/product-1.jpg" alt="Product Name">
</div>
```

Update CSS to handle images properly in `styles.css`.

## 💳 PayPal Payment Integration

The website includes PayPal payment integration supporting both PayPal account payments and credit/debit card payments.

### PayPal Setup

1. **Create a PayPal Developer Account**
   - Go to [developer.paypal.com](https://developer.paypal.com)
   - Sign up or log in with your PayPal account

2. **Create an Application**
   - Navigate to Dashboard > My Apps & Credentials
   - Click "Create App"
   - Name your app (e.g., "StoreName E-commerce")
   - Select "Merchant" as the app type

3. **Get Your Client IDs**
   - **Sandbox Client ID** (for testing): Found in the Sandbox section
   - **Live Client ID** (for production): Found in the Live section

4. **Configure PayPal**
   - Open `paypal-config.js`
   - Replace `YOUR_SANDBOX_CLIENT_ID` with your Sandbox Client ID
   - Replace `YOUR_LIVE_CLIENT_ID` with your Live Client ID
   - Set `USE_SANDBOX: true` for testing, `false` for production
   - Update `MAD_TO_USD_RATE` with the current exchange rate (1 MAD = ~0.1 USD)

   ```javascript
   const PAYPAL_CONFIG = {
       CLIENT_ID_SANDBOX: 'your-sandbox-client-id-here',
       CLIENT_ID_LIVE: 'your-live-client-id-here',
       USE_SANDBOX: true, // Set to false for production
       MAD_TO_USD_RATE: 0.1 // Update with real-time rate
   };
   ```

5. **Test the Integration**
   - Use PayPal Sandbox test accounts for testing
   - Create test accounts in PayPal Developer Dashboard
   - Test both PayPal account payments and card payments

### Payment Flow

1. Customer fills out checkout form
2. Customer clicks PayPal button
3. PayPal handles payment (PayPal account or card)
4. On successful payment, order is processed
5. Customer is redirected to confirmation page

### Features

- ✅ PayPal account payments
- ✅ Credit/debit card payments (without PayPal account)
- ✅ Secure payment processing
- ✅ Automatic currency conversion (MAD to USD)
- ✅ Form validation before payment
- ✅ Error handling and user feedback
- ✅ Responsive PayPal buttons

### Production Checklist

Before going live:
- [ ] Replace Sandbox Client ID with Live Client ID
- [ ] Set `USE_SANDBOX: false` in `paypal-config.js`
- [ ] Update currency conversion rate
- [ ] Test with real PayPal accounts
- [ ] Set up webhook handlers (optional, for server-side verification)
- [ ] Configure order processing backend

## 🔗 Analytics Setup

### Google Analytics (GA4)

1. Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Open `analytics.js` and replace `GA_MEASUREMENT_ID` with your actual Measurement ID:
   ```javascript
   GA_MEASUREMENT_ID: 'G-XXXXXXXXXX', // Replace with your Google Analytics ID
   ```
4. Analytics will automatically track:
   - Page views
   - Product views
   - Add to cart events
   - Remove from cart events
   - Cart views
   - Checkout initiation
   - Purchases
   - Filter usage
   - Language changes

### Vercel Analytics

Vercel Analytics is automatically enabled when deployed on Vercel:
- **Speed Insights**: Automatically tracks Core Web Vitals and performance metrics
- **Web Analytics**: Tracks page views and user interactions (requires Vercel deployment)

The analytics scripts are loaded automatically on all pages. No additional configuration needed for Vercel Analytics when deployed on Vercel.

### E-commerce Tracking

The website includes comprehensive e-commerce tracking:
- Product views with product details
- Add to cart with item information
- Cart views with total value
- Checkout initiation
- Purchase completion with transaction details

All events follow Google Analytics 4 Enhanced E-commerce standards.

## 📧 Contact Form

The contact form currently shows success messages. To make it functional:

1. Set up a backend service (e.g., Formspree, Netlify Forms, or custom API)
2. Update the form action in `script.js`
3. Configure CORS if needed

## 🎨 Brand Colors

- **Primary Color**: Defined in `styles.css` (e.g., #333333)
- **Accent Color**: Defined in `styles.css` (e.g., #007bff)
- **Secondary Color**: Defined in `styles.css` (e.g., #666666)
- **Dark**: #1a1a1a (Text)

## 📄 License

All rights reserved - StoreName Brand

## 🤝 Support

For questions or support, contact: info@your-domain.com

---

**Built with ❤️ for StoreName - Premium Moroccan Heritage, Modern Excellence**

