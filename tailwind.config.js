/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}', './App.tsx'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // Main Audible brand colors
        audible: {
          primary: '#F7991C', // Audible's signature orange
          secondary: '#002F36', // Dark teal used in the app
          DEFAULT: '#F7991C',
          50: '#FEF4E6',
          100: '#FDE9CC',
          200: '#FBD399',
          300: '#FABD66',
          400: '#F8A733',
          500: '#F7991C', // Primary orange
          600: '#D17B08',
          700: '#9F5D06',
          800: '#6C3F04',
          900: '#3A2102',
        },
        // Dark mode and background colors
        'audible-dark': {
          DEFAULT: '#002F36',
          50: '#E6EDEF',
          100: '#CCDBE0',
          200: '#99B7C0',
          300: '#6693A1',
          400: '#336F81',
          500: '#002F36', // Primary dark teal
          600: '#002629',
          700: '#001C1F',
          800: '#001316',
          900: '#00090B',
        },
        // Text and UI element colors
        'audible-gray': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // Success and action colors
        'audible-success': '#00A87E', // Used for completed/success states
        'audible-error': '#E53935', // Used for errors/warnings
        'audible-link': '#027BCE', // Used for links and CTAs
        // Background colors
        'audible-bg': {
          light: '#FFFFFF',
          dark: '#002F36',
          gray: '#F3F4F6',
        },
      },
    },
  },
  plugins: [],
};
