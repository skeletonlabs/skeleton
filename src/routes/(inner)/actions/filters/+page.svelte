<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	// Actions
	import { filter } from '$lib/actions/Filters/filter';
	// Filter SVGs
	import Apollo from '$lib/actions/Filters/svg-filters/Apollo.svelte';
	import BlueNight from '$lib/actions/Filters/svg-filters/BlueNight.svelte';
	import Emerald from '$lib/actions/Filters/svg-filters/Emerald.svelte';
	import GreenFall from '$lib/actions/Filters/svg-filters/GreenFall.svelte';
	import Noir from '$lib/actions/Filters/svg-filters/Noir.svelte';
	import NoirLight from '$lib/actions/Filters/svg-filters/NoirLight.svelte';
	import Rustic from '$lib/actions/Filters/svg-filters/Rustic.svelte';
	import Summer84 from '$lib/actions/Filters/svg-filters/Summer84.svelte';
	import XPro from '$lib/actions/Filters/svg-filters/XPro.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Action,
		name: 'Filters',
		description:
			'Applies a set of unique <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter" target="_blank" rel="noreferrer">SVG filters</a>. Best used with images, but also available to select components, such as Avatars.',
		imports: ['filter'],
		source: 'actions/Filters',
		parameters: [['<code>(default)</code>', 'string', '-', '-', 'The name of the filter, such as "Apollo".']]
	};

	// Local
	let imgPlaceholder = 'https://i.pravatar.cc/512?img=5';
</script>

<!-- NOTE: Keep Filter SVG Components localized -->
<Apollo />
<BlueNight />
<Emerald />
<GreenFall />
<Noir />
<NoirLight />
<Rustic />
<Summer84 />
<XPro />

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card p-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
			<div class="flex flex-col items-center space-y-4 overflow-hidden">
				<img class="bg-surface-900 aspect-square w-full rounded-lg" src={imgPlaceholder} alt="example" />
				<code>Original</code>
			</div>
			<div class="flex flex-col items-center space-y-4 overflow-hidden">
				<img class="bg-surface-900 aspect-square w-full rounded-lg" src={imgPlaceholder} use:filter={'Emerald'} alt="example" />
				<code>Emerald</code>
			</div>
			<div class="flex flex-col items-center space-y-4 overflow-hidden">
				<img class="bg-surface-900 aspect-square w-full rounded-lg" src={imgPlaceholder} use:filter={'BlueNight'} alt="example" />
				<code>BlueNight</code>
			</div>
			<div class="flex flex-col items-center space-y-4 overflow-hidden">
				<img class="bg-surface-900 aspect-square w-full rounded-lg" src={imgPlaceholder} use:filter={'XPro'} alt="example" />
				<code>XPro</code>
			</div>
			<div class="flex flex-col items-center space-y-4 overflow-hidden">
				<img class="bg-surface-900 aspect-square w-full rounded-lg" src={imgPlaceholder} use:filter={'Summer84'} alt="example" />
				<code>Summer84</code>
			</div>
			<div class="flex flex-col items-center space-y-4 overflow-hidden">
				<img class="bg-surface-900 aspect-square w-full rounded-lg" src={imgPlaceholder} use:filter={'Rustic'} alt="example" />
				<code>Rustic</code>
			</div>
			<div class="flex flex-col items-center space-y-4 overflow-hidden">
				<img class="bg-surface-900 aspect-square w-full rounded-lg" src={imgPlaceholder} use:filter={'Apollo'} alt="example" />
				<code>Apollo</code>
			</div>
			<div class="flex flex-col items-center space-y-4 overflow-hidden">
				<img class="bg-surface-900 aspect-square w-full rounded-lg" src={imgPlaceholder} use:filter={'GreenFall'} alt="example" />
				<code>GreenFall</code>
			</div>
			<div class="flex flex-col items-center space-y-4 overflow-hidden">
				<img class="bg-surface-900 aspect-square w-full rounded-lg" src={imgPlaceholder} use:filter={'Noir'} alt="example" />
				<code>Noir</code>
			</div>
			<div class="flex flex-col items-center space-y-4 overflow-hidden">
				<img class="bg-surface-900 aspect-square w-full rounded-lg" src={imgPlaceholder} use:filter={'NoirLight'} alt="example" />
				<code>NoirLight</code>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h2>Import SVG Filters</h2>
			<p>
				Add within scope of your filtered element. For global scope, add the following to your app's root component. Only import the filters
				you plan to use.
			</p>
			<CodeBlock language="javascript" code={`import { Emerald, BlueNight, /* ... */  } from '@skeletonlabs/skeleton';`} />
			<CodeBlock language="html" code={`<Emerald />\n<BlueNight />`} />
		</section>
		<section class="space-y-4">
			<h2>Applying a Filter</h2>
			<p>Use of of the two menthods below to apply your desired filter.</p>
			<h3>Via the Svelte Action</h3>
			<p>
				Use the following <a href="https://svelte.dev/tutorial/actions" target="_blank" rel="noreferrer">Svelte action</a> to to filter any element.
			</p>
			<CodeBlock language="html" code={`<img src={myImageSrc} use:filter={'BlueNight'}>`} />
			<h3>Via Style Attribute</h3>
			<p>Alternatively you may apply filters using CSS. This is what the action does for you. Note the hash mark is required.</p>
			<CodeBlock language="html" code={`<img src={myImageSrc} style="filter: url({'#Emerald'})">`} />
		</section>
		<hr />
		<section class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
			<div class="space-y-2">
				<h2>Create a Filter</h2>
				<p>
					Easily generate your own filters using this tool by <a href="https://twitter.com/rikschennink/" target="_blank" rel="noreferrer"
						>Rik Schennink</a
					>.
				</p>
			</div>
			<a class="btn btn-filled-secondary" href="https://fecolormatrix.com/" target="_blank" rel="noreferrer">Create Filter</a>
		</section>
		<hr />
		<section class="space-y-4">
			<h2>Browser Support</h2>
			<p>
				Please be aware that <a href="https://caniuse.com/css-filters" target="_blank" rel="noreferrer">browser support</a> varies. Some filters
				are not functional in Safari, while Firefox is not supported at all. We recommend using progressive enhancement when using filters in
				non-supported browsers.
			</p>
			<div class="grid grid-cols-1 md:grid-cols-4 gap-4">
				<div class="card p-4 !bg-success-500 text-on-success-token text-center">
					<h4>Chrome: Full</h4>
				</div>
				<div class="card p-4 !bg-success-500 text-on-success-token text-center">
					<h4>Edge: Full</h4>
				</div>
				<div class="card p-4 !bg-warning-500 text-on-warning-token text-center">
					<h4>Safari: Partial</h4>
				</div>
				<div class="card p-4 !bg-error-500 text-on-error-token text-center">
					<h4>Firefox: None</h4>
				</div>
			</div>
		</section>
	</svelte:fragment>
</DocsShell>
