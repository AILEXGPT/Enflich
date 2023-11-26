/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    typography: require('./typography'),
    extend: {
      colors: {
        gray: {
          50: '#000000', // Weiß zu Schwarz geändert
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          700: '#374151',
          800: '#1F2A37',
          900: '#FFFFFF', // Schwarz zu Weiß geändert
        },
        primary: {
          50: '#00FFFF', // Blau zu Cyan geändert
          100: '#00FFFF',
          200: '#00FFFF',
          300: '#00FFFF',
          600: '#00FFFF',
          700: '#00FFFF',
        },
        blue: {
          500: '#00FFFF', // Blau zu Cyan geändert
        },
        green: {
          50: '#F3FAF7',
          100: '#DEF7EC',
          800: '#03543F',
        },
        yellow: {
          100: '#FDF6B2',
          800: '#723B13',
        },
        purple: {
          50: '#F6F5FF',
        },
        indigo: {
          25: '#F5F8FF',
          100: '#E0EAFF',
          600: '#444CE7',
        },
      },
      screens: {
        mobile: '100px',
        tablet: '640px',
        pc: '769px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
