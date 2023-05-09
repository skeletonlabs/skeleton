<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	// Docs
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import AppRail from '$lib/components/AppRail/AppRail.svelte';
	import AppRailTile from '$lib/components/AppRail/AppRailTile.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	// Sveld
	import sveldAppRail from '$lib/components/AppRail/AppRail.svelte?raw&sveld';
	import sveldAppRailTile from '$lib/components/AppRail/AppRailTile.svelte?raw&sveld';

	// Stores
	const storeValue: Writable<number> = writable(0);

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'App Rail',
		description: 'A side navigation rail component',
		imports: ['AppRail', 'AppRailTile'],
		source: 'components/AppRail',
		// aria: 'https://www.w3.org/WAI/ARIA/apg/',
		components: [
			{ label: 'AppRail', sveld: sveldAppRail },
			{ label: 'AppRailTile', sveld: sveldAppRailTile }
		],
		restProps: 'AppRailTile'
	};

	function logger(): void {
		console.log('App rail click event fired.');
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview regionViewport="!text-current">
			<svelte:fragment slot="preview">
				<div class="card bg-surface-50-900-token rounded-none h-[480px] grid grid-cols-[auto_1fr] w-full">
					<AppRail selected={storeValue}>
						<!-- Lead -->
						<svelte:fragment slot="lead">
							<AppRailTile on:click={logger}>
								<i class="fa-solid fa-bars text-2xl" />
							</AppRailTile>
						</svelte:fragment>
						<!-- Default -->
						<AppRailTile label="Tile 1" value={0}>
							<i class="fa-solid fa-image text-2xl" />
						</AppRailTile>
						<AppRailTile label="Tile 2" value={1}>
							<i class="fa-solid fa-image text-2xl" />
						</AppRailTile>
						<AppRailTile label="Tile 3" value={2}>
							<i class="fa-solid fa-image text-2xl" />
						</AppRailTile>
						<!-- Trail -->
						<svelte:fragment slot="trail">
							<AppRailTile value={3} href="https://github.com/" target="_blank" title="Trail slot tile.">
								<i class="fa-brands fa-github text-2xl" />
							</AppRailTile>
						</svelte:fragment>
					</AppRail>
					<div class="grid place-content-center place-items-center">
						<span class="badge variant-soft">Selected Tile: {$storeValue}</span>
					</div>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock
					language="ts"
					code={`
const storeValue: Writable<number> = writable(0);
`}
				/>
				<CodeBlock
					language="html"
					code={`
<AppRail selected={storeValue}>
	<AppRailTile label="Tile 1" value={0}>(icon)</AppRailTile>
	<AppRailTile label="Tile 2" value={1}>(icon)</AppRailTile>
	<AppRailTile label="Tile 3" value={2}>(icon)</AppRailTile>
</AppRail>
`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Tile -->
		<section class="space-y-4">
			<h2 class="h2">Anchor Tiles</h2>
			<p>
				Use <code class="code">tag="a"</code> to convert any tile to an anchor link, then append
				<em>href, target, rel</em>, and other attributes as needed.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="bg-surface-100-800-token overflow-hidden w-24">
						<AppRailTile href="/components/app-rail#anchor-tiles" label="Tile 1" class="bg-primary-hover-token text-token">
							<i class="fa-solid fa-image text-2xl" />
						</AppRailTile>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<AppRailTile href="/my/page/route">(icon)</AppRailTile>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Page State</h2>
			<!-- prettier-ignore -->
			<p>
				The simplest way to update the active anchor link is to pass a
				<a class="anchor" href="https://svelte.dev/docs#run-time-svelte-store-derived" target="_blank" rel="noreferrer">derived</a> store that takes its value from
				<a class="anchor" href="https://kit.svelte.dev/docs/modules#$app-stores-page" target="_blank" rel="noreferrer">$page.url.pathname</a>.
			</p>
			<p>
				The store value will be compared to the <code>href</code> attribute of each tile if no <code>value</code> attribute is provided.
			</p>
			<CodeBlock
				language="ts"
				code={`
import { page } from '$app/stores';
import { derived } from 'svelte/store';

const selected = derived(page, $page => $page.url.pathname);
`}
			/>
			<CodeBlock
				language="html"
				code={`
<AppRail {selected}>
	<AppRailTile label="Home" href="/">(icon)</AppRailTile>
	<AppRailTile label="About" href="/about">(icon)</AppRailTile>
	<AppRailTile label="Login" href="/login">(icon)</AppRailTile>
</AppRail>
`}
			/>
		</section>
	</svelte:fragment>
</DocsShell>
