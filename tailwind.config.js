/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sparcc: {
          primary: '#1e40af',
          secondary: '#7c3aed',
          accent: '#10b981',
          success: '#22c55e',
          warning: '#f59e0b',
          danger: '#ef4444',
          muted: '#6b7280',
        }
      }
    },
  },
  plugins: [],
}
