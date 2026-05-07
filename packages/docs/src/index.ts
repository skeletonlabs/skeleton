import { intro, outro, tasks } from '@clack/prompts';
import { processFramework } from './generate.ts';

const frameworks = ['svelte', 'react'] as const;

intro(`Generating component types for: ${frameworks.join(', ')}`);

await tasks(
	frameworks.map((framework) => ({
		title: `Processing component types for ${framework}`,
		task: async () => {
			await processFramework(framework);
			return `Successfully generated component types for ${framework}`;
		},
	})),
);

outro(`Successfully generated component types for: ${frameworks.join(', ')}`);

// TODO: Force package to output a single `api.json` file
