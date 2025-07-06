/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      animation: {
        float: 'float 6s ease-in-out infinite',
        floatReverse: 'floatReverse 7s ease-in-out infinite',
        drop: 'drop 6s linear infinite',
        rise: 'rise 6s linear infinite',
        // marquee: 'marquee 20s linear infinite',
        'marquee-full': 'marqueeFull 90s linear infinite', // ✔ used for logo scroll
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(20px)" },
        },
        drop: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '50%': { opacity: '0.8' },
          '100%': { transform: 'translateY(500px)', opacity: '0' },
        },
        rise: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh)', opacity: '0' },
        },
        // marquee: {
        //   '0%': { transform: 'translateX(0%)' },
        //   '100%': { transform: 'translateX(-50%)' },
        // },
        marqueeFull: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },

      transitionDuration: {
        500: '500ms',
      },
    },
  },
  plugins: [],
}
