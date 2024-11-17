import { readFileSync } from 'node:fs';
import * as v from 'valibot';
import { PackageSchema } from '../schemas/package.js';

export function getPackage(cwd = process.cwd()) {
	const json = readFileSync(cwd, 'utf8');
	if (!json) {
		return null;
	}
	return v.parse(PackageSchema, JSON.parse(json));
}
