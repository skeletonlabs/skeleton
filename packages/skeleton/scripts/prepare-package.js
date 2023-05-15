import { readFileSync, writeFileSync } from 'fs';

async function process() {
	const pkg = JSON.parse(
		readFileSync('./package.json', {
			encoding: 'utf8'
		})
	);

	const final_release = {
		...pkg,
		...EXPORTS_TO_ADD
	};

	writeFileSync('./package.json', JSON.stringify(final_release, undefined, '\t'), { encoding: 'utf8' });
}

process();

const EXPORTS_TO_ADD = {
	exports: {
		'.': {
			types: './dist/index.d.ts',
			svelte: './dist/index.js',
			default: './dist/index.js'
		},
		'./styles/*': './dist/styles/*',
		'./themes/*': './dist/themes/*',
		'./tailwind/skeleton.cjs': './dist/tailwind/skeleton.cjs'
	},
	files: [
		'./dist/**/*.svelte',
		'./dist/**/*.js',
		'./dist/**/*.d.ts',
		'./dist/**/*.cjs',
		'./dist/**/*.d.cts',
		'./dist/styles/*',
		'./dist/tailwind/*',
		'./dist/themes/*',
		'!./dist/**/*.test.*'
	],
	typesVersions: {
		'>4.0': {
			index: ['./dist/index.d.ts'],
			'tailwind/skeleton.cjs': ['./dist/tailwind/skeleton.d.cts']
		}
	}
};
