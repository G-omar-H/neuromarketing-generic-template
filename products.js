// Product Catalog
// This file is loaded before cart.js
// It serves as the database for products, including all translations.

const products = {
    'item-1': {
        id: 'item-1',
        name: {
            en: '[Product Name 1]',
            fr: '[Nom du Produit 1]',
            ar: '[اسم المنتج 1]'
        },
        description: {
            en: '[Product Description - Start with a compelling hook about quality/features]',
            fr: '[Description du Produit - Commencez par une accroche convaincante sur la qualité/les caractéristiques]',
            ar: '[وصف المنتج - ابدأ بجملة جذابة حول الجودة/الميزات]'
        },
        price: '299',
        category: 'classic',
        image: 'https://placehold.co/600x600/333333/FFFFFF/png?text=Product+1',
        imageExtension: 'png',
        featured: true, // Appears on homepage
        badge: 'bestseller'
    },
    'item-2': {
        id: 'item-2',
        name: {
            en: '[Product Name 2]',
            fr: '[Nom du Produit 2]',
            ar: '[اسم المنتج 2]'
        },
        description: {
            en: '[Product Description - Highlight specific features or limited edition status]',
            fr: '[Description du Produit - Mettez en évidence les caractéristiques spécifiques ou le statut d\'édition limitée]',
            ar: '[وصف المنتج - سلط الضوء على ميزات محددة أو حالة الإصدار المحدود]'
        },
        price: '349',
        category: 'heritage',
        image: 'https://placehold.co/600x600/555555/FFFFFF/png?text=Product+2',
        imageExtension: 'png',
        featured: true,
        badge: 'limited',
        shipping: {
            express: true
        }
    },
    'item-3': {
        id: 'item-3',
        name: {
            en: '[Product Name 3]',
            fr: '[Nom du Produit 3]',
            ar: '[اسم المنتج 3]'
        },
        description: {
            en: '[Product Description - Focus on modern style or versatility]',
            fr: '[Description du Produit - Mettez l\'accent sur le style moderne ou la polyvalence]',
            ar: '[وصف المنتج - ركز على الأسلوب العصري أو التنوع]'
        },
        price: '299',
        category: 'modern',
        image: 'https://placehold.co/600x600/777777/FFFFFF/png?text=Product+3',
        imageExtension: 'png',
        featured: true,
        badge: 'new'
    },
    'item-4': {
        id: 'item-4',
        name: {
            en: '[Product Name 4]',
            fr: '[Nom du Produit 4]',
            ar: '[اسم المنتج 4]'
        },
        description: {
            en: '[Product Description - Describe color, finish, or material]',
            fr: '[Description du Produit - Décrivez la couleur, la finition ou le matériau]',
            ar: '[وصف المنتج - صف اللون، التشطيب، أو المواد]'
        },
        price: '299',
        category: 'classic',
        image: 'https://placehold.co/600x600/999999/FFFFFF/png?text=Product+4',
        imageExtension: 'png',
        featured: true
    },
    'item-5': {
        id: 'item-5',
        name: {
            en: '[Product Name 5]',
            fr: '[Nom du Produit 5]',
            ar: '[اسم المنتج 5]'
        },
        description: {
            en: '[Product Description - Highlight luxury or premium aspects]',
            fr: '[Description du Produit - Mettez en évidence les aspects luxueux ou premium]',
            ar: '[وصف المنتج - سلط الضوء على الجوانب الفاخرة أو المميزة]'
        },
        price: '399',
        category: 'heritage',
        image: 'https://placehold.co/600x600/BBBBBB/000000/png?text=Product+5',
        imageExtension: 'png',
        featured: true,
        badge: 'comingSoon'
    },
    'item-6': {
        id: 'item-6',
        name: {
            en: '[Product Name 6]',
            fr: '[Nom du Produit 6]',
            ar: '[اسم المنتج 6]'
        },
        description: {
            en: '[Product Description - Mention urban style or unique design]',
            fr: '[Description du Produit - Mentionnez le style urbain ou le design unique]',
            ar: '[وصف المنتج - اذكر الأسلوب الحضري أو التصميم الفريد]'
        },
        price: '299',
        category: 'modern',
        image: 'https://placehold.co/600x600/DDDDDD/000000/png?text=Product+6',
        imageExtension: 'png',
        featured: true
    },
    // Example test product
    'test-product': {
        id: 'test-product',
        name: { en: 'Test Item', fr: 'Article Test', ar: 'عنصر اختبار' },
        price: '1',
        category: 'test',
        image: 'https://placehold.co/400x400/png?text=Test',
        description: {
            en: 'For testing purposes only.',
            fr: 'Pour des tests uniquement.',
            ar: 'لأغراض الاختبار فقط.'
        },
        featured: false
    }
};

// Ensure it's available globally if needed by Node
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { products };
} else {
    window.products = products;
}
