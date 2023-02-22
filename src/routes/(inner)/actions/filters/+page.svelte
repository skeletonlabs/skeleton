<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';

	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
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
		description: 'Apply Instagram-like filter affects to images.',
		imports: ['filter'],
		source: 'actions/Filters',
		parameters: [['<code>(default)</code>', 'string', '-', '-', 'The name of the filter, such as "Apollo".']]
	};

	// Local
	let activeImg = 48;
	$: imgPlaceholder = `https://i.pravatar.cc/512?img=${activeImg}`;
</script>

<!-- 
NOTE:
We keep filters localized since we
only utlize theme on this doc page.
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

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card variant-glass p-4 space-y-4">
			<header class="flex justify-center items-center space-x-4">
				<p>Image</p>
				<RadioGroup>
					<RadioItem bind:group={activeImg} name="img1" value={48}>1</RadioItem>
					<RadioItem bind:group={activeImg} name="img2" value={64}>2</RadioItem>
					<RadioItem bind:group={activeImg} name="img3" value={30}>3</RadioItem>
				</RadioGroup>
			</header>
			<div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
				<div class="flex flex-col items-center space-y-4 overflow-hidden">
					<img class="bg-surface-900 aspect-square w-full rounded-lg" src={imgPlaceholder} alt="example" />
					<code>Original</code>
				</div>
				<div class="flex flex-col items-center space-y-4 overflow-hidden">
					<img class="bg-surface-900 aspect-square w-full rounded-lg" src={imgPlaceholder} use:filter={'#Emerald'} alt="example" />
					<code>Emerald</code>
				</div>
				<div class="flex flex-col items-center space-y-4 overflow-hidden">
					<img class="bg-surface-900 aspect-square w-full rounded-lg" src={imgPlaceholder} use:filter={'#BlueNight'} alt="example" />
					<code>BlueNight</code>
				</div>
				<div class="flex flex-col items-center space-y-4 overflow-hidden">
					<img class="bg-surface-900 aspect-square w-full rounded-lg" src={imgPlaceholder} use:filter={'#XPro'} alt="example" />
					<code>XPro</code>
				</div>
				<div class="flex flex-col items-center space-y-4 overflow-hidden">
					<img class="bg-surface-900 aspect-square w-full rounded-lg" src={imgPlaceholder} use:filter={'#Summer84'} alt="example" />
					<code>Summer84</code>
				</div>
				<div class="flex flex-col items-center space-y-4 overflow-hidden">
					<img class="bg-surface-900 aspect-square w-full rounded-lg" src={imgPlaceholder} use:filter={'#Rustic'} alt="example" />
					<code>Rustic</code>
				</div>
				<div class="flex flex-col items-center space-y-4 overflow-hidden">
					<img class="bg-surface-900 aspect-square w-full rounded-lg" src={imgPlaceholder} use:filter={'#Apollo'} alt="example" />
					<code>Apollo</code>
				</div>
				<div class="flex flex-col items-center space-y-4 overflow-hidden">
					<img class="bg-surface-900 aspect-square w-full rounded-lg" src={imgPlaceholder} use:filter={'#GreenFall'} alt="example" />
					<code>GreenFall</code>
				</div>
				<div class="flex flex-col items-center space-y-4 overflow-hidden">
					<img class="bg-surface-900 aspect-square w-full rounded-lg" src={imgPlaceholder} use:filter={'#Noir'} alt="example" />
					<code>Noir</code>
				</div>
				<div class="flex flex-col items-center space-y-4 overflow-hidden">
					<img class="bg-surface-900 aspect-square w-full rounded-lg" src={imgPlaceholder} use:filter={'#NoirLight'} alt="example" />
					<code>NoirLight</code>
				</div>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>
				Add each filter you plan to use within scope of your filtered elements. To use globally throughout your application, add this to
				your application's root layout. Avoid importing filters you are not using.
			</p>
			<CodeBlock language="ts" code={`import { Emerald, BlueNight /* ... */  } from '@skeletonlabs/skeleton';`} />
			<CodeBlock language="html" code={`<Emerald />\n<BlueNight />`} />
		</section>
		<section class="space-y-4">
			<h2>Applying a Filter</h2>
			<p>Use either of the two menthods below to apply your desired filter. <u>The hash mark is required</u>.</p>
			<h3>Via the Skeleton Action</h3>
			<p>
				Use the following <a href="https://svelte.dev/tutorial/actions" target="_blank" rel="noreferrer">Svelte action</a> to to filter any element.
				Pass the filter name as the only parameter.
			</p>
			<CodeBlock language="ts" code={`import { filter } from '@skeletonlabs/skeleton';`} />
			<CodeBlock language="html" code={`<img src={myImageSrc} use:filter={'#BlueNight'}>`} />
			<h3>Via Style Attribute</h3>
			<p>Alternatively you may apply filters using inline CSS. This is what the action is doing under the hood.</p>
			<CodeBlock language="html" code={`<img src={myImageSrc} style="filter: url({'#Emerald'})">`} />
		</section>
		<hr />
		<section class="space-y-4">
			<h2>How It Works</h2>
			<!-- prettier-ignore -->
			<p>
				This feature is enabled by the use of native browser <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter" target="_blank" rel="noreferrer">SVG filters</a> via <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix" target="_blank" rel="noreferrer">feColorMatrix</a> transformations.
			</p>
		</section>
		<section class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
			<div class="space-y-2">
				<h2>Create a Custom Filter</h2>
				<!-- prettier-ignore -->
				<p>
					Use this tool by by <a href="https://twitter.com/rikschennink/" target="_blank" rel="noreferrer">Rik Schennink</a> to easily generate your own custom filters.
				</p>
			</div>
			<a class="btn variant-filled-secondary" href="https://fecolormatrix.com/" target="_blank" rel="noreferrer">
				<span>Create a Filter</span>
				<span><i class="fa-solid fa-up-right-from-square" /></span>
			</a>
		</section>
		<hr />
		<section class="space-y-4">
			<h2>Browser Support</h2>
			<p>
				Please be aware that <a href="https://caniuse.com/css-filters" target="_blank" rel="noreferrer">browser support</a> varies for this feature.
				Some filters are not functional in Safari, while Firefox is not supported at all. For non-supported browsers the filter will not be present
				but the image will still display, which allows for progressive enhancement.
			</p>
			<div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
				<div class="card p-4 variant-filled-primary"><h4>Chrome: Full</h4></div>
				<div class="card p-4 variant-filled-primary"><h4>Edge: Full</h4></div>
				<div class="card p-4 variant-filled-warning"><h4>Safari: Partial</h4></div>
				<div class="card p-4 variant-filled-error"><h4>Firefox: None</h4></div>
			</div>
		</section>
	</svelte:fragment>
</DocsShell>
