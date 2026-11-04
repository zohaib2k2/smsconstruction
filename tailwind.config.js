/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: { colors: { ink: 'var(--ink)', panel: 'var(--panel)', paper: 'var(--paper)', muted: 'var(--muted)', bronze: 'var(--bronze)', line: 'var(--line)' }, fontFamily: { display: ['Playfair Display', 'serif'], sans: ['DM Sans', 'sans-serif'] } } },
  plugins: []
}