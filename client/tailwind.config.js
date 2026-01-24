module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave1: {
          '0%,100%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-25%)' },
        },
        wave2: {
          '0%,100%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-20%)' },
        },
        wave3: {
          '0%,100%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-15%)' },
        },
        wave4: {
          '0%,100%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-10%)' },
        },
      },
      animation: {
        wave1: 'wave1 12s linear infinite',
        wave2: 'wave2 16s linear infinite',
        wave3: 'wave3 20s linear infinite',
        wave4: 'wave4 24s linear infinite',
      },
    },
  },
  plugins: [],
};
