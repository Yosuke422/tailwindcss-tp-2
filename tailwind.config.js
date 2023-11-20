/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        "primary": "#1C85E8",
        "black": "#000000",
        "white": "#ffffff",
        "text": "#484C4E",
        "secondary": "#898989",
        "tertiary": "#FF0000"
      },
      fontFamily: {
        body: ['"Montserrat"'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    }
  }
}

