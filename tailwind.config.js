module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,js}',
    './src/**/*.{html,js,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      'headline': ['SantanderHeadlineW05-Bold', 'Arial', 'sans-serif'],
      'micro': ['SantanderMicroTextW05-Rg', 'Arial', 'sans-serif'],
      'micro-bold': ['SantanderMicroTextW05-Bold', 'Arial', 'sans-serif']
    },
    colors: {
      'primary': '#9e3667',
      'primary-light': '#b9638b',
      'secondary': '#137e84',

      'gray': {
        900: '#444',
        800: '#767676',
      }
    }
  },
  plugins: [require("@tailwindcss/forms")],
};
