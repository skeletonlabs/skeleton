<script lang="ts">
	import Card from '$lib/Card/Card.svelte';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
	import { filter } from '$lib/Filters/filter';

    // Avatar Placeholder
	let placeholder = 'https://i.pravatar.cc/512?img=5';
</script>

<div class="space-y-8">

	<!-- Header -->
	<header class="space-y-4">
		<h2>Filters (beta)</h2>
		<p>Bring life to your elements by applying a set of unique <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter" target="_blank">SVG filters</a>. Skeleton provides built-in support for some components, such as Avatars.</p>
	</header>

	<!-- Examples -->
    <Card class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <div class="text-center">
            <img class="bg-surface-700 aspect-square w-full rounded-xl overflow-hidden" src={placeholder} alt="example" />
            <h6 class="mt-2">Original</h6>
        </div>
        <div class="text-center">
            <img class="bg-surface-700 aspect-square w-full rounded-xl overflow-hidden" src={placeholder} use:filter={'Emerald'} alt="example" />
            <h6 class="mt-2">Emerald</h6>
        </div>
        <div class="text-center">
            <img class="bg-surface-700 aspect-square w-full rounded-xl overflow-hidden" src={placeholder} use:filter={'BlueNight'} alt="example" />
            <h6 class="mt-2">BlueNight</h6>
        </div>
        <div class="text-center">
            <img class="bg-surface-700 aspect-square w-full rounded-xl overflow-hidden" src={placeholder} use:filter={'XPro'} alt="example" />
            <h6 class="mt-2">XPro</h6>
        </div>
        <div class="text-center">
            <img class="bg-surface-700 aspect-square w-full rounded-xl overflow-hidden" src={placeholder} use:filter={'Summer84'} alt="example" />
            <h6 class="mt-2">Summer84</h6>
        </div>
        <div class="text-center">
            <img class="bg-surface-700 aspect-square w-full rounded-xl overflow-hidden" src={placeholder} use:filter={'Rustic'} alt="example" />
            <h6 class="mt-2">Rustic</h6>
        </div>
         <div class="text-center">
            <img class="bg-surface-700 aspect-square w-full rounded-xl overflow-hidden" src={placeholder} use:filter={'Apollo'} alt="example" />
            <h6 class="mt-2">Apollo</h6>
        </div>
        <div class="text-center">
            <img class="bg-surface-700 aspect-square w-full rounded-xl overflow-hidden" src={placeholder} use:filter={'GreenFall'} alt="example" />
            <h6 class="mt-2">GreenFall</h6>
        </div>
        <div class="text-center">
            <img class="bg-surface-700 aspect-square w-full rounded-xl overflow-hidden" src={placeholder} use:filter={'Noir'} alt="example" />
            <h6 class="mt-2">Noir</h6>
        </div>
        <div class="text-center">
            <img class="bg-surface-700 aspect-square w-full rounded-xl overflow-hidden" src={placeholder} use:filter={'NoirLight'} alt="example" />
            <h6 class="mt-2">NoirLight</h6>
        </div>
    </Card>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
        <p>Apply a filter to any element using a Svelte Action. Then import and insert the filter component within your app, page, or component scope.</p>
		<CodeBlock
			language="javascript"
			code={`<script>import {filter, Emerald, BlueNight, ...} from '@brainandbones/skeleton';</\script>`}
		/>
		<CodeBlock
			language="html"
			code={`<!-- Insert this into the same scope as your filtered elements -->\n<BlueNight />`}
		/>
		<CodeBlock
			language="html"
			code={`<!-- Apply via filter -->\n<img use:filter={'BlueNight'} {src}>`}
		/>
		<CodeBlock
			language="html"
			code={`<!-- Apply via inline style -->\n<img style="filter: url({'#BlueNight'})" {src}>`}
		/>
	</section>

    <!-- Browser support -->
    <section class="space-y-4">
		<h2>Browser Support</h2>
        <p>Please be aware that <a href="https://caniuse.com/css-filters" target="_blank">browser support</a> varies. We recommend you utilize progressive enhancement for non-supported browsers. Firefox is disabled by default.</p>
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
