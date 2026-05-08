import { intro, outro, spinner } from '@clack/prompts';
import { processFramework } from './generate.ts';
import { writeFile } from 'node:fs/promises';

intro('Generating documentation');

const s = spinner();

s.start('Generating component documentation for Svelte');

const svelteComponents = await processFramework('svelte');

s.message('Generating component documentation for React');

const reactComponents = await processFramework('react');

s.message('Writing component documentation to file');

await writeFile(
	'./components.json',
	JSON.stringify(
		[
			{
				framework: 'svelte',
				components: svelteComponents,
			},
			{
				framework: 'react',
				components: reactComponents,
			},
		],
		null,
		2,
	),
	'utf-8',
);

s.stop('Component documentation generated');

outro('Successfully generated documentation');
