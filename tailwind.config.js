/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
      },
      screens:{
        largeTablet:'840px'
      }
    },
    colors: {
      RepairingCenter: {
        white: '#fff',
        woocommerce: '#a46497',
        green: '#7ad03a',
        red: '#a00',
        orange: '#ffba00',
        blue: '#2ea2cc',
        blue_500: '#17497C',
        primary: '#a46497',
        secondary: '#ebe9eb',
        secondary_text: '#515151',
        highlight: '#77a464',
        content_bg: '#fff',
        subtext: '#767676',
      }
    }
  },
  plugins: [],
}

