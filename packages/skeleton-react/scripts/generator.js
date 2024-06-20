import { promises as fs } from 'fs';
import { execSync } from 'node:child_process';

const config = {
	dirPath: 'src/lib/components',
	inputFileName: 'types.ts',
	outputFileName: 'schema.json'
};

async function init() {
	const list = await fs.readdir(config.dirPath, { recursive: true });
	list.forEach(async (file) => {
		// Exclude all but types.ts files
		if (!file.includes(config.inputFileName)) return;

		// The full path with filename and extension
		const filePath = `${config.dirPath}/${file}`;

		// The path containing the types file
		const locationPath = filePath.replace(config.inputFileName, '');

		// DEBUG: Limit to Accordion Only ---------
		// if (!file.includes("Accordion")) return;
		// ----------------------------------------

		// Execute Generator
		// https://github.com/YousefED/typescript-json-schema?tab=readme-ov-file
		execSync(
			`typescript-json-schema --propOrder=true --esModuleInterop --required=true '${filePath}' '*' --out '${locationPath}/${config.outputFileName}'`
		);

		// Log
		console.log('Schema generated for', filePath);
	});
}

init();
