/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', 'class'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    fontSize: {
      '3xs': ['0.6rem', '1rem'],
      '2xs': ['0.7rem', '1rem'],
      xs: ['0.75rem', '1.1rem'],
      sm: ['0.8rem', '1.25rem'],
      md: ['0.85rem', '1.3rem'],
      lg: ['1.1rem', '1.6rem'],
      xl: ['1.2rem', '1.75rem'],
      '2xl': ['1.45 rem', '2rem'],
      '3xl': ['1.825rem', '2.25rem'],
      '4xl': ['2.2rem', '2.5rem'],
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        success: {
          DEFAULT: 'var(--success)',
          foreground: 'var(--success-foreground)',
        },
        danger: {
          DEFAULT: 'var(--danger)',
          foreground: 'var(--danger-foreground)',
        },
        warning: {
          DEFAULT: 'var(--warning)',
          foreground: 'var(--warning-foreground)',
        },
        info: {
          DEFAULT: 'var(--info)',
          foreground: 'var(--info-foreground)',
        },
        help: {
          DEFAULT: 'var(--help)',
          foreground: 'var(--help-foreground)',
        },
        light: {
          DEFAULT: 'var(--light)',
          foreground: 'var(--light-foreground)',
        },
        dark: {
          DEFAULT: 'var(--dark)',
          foreground: 'var(--dark-foreground)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
    animation: {
      'float-1': 'float-1 15s ease-in-out infinite alternate',
      'float-2': 'float-2 18s ease-in-out infinite alternate',
      'float-3': 'float-3 20s ease-in-out infinite alternate',
      pulse: 'pulse 8s infinite alternate',
    },
    keyframes: {
      'float-1': {
        '0%': { transform: 'translate(0, 0) scale(1)' },
        '100%': { transform: 'translate(10%, 10%) scale(1.1)' },
      },
      'float-2': {
        '0%': { transform: 'translate(0, 0) scale(1)' },
        '100%': { transform: 'translate(-10%, -5%) scale(1.15)' },
      },
      'float-3': {
        '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0.3' },
        '100%': { transform: 'translate(-5%, 10%) scale(1.05)', opacity: '0.6' },
      },
      pulse: {
        '0%': { opacity: '0.3', transform: 'translate(-50%, -50%) scale(0.9)' },
        '100%': { opacity: '0.7', transform: 'translate(-50%, -50%) scale(1.1)' },
      },
    },
  },
  plugins: ['tailwindcss-animate'],
};
