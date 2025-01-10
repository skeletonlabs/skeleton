import { readFile } from 'node:fs/promises';
import { writeFile } from 'fs/promises';
import { parseModule, generateCode } from 'magicast';

function transformTailwindConfigContent(code: string) {
	const module = parseModule(code);
	// TODO: Update imports
	// TODO: Update content path
	// TODO: Update skeleton plugin config
	console.log(module.imports);
	return generateCode(module).code;
}

async function transformTailwindConfig(path: string) {
	const code = await readFile(path, 'utf-8');
	const transformed = transformTailwindConfigContent(code);
	await writeFile(path, transformed);
}

export { transformTailwindConfigContent, transformTailwindConfig };
