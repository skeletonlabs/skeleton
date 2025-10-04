import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const MONOREPO_DIRECTORY = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', '..');
export const SITE_DIRECTORY = (name: string) => join(MONOREPO_DIRECTORY, 'sites', name);
export const PACKAGE_DIRECTORY = (name: string) => join(MONOREPO_DIRECTORY, 'packages', name);
