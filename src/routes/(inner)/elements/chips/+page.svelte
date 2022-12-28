<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Types
	import type { ToastSettings } from '$lib/utilities/Toast/types';

	// Components
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import { toastStore } from '$lib/utilities/Toast/stores';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Chips',
		description: 'Interactive elements for actions, selection, or filtering.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/chips'],
		source: 'styles/elements/chips.css',
		classes: [
			['<code>chip</code>', '', 'Provides the standard chip style.'],
			['<code>chip-[color]</code>', '', 'Sets a variant style.'],
			['chip-active', '', 'Provides an active state style.'],
			[
				'chip-[color]-active',
				'primary | secondary | tertiary | success | warning | error | surface',
				'Provides a colored active state style.'
			]
		]
	};

	// Local
	let states: any = {
		vanilla: false,
		chocolate: false,
		strawberry: false
	};
	let color: string = 'red';

	function triggerToast(term: string): void {
		const t: ToastSettings = { message: `You tapped <u>${term}</u>.` };
		toastStore.trigger(t);
	}

	function section(c: string): void {
		color = c;
	}

	function filter(flavor: string): void {
		states[flavor] = !states[flavor];
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<!-- prettier-ignore -->
		<div class="grid grid-cols-1 xl:grid-cols-3 gap-4">
			<div class="card p-4 space-y-4 text-center">
                <p>Actions</p>
                <div class="flex justify-center space-x-4">
                    <span class="chip" on:click={()=>{triggerToast('like')}} on:keypress>
                        <i class="fa-solid fa-heart" />
                        <span>Like</span>
                    </span>
                    <span class="chip" on:click={()=>{triggerToast('share')}} on:keypress>
                        <i class="fa-solid fa-share" />
                        <span>Share</span>
                    </span>
                </div>
            </div>
            <!-- Selection -->
			<div class="card p-4 space-y-4 text-center">
                <p>Selection</p>
                <div class="flex justify-center space-x-4">
                    <span class="chip chip-primary" class:chip-active={color==='red'} on:click={()=>{section('red')}} on:keypress>
                        {#if color==='red'}<span><i class="fa-solid fa-check" /></span>{/if}
                        <span>Red</span>
                    </span>
                    <span class="chip chip-primary" class:chip-active={color==='blue'} on:click={()=>{section('blue')}} on:keypress>
                        {#if color==='blue'}<span><i class="fa-solid fa-check" /></span>{/if}
                        <span>Blue</span>
                    </span>
                    <span class="chip chip-primary" class:chip-active={color==='green'} on:click={()=>{section('green')}} on:keypress>
                        {#if color==='green'}<span><i class="fa-solid fa-check" /></span>{/if}
                        <span>Green</span>
                    </span>
                </div>
            </div>
            <!-- Filters -->
			<div class="card p-4 space-y-4 text-center">
                <p>Filters</p>
                <div class="flex justify-center space-x-4">
                    <span class="chip chip-secondary" class:chip-secondary-active={states.vanilla} on:click={()=>{filter('vanilla')}} on:keypress>
                        {#if states.vanilla}<span><i class="fa-solid fa-check" /></span>{/if}
                        <span>Vanilla</span>
                    </span>
                    <span class="chip chip-secondary" class:chip-secondary-active={states.chocolate} on:click={()=>{filter('chocolate')}} on:keypress>
                        {#if states.chocolate}<span><i class="fa-solid fa-check" /></span>{/if}
                        <span>Chocolate</span>
                    </span>
                    <span class="chip chip-secondary" class:chip-secondary-active={states.strawberry} on:click={()=>{filter('strawberry')}} on:keypress>
                        {#if states.strawberry}<span><i class="fa-solid fa-check" /></span>{/if}
                        <span>Strawberry</span>
                    </span>
                </div>
            </div>
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>Apply <code>.chip</code> to any inline element, such as a <em>span</em> or <em>anchor</em> tag.</p>
			<CodeBlock language="html" code={`<span class="chip">Skeleton</span>`} />
		</section>
		<section class="space-y-4">
			<h2>Variants</h2>
			<p>Append <code>.chip-[color]</code> class to set a variant color.</p>
			<CodeBlock language="html" code={`<span class="chip chip-primary">Skeleton</span>`} />
			<div class="card p-4 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
				<span class="chip chip-primary">primary</span>
				<span class="chip chip-secondary">secondary</span>
				<span class="chip chip-tertiary">tertiary</span>
				<span class="chip chip-success">success</span>
				<span class="chip chip-warning">warning</span>
				<span class="chip chip-error">error</span>
			</div>
		</section>
		<section class="space-y-4">
			<h2>Selection Chips</h2>
			<p>Dynamically add <code>.chip-active</code> or <code>.chip-[color]-active</code> classes to show an active state.</p>
			<CodeBlock language="ts" code={`let color: string = 'red';`} />
			<CodeBlock language="html" code={`<span class="chip" class:chip-active={color === 'red'}>Red</span>`} />
		</section>
		<section class="space-y-4">
			<h2>Filter Chips</h2>
			<p>Dynamically add <code>.chip-active</code> or <code>.chip-[color]-active</code> classes to show an active state.</p>
			<CodeBlock language="ts" code={`const chipState: boolean = true;`} />
			<CodeBlock language="html" code={`<span class="chip" class:chip-active={chipState}>Vanilla</span>`} />
		</section>
	</svelte:fragment>
</DocsShell>
