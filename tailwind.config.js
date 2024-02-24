/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        movement: ['MovementV', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif']
      }
    }
  },
  plugins: []
};
