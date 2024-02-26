/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme=dark]'],
  content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['"Lexend Deca"', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        movement: ['MovementV', 'sans-serif'],
        mplus: ['"M PLUS 1"', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive']
      },
      backgroundImage: {
        plus: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233730a3' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }
    }
  },
  plugins: []
};
