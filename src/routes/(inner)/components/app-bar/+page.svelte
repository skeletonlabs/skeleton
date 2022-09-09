<script lang="ts">
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import AppBar from '$lib/components/AppBar/AppBar.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['background', 'string', 'bg-surface-100 dark:bg-surface-800', 'Provide classes to set background color.'],
			['border', 'string', '-', 'Provide classes to set border styles.'],
			['padding', 'string', 'px-4 py-4 md:py-6', 'Provide classes to set padding.'],
			['shadow', 'string', 'shadow-lg', 'Provide classes to define a box shadow.'],
			['space', 'string', 'space-x-4', 'Provide classes to set horizontal spacing.'],
			['slotLead', 'string', '-', 'Provide arbitrary classes for the leading slot element.'],
			['slotCenter', 'string', '-', 'Provide arbitrary classes for the center slot element.'],
			['slotTrail', 'string', '-', 'Provide arbitrary classes for the trailing slot element.']
		]
	};
	const tableSlots: any = {
		headings: ['Name', 'Description'],
		source: [
			['default', 'Provides content within the center of the bar, such as a search element.'],
			['lead', 'Provides content on the left end of the bar, such a logo.'],
			['trail', 'Provides content on the right end of the bar, such as a navigation.']
		]
	};
	const tableA11y: any = {
		headings: ['Prop', 'Type', 'Description'],
		source: [
			['label', 'string', 'Provide semantic ID for the ARIA label.'],
			['labelledby', 'string', 'Provide the ID of the element that labels the toolbar.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>App Bar</h1>
		<p>A header element for the top of your app layout. Pairs well with the <a href="/components/app-shell">App Shell</a>.</p>
		<CodeBlock language="javascript" code={`import { AppBar } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<section class="space-y-4">
		<AppBar>
			<svelte:fragment slot="lead">
				<span class="text-base md:text-3xl font-bold uppercase">Logo</span>
			</svelte:fragment>
			<input type="search" placeholder="Search..." class="max-w-[200px]" />
			<svelte:fragment slot="trail">
				<div class="flex items-center space-x-6">
					<a href="/components/app-bar">Link</a>
					<SvgIcon />
				</div>
			</svelte:fragment>
		</AppBar>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock
			language="html"
			code={`
<AppBar>
	<svelte:fragment slot="lead">(lead)</svelte:fragment>
	(center)
	<svelte:fragment slot="trail">(trail)</svelte:fragment>
</AppBar>
		`.trim()}
		/>
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
