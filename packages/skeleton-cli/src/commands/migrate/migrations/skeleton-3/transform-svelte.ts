import { readFile, writeFile } from 'node:fs/promises';

function transformSvelteContent(code: string) {
	return code;
}

async function transformSvelte(path: string) {
	const code = await readFile(path, 'utf-8');
	const transformed = transformSvelteContent(code);
	await writeFile(path, transformed);
}

export { transformSvelteContent, transformSvelte };
