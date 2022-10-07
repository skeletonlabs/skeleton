<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings, type DocsShellTable } from '$docs/DocsShell/types';

	import Alert from '$lib/components/Alert/Alert.svelte';
	import AppShell from '$lib/components/AppShell/AppShell.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'App Shell',
		description: 'Responsive shell for controlling application layout.',
		imports: ['AppShell'],
		source: 'components/AppShell'
	};
	const properties: DocsShellTable[] = [
		{
			headings: ['Prop', 'Type', 'Default', 'Description'],
			source: [
				['<code>slotHeader</code>', 'string', '-', 'Provide arbitrary classes to the header slot element.'],
				['<code>slotSidebarLeft</code>', 'string', 'w-auto', 'Provide arbitrary classes to the header left sidebar element.'],
				['<code>slotSidebarRight</code>', 'string', 'w-auto', 'Provide arbitrary classes to the header right sidebar element.'],
				['<code>slotPageHeader</code>', 'string', '-', 'Provide arbitrary classes to the header page header element.'],
				['<code>slotPageContent</code>', 'string', '-', 'Provide arbitrary classes to the header page content element.'],
				['<code>slotPageFooter</code>', 'string', '-', 'Provide arbitrary classes to the header page footer element.'],
				['<code>slotFooter</code>', 'string', '-', 'Provide arbitrary classes to the footer element.']
			]
		}
	];
	const classes: DocsShellTable[] = [
		{
			description: 'Coming soon.'
			// headings: ['Selector', 'Description'],
			// source: [
			// 	['<code>.foo</code>', '...'],
			// 	['<code>.bar</code>', '...']
			// ]
		}
	];
	const slots: DocsShellTable[] = [
		{
			headings: ['Name', 'Description'],
			source: [
				['<code>default</code>', 'Your page content. Insert your router slot here.'],
				['<code>header</code>', 'Insert fixed header content, such as the <a href="/components/app-bar">AppBar component</a>.'],
				['<code>sidebarLeft</code>', 'Hidden when empty. Allows you to set fixed left sidebar content.'],
				['<code>sidebarRight</code>', 'Hidden when empty. Allows you to set fixed right sidebar content.'],
				['<code>pageHeader</code>', 'Insert content that resides above your page content. Great for global alerts.'],
				['<code>pageFooter</code>', 'Insert content that resides below your page content. Recommended for most layouts.'],
				['<code>footer</code>', 'Insert fixed footer content. Not recommended for most layouts.']
			]
		}
	];

	// Local
	let state: any = {
		header: true,
		sidebarLeft: true,
		sidebarRight: false,
		pageHeader: false,
		pageFooter: true,
		footer: false
	};
</script>

<DocsShell {settings} {properties} {classes} {slots}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
			<div class="card card-body flex justify-center items-center h-full">
				<AppShell>
					<svelte:fragment slot="header">
						{#if state.header}<div class="boxShape">Header</div>{/if}
					</svelte:fragment>
					<svelte:fragment slot="sidebarLeft">
						{#if state.sidebarLeft}<div class="boxShape">Sidebar Left</div>{/if}
					</svelte:fragment>
					<svelte:fragment slot="sidebarRight">
						{#if state.sidebarRight}<div class="boxShape">Sidebar Right</div>{/if}
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
			</div>
			<div class="card card-body flex justify-center items-center h-full">
				<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
					<SlideToggle bind:checked={state.header}>Header</SlideToggle>
					<SlideToggle bind:checked={state.sidebarLeft}>Left Sidebar</SlideToggle>
					<SlideToggle bind:checked={state.sidebarRight}>Right Sidebar</SlideToggle>
					<SlideToggle bind:checked={state.pageHeader}>Page Header</SlideToggle>
					<SlideToggle bind:checked={state.pageFooter}>Page Footer</SlideToggle>
					<SlideToggle bind:checked={state.footer}>Footer</SlideToggle>
				</div>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>For best results implement this in your app's root layout. The slot order does not matter.</p>
		<div class="space-y-4">
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
				The App Shell will need expand to fill your <em>body</em> tag. First, remove all wrapping elements in your root page. For SvelteKit that's located in
				<code>/src/app.html</code>.
			</p>
			<CodeBlock
				language="html"
				code={`
<body>
	<!-- Drop wrapping elements, allow your layout to be the root -->
	%sveltekit.body%
</body>
		`.trim()}
			/>
			<p>Then, disable overflow on your <em>html</em> and <em>body</em> tags to prevent duplicate scroll bars. Update your global stylesheet with the following.</p>
			<CodeBlock language="css" code={`html, body { @apply h-full overflow-hidden; }`} />
		</div>
		<div class="space-y-4">
			<h2>App Bar</h2>
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
		</div>
		<div class="space-y-4">
			<h2>Sidebars</h2>
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
				<strong>Tip:</strong> Consider hiding your sidebar for smaller screens and using a Drawer component. If you wish to use the same navigation lists in both, create a shared components that's inserted
				into both the Drawer and Sidebar slots. We use this technique on this site!
			</Alert>
		</div>
	</svelte:fragment>
</DocsShell>

<style lang="postcss">
	.boxShape {
		@apply bg-white/10 border border-white p-4 text-center text-xs h-full flex justify-center items-center;
	}
</style>
