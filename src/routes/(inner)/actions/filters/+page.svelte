<script lang="ts">
	// Components
	import Card from '$lib/components/Card/Card.svelte';
	import Badge from '$lib/components/Badge/Badge.svelte';
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
		<div class="flex justify-start items-center space-x-4">
			<h1>Filters</h1>
			<Badge background="bg-accent-500">Experimental</Badge>
		</div>
		<p>
			Bring life to your elements by applying a set of unique <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter" target="_blank">SVG filters</a>. Skeleton provides built-in
			support for filters within certain components, such as Avatars.
		</p>
	</header>

	<!-- Examples -->
	<Card slotBody="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
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
	</Card>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<h4>Import Filter Components</h4>
		<p>Add within scope of your filtered element. Only import the filters you plan to use. For global access, add the following to your app's root component:</p>
		<CodeBlock language="javascript" code={`import { Emerald, BlueNight, /* ... */  } from '@brainandbones/skeleton';`} />
		<CodeBlock language="html" code={`<Emerald />\n<BlueNight />`} />
		<p>You'll then need to apply the filter using one of the two techuniques listed below.</p>
		<h3>Option 1: Use the Svelte Action</h3>
		<p>
			Use our <a href="https://svelte.dev/tutorial/actions" target="_blank">Svelte action</a> to your preferred filter to any element.
		</p>
		<CodeBlock language="javascript" code={`import { filter } from '@brainandbones/skeleton';`} />
		<CodeBlock language="html" code={`<img src={myImageSrc} use:filter={'BlueNight'}>`} />
		<h3>Option 2: Using Only CSS</h3>
		<p>Alternatively you may apply filters using CSS. This is what the action does for you. Note the hash mark, this is required.</p>
		<CodeBlock language="html" code={`<img src={myImageSrc} style="filter: url({'#Emerald'})">`} />
	</section>

	<!-- Browser support -->
	<section class="space-y-4">
		<h2>Browser Support</h2>
		<p>
			Please be aware that <a href="https://caniuse.com/css-filters" target="_blank">browser support</a> varies. Some filters are not functional in Safari, while Firefox is not supported at all. We recommend
			using progressive enhancement for non-supported browsers.
		</p>
		<div class="grid grid-cols-1 md:grid-cols-4 gap-4">
			<Card background="bg-emerald-500" class="flex justify-center items-center px-4 min-h-[100px]">
				<h6>Chrome: Full</h6>
			</Card>
			<Card background="bg-emerald-500" class="flex justify-center items-center px-4 min-h-[100px]">
				<h6>Edge: Full</h6>
			</Card>
			<Card background="bg-orange-500" class="flex justify-center items-center px-4 min-h-[100px]">
				<h6>Safari: Partial</h6>
			</Card>
			<Card background="bg-rose-500" class="flex justify-center items-center px-4 min-h-[100px]">
				<h6>Firefox: None</h6>
			</Card>
		</div>
	</section>
</div>
