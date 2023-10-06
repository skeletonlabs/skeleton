<script lang="ts">
	import LayoutPage from '$lib/layouts/LayoutPage/LayoutPage.svelte';
	// Components
	import { CodeBlock, Table, type TableSource } from '@skeletonlabs/skeleton';

	const cSwatch = 'w-4 aspect-square rounded-full';
	const tableProps: TableSource = {
		head: ['Color', 'ID', 'Example'],
		body: [
			[`<div class="${cSwatch} bg-primary-500" />`, '[style]-primary-[50-900]', 'Typically your primary brand color.'],
			[`<div class="${cSwatch} bg-secondary-500" />`, '[style]-secondary-[50-900]', 'A secondary branding color for supplementary value.'],
			[`<div class="${cSwatch} bg-tertiary-500" />`, '[style]-tertiary-[50-900]', 'A third and additional branding color.'],
			[
				`<div class="${cSwatch} bg-success-500" />`,
				'[style]-success-[50-900]',
				'Used for successful or positive actions, such as a form submit alert.'
			],
			[`<div class="${cSwatch} bg-warning-500" />`, '[style]-warning-[50-900]', 'Used for negative or harmful actions, such as warnings.'],
			[`<div class="${cSwatch} bg-error-500" />`, '[style]-error-[50-900]', 'May be used for errors, alerts, and invalid inputs.'],
			[`<div class="${cSwatch} bg-surface-500" />`, '[style]-surface-[50-900]', 'The base level colors, used for backgrounds.']
		]
	};

	const shadesArr = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
	const colorsArr = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'surface'];
</script>

