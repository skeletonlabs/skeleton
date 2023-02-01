<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Components
	import AppRail from '$lib/components/AppRail/AppRail.svelte';
	import AppRailTile from '$lib/components/AppRail/AppRailTile.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

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
		<div class="card !bg-surface-500/5 overflow-hidden h-[480px] grid grid-cols-[auto_1fr]">
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
			<div class="grid place-content-center place-items-center"><code>Selected Tile: {$storeValue}</code></div>
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Rail -->
		<div class="space-y-4">
			<p>Create a Svelte writable store to house the selected tile value.</p>
			<CodeBlock
				language="ts"
				code={`
import { writable, type Writable } from 'svelte/store';\n
const storeValue: Writable<number> = writable(1);
`}
			/>
			<p>Implement your App Rail component and append the <code>selected</code> prop and store.</p>
			<CodeBlock
				language="html"
				code={`
<AppRail selected={storeValue}>
	<svelte:fragment slot="lead">
		<!-- AppRailTiles -->
	</svelte:fragment>
	<!-- AppRailTiles -->
	<svelte:fragment slot="trail">
		<!-- AppRailTiles -->
	</svelte:fragment>
</AppRail>
`}
			/>
			<h3>Adding Tiles</h3>
			<p>Create one or more rail tile components within your app rail's available slots.</p>
			<CodeBlock language="html" code={`<AppRailTile label="Tile" title="Tile" value={1}>(icon)</AppRailTile>`} />
		</div>
		<!-- Tile -->
		<div class="space-y-4">
			<h2>Anchor Tiles</h2>
			<p>
				Alternatively, you can use <code>tag="a"</code> to convert any tile to an anchor link, then append
				<em>href, target, rel</em>, and other attributes as needed.
			</p>
			<CodeBlock language="html" code={`<AppRailTile tag="a" href="/my/page/route">(icon)</AppRailTile>`} />
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
		</div>
	</svelte:fragment>
</DocsShell>
