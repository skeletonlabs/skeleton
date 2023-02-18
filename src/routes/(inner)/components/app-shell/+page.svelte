<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';

	import AppShell from '$lib/components/AppShell/AppShell.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	import sveldAppShell from '$lib/components/AppShell/AppShell.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'App Shell',
		description: 'Responsive shell for controlling application layout.',
		imports: ['AppShell'],
		source: 'components/AppShell',
		components: [{ sveld: sveldAppShell }]
	};

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

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<div class="space-y-4">
			<p>
				The <span class="badge variant-soft-primary">shaded</span> regions represent the portion of the page that scrolls vertically.
			</p>
			<section class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
				<div class="card variant-ghost overflow-hidden flex justify-center items-center h-full">
					<AppShell>
						<svelte:fragment slot="header">
							{#if state.header}<div class="boxShape">header</div>{/if}
						</svelte:fragment>
						<svelte:fragment slot="sidebarLeft">
							{#if state.sidebarLeft}<div class="boxShape">sidebarLeft</div>{/if}
						</svelte:fragment>
						<svelte:fragment slot="sidebarRight">
							{#if state.sidebarRight}<div class="boxShape">sidebarRight</div>{/if}
						</svelte:fragment>
						<svelte:fragment slot="pageHeader">
							{#if state.pageHeader}<div class="boxShape bg-primary-500/20">pageHeader</div>{/if}
						</svelte:fragment>
						<svelte:fragment slot="pageFooter">
							{#if state.pageFooter}<div class="boxShape bg-primary-500/20">pageFooter</div>{/if}
						</svelte:fragment>
						<div class="boxShape bg-primary-500/20">(route slot)</div>
						<svelte:fragment slot="footer">
							{#if state.footer}<div class="boxShape">footer</div>{/if}
						</svelte:fragment>
					</AppShell>
				</div>
				<div class="card p-4 flex justify-center items-center h-full">
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
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>
				Implement the App Shell in your app's root layout in <code>/src/routes/+layout.svelte</code>. Slot order does not matter.
			</p>
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
</AppShell>`}
			/>
		</section>
		<section class="space-y-4">
			<div class="flex items-center space-x-2">
				<h2>Global Styles</h2>
				<span class="badge variant-filled-warning">Required</span>
			</div>
			<!-- prettier-ignore -->
			<p>
				The App Shell will need to expand to fill all available space within your app's <em>body</em> tag. Open <code>/src/app.html</code> and add the following classes.
				<a href="https://github.com/sveltejs/kit/issues/6244#issuecomment-1226600661" target="_blank" rel="noreferrer">This wrapping element is required</a> and the style of <code>display: contents</code> should remain.
			</p>
			<CodeBlock
				language="html"
				code={`<body>\n\t<div style="display: contents" class="h-full overflow-hidden">%sveltekit.body%</div>\n</body>`.trim()}
			/>
			<p>
				Then update your global stylesheet with the following. This will disable overflow for <em>html</em> and <em>body</em> tags to prevent
				duplicate scroll bars.
			</p>
			<CodeBlock language="css" code={`html, body { @apply h-full overflow-hidden; }`} />
		</section>
		<section class="space-y-4">
			<h2>Using an App Bar</h2>
			<p>
				If you wish for your <a href="/components/app-bar">App Bar</a> component to remain fixed at the top of the page, embed it into the
				top-most <code>header</code> slot.
			</p>
			<CodeBlock
				language="html"
				code={`
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>Skeleton</AppBar>
	</svelte:fragment>
	<!-- ... -->
</AppShell>`}
			/>
			<p>If you wish for your App Bar to scroll with the page, insert it into the <code>pageHeader</code> slot.</p>
			<CodeBlock
				language="html"
				code={`
<AppShell>
	<svelte:fragment slot="pageHeader">
		<AppBar>Skeleton</AppBar>
	</svelte:fragment>
	<!-- ... -->
</AppShell>`}
			/>
			<p>If you wish to have a sticky <code>pageHeader</code>, apply the following App Shell prop styles.</p>
			<CodeBlock language="html" code={`<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">...</AppShell>`} />
		</section>
		<section class="space-y-4">
			<h2>Responsive Sidebars</h2>
			<p>
				Sidebars have a default width of <code>auto</code>. This means they will automatically collapse when their contents are
				<em>empty</em>
				or
				<em>hidden</em>. Use this to remove the sidebar with CSS media queries via
				<a href="https://tailwindcss.com/docs/responsive-design" target="_blank" rel="noreferrer">Tailwind's responsive breakpoints</a>.
			</p>
			<CodeBlock
				language="html"
				code={`
<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<!-- Hidden below Tailwind's large breakpoint -->
		<div id="sidebar-left" class="hidden lg:block">Sidebar</div>
	</svelte:fragment>
</AppShell>`}
			/>
			<aside class="alert variant-ghost-warning">
				<i class="fa-solid fa-lightbulb text-2xl" />
				<div class="alert-message">Consider hiding your sidebar for smaller screens and replace it with a Drawer.</div>
				<div class="alert-actions">
					<a href="/blog/how-to-implement-a-responsive-sidebar-drawer" target="_blank" rel="noreferrer" class="btn variant-filled">
						View Tutorial
					</a>
				</div>
			</aside>
		</section>
		<section class="space-y-4">
			<h2>Tracking Scroll Position</h2>
			<p>Use the <code>on:scroll</code> event to detect when the page region is scrolled vertically.</p>
			<CodeBlock
				language="ts"
				code={`
function scrollHandler(event: UIEvent & { currentTarget: EventTarget & HTMLDivElement; }) {
	console.log(event.currentTarget.scrollTop);
}
			`}
			/>
			<CodeBlock language="html" code={`<AppShell ... on:scroll={scrollHandler}>`} />
		</section>
	</svelte:fragment>
</DocsShell>

<style lang="postcss">
	.boxShape {
		@apply border border-surface-500 p-4 text-center text-xs h-full flex justify-center items-center;
	}
</style>
