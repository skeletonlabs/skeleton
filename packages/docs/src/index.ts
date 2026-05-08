import { intro, outro } from '@clack/prompts';
import { processFramework } from './generate.ts';
import { writeFile } from 'node:fs/promises';

intro('Generating documentation');

await writeFile(
	'./components.json',
	JSON.stringify(
		[
			{
				framework: 'svelte',
				components: await processFramework('svelte'),
			},
			{
				framework: 'react',
				components: await processFramework('react'),
			},
		],
		null,
		2,
	),
	'utf-8',
);

outro('Successfully generated documentation');
