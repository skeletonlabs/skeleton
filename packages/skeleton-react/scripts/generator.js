import { promises as fs } from "fs";
import { execSync } from 'node:child_process';

const config = {
    dirPath: 'src/components',
    inputFileName: 'types.ts',
    outputFileName: 'schema.json',
};

async function init() {
    const list = await fs.readdir(config.dirPath, { recursive: true });
    list.forEach(async (file) => {
        // Exclude all but types.ts files
        if (!file.includes(config.inputFileName)) return;

        // The full path with filename and extension
        const filePath = `${config.dirPath}/${file}`;

        // The path containing the types file
        const locationPath = filePath.replace(config.inputFileName, "");

        // Limit to Accordion ------------------
        if (!file.includes("Accordion")) return;
        // -------------------------------------

        // Execute Generator
        // https://github.com/YousefED/typescript-json-schema?tab=readme-ov-file
        await execSync(`typescript-json-schema --esModuleInterop --required '${filePath}' '*' --out '${locationPath}/${config.outputFileName}'`);

        // Log
        console.log('Schema Generation Complete');
    });
}

init();