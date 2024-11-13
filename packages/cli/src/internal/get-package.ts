import { readFileSync } from 'node:fs';

export function getPackage(cwd = process.cwd()) {
		const file = readFileSync(cwd, 'utf8');
		if (!file) {
			return null;
		}
		return JSON.parse(file);
}