<LayoutPage>
	<header class="space-y-4">
		<h1 class="h1">Colors</h1>
		<p>Skeleton themes extend Tailwind's color palette and can be used anywhere within your project.</p>
	</header>

	<hr />

	<Table source={tableProps} />

	<!-- Color Palette -->
	<section class="space-y-4">
		<h2 class="h2">Color Palette</h2>
		<p>Shade 500 is used as the default value.</p>
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-2">
			<!-- primary -->
			<div class="rounded-container-token overflow-hidden">
				<div class="bg-primary-500 p-2 py-4"><span class="text-on-primary-token">Primary</span></div>
				<div class="bg-primary-50 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">50</span></div>
				<div class="bg-primary-100 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">100</span></div>
				<div class="bg-primary-200 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">200</span></div>
				<div class="bg-primary-300 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">300</span></div>
				<div class="bg-primary-400 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">400</span></div>
				<div class="bg-primary-500 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">500 ★</span></div>
				<div class="bg-primary-600 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">600</span></div>
				<div class="bg-primary-700 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">700</span></div>
				<div class="bg-primary-800 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">800</span></div>
				<div class="bg-primary-900 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">900</span></div>
			</div>
			<!-- secondary -->
			<div class="rounded-container-token overflow-hidden">
				<div class="bg-secondary-500 p-2 py-4"><span class="text-on-secondary-token">Secondary</span></div>
				<div class="bg-secondary-50 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">50</span></div>
				<div class="bg-secondary-100 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">100</span></div>
				<div class="bg-secondary-200 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">200</span></div>
				<div class="bg-secondary-300 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">300</span></div>
				<div class="bg-secondary-400 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">400</span></div>
				<div class="bg-secondary-500 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">500 ★</span></div>
				<div class="bg-secondary-600 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">600</span></div>
				<div class="bg-secondary-700 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">700</span></div>
				<div class="bg-secondary-800 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">800</span></div>
				<div class="bg-secondary-900 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">900</span></div>
			</div>
			<!-- tertiary -->
			<div class="rounded-container-token overflow-hidden">
				<div class="bg-tertiary-500 p-2 py-4"><span class="text-on-tertiary-token">Tertiary</span></div>
				<div class="bg-tertiary-50 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">50</span></div>
				<div class="bg-tertiary-100 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">100</span></div>
				<div class="bg-tertiary-200 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">200</span></div>
				<div class="bg-tertiary-300 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">300</span></div>
				<div class="bg-tertiary-400 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">400</span></div>
				<div class="bg-tertiary-500 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">500 ★</span></div>
				<div class="bg-tertiary-600 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">600</span></div>
				<div class="bg-tertiary-700 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">700</span></div>
				<div class="bg-tertiary-800 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">800</span></div>
				<div class="bg-tertiary-900 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">900</span></div>
			</div>
			<!-- success -->
			<div class="rounded-container-token overflow-hidden">
				<div class="bg-success-500 p-2 py-4"><span class="text-on-success-token">Success</span></div>
				<div class="bg-success-50 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">50</span></div>
				<div class="bg-success-100 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">100</span></div>
				<div class="bg-success-200 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">200</span></div>
				<div class="bg-success-300 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">300</span></div>
				<div class="bg-success-400 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">400</span></div>
				<div class="bg-success-500 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">500 ★</span></div>
				<div class="bg-success-600 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">600</span></div>
				<div class="bg-success-700 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">700</span></div>
				<div class="bg-success-800 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">800</span></div>
				<div class="bg-success-900 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">900</span></div>
			</div>
			<!-- warning -->
			<div class="rounded-container-token overflow-hidden">
				<div class="bg-warning-500 p-2 py-4"><span class="text-on-warning-token">Warning</span></div>
				<div class="bg-warning-50 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">50</span></div>
				<div class="bg-warning-100 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">100</span></div>
				<div class="bg-warning-200 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">200</span></div>
				<div class="bg-warning-300 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">300</span></div>
				<div class="bg-warning-400 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">400</span></div>
				<div class="bg-warning-500 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">500 ★</span></div>
				<div class="bg-warning-600 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">600</span></div>
				<div class="bg-warning-700 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">700</span></div>
				<div class="bg-warning-800 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">800</span></div>
				<div class="bg-warning-900 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">900</span></div>
			</div>
			<!-- error -->
			<div class="rounded-container-token overflow-hidden">
				<div class="bg-error-500 p-2 py-4"><span class="text-on-error-token">Error</span></div>
				<div class="bg-error-50 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">50</span></div>
				<div class="bg-error-100 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">100</span></div>
				<div class="bg-error-200 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">200</span></div>
				<div class="bg-error-300 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">300</span></div>
				<div class="bg-error-400 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">400</span></div>
				<div class="bg-error-500 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">500 ★</span></div>
				<div class="bg-error-600 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">600</span></div>
				<div class="bg-error-700 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">700</span></div>
				<div class="bg-error-800 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">800</span></div>
				<div class="bg-error-900 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">900</span></div>
			</div>
			<!-- surface -->
			<div class="rounded-container-token overflow-hidden col-span-2">
				<div class="bg-surface-500 p-2 py-4"><span class="text-on-surface-token">Surface</span></div>
				<div class="bg-surface-50 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">50</span></div>
				<div class="bg-surface-100 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">100</span></div>
				<div class="bg-surface-200 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">200</span></div>
				<div class="bg-surface-300 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">300</span></div>
				<div class="bg-surface-400 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">400</span></div>
				<div class="bg-surface-500 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">500 ★</span></div>
				<div class="bg-surface-600 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">600</span></div>
				<div class="bg-surface-700 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">700</span></div>
				<div class="bg-surface-800 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">800</span></div>
				<div class="bg-surface-900 p-2"><span class="bg-black/30 text-white p-1 text-xs rounded">900</span></div>
			</div>
		</div>
	</section>

	<!-- Reference -->
	<section class="space-y-4">
		<h2 class="h2">Usage</h2>
		<CodeBlock language="html" code={`<!-- Inlined classes -->\n<div class="bg-primary-500 text-secondary-500">Skeleton</div>`} />
		<CodeBlock language="html" code={`<!-- Tailwind opacity scale -->\n<div class="border border-primary-500/30">Skeleton</div>`} />
		<CodeBlock language="css" code={`/* Using Tailwind @apply */\n.example { @apply text-primary-500; }`} />
		<CodeBlock
			language="css"
			code={`/* Using CSS custom properties. Note that colors are RGB values! */\nbody { background: rgba(var(--color-surface-900) / 1); }`}
		/>
	</section>
</LayoutPage>
