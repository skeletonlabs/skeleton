import { describe, expect, it } from 'vitest';
import { transformTailwindConfigContent } from './transform-tailwind-config.js';

describe('transformTailwindConfigContent', () => {
	it('transforms with direct export', () => {
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
		expect(transformTailwindConfigContent(v2)).toBe(v3);
	});
	it('transforms with referenced export', () => {
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
		expect(transformTailwindConfigContent(v2)).toBe(v3);
	});
	it('transforms with typescript', () => {
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
		expect(transformTailwindConfigContent(v2)).toBe(v3);
	});
	it('transforms with multiple skeleton-related imports', () => {
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
		expect(transformTailwindConfigContent(v2)).toBe(v3);
	});
	it('transforms with comments', () => {
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
		expect(transformTailwindConfigContent(v2)).toBe(v3);
	});
	it('transforms with multiple content entries', () => {
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
		expect(transformTailwindConfigContent(v2)).toBe(v3);
	});
	it('transforms with multiple plugin entries', () => {
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
		expect(transformTailwindConfigContent(v2)).toBe(v3);
	});
	it('transforms with theme configuration', () => {
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
		expect(transformTailwindConfigContent(v2)).toBe(v3);
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
			expect(transformTailwindConfigContent(v2)).toBe(v3);
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
			expect(transformTailwindConfigContent(v2)).toBe(v3);
		});
	}
});
