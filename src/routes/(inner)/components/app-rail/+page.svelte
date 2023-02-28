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
	const storeValue: Writable<number> = writable(1);

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'App Rail',
		description: 'A side navigation rail component',
		imports: ['AppRail'],
		source: 'components/AppRail',
		// aria: 'https://www.w3.org/WAI/ARIA/apg/',
		components: [
			{ label: 'AppRail', sveld: sveldAppRail },
			{ label: 'AppRailTile', sveld: sveldAppRailTile }
		],
		restProps: 'AppRailTile'
	};
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
							<AppRailTile tag="a" href="/components/app-rail" title="Lead slot tile.">
								<i class="fa-solid fa-bars text-2xl" />
							</AppRailTile>
						</svelte:fragment>
						<!-- Default -->
						<AppRailTile label="Tile 1" value={1}>
							<i class="fa-solid fa-image text-2xl" />
						</AppRailTile>
						<AppRailTile label="Tile 2" value={2}>
							<i class="fa-solid fa-image text-2xl" />
						</AppRailTile>
						<AppRailTile label="Tile 3" value={3}>
							<i class="fa-solid fa-image text-2xl" />
						</AppRailTile>
						<!-- Trail -->
						<svelte:fragment slot="trail">
							<AppRailTile tag="a" href="https://github.com/" target="_blank" title="Trail slot tile.">
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
			<h2>Anchor Tiles</h2>
			<p>
				Use <code>tag="a"</code> to convert any tile to an anchor link, then append
				<em>href, target, rel</em>, and other attributes as needed.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="bg-surface-100-800-token overflow-hidden w-24">
						<AppRailTile tag="a" href="/components/app-rail#anchor-tiles" label="Tile 1" class="bg-primary-hover-token text-token">
							<i class="fa-solid fa-image text-2xl" />
						</AppRailTile>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<AppRailTile tag="a" href="/my/page/route">(icon)</AppRailTile>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2>Page State</h2>
			<!-- prettier-ignore -->
			<p>
				To set an active state for an anchor link, compare the tile <em>href</em> URL to the active page URL using
				<a href="https://kit.svelte.dev/docs/modules#$app-stores-page" target="_blank" rel="noreferrer">$page.url.pathname</a>. Then set a background color or other visual indicator via the Svelte class syntax.
			</p>
			<CodeBlock language="ts" code={`import { page } from '$app/stores';`} />
			<CodeBlock
				language="html"
				code={`
<AppRailTile tag="a" href={tileUrl} class:bg-primary-500={tileUrl === $page.url.pathname}>
	(icon)
</AppRailTile>
`}
			/>
		</section>
	</svelte:fragment>
</DocsShell>
