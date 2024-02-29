/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme=dark]'],
  content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['"Lexend Deca"', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        mplus: ['"M PLUS 1"', 'sans-serif']
      },
      backgroundImage: {
        diagonal:
          "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236366f1' fill-opacity='0.35' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")",
        diagonalDark:
          "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a5b4fc' fill-opacity='0.35' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")"
      }
    }
  },
  plugins: []
};
