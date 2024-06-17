const tailwindcss = require('tailwindcss');

const config = {
	plugins: [
		require('postcss-import'),
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss()
	]
};

module.exports = config;
