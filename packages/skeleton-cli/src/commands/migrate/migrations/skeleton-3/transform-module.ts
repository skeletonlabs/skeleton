import { readFile, writeFile } from 'node:fs/promises';

function transformModuleContent(code: string) {
	return code;
}

async function transformModule(path: string) {
	const code = await readFile(path, 'utf-8');
	const transformed = transformModuleContent(code);
	await writeFile(path, transformed);
}

export { transformModuleContent, transformModule };
