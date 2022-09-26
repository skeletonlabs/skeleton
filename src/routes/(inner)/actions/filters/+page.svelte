<script lang="ts">
	// Utilities
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

	// Placeholder Image
	let imgPlaceholder = 'https://i.pravatar.cc/512?img=5';
</script>

<!--
Filter SVG Components
NOTE: Keep these localized
-->
<Apollo />
<BlueNight />
<Emerald />
<GreenFall />
<Noir />
<NoirLight />
<Rustic />
<Summer84 />
<XPro />

<div class="!mt-0 space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Filters</h1>
		<p>
			Applies a set of unique <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter" target="_blank">SVG filters</a>. Best used with images, but also available to select components,
			such as Avatars.
		</p>
		<CodeBlock language="javascript" code={`import { filter } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Examples -->
	<div class="card card-body grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
		<h2 class="sr-only">Examples</h2>
		<div class="flex flex-col items-center space-y-4">
			<img class="bg-surface-900 aspect-square w-full rounded-lg overflow-hidden" src={imgPlaceholder} alt="example" />
			<code>Original</code>
		</div>
		<div class="flex flex-col items-center space-y-4">
			<img class="bg-surface-900 aspect-square w-full rounded-lg overflow-hidden" src={imgPlaceholder} use:filter={'Emerald'} alt="example" />
			<code>Emerald</code>
		</div>
		<div class="flex flex-col items-center space-y-4">
			<img class="bg-surface-900 aspect-square w-full rounded-lg overflow-hidden" src={imgPlaceholder} use:filter={'BlueNight'} alt="example" />
			<code>BlueNight</code>
		</div>
		<div class="flex flex-col items-center space-y-4">
			<img class="bg-surface-900 aspect-square w-full rounded-lg overflow-hidden" src={imgPlaceholder} use:filter={'XPro'} alt="example" />
			<code>XPro</code>
		</div>
		<div class="flex flex-col items-center space-y-4">
			<img class="bg-surface-900 aspect-square w-full rounded-lg overflow-hidden" src={imgPlaceholder} use:filter={'Summer84'} alt="example" />
			<code>Summer84</code>
		</div>
		<div class="flex flex-col items-center space-y-4">
			<img class="bg-surface-900 aspect-square w-full rounded-lg overflow-hidden" src={imgPlaceholder} use:filter={'Rustic'} alt="example" />
			<code>Rustic</code>
		</div>
		<div class="flex flex-col items-center space-y-4">
			<img class="bg-surface-900 aspect-square w-full rounded-lg overflow-hidden" src={imgPlaceholder} use:filter={'Apollo'} alt="example" />
			<code>Apollo</code>
		</div>
		<div class="flex flex-col items-center space-y-4">
			<img class="bg-surface-900 aspect-square w-full rounded-lg overflow-hidden" src={imgPlaceholder} use:filter={'GreenFall'} alt="example" />
			<code>GreenFall</code>
		</div>
		<div class="flex flex-col items-center space-y-4">
			<img class="bg-surface-900 aspect-square w-full rounded-lg overflow-hidden" src={imgPlaceholder} use:filter={'Noir'} alt="example" />
			<code>Noir</code>
		</div>
		<div class="flex flex-col items-center space-y-4">
			<img class="bg-surface-900 aspect-square w-full rounded-lg overflow-hidden" src={imgPlaceholder} use:filter={'NoirLight'} alt="example" />
			<code>NoirLight</code>
		</div>
	</div>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<h4>Import Filter Components</h4>
		<p>Add within scope of your filtered element. For global scope, add the following to your app's root component. Only import the filters you plan to use.</p>
		<CodeBlock language="javascript" code={`import { Emerald, BlueNight, /* ... */  } from '@brainandbones/skeleton';`} />
		<CodeBlock language="html" code={`<Emerald />\n<BlueNight />`} />
		<p>You'll then need to apply the filter using one of the two techniques listed below.</p>
		<h3>Option 1: Use the Svelte Action</h3>
		<p>
			Use the following <a href="https://svelte.dev/tutorial/actions" target="_blank">Svelte action</a> to to filter any element.
		</p>
		<CodeBlock language="html" code={`<img src={myImageSrc} use:filter={'BlueNight'}>`} />
		<h3>Option 2: Using Only CSS</h3>
		<p>Alternatively you may apply filters using CSS. This is what the action does for you. Note the hash mark is required.</p>
		<CodeBlock language="html" code={`<img src={myImageSrc} style="filter: url({'#Emerald'})">`} />
	</section>

	<!-- Browser support -->
	<section class="space-y-4">
		<h2>Browser Support</h2>
		<p>
			Please be aware that <a href="https://caniuse.com/css-filters" target="_blank">browser support</a> varies. Some filters are not functional in Safari, while Firefox is not supported at all. We recommend
			using progressive enhancement when using filters in non-supported browsers.
		</p>
		<div class="grid grid-cols-1 md:grid-cols-4 gap-4">
			<div class="card card-body !bg-emerald-500 text-center">
				<h4>Chrome: Full</h4>
			</div>
			<div class="card card-body !bg-emerald-500 text-center">
				<h4>Edge: Full</h4>
			</div>
			<div class="card card-body !bg-orange-500 text-center">
				<h4>Safari: Partial</h4>
			</div>
			<div class="card card-body !bg-rose-500 text-center">
				<h4>Firefox: None</h4>
			</div>
		</div>
	</section>
</div>
