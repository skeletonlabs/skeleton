const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents }) => {
	if (process.env.NODE_ENV === 'production') return;
	try {
		console.log('Loading all to components');
		const all = require('./generated/allComponents.cjs');
		addComponents(all, {
			respectImportant: true,
			respectPrefix: true
		});
	} catch {
		console.log('Failed to load allComponents.cjs');
	}
});
