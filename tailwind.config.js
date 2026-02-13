/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          colors: {
              'raamah-black': '#0a0a0a',
              'raamah-dark': '#0f0f0f',
              'raamah-gold': '#D4AF37',
              'raamah-accent': '#C5A028',
              'raamah-cream': '#F5F5F0',
              'raamah-gray': '#1a1a1a',
          },
          fontFamily: {
              serif: ['var(--font-serif)', 'serif'],
              sans: ['var(--font-sans)', 'sans-serif'],
          },
      },
  },
  plugins: [],
}
