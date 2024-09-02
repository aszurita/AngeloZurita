const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend:{
      fontFamily:{
        'roboto-slab': ['"Roboto Slab"', 'serif'],
        'montserrat':['Montserrat','"Roboto Slab"', 'serif']
      }
    }
  },
  plugins: [
    flowbite.plugin(),
  ],
};
