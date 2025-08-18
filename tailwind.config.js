/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Ensure neon colors are never purged
    'bg-neon-blue', 'bg-neon-pink', 'bg-neon-green', 'bg-neon-purple', 'bg-neon-yellow', 'bg-neon-orange',
    'text-neon-blue', 'text-neon-pink', 'text-neon-green', 'text-neon-purple', 'text-neon-yellow', 'text-neon-orange',
    'border-neon-blue', 'border-neon-pink', 'border-neon-green', 'border-neon-purple', 'border-neon-yellow', 'border-neon-orange',
    'shadow-neon-blue', 'shadow-neon-pink', 'shadow-neon-green', 'shadow-neon-purple', 'shadow-neon-yellow', 'shadow-neon-orange',
    'hover:shadow-neon-blue', 'hover:shadow-neon-pink', 'hover:shadow-neon-green', 'hover:shadow-neon-purple', 'hover:shadow-neon-yellow', 'hover:shadow-neon-orange',
    'hover:bg-neon-blue', 'hover:bg-neon-pink', 'hover:bg-neon-green', 'hover:bg-neon-purple', 'hover:bg-neon-yellow', 'hover:bg-neon-orange',
    'focus:shadow-neon-blue', 'focus:shadow-neon-pink', 'focus:shadow-neon-green', 'focus:shadow-neon-purple', 'focus:shadow-neon-yellow', 'focus:shadow-neon-orange',
    'focus:border-neon-blue', 'focus:border-neon-pink', 'focus:border-neon-green', 'focus:border-neon-purple', 'focus:border-neon-yellow', 'focus:border-neon-orange',
    'animate-pulse-neon', 'animate-flicker',
    'bg-black', 'min-h-screen', 'relative', 'overflow-hidden'
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00f3ff',
          pink: '#ff0080',
          green: '#39ff14',
          purple: '#bf00ff',
          yellow: '#ffff00',
          orange: '#ff8c00',
        }
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00f3ff, 0 0 10px #00f3ff, 0 0 15px #00f3ff, 0 0 20px #00f3ff',
        'neon-pink': '0 0 5px #ff0080, 0 0 10px #ff0080, 0 0 15px #ff0080, 0 0 20px #ff0080',
        'neon-green': '0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 15px #39ff14, 0 0 20px #39ff14',
        'neon-purple': '0 0 5px #bf00ff, 0 0 10px #bf00ff, 0 0 15px #bf00ff, 0 0 20px #bf00ff',
        'neon-yellow': '0 0 5px #ffff00, 0 0 10px #ffff00, 0 0 15px #ffff00, 0 0 20px #ffff00',
        'neon-orange': '0 0 5px #ff8c00, 0 0 10px #ff8c00, 0 0 15px #ff8c00, 0 0 20px #ff8c00',
      },
      animation: {
        'pulse-neon': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flicker': 'flicker 3s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        }
      }
    },
  },
  plugins: [],
}