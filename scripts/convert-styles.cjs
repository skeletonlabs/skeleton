const plugin = require('tailwindcss/plugin');
const postcssJs = require('postcss-js');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const fs = require('fs');
const postcss = require('postcss');
const atImport = require('postcss-import');

const from = './src/lib/styles/all.css';
const allCss = fs.readFileSync(from);
postcss()
	.use(atImport())
	.use(tailwindcss())
	.use(autoprefixer)
	.process(allCss, {
		from
	})
	.then((result) => {
		const all = postcssJs.objectify(result.root);
		console.log(JSON.stringify(all));
		fs.writeFileSync('./src/lib/tailwind/generated/new.cjs', 'module.exports = ' + JSON.stringify(all));
	});
