// module.exports = {
//   plugins: {
//     tailwindcss: {config: './apps/web/tailwind.config.js'},
//     autoprefixer: {},
//   },
// };
const { join } = require('path');

module.exports = {
  plugins: {
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
};