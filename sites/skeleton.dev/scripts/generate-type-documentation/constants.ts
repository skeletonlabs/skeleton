import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const SITES_SKELETON_DEV_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
export const MONOREPO_ROOT = join(dirname(SITES_SKELETON_DEV_ROOT), '..');
export const OUTPUT_DIRECTORY = join(SITES_SKELETON_DEV_ROOT, 'src', 'content', 'types');
export const CLASSES_DIRECTORY = join(MONOREPO_ROOT, 'packages', 'skeleton-common', 'dist', 'classes');
export const PACKAGES_FRAMEWORK_ROOT = (framework: string) => join(MONOREPO_ROOT, 'packages', `skeleton-${framework}`);
