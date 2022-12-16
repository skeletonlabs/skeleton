<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Components
	import AppRail from '$lib/components/AppRail/AppRail.svelte';
	import AppRailTile from '$lib/components/AppRail/AppRailTile.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-expect-error sveld import
	import sveldAppRail from '$lib/components/AppRail/AppRail.svelte?raw&sveld';
	// @ts-expect-error sveld import
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
		<div class="card !bg-accent-500/5 overflow-hidden h-[480px] grid grid-cols-[auto_1fr]">
			<AppRail selected={storeValue}>
				<!-- Lead -->
				<svelte:fragment slot="lead">
					<AppRailTile title="Lead">
						<SvgIcon name="skull" width="w-6" height="h-6" fill="fill-primary-500" />
					</AppRailTile>
				</svelte:fragment>
				<!-- Default -->
				<AppRailTile label="Tile 1" value={1}>
					<SvgIcon name="cubes" width="w-6" height="h-6" />
				</AppRailTile>
				<AppRailTile label="Tile 2" value={2}>
					<SvgIcon name="cubes" width="w-6" height="h-6" />
				</AppRailTile>
				<AppRailTile label="Schedule Candidates" tag="a" value={3}>
					<SvgIcon name="cubes" width="w-6" height="h-6" />
				</AppRailTile>
				<!-- Trail -->
				<svelte:fragment slot="trail">
					<AppRailTile tag="a" href="https://github.com/" target="_blank" title="Trail">
						<SvgIcon name="github" width="w-6" height="h-6" />
					</AppRailTile>
				</svelte:fragment>
			</AppRail>
			<div class="grid place-content-center place-items-center"><code>Selected: {$storeValue}</code></div>
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
	<svelte:fragment slot="lead">(lead)</svelte:fragment>
	<!-- (AppRailTiles Here) -->
	<svelte:fragment slot="trail">(trail)</svelte:fragment>
</AppRail>
`}
			/>
		</div>
		<!-- Tile -->
		<div class="space-y-4">
			<h2>Adding Tiles</h2>
			<p>Create one or more rail tile components within your app rail's available slots.</p>
			<CodeBlock language="html" code={`<AppRailTile label="Tile" title="Tile" value={1}>(icon)</AppRailTile>`} />
			<p>
				You can use <code>tag="a"</code> to convert any tile to an anchor link, then append
				<em>href, target, rel</em>, and other attributes as needed.
			</p>
			<CodeBlock language="html" code={`<AppRailTile tag="a" href="https://github.com/">(icon)</AppRailTile>`} />
		</div>
	</svelte:fragment>
</DocsShell>
