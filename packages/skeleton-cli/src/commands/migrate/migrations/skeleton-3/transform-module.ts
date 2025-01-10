import { readFile } from 'node:fs/promises';
import { writeFile } from 'fs/promises';
import { parseModule, generateCode } from 'magicast';

function transformModuleContent(code: string) {
	const module = parseModule(code);
	// TODO: Update imports
	// TODO: Update classes
	return generateCode(module).code;
}

async function transformModule(path: string) {
	const code = await readFile(path, 'utf-8');
	const transformed = transformModuleContent(code);
	await writeFile(path, transformed);
}

export { transformModuleContent, transformModule  };
