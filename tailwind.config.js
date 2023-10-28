module.exports = {
    darkMode: 'class',
    content: ["./src/templates/**/*.twig", "./src/templates/**/*.html", "./src/js/**/*.js"],
    theme: {
      extend: {
        typography: {
          DEFAULT: {
            css: {
              color: 'inherit',
              h1: {
                color: 'inherit'
              },
              h2: {
                color: 'inherit'
              },
              h3: {
                color: 'inherit'
              },
              h4: {
                color: 'inherit'
              },
              h4: {
                color: 'inherit'
              },
              h6: {
                color: 'inherit'
              },
              a: {
                color: 'inherit'
              },
              strong: {
                color: 'inherit'
              }
            }
          }
        }
      }
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/nesting')
    ]
  };
