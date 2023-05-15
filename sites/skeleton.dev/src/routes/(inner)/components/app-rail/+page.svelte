<script lang="ts">
	// Docs
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { AppRail, AppRailTile, CodeBlock, AppRailAnchor } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldAppRail from '@skeletonlabs/skeleton/components/AppRail/AppRail.svelte?raw&sveld';
	import sveldAppRailTile from '@skeletonlabs/skeleton/components/AppRail/AppRailTile.svelte?raw&sveld';
	import sveldAppRailAnchor from '@skeletonlabs/skeleton/components/AppRail/AppRailAnchor.svelte?raw&sveld';

	// Stores
	let currentTile = 0;

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
			{ label: 'AppRailTile', sveld: sveldAppRailTile, overrideProps: ['hover', 'active', 'spacing'] },
			{ label: 'AppRailAnchor', sveld: sveldAppRailAnchor, overrideProps: ['hover', 'active', 'spacing'] }
		],
		restProps: 'AppRailTile | AppRailAnchor'
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
					<AppRail>
						<!-- Lead -->
						<svelte:fragment slot="lead">
							<AppRailAnchor href="#" on:click={logger}>
								<i class="fa-solid fa-bars text-2xl" />
							</AppRailAnchor>
						</svelte:fragment>
						<!-- Default -->
						<AppRailTile bind:group={currentTile} name="tile-1" value={0}>
							<svelte:fragment slot="lead"><i class="fa-solid fa-image text-2xl" /></svelte:fragment>
							<span>Tile 1</span>
						</AppRailTile>
						<AppRailTile bind:group={currentTile} name="tile-2" value={1}>
							<svelte:fragment slot="lead"><i class="fa-solid fa-image text-2xl" /></svelte:fragment>
							<span>Tile 2</span>
						</AppRailTile>
						<AppRailTile bind:group={currentTile} name="tile-3" value={2}>
							<svelte:fragment slot="lead"><i class="fa-solid fa-image text-2xl" /></svelte:fragment>
							<span>Tile 3</span>
						</AppRailTile>
						<!-- Trail -->
						<svelte:fragment slot="trail">
							<AppRailAnchor href="https://github.com/" target="_blank" title="GitHub">
								<i class="fa-brands fa-github text-2xl" />
							</AppRailAnchor>
						</svelte:fragment>
					</AppRail>
					<div class="grid place-content-center place-items-center">
						<span class="badge variant-soft">Tile Value: {currentTile}</span>
					</div>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="ts" code={`let currentTile: number = 0;`} />
				<CodeBlock
					language="html"
					code={`
<AppRail>
	<svelte:fragment slot="lead">
		<AppRailAnchor href="/" >(icon)</AppRailAnchor>
	</svelte:fragment>
	<!-- --- -->
	<AppRailTile bind:group={currentTile} name="tile-1" value={0}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Tile 1</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-2" value={1}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Tile 2</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={2}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Tile 3</span>
	</AppRailTile>
	<!-- --- -->
	<svelte:fragment slot="trail">
		<AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
	</svelte:fragment>
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
			<h2 class="h2">Tiles</h2>
			<p>We offer two types of tiles below. Consider mixing and matching these as needed.</p>
			<h3 class="h3">AppRailTile</h3>
			<p>
				These tiles are intended to maintain state using an embedded <code class="code">checkbox</code> input. Use these within forms or to query
				submenus, similar to the Skeleton documentation sidebar.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="bg-surface-100-800-token overflow-hidden w-24">
						<AppRailTile bind:group={currentTile} name="tile-4" value={4} hover="hover:bg-primary-hover-token">
							<svelte:fragment slot="lead"><i class="fa-solid fa-image text-2xl" /></svelte:fragment>
							<span>Tile</span>
						</AppRailTile>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<p>The tile will show an active state when the group and tile <code class="code">value</code> match.</p>
					<CodeBlock language="ts" code={`let currentTile: number = 0;`} />
					<CodeBlock
						language="html"
						code={`
<AppRailTile bind:group={currentTile} name="tile-1" value={0}>
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	<span>Tile 1</span>
</AppRailTile>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<h3 class="h3">AppRailAnchor</h3>
			<p>
				These tiles operate as <code class="code">anchor</code> tags, supporting <em>href, target, rel</em>, and more. Use these when you
				wish to link to a new page when this tile is clicked.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="bg-surface-100-800-token overflow-hidden w-24">
						<AppRailAnchor href="/" target="_blank" title="Account" hover="hover:bg-primary-hover-token">
							<svelte:fragment slot="lead"><i class="fa-solid fa-image text-2xl" /></svelte:fragment>
							<span>Anchor</span>
						</AppRailAnchor>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>`} />
					<p>
						Unlike <code class="code">AppRailTile</code> you must explicitly set the active state via the <code class="code">selected</code>
						property.
					</p>
					<CodeBlock language="html" code={`<AppRailAnchor ... selected={true}>(icon)</AppRailAnchor>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Page State</h2>
			<!-- prettier-ignore -->
			<p>
				Using the <a class="anchor" href="https://kit.svelte.dev/docs/modules#$app-stores-page" target="_blank" rel="noreferrer">SvelteKit page store</a>, you can dynamically highlight the active link based on it's path.
			</p>
			<CodeBlock language="ts" code={`import { page } from '$app/stores';`} />
			<CodeBlock
				language="html"
				code={`
<AppRail>
	<AppRailTile href="/" selected={$page.url.pathname === '/'}>(icon)</AppRailTile>
	<AppRailTile href="/about" selected={$page.url.pathname === '/about'}>(icon)</AppRailTile>
</AppRail>
`}
			/>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Horizontal Orientation</h2>
			<!-- prettier-ignore -->
			<p>
				The App Rail is intended for vertical orientations only. For mobile interfaces, considering using a <a class="anchor" href="/components/tabs#navigation">navigation tab component</a>.
			</p>
		</section>
	</svelte:fragment>
</DocsShell>
