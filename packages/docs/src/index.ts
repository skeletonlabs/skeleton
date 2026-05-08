import { intro, outro, taskLog } from '@clack/prompts';
import { getComponents, getFramework } from './generate.ts';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

intro('Generating documentation');

const log = taskLog({
	title: 'Generating component documentation',
	limit: 5,
});

const [svelteComponents, reactComponents] = await Promise.all(
	['svelte', 'react'].map(async (framework) =>
		getComponents(await getFramework(framework), {
			onProcessedComponent: (componentName) => log.message(`✓ ${componentName} (${framework})`),
		}),
	),
);

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
