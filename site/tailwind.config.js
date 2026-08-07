/** @type {import('tailwindcss').Config} */
// Brand tokens are defined once in src/index.css as CSS variables,
// extracted verbatim from the board deck theme. No raw hex in components.
// The rgb(var(--x-rgb) / <alpha-value>) form lets Tailwind alpha modifiers work.
const t = (name) => `rgb(var(--${name}-rgb) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pine: {
          950: t('pine-950'),
          900: t('pine-900'),
          800: t('pine-800'),
          700: t('pine-700'),
          600: t('pine-600'),
        },
        mist: {
          300: t('mist-300'),
          200: t('mist-200'),
          100: t('mist-100'),
        },
        gold: {
          DEFAULT: t('gold'),
          soft: t('gold-soft'),
          tint: t('gold-tint'),
          ink: t('gold-ink'),
        },
        ink: t('ink'),
        muted: t('muted'),
        line: t('line'),
        surface: t('surface'),
        paper: t('paper'),
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Source Serif 4 Variable"', 'Georgia', 'serif'],
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
        swift: 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
    },
  },
  plugins: [],
}
