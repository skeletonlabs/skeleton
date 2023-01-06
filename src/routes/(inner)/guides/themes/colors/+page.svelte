<script lang="ts">
	import type { TableSource } from '$lib/components/Table/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import Table from '$lib/components/Table/Table.svelte';

	const cSwatch = 'w-4 aspect-square rounded-full';
	const tableProps: TableSource = {
		head: ['Color', 'ID', 'Example', 'Description'],
		body: [
			[
				`<div class="${cSwatch} bg-primary-500" />`,
				'<code>primary</code>',
				'[style]-primary-[50-900]',
				'Typically your primary brand color.'
			],
			[
				`<div class="${cSwatch} bg-secondary-500" />`,
				'<code>secondary</code>',
				'[style]-secondary-[50-900]',
				'A secondary branding color for supplementary value.'
			],
			[
				`<div class="${cSwatch} bg-tertiary-500" />`,
				'<code>tertiary</code>',
				'[style]-tertiary-[50-900]',
				'A third and additional branding color.'
			],
			[
				`<div class="${cSwatch} bg-success-500" />`,
				'<code>success</code>',
				'[style]-success-[50-900]',
				'Used for successful or positive actions, such as a form submit alert.'
			],
			[
				`<div class="${cSwatch} bg-warning-500" />`,
				'<code>warning</code>',
				'[style]-warning-[50-900]',
				'Used for negative or harmful actions, such as errors.'
			],
			[
				`<div class="${cSwatch} bg-error-500" />`,
				'<code>error</code>',
				'[style]-error-[50-900]',
				'May be used for errors, alerts, and invalid inputs.'
			],
			[
				`<div class="${cSwatch} bg-surface-500" />`,
				'<code>surface</code>',
				'[style]-surface-[50-900]',
				'The base level colors, using for your background, cards, and other layered elements.'
			]
		]
	};
</script>

<div class="page-container">
	<!-- Breadcrumbs -->
	<ol class="breadcrumb">
		<li class="crumb"><a href="/guides/themes">Themes</a></li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li>Colors</li>
	</ol>

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
