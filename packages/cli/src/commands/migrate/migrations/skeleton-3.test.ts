import { describe, expect, it } from 'vitest';
import { migrateClasses, migratePackage, migrateTailwindConfig } from './skeleton-3.js';

describe('migratePackage', () => {
	it('migrates `@skeletonlabs/skeleton` dependency below 3.0.0', () => {
		const v2 = JSON.stringify(
			{
				dependencies: {
					'@skeletonlabs/skeleton': '2.0.1'
				}
			},
			null,
			'\t'
		);
		const v3 = JSON.stringify(
			{
				dependencies: {
					'@skeletonlabs/skeleton-svelte': '^1.0.0'
				}
			},
			null,
			'\t'
		);
		expect(migratePackage(v2)).toBe(v3);
	});
	it('ignores `@skeletonlabs`/skeleton` dependency at or above 3.0.0', () => {
		const v3 = JSON.stringify(
			{
				dependencies: {
					'@skeletonlabs/skeleton': '^3.0.0'
				}
			},
			null,
			'\t'
		);
		expect(migratePackage(v3)).toBe(v3);
	});
	it('migrates `@skeletonlabs/tw-plugin` dependency', () => {
		const v2 = JSON.stringify(
			{
				dependencies: {
					'@skeletonlabs/tw-plugin': '^2.0.0'
				}
			},
			null,
			'\t'
		);
		const v3 = JSON.stringify(
			{
				dependencies: {
					'@skeletonlabs/skeleton': '^3.0.0'
				}
			},
			null,
			'\t'
		);
		expect(migratePackage(v2)).toBe(v3);
	});
	it('ignores irrelevant packages', () => {
		const v2 = JSON.stringify(
			{
				dependencies: {
					'some-other-package': '1.0.0'
				}
			},
			null,
			'\t'
		);
		expect(migratePackage(v2)).toBe(v2);
	});
});

describe('migrateTailwindConfig', () => {
	it('migrates with direct export', () => {
		const v2 = `
import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
    ],
    plugins: [skeleton]
}`;

		const v3 = `
import { skeleton, contentPath } from '@skeletonlabs/skeleton/plugin';

export default {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        contentPath(import.meta.url, 'svelte')
    ],
    plugins: [skeleton]
}`;
		expect(migrateTailwindConfig(v2)).toBe(v3);
	});
	it('migrates with referenced export', () => {
		const v2 = `
import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
    ],
    plugins: [skeleton]
};

export default config;`;

		const v3 = `
import { skeleton, contentPath } from '@skeletonlabs/skeleton/plugin';

const config = {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        contentPath(import.meta.url, 'svelte')
    ],
    plugins: [skeleton]
};

export default config;`;
		expect(migrateTailwindConfig(v2)).toBe(v3);
	});
	it('migrates with typescript', () => {
		const v2 = `
import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';
import type { Config } from 'tailwindcss';

export default {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
    ],
    plugins: [skeleton]
} satisfies Config;`;

		const v3 = `
import { skeleton, contentPath } from '@skeletonlabs/skeleton/plugin';
import type { Config } from 'tailwindcss';

export default {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        contentPath(import.meta.url, 'svelte')
    ],
    plugins: [skeleton]
} satisfies Config;`;
		expect(migrateTailwindConfig(v2)).toBe(v3);
	});
	it('migrates with multiple skeleton-related imports', () => {
		const v2 = `
import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { something } from '@skeletonlabs/skeleton';

export default {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
    ],
    plugins: [skeleton]
}`;

		const v3 = `
import { skeleton, contentPath } from '@skeletonlabs/skeleton/plugin';
import { something } from '@skeletonlabs/skeleton';

export default {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        contentPath(import.meta.url, 'svelte')
    ],
    plugins: [skeleton]
}`;
		expect(migrateTailwindConfig(v2)).toBe(v3);
	});
	it('migrates with comments', () => {
		const v2 = `
import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';

// Tailwind configuration
export default {
    // Dark mode config
    darkMode: 'class',
    // Content paths
    content: [
        // Source files
        './src/**/*.{html,js,svelte,ts}',
        // Skeleton files
        join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
    ],
    plugins: [skeleton] // Add skeleton plugin
}`;

		const v3 = `
import { skeleton, contentPath } from '@skeletonlabs/skeleton/plugin';

// Tailwind configuration
export default {
    // Dark mode config
    darkMode: 'class',
    // Content paths
    content: [
        // Source files
        './src/**/*.{html,js,svelte,ts}',
        // Skeleton files
        contentPath(import.meta.url, 'svelte')
    ],
    plugins: [skeleton] // Add skeleton plugin
}`;
		expect(migrateTailwindConfig(v2)).toBe(v3);
	});
	it('migrates with multiple content entries', () => {
		const v2 = `
import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
        './components/**/*.{html,js,svelte,ts}'
    ],
    plugins: [skeleton]
}`;

		const v3 = `
import { skeleton, contentPath } from '@skeletonlabs/skeleton/plugin';

export default {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        contentPath(import.meta.url, 'svelte'),
        './components/**/*.{html,js,svelte,ts}'
    ],
    plugins: [skeleton]
}`;
		expect(migrateTailwindConfig(v2)).toBe(v3);
	});
	it('migrates with multiple plugin entries', () => {
		const v2 = `
import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

export default {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
    ],
    plugins: [typography, forms, skeleton]
}`;

		const v3 = `
import { skeleton, contentPath } from '@skeletonlabs/skeleton/plugin';
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

export default {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        contentPath(import.meta.url, 'svelte')
    ],
    plugins: [typography, forms, skeleton]
}`;
		expect(migrateTailwindConfig(v2)).toBe(v3);
	});
	it('migrates with theme configuration', () => {
		const v2 = `
import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF0000',
                secondary: '#00FF00'
            }
        }
    },
    plugins: [skeleton]
}`;

		const v3 = `
import { skeleton, contentPath } from '@skeletonlabs/skeleton/plugin';

export default {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        contentPath(import.meta.url, 'svelte')
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF0000',
                secondary: '#00FF00'
            }
        }
    },
    plugins: [skeleton]
}`;
		expect(migrateTailwindConfig(v2)).toBe(v3);
	});
	for (const module of ['path', 'node:path']) {
		it(`removes \`${module}\` imports when unused`, () => {
			const v2 = `
import { join } from '${module}';
import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
    ],
    plugins: [skeleton]
}`;

			const v3 = `
import { skeleton, contentPath } from '@skeletonlabs/skeleton/plugin';

export default {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        contentPath(import.meta.url, 'svelte')
    ],
    plugins: [skeleton]
}`;
			expect(migrateTailwindConfig(v2)).toBe(v3);
		});
		it(`keeps \`${module}\` import when used for other operations`, () => {
			const v2 = `
import { join, basename } from '${module}';
import { skeleton } from '@skeletonlabs/tw-plugin';

const configPath = basename(__dirname);

export default {
   darkMode: 'class',
   content: [
     './src/**/*.{html,js,svelte,ts}',
     join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
   ],
   plugins: [skeleton]
}`;

			const v3 = `
import { basename } from '${module}';
import { skeleton, contentPath } from '@skeletonlabs/skeleton/plugin';

const configPath = basename(__dirname);

export default {
   darkMode: 'class',
   content: [
     './src/**/*.{html,js,svelte,ts}',
     contentPath(import.meta.url, 'svelte')
   ],
   plugins: [skeleton]
}`;
			expect(migrateTailwindConfig(v2)).toBe(v3);
		});
	}
});

