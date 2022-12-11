const plugin = require('tailwindcss/plugin');
const postcssJs = require('postcss-js');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const fs = require('fs');
const postcss = require('postcss');
const atImport = require('postcss-import');

module.exports = plugin(({ addComponents, addBase, addUtilities }) => {
	// try {
	// 	console.log('Loading individual styles');
	// 	addUtilities(require('./utilities.cjs'));
	// 	addBase(require('./bases.cjs'));
	// 	addComponents(require('./components.cjs'));
	// } catch {
	// 	console.log('Failed to load individual styles');
	// }

	try {
		console.log('Loading all to components');
		const all = require('./generated/allComponents.cjs');
		addComponents(all);
	} catch {
		console.log('Failed to load allComponents.cjs');
	}
	// using postcss-js but it doesn't work because we can't run postcss() synchronously...
	// const from = './src/lib/styles/all.css';
	// const allCss = fs.readFileSync(from);
	// postcss
	// 	.use(atImport())
	// 	.use(tailwindcss())
	// 	.use(autoprefixer)
	// 	.process(allCss, {
	// 		from
	// 	})
	// 	.then((result) => {
	// 		const output = result.css;
	// 		const all = postcssJs.objectify(postcss.parse(output));
	// 		// console.log(JSON.stringify(all));
	// 		fs.writeFileSync('./src/lib/tailwind/new.cjs', 'module.exports = ' + JSON.stringify(all));
	// 		// addComponents(all);
	// 		console.log('Done');
	// 	});
});
