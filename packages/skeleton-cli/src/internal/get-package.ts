import { readFile } from "node:fs/promises";
import {dirname, join} from "path";
import {PackageJson} from "type-fest";
import {fileURLToPath} from "node:url";

async function getPackage() {
	const path = join(dirname(fileURLToPath(import.meta.url)), '../package.json');
	const content = await readFile(path, 'utf-8');
	return JSON.parse(content) as Required<PackageJson>;
}

export { getPackage };