describe('migrateClasses', () => {
	const COLORS = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'surface'];
	const CSS_PROPERTIES = ['bg', 'accent', 'border', 'caret', 'decoration', 'divide', 'fill', 'outline', 'ring', 'shadow', 'stroke', 'text'];
	const V2_PAIRINGS = ['50-900', '100-800', '200-700', '300-600', '400-500', '500-400', '600-300', '700-200', '800-100', '900-50'];
	const V3_PAIRINGS = ['50-950', '100-900', '200-800', '300-700', '500', '600-400', '700-300', '800-200', '900-100', '950-50'];
	const CORNERS = ['tl', 'tr', 'bl', 'br'];
	describe('color pairings', () => {
		const createColorPairingMappings = () =>
			CSS_PROPERTIES.flatMap((property) =>
				COLORS.flatMap((color) =>
					V2_PAIRINGS.map((v2Pairing, index) => ({
						v2: `${property}-${color}-${v2Pairing}-token`,
						v3: `${property}-${color}-${V3_PAIRINGS[index]}`
					}))
				)
			);
		for (const { v2, v3 } of createColorPairingMappings()) {
			it(`migrates ${v2}`, () => {
				expect(migrateClasses(v2)).toBe(v3);
			});
		}
	});
	describe('backgrounds', () => {
		const createBackgroundMappings = () => [
			// Backdrop mappings
			...COLORS.map((color) => ({
				v2: `bg-${color}-backdrop-token`,
				v3: `bg-${color}-50/50 dark:bg-${color}-950/50`
			})),
			// Hover mappings
			...COLORS.map((color) => ({
				v2: `bg-${color}-hover-token`,
				v3: `preset-tonal-${color}`
			})),
			// Active mappings
			...COLORS.map((color) => ({
				v2: `bg-${color}-active-token`,
				v3: `preset-filled-${color}-500`
			}))
		];
		for (const { v2, v3 } of createBackgroundMappings()) {
			it(`migrates ${v2}`, () => {
				expect(migrateClasses(v2)).toBe(v3);
			});
		}
	});
	describe('border radius', () => {
		const createBorderRadiusMappings = () => [
			{
				v2: 'rounded-token',
				v3: 'rounded'
			},
			{
				v2: 'rounded-container-token',
				v3: 'rounded-container'
			},
			...CORNERS.flatMap((corner) => [
				{
					v2: `rounded-${corner}-token`,
					v3: `rounded-${corner}`
				},
				{
					v2: `rounded-${corner}-container-token`,
					v3: `rounded-${corner}-container`
				}
			])
		];
		for (const { v2, v3 } of createBorderRadiusMappings()) {
			it(`migrates ${v2}`, () => {
				expect(migrateClasses(v2)).toBe(v3);
			});
		}
	});
	describe('borders', () => {
		const createBorderMappings = () => [
			{
				v2: 'border-token',
				v3: 'border'
			},
			...COLORS.flatMap((color) =>
				V2_PAIRINGS.map((v2Pairing, index) => ({
					v2: `border-${color}-${v2Pairing}-token`,
					v3: `border-${color}-${V3_PAIRINGS[index]}`
				}))
			)
		];
		for (const { v2, v3 } of createBorderMappings()) {
			it(`migrates ${v2}`, () => {
				expect(migrateClasses(v2)).toBe(v3);
			});
		}
	});
	describe('rings', () => {
		const createRingMappings = () => [
			{
				v2: 'ring-token',
				v3: 'ring'
			},
			...COLORS.flatMap((color) =>
				V2_PAIRINGS.map((v2Pairing, index) => ({
					v2: `ring-${color}-${v2Pairing}-token`,
					v3: `ring-${color}-${V3_PAIRINGS[index]}`
				}))
			)
		];
		for (const { v2, v3 } of createRingMappings()) {
			it(`migrates ${v2}`, () => {
				expect(migrateClasses(v2)).toBe(v3);
			});
		}
	});
	describe('text', () => {
		const createTextMappings = () => [
			// Font tokens
			{
				v2: 'font-token',
				v3: 'base-font-family'
			},
			{
				v2: 'font-headings-token',
				v3: 'heading-font-family'
			},
			// Text color tokens
			{
				v2: 'text-token',
				v3: 'base-font-color'
			},
			// Text on color contrast tokens
			...COLORS.map((color) => ({
				v2: `text-on-${color}-token`,
				v3: `text-${color}-contrast-500`
			})),
			// Text color pairings
			...COLORS.flatMap((color) =>
				V2_PAIRINGS.map((v2Pairing, index) => ({
					v2: `text-${color}-${v2Pairing}-token`,
					v3: `text-${color}-${V3_PAIRINGS[index]}`
				}))
			)
		];
		for (const { v2, v3 } of createTextMappings()) {
			it(`migrates ${v2}`, () => {
				expect(migrateClasses(v2)).toBe(v3);
			});
		}
	});
	describe('text decoration', () => {
		const createDecorationMappings = () =>
			COLORS.flatMap((color) =>
				V2_PAIRINGS.map((v2Pairing, index) => ({
					v2: `decoration-${color}-${v2Pairing}-token`,
					v3: `decoration-${color}-${V3_PAIRINGS[index]}`
				}))
			);

		for (const { v2, v3 } of createDecorationMappings()) {
			it(`migrates ${v2}`, () => {
				expect(migrateClasses(v2)).toBe(v3);
			});
		}
	});
	describe('accent', () => {
		const createAccentMappings = () =>
			COLORS.map((color) => ({
				v2: `accent-${color}-token`,
				v3: `accent-${color}-500`
			}));

		for (const { v2, v3 } of createAccentMappings()) {
			it(`migrates ${v2}`, () => {
				expect(migrateClasses(v2)).toBe(v3);
			});
		}
	});
	describe('presets', () => {
		const createPresetMappings = () => [
			...COLORS.map((color) => ({
				v2: `variant-filled-${color}`,
				v3: `variant-filled-${color}-500`
			})),
			...COLORS.map((color) => ({
				v2: `variant-ghost-${color}`,
				v3: `preset-tonal-${color} border border-${color}-500`
			})),
			...COLORS.map((color) => ({
				v2: `variant-soft-${color}`,
				v3: `preset-tonal-${color}`
			})),
			...COLORS.map((color) => ({
				v2: `variant-ringed-${color}`,
				v3: `preset-outlined-${color}-500`
			})),
			...COLORS.map((color) => ({
				v2: `variant-glass-${color}`,
				v3: `preset-tonal-${color}`
			}))
		];
		for (const { v2, v3 } of createPresetMappings()) {
			it(`migrates ${v2}`, () => {
				expect(migrateClasses(v2)).toBe(v3);
			});
		}
	});
	describe('tailwind components', () => {
		const createTailwindMappings = () => [
			{
				v2: 'card',
				v3: 'card bg-surface-100-900-token'
			},
			{
				v2: 'btn-xl',
				v3: 'btn-lg'
			},
			{
				v2: 'btn-icon-xl',
				v3: 'btn-icon-lg'
			},
			{
				v2: 'btn-group',
				v3: ''
			},
			{
				v2: 'table-hover',
				v3: ''
			}
		];
		for (const { v2, v3 } of createTailwindMappings()) {
			it(`migrates ${v2}`, () => {
				expect(migrateClasses(v2)).toBe(v3);
			});
		}
	});
});
