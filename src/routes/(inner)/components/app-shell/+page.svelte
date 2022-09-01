<script lang="ts">
	import DataTable from '$lib/Table/DataTable.svelte';
	import AppShell from '$lib/AppShell/AppShell.svelte';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
	import SlideToggle from '$lib/SlideToggle/SlideToggle.svelte';

	// Local
	let sidebarState: boolean = true;

	// Tables
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
			['sidebarLeft', 'Hidden when empty. Allows you to set fixed left sidebar content.'],
			['sidebarRight', 'Hidden when empty. Allows you to set fixed right sidebar content.'],
			['pageHeader', 'Insert content that resides above your page content. Great for global alerts.'],
			['pageFooter', 'Insert content that resides below your page content. Add your site footer here.'],
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>App Shell</h1>
		<p>Responsive shell for controlling application layout.</p>
		<CodeBlock language="javascript" code={`import { AppShell } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<section class="space-y-4 flex flex-col items-center">
		<AppShell>
			<svelte:fragment slot="header"><div class="boxShape">Header</div></svelte:fragment>
			<svelte:fragment slot="sidebarLeft">
				{#if sidebarState}<div class="boxShape">Sidebar Left</div>{/if}
			</svelte:fragment>
			<svelte:fragment slot="sidebarRight">
				{#if sidebarState}<div class="boxShape">Sidebar Right</div>{/if}
			</svelte:fragment>
			<svelte:fragment slot="pageHeader"><div class="boxShape">Page Header</div></svelte:fragment>
			<svelte:fragment slot="pageFooter"><div class="boxShape">Page Footer</div></svelte:fragment>
			<div class="boxShape">Page Content</div>
		</AppShell>
		<SlideToggle bind:checked={sidebarState}>Show Sidebars</SlideToggle>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<p>For best results implement this in your app's root layout. Please note that slot order does not matter.</p>
		<CodeBlock language="html" code={`
<AppShell>
	<svelte:fragment slot="header">Header</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>
	<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- Insert you route slot here --->
	<slot />
</AppShell>
		`.trim()} />
		<p>The App Shell will expand to fill the parent container. Update your global styles for <em>html</em> and <em>body</em> tags to allow for this. Disable overflow to prevent duplicate scroll bars.</p>
		<CodeBlock language="css" code={`
/* Within your global stylesheet */
html, body { @apply w-screen h-screen overflow-hidden; }
		`.trim()} />
		<h4>Header</h4>
		<p>The <a href="/components/app-bar">AppBar component</a> should be embedded within the top-most <code>header</code> slot.</p>
		<h4>Sidebars</h4>
		<p>Please be aware that sidebars have a default width of <code>auto</code>. They will automatically collapse when empty or all content is hidden.</p>
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
