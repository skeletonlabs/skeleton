<script lang="ts">
	import DataTable from '$lib/Table/DataTable.svelte';
	import AppShell from '$lib/AppShell/AppShell.svelte';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';

	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Required', 'Description'],
		source: [
			['sidebarLeftWidth', 'string', 'w-auto', '-', 'Provide a class to set the left sidebar width.'],
			['sidebarRightWidth', 'string', 'w-auto', '-', 'Provide a class to set the right sidebar width.'],
		]
	};
	const tableSlots: any = {
		headings: ['Name', 'Description'],
		source: [
			['default', 'Your page content. Insert your router slot here.'],
			['header', 'Insert fixed header content, such as the <a href="/components/app-bar">AppBar component</a>.'],
			['sidebarLeft', 'Hidden when empty, allows you to set fixed sidebar content.'],
			['sidebarRight', 'Hidden when empty, allows you to set fixed sidebar content.'],
			['pageHeader', 'Insert content that should remain fixed above your page content.'],
			['pageFooter', 'Insert content that should remain fixed below your page content.'],
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>App Shell</h1>
		<p>Responsive shell for controlling your application layout.</p>
		<CodeBlock language="javascript" code={`import { AppShell } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<AppShell>
		<svelte:fragment slot="header"><div class="boxShape">Header</div></svelte:fragment>
		<svelte:fragment slot="sidebarLeft"><div class="boxShape">Sidebar Left</div></svelte:fragment>
		<svelte:fragment slot="sidebarRight"><div class="boxShape">Sidebar Right</div></svelte:fragment>
		<svelte:fragment slot="pageHeader"><div class="boxShape">Page Header</div></svelte:fragment>
		<svelte:fragment slot="pageFooter"><div class="boxShape">Page Footer</div></svelte:fragment>
		<div class="boxShape">Page Content</div>
	</AppShell>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<p>It's recommended to implement this in your app's root layout. It will expand to fill the width/height of the parent. Slot order does not matter.</p>
		<CodeBlock language="html" code={`
<AppShell>
	<svelte:fragment slot="header">Header</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>
	<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- Insert you route content here --->
	<slot />
</AppShell>
		`.trim()} />
		<h4>Header</h4>
		<p>It's recommended you embed your <a href="/components/app-bar">AppBar component</a> within the top-most <code>header</code> slot element.</p>
		<h4>Sidebars</h4>
		<p>Please be aware that sidebars have a default width of <code>auto</code>. This means they automatically collapse when content is hidden.</p>
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
</div>

<style lang="postcss">
	.boxShape { @apply bg-warning-500/10 border border-warning-500 p-4 text-center text-xs h-full flex justify-center items-center; }
</style>
