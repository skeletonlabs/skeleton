<script lang="ts">
	import Card from '$lib/Card/Card.svelte';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';

	// Filters (auto)
	// import { filter } from '$lib/Filters/filter-auto';

    // Filters (manual)
	import { filter, BlueNight, Emerald, Nineties, Rustic, Summer84, XPro } from '$lib/Filters/filter';

    // Avatar Placeholder
	let placeholder = 'https://i.pravatar.cc/512';
</script>

<div class="space-y-8">

    <!-- Filter SVG Components -->
    <BlueNight />
    <Emerald />
    <Nineties />
    <Rustic />
    <Summer84 />
    <XPro />

	<!-- Header -->
	<header class="space-y-4">
		<h2>Filters (beta)</h2>
		<p>Bring life to your elements by applying a set of unique <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter" target="_blank">SVG filters</a>. Skeleton provides built-in support for some components, such as Avatars.</p>
	</header>

	<!-- Examples -->
    <Card class="grid grid-cols-4 gap-4">
        <div class="text-center">
            <img class="bg-surface-700 aspect-square w-full rounded-xl" src={placeholder} alt="example" />
            <h6 class="mt-2">Original</h6>
        </div>
        <div class="text-center">
            <img class="bg-surface-700 aspect-square w-full rounded-xl" src={placeholder} use:filter={'Emerald'} alt="example" />
            <h6 class="mt-2">Emerald</h6>
        </div>
        <div class="text-center">
            <img class="bg-surface-700 aspect-square w-full rounded-xl" src={placeholder} use:filter={'BlueNight'} alt="example" />
            <h6 class="mt-2">BlueNight</h6>
        </div>
        <div class="text-center">
            <img class="bg-surface-700 aspect-square w-full rounded-xl" src={placeholder} use:filter={'XPro'} alt="example" />
            <h6 class="mt-2">XPro (in-progress)</h6>
        </div>
        <div class="text-center">
            <img class="bg-surface-700 aspect-square w-full rounded-xl" src={placeholder} use:filter={'Summer84'} alt="example" />
            <h6 class="mt-2">Summer84</h6>
        </div>
        <div class="text-center">
            <img class="bg-surface-700 aspect-square w-full rounded-xl" src={placeholder} use:filter={'Rustic'} alt="example" />
            <h6 class="mt-2">Rustic</h6>
        </div>
        <!-- Disabled due to Chrome bug for Chris -->
        <!-- <div class="text-center">
            <img class="bg-surface-700 aspect-square w-full rounded-xl" src={placeholder} use:filter={'Nineties'} alt="example" />
            <h6 class="mt-2">Nineties</h6>
        </div> -->
    </Card>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
        <p>Apply a filter to any element using a Svelte Action. Then import and insert the filter component within your app, page, or component scope.</p>
		<CodeBlock
			language="javascript"
			code={`<script>import {filter, BlueNight} from '@brainandbones/skeleton';</\script>`}
		/>
		<CodeBlock
			language="html"
			code={`<!-- Insert this once in scope of your filtered element -->\n<BlueNight />\n<!-- Apply the filter to any element -->\n<img use:filter={'BlueNight'} src='imageSource'>`}
		/>
	</section>

    <!-- Browser support -->
    <section class="space-y-4">
		<h2>Browser Support</h2>
        <p>Please note that browser support varies. Please follow best practices of progressive enhancement for non-supported browsers.</p>
        <Card class="grid grid-cols-4 gap-4">
            <div class="text-center bg-emerald-500 px-4 py-2 rounded">
                <h6>Chrome: Full</h6>
            </div>
            <div class="text-center bg-emerald-500 px-4 py-2 rounded">
                <h6>Edge: Full</h6>
            </div>
            <div class="text-center bg-orange-500 px-4 py-2 rounded">
                <h6>Safari: Partial</h6>
            </div>
            <div class="text-center bg-rose-500 px-4 py-2 rounded">
                <h6>Firefox: None</h6>
            </div>
        </Card>
    </section>
</div>
