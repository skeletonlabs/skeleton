<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
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
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Action,
		name: 'Filters',
		description: 'Apply Instagram-like filter effects to images.',
		imports: ['filter'],
		source: 'actions/Filters',
		parameters: [['<code>(default)</code>', 'string', '-', '-', 'The name of the filter, such as "Apollo".']]
	};

	// Local
	let activeImg = 48;
	$: imgPlaceholder = `https://i.pravatar.cc/512?img=${activeImg}`;
	let method = 0;
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
		<DocsPreview>
			<svelte:fragment slot="preview">
				<section class="p-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
					<div class="flex flex-col items-center space-y-4 overflow-hidden">
						<img class="aspect-square w-full rounded-container-token" src={imgPlaceholder} alt="example" />
						<span class="badge variant-soft">Original</span>
					</div>
					<div class="flex flex-col items-center space-y-4 overflow-hidden">
						<img class="aspect-square w-full rounded-container-token" src={imgPlaceholder} use:filter={'#Emerald'} alt="example" />
						<span class="badge variant-soft">Emerald</span>
					</div>
					<div class="flex flex-col items-center space-y-4 overflow-hidden">
						<img class="aspect-square w-full rounded-container-token" src={imgPlaceholder} use:filter={'#BlueNight'} alt="example" />
						<span class="badge variant-soft">BlueNight</span>
					</div>
					<div class="flex flex-col items-center space-y-4 overflow-hidden">
						<img class="aspect-square w-full rounded-container-token" src={imgPlaceholder} use:filter={'#XPro'} alt="example" />
						<span class="badge variant-soft">XPro</span>
					</div>
					<div class="flex flex-col items-center space-y-4 overflow-hidden">
						<img class="aspect-square w-full rounded-container-token" src={imgPlaceholder} use:filter={'#Summer84'} alt="example" />
						<span class="badge variant-soft">Summer84</span>
					</div>
					<div class="flex flex-col items-center space-y-4 overflow-hidden">
						<img class="aspect-square w-full rounded-container-token" src={imgPlaceholder} use:filter={'#Rustic'} alt="example" />
						<span class="badge variant-soft">Rustic</span>
					</div>
					<div class="flex flex-col items-center space-y-4 overflow-hidden">
						<img class="aspect-square w-full rounded-container-token" src={imgPlaceholder} use:filter={'#Apollo'} alt="example" />
						<span class="badge variant-soft">Apollo</span>
					</div>
					<div class="flex flex-col items-center space-y-4 overflow-hidden">
						<img class="aspect-square w-full rounded-container-token" src={imgPlaceholder} use:filter={'#GreenFall'} alt="example" />
						<span class="badge variant-soft">GreenFall</span>
					</div>
					<div class="flex flex-col items-center space-y-4 overflow-hidden">
						<img class="aspect-square w-full rounded-container-token" src={imgPlaceholder} use:filter={'#Noir'} alt="example" />
						<span class="badge variant-soft">Noir</span>
					</div>
					<div class="flex flex-col items-center space-y-4 overflow-hidden">
						<img class="aspect-square w-full rounded-container-token" src={imgPlaceholder} use:filter={'#NoirLight'} alt="example" />
						<span class="badge variant-soft">NoirLight</span>
					</div>
				</section>
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<div class="text-center">
					<RadioGroup>
						<RadioItem bind:group={activeImg} name="source" value={48}>1</RadioItem>
						<RadioItem bind:group={activeImg} name="source" value={64}>2</RadioItem>
						<RadioItem bind:group={activeImg} name="source" value={30}>3</RadioItem>
					</RadioGroup>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<p>Import the filter and each filter component you wish to use.</p>
				<CodeBlock language="ts" code={`import { filter, Emerald, BlueNight /* ... */  } from '@skeletonlabs/skeleton';`} />
				<p>Implement each filter component. For global scope add these to your root layout.</p>
				<CodeBlock language="html" code={`<Emerald />\n<BlueNight />`} />
				<p>Apply the filter to your desired element.</p>
				<CodeBlock language="html" code={`<img ... use:filter={'#Emerald'} />`} />
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>
				Add each filter you plan to use within the scope of your filtered elements. To use globally throughout your application, add this to
				your application's root layout. Avoid importing filters you are not using.
			</p>
		</section>
		<section class="space-y-4">
			<h2>Applying a Filter</h2>
			<p>Use either of the two methods below to apply your desired filter. <u>The hash mark is required</u>.</p>
			<TabGroup regionPanel="space-y-4">
				<Tab bind:group={method} name="method" value={0}>Via Action</Tab>
				<Tab bind:group={method} name="method" value={1}>Via Attribute</Tab>
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					{#if method === 0}
						<p>
							Use the following <a href="https://svelte.dev/tutorial/actions" target="_blank" rel="noreferrer">Svelte action</a> to filter
							any element. Pass the filter name as the only parameter.
						</p>
						<CodeBlock language="ts" code={`import { filter } from '@skeletonlabs/skeleton';`} />
						<CodeBlock language="html" code={`<img src={myImageSrc} use:filter={'#BlueNight'}>`} />
					{:else if method === 1}
						<p>Alternatively you may apply filters using inline CSS. This is what the action is doing under the hood.</p>
						<CodeBlock language="html" code={`<img src={myImageSrc} style="filter: url({'#Emerald'})">`} />
					{/if}
				</svelte:fragment>
			</TabGroup>
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
					Use this tool by <a href="https://twitter.com/rikschennink/" target="_blank" rel="noreferrer">Rik Schennink</a> to easily generate your own custom filters.
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
