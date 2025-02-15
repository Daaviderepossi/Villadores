module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Include tutti i file sorgenti dove Tailwind dovrebbe essere applicato
    ],
    theme: {
      extend: {
        colors: {
            'custom-blue': '#1D4ED8',
        }
      },
    },
    plugins: [],
  }