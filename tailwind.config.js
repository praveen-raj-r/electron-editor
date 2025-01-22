const colors = require('tailwindcss/colors')
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

/** @type {import('tailwindcss').Config} */
export const darkMode = ['class']
export const content = [
  './pages/**/*.{ts,tsx}',
  './forms/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}'
]
export const theme = {
  extend: {
    colors: {
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))'
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))'
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))'
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))'
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))'
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))'
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))'
      },
      sidebar: {
        DEFAULT: 'hsl(var(--sidebar-background))',
        foreground: 'hsl(var(--sidebar-foreground))',
        primary: 'hsl(var(--sidebar-primary))',
        'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
        accent: 'hsl(var(--sidebar-accent))',
        'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
        border: 'hsl(var(--sidebar-border))',
        ring: 'hsl(var(--sidebar-ring))'
      }
    },
    utilities: {
      '.no-drag': {
        '-webkit-user-drag': 'none'
      }
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)'
    },
    animation: {
      gradient: 'gradient 8s linear infinite',
      'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
      'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
      shine: 'shine 3s ease-out infinite'
    },
    keyframes: {
      gradient: {
        to: {
          backgroundPosition: 'var(--bg-size) 0'
        }
      },
      'shimmer-slide': {
        to: {
          transform: 'translate(calc(100cqw - 100%), 0)'
        }
      },
      'spin-around': {
        '0%': {
          transform: 'translateZ(0) rotate(0)'
        },
        '15%, 35%': {
          transform: 'translateZ(0) rotate(90deg)'
        },
        '65%, 85%': {
          transform: 'translateZ(0) rotate(270deg)'
        },
        '100%': {
          transform: 'translateZ(0) rotate(360deg)'
        }
      },
      shine: {
        '0%': { backgroundPosition: '200% 0' },
        '25%': { backgroundPosition: '-200% 0' },
        '100%': { backgroundPosition: '-200% 0' }
      }
    }
  }
}
export const plugins = [require('tailwindcss-animate'), addVariablesForColors]

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

  addBase({
    ':root': newVars
  })
}
