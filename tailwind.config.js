/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'ptcl-green': {
          50: '#f0f9f4',
          100: '#dcf4e6',
          200: '#bbe7d0',
          300: '#66BB6A',
          400: '#4CAF50',
          500: '#2D8B47',
          600: '#1B5E20',
          700: '#1a472a',
          800: '#183d24',
          900: '#15341f',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}