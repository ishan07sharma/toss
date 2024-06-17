module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        multiflip: {
          '0%': { transform: 'rotateX(0deg)' },
          '20%': { transform: 'rotateX(180deg)' },
          '40%': { transform: 'rotateX(360deg)' },
          '60%': { transform: 'rotateX(540deg)' },
          '80%': { transform: 'rotateX(720deg)' },
          '100%': { transform: 'rotateX(900deg)' },
        },
      },
      animation: {
        multiflip: 'multiflip 3s ease-in-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
