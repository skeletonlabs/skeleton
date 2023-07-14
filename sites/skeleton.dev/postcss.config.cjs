const path = require('path');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
	plugins: [tailwindcss(path.resolve(__dirname, './tailwind.config.cjs')), autoprefixer]
};
