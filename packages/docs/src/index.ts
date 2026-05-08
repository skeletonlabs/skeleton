import { intro, outro, taskLog } from '@clack/prompts';
import { getComponents, getFramework } from './generate.ts';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

intro('Starting documentation generation');

const log = taskLog({
	title: 'Generating component documentation',
	limit: 5,
});

const [reactComponents, svelteComponents] = await Promise.all(
	['react', 'svelte'].map(async (framework) => {
		const components = await getComponents(await getFramework(framework), {
			onComponentLoaded: (componentName) => log.message(`${framework} -> ${componentName}`),
		});
		log.success(`✓ ${framework} components loaded`);
		return components;
	}),
);

log.message('Writing documentation to file');

await writeFile(
	join(import.meta.dirname, '..', 'data', 'components.json'),
	JSON.stringify(
		[
			{
				framework: 'react',
				components: reactComponents,
			},
			{
				framework: 'svelte',
				components: svelteComponents,
			},
		],
		null,
		2,
	),
	'utf-8',
);

log.success('Written component documentation to file');

log.success('Successfully generated component documentation');

outro('Documentation generation complete');
