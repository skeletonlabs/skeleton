<script lang="ts">
	import type { TableSource } from '$lib/components/Table/types';

	import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte';
	import Crumb from '$lib/components/Breadcrumb/Crumb.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import Table from '$lib/components/Table/Table.svelte';

	const cSwatch = 'w-4 aspect-square rounded-full';
	const tableProps: TableSource = {
		head: ['Color', 'Name', 'Class', 'Description'],
		body: [
			[`<div class="${cSwatch} bg-primary-500" />`, 'Primary', '[x]-primary-[50-900]', 'Typically your primary brand color.'],
			[
				`<div class="${cSwatch} bg-secondary-500" />`,
				'Secondary',
				'[x]-secondary-[50-900]',
				'A secondary branding color for supplementary value.'
			],
			[`<div class="${cSwatch} bg-tertiary-500" />`, 'Tertiary', '[x]-tertiary-[50-900]', 'A third and additional branding color.'],
			[
				`<div class="${cSwatch} bg-success-500" />`,
				'Success',
				'[x]-success-[50-900]',
				'Used for successful or positive actions, such as a form submit alert.'
			],
			[
				`<div class="${cSwatch} bg-warning-500" />`,
				'Warning',
				'[x]-warning-[50-900]',
				'Used for negative or harmful actions, such as errors.'
			],
			[`<div class="${cSwatch} bg-error-500" />`, 'Error', '[x]-error-[50-900]', 'May be used for errors, alerts, and invalid inputs.'],
			[
				`<div class="${cSwatch} bg-surface-500" />`,
				'Surface',
				'[x]-surface-[50-900]',
				'The base level colors, using for your background, cards, and other layered elements.'
			]
		]
	};
</script>

<div class="page-container">
	<!-- Breadcrumbs -->
	<Breadcrumb>
		<Crumb href="/guides/themes">Themes</Crumb>
		<Crumb>Colors</Crumb>
	</Breadcrumb>

	<!-- Header -->
	<header class="space-y-4">
		<h1>Theme Colors</h1>
		<p>This section provides a quick references for what each avialable theme color.</p>
	</header>

	<hr />

	<Table source={tableProps} />

	<!-- Reference -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<p>Skeleton themes extend Tailwind's color palette and can be used anywhere within your project. Here's a few examples:</p>
		<CodeBlock language="html" code={`<!-- Inlined classes -->\n<div class="bg-primary-500 text-secondary-500">Skeleton</div>`} />
		<CodeBlock language="html" code={`<!-- Tailwind opacity scale -->\n<div class="border border-primary-500/50">Skeleton</div>`} />
		<CodeBlock language="css" code={`/* Using Tailwind @apply */\n.example { @apply text-primary-500; }`} />
		<CodeBlock
			language="css"
			code={`/* Using CSS custom properties. Note that colors are RGB values! */\nbody { background: rgba(var(--color-surface-900) / 1); }`}
		/>
	</section>
</div>
