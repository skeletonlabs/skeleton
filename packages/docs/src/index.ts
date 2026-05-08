import { intro, outro, taskLog } from '@clack/prompts';
import { processFramework } from './generate.ts';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

intro('Generating documentation');

const log = taskLog({
	title: 'Generating component documentation',
});

log.message('Generating component documentation for Svelte');

const svelteComponents = await processFramework('svelte');

log.message('Generated component documentation for Svelte');

log.message('Generating component documentation for React');

const reactComponents = await processFramework('react');

log.message('Generated component documentation for React');

log.message('Writing component documentation to file');

await writeFile(
	join(import.meta.dirname, '..', 'data', 'components.json'),
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

log.message('Written component documentation to file');

log.success('Successfully generated component documentation');

outro('Successfully generated documentation');
