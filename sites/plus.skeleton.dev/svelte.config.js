import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true),
		experimental: {
			async: true,
		},
	},
	kit: {
		adapter: vercel(),
		experimental: {
			remoteFunctions: true,
		},
	},
};

export default config;
