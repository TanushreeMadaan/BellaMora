/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-rose': '#E8D2D2',
        'brand-cream': '#FDF5E6',
        'brand-charcoal': '#36454F',
        'brand-gold': '#D4AF37',
      },
    },
  },
  plugins: [],
}

