/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'chulabg': "url('build/images/chulabg.jpg')",
        'footer-texture': "url('build/images/chulabg.jpg')",
      }
    },
  },
  plugins: [],
}

