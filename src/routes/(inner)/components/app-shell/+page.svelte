<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import DataTable from '$lib/components/Table/DataTable.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	import AppShell from '$lib/components/AppShell/AppShell.svelte';
	import Alert from '$lib/components/Alert/Alert.svelte';

	// Local
	let state: any = {
		header: true,
		sidebars: true,
		pageHeader: true,
		pageFooter: true,
		footer: false
	};

	// Tables
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			['slotHeader', 'string', '-', 'Provide arbitrary classes to the header slot element.'],
			['slotSidebarLeft', 'string', 'w-auto', 'Provide arbitrary classes to the header left sidebar element.'],
			['slotSidebarRight', 'string', 'w-auto', 'Provide arbitrary classes to the header right sidebar element.'],
			['slotPageHeader', 'string', '-', 'Provide arbitrary classes to the header page header element.'],
			['slotPageContent', 'string', '-', 'Provide arbitrary classes to the header page content element.'],
			['slotPageFooter', 'string', '-', 'Provide arbitrary classes to the header page footer element.'],
			['slotFooter', 'string', '-', 'Provide arbitrary classes to the footer element.']
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
			['pageFooter', 'Insert content that resides below your page content. Recommended for most layouts.'],
			['footer', 'Insert fixed footer content. Not recommended for most layouts.']
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

	<!-- Sandbox -->
	<section class="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-4">
		<Card slotBody="flex justify-center items-center h-full">
			<AppShell>
				<svelte:fragment slot="header">
					{#if state.header}<div class="boxShape">Header</div>{/if}
				</svelte:fragment>
				<svelte:fragment slot="sidebarLeft">
					{#if state.sidebars}<div class="boxShape">Sidebar Left</div>{/if}
				</svelte:fragment>
				<svelte:fragment slot="sidebarRight">
					{#if state.sidebars}<div class="boxShape">Sidebar Right</div>{/if}
				</svelte:fragment>
				<svelte:fragment slot="pageHeader">
					{#if state.pageHeader}<div class="boxShape">Page Header</div>{/if}
				</svelte:fragment>
				<svelte:fragment slot="pageFooter">
					{#if state.pageFooter}<div class="boxShape">Page Footer</div>{/if}
				</svelte:fragment>
				<div class="boxShape">Page Content</div>
				<svelte:fragment slot="footer">
					{#if state.footer}<div class="boxShape">Footer</div>{/if}
				</svelte:fragment>
			</AppShell>
		</Card>
		<Card slotBody="flex justify-center items-center h-full">
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
				<SlideToggle bind:checked={state.header}>Header</SlideToggle>
				<SlideToggle bind:checked={state.sidebars}>Sidebars</SlideToggle>
				<SlideToggle bind:checked={state.pageHeader}>Page Header</SlideToggle>
				<SlideToggle bind:checked={state.pageFooter}>Page Footer</SlideToggle>
				<SlideToggle bind:checked={state.footer}>Footer</SlideToggle>
			</div>
		</Card>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<p>For best results implement this in your app's root layout. The slot order does not matter.</p>
		<CodeBlock
			language="html"
			code={`
<AppShell>
	<svelte:fragment slot="header">Header</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>
	<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
		`}
		/>
		<p>
			The App Shell will need to expand to fill your <em>body</em> tag. First, remove all wrapping elements in your root HTML page. For SvelteKit this is located in
			<code>/src/app.html</code>.
		</p>
		<CodeBlock
			language="html"
			code={`
<body>
	<!-- SvelteKit Body Import -->
	%sveltekit.body%
</body>
		`}
		/>
		<p>Then, disable overflow on your <em>html</em> and <em>body</em> tags to prevent duplicate scroll bars. Update your global stylesheet with the following.</p>
		<CodeBlock language="css" code={`html, body { @apply h-full overflow-hidden; }`} />
		<h4>App Bar</h4>
		<p>If you wish for your <a href="/components/app-bar">App Bar</a> component to remain fixed at the top of the page, embed it into the top-most <code>header</code> slot.</p>
		<CodeBlock
			language="html"
			code={`
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>Skeleton</AppBar>
	</svelte:fragment>
	<!-- ... -->
</AppShell>
		`}
		/>
		<h4>Sidebars</h4>
		<p>
			Please be aware that sidebars have a default width of <code>auto</code>. Sidebars will automatically collapse when their contents are empty or hidden. This is useful if you wish to hide the
			sidebar with CSS media queries via <a href="https://tailwindcss.com/docs/responsive-design" target="_blank">Tailwind's responsive breakpoints</a>.
		</p>
		<CodeBlock
			language="html"
			code={`
<AppShell>
	<svelte:fragment slot="sidebarLeft">
	    <!-- Hidden below Tailwind's large breakpoint -->
		<div id="sidebar-left" class="hidden lg:block">Sidebar</div>
	</svelte:fragment>
</AppShell>
		`}
		/>
		<Alert>
			<svelte:fragment slot="title">Pro Tip</svelte:fragment>
			Consider hiding your sidebar for smaller screens and using a Drawer component. If you wish to use the same navigation lists in both, create a shared components that's inserted into both the Drawer
			and Sidebar slots. We use this technique on this site!
		</Alert>
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
	.boxShape {
		@apply bg-warning-500/10 border border-warning-500 p-4 text-center text-xs h-full flex justify-center items-center;
	}
</style>
