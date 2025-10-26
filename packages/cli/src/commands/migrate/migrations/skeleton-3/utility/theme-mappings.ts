import type { Theme } from './types.js';

const THEME_MAPPINGS: Record<string, Theme> = {
	skeleton: { type: 'preset', value: 'legacy' },
	'gold-nouveau': { type: 'preset', value: 'nouveau' },
	wintry: { type: 'preset', value: 'wintry' },
	modern: { type: 'preset', value: 'modern' },
	rocket: { type: 'preset', value: 'rocket' },
	seafoam: { type: 'preset', value: 'seafoam' },
	vintage: { type: 'preset', value: 'vintage' },
	sahara: { type: 'preset', value: 'sahara' },
	hamlindigo: { type: 'preset', value: 'hamlindigo' },
	crimson: { type: 'preset', value: 'crimson' },
};

export { THEME_MAPPINGS };
