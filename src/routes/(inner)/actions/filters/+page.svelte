<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings, type DocsShellTable } from '$docs/DocsShell/types';

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
			'Applies a set of unique <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter" target="_blank">SVG filters</a>. Best used with images, but also available to select components, such as Avatars.',
		imports: ['filter'],
		source: 'actions/Filters'
		// dependencies: [{ label: 'Highlight.js', url: 'https://highlightjs.org/' }],
	};
	const properties: DocsShellTable[] = [
		{
			headings: ['Key', 'Type', 'Required', 'Description'],
			source: [['<code>default</code>', 'string', '&check;', 'The name of the filter, such as "Apollo".']]
		}
	];

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

<DocsShell {settings} {properties}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card card-body grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
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
			<p>Add within scope of your filtered element. For global scope, add the following to your app's root component. Only import the filters you plan to use.</p>
			<CodeBlock language="javascript" code={`import { Emerald, BlueNight, /* ... */  } from '@brainandbones/skeleton';`} />
			<CodeBlock language="html" code={`<Emerald />\n<BlueNight />`} />
		</section>
		<section class="space-y-4">
			<h2>Applying a Filter</h2>
			<p>Use of of the two menthods below to apply your desired filter.</p>
			<h3>Via the Svelte Action</h3>
			<p>
				Use the following <a href="https://svelte.dev/tutorial/actions" target="_blank">Svelte action</a> to to filter any element.
			</p>
			<CodeBlock language="html" code={`<img src={myImageSrc} use:filter={'BlueNight'}>`} />
			<h3>Via Style Attribute</h3>
			<p>Alternatively you may apply filters using CSS. This is what the action does for you. Note the hash mark is required.</p>
			<CodeBlock language="html" code={`<img src={myImageSrc} style="filter: url({'#Emerald'})">`} />
		</section>
	</svelte:fragment>
</DocsShell>
