<script lang="ts">
	import DataTable from '$lib/Table/DataTable.svelte';
	import AppBar from '$lib/AppBar/AppBar.svelte';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
	import SvgIcon from '$lib/SvgIcon/SvgIcon.svelte';

	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['background', 'string', 'bg-surface-100 dark:bg-surface-800', 'Provide classes to set background color.'],
			['border', 'string', '-', 'Provide a class to set border styles.'],
			['padding', 'string', 'px-4 py-4 md:py-6', 'Provide a class to set padding.'],
			['shadow', 'string', 'shadow-xl', 'Provide a class to set box shadow.'],
			['space', 'string', 'space-x-4', 'Provide a class to set spacing.'],
		]
	};
	const tableSlots: any = {
		headings: ['Name', 'Description'],
		source: [
			['lead', 'Provide leading items, such as a logo branding.'],
			['default', 'Provide center items, such as a search element.'],
			['trail', 'Provide trailing items, such as a navigation and links.'],
		]
	};
	const tableA11y: any = {
		headings: ['Prop', 'Type', 'Description'],
		source: [
			['label', 'string', 'Provide a semantic label for the toolbar.'],
			['labelledby', 'string', 'Provide the ID of the element that labels the toolbar.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>App Bar</h1>
		<p>Top bar header element. Pairs well with the <a href="/components/app-shell">App Shell</a>.</p>
		<CodeBlock language="javascript" code={`import { AppBar } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<section class="space-y-4">
		<AppBar>
			<svelte:fragment slot="lead">
				<span class="text-base md:text-3xl font-bold uppercase">Logo</span>
			</svelte:fragment>
			<input type="search" placeholder="Search..." class="max-w-[200px]">
			<svelte:fragment slot="trail">
				<SvgIcon />
			</svelte:fragment>
		</AppBar>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="html" code={`
<AppBar>
	<svelte:fragment slot="lead">(lead)</svelte:fragment>
	(content)
	<svelte:fragment slot="trail">(trail)</svelte:fragment>
</AppBar>
		`.trim()} />
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<DataTable headings={tableSlots.headings} source={tableSlots.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<div class="flex justify-between items-center">
			<h2>Accessibility</h2>
			<a href="https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/" target="_blank">ARIA Guidelines</a>
		</div>
		<DataTable headings={tableA11y.headings} source={tableA11y.source} />
	</section>
</div>
