<script lang="ts">
	import DataTable from '$lib/Table/DataTable.svelte';
	import AppBar from '$lib/AppBar/AppBar.svelte';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
	import SvgIcon from '$lib/SvgIcon/SvgIcon.svelte';

	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['background', 'string', 'bg-surface-100 dark:bg-surface-800', 'Provide a class to set background color.'],
			['border', 'string', '-', 'Provide a class to set border styles.'],
			['padding', 'string', 'px-4 py-4 md:py-6', 'Provide a class to set padding.'],
			['shadow', 'string', 'shadow-xl', 'Provide a class to define a box shadow.'],
			['space', 'string', 'space-x-4', 'Provide a class to set horizontal spacing.'],
		]
	};
	const tableSlots: any = {
		headings: ['Name', 'Description'],
		source: [
			['default', 'Provide items that reside in the center, such as a search element.'],
			['lead', 'Provide leading items, such as a branding logo or page header.'],
			['trail', 'Provide trailing items, such as a navigation links.'],
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
		<p>Header element for the top of your layout. Pairs well with the <a href="/components/app-shell">App Shell</a>.</p>
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
	<svelte:fragment slot="lead">(branding)</svelte:fragment>
	(search)
	<svelte:fragment slot="trail">(navigation)</svelte:fragment>
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
