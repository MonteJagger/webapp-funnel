/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1284px'
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.75rem', '2.5rem'],
      '4xl': ['2rem', '2.5rem'],
      '5xl': ['2.25rem', '3rem'],
      '6xl': ['2.75rem', '3.75rem'],
      '7xl': ['3.5rem', '4.5rem'],
      '8xl': ['4.25rem', '4.5rem']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      red: 'rgba(var(--primary-700), <alpha-value>)',
      primary: {
        DEFAULT: 'rgba(var(--primary-500), <alpha-value>)',
        50: 'rgba(var(--primary-50), <alpha-value>)',
        100: 'rgba(var(--primary-100), <alpha-value>)',
        200: 'rgba(var(--primary-200), <alpha-value>)',
        300: 'rgba(var(--primary-300), <alpha-value>)',
        400: 'rgba(var(--primary-400), <alpha-value>)',
        500: 'rgba(var(--primary-500), <alpha-value>)',
        600: 'rgba(var(--primary-600), <alpha-value>)',
        700: 'rgba(var(--primary-700), <alpha-value>)',
        800: 'rgba(var(--primary-800), <alpha-value>)',
        900: 'rgba(var(--primary-900), <alpha-value>)',
        950: 'rgba(var(--primary-950), <alpha-value>)'
      },
      ignite: {
        DEFAULT: '#FF140F',
        50: '#FEF6F5',
        100: '#FFE9E8',
        200: '#FDDBD7',
        300: '#FF5445',
        400: '#FF5445',
        500: '#FF140F',
        600: '#D3120D',
        700: '#930203',
        800: '#540000',
        900: '#400202',
        950: '#2E0000'
      },
      gray: {
        DEFAULT: '#838386',
        50: '#f5f5f7',
        100: '#eeeef0',
        200: '#e2e2e4',
        300: '#b8bbbb',
        400: '#909093',
        500: '#838386',
        600: '#6a6a6e',
        700: '#46464A',
        800: '#232327',
        900: '#1b1b1e',
        950: '#0c0c0c'
      },
      green: {
        DEFAULT: '#00913f',
        50: '#f0faf2',
        100: '#e3f6e5',
        200: '#c6eccc',
        300: '#6ecd80',
        400: '#00a747',
        500: '#00913f',
        600: '#0a7b34',
        700: '#005320',
        800: '#002d0e',
        900: '#02210a',
        950: '#001502'
      },
      blue: {
        DEFAULT: '#487ff1',
        50: '#f4f8ff',
        100: '#e8f1ff',
        200: '#d5e3fe',
        300: '#96b9fb',
        400: '#5c8ef2',
        500: '#487ff1',
        600: '#1f5fea',
        700: '#0c38b5',
        800: '#011d6a',
        900: '#061450',
        950: '#020b3a'
      }
    },
    fontFamily: {
      sans: ['"Uni Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Monaco', 'monospace'],
      regular: ['"Uni Neue"', 'Helvetica', 'Arial', 'sans-serif']
    },
    fontWeight: {
      normal: '400',
      bold: '700',
      heavy: '800'
    }
  },
  plugins: [],
};
