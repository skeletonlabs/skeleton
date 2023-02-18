<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';

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
			['<code>chip-[color]</code>', '<a href="/guides/themes/colors">Any theme color.</a>', 'Applies a variant style.'],
			['<code>chip-active</code>', '', 'Sets the default active state.'],
			['<code>chip-[color]-active</code>', '<a href="/guides/themes/colors">Any theme color.</a>', 'Set a colored active state.'],
			['<code>chip-disabled</code>', '', 'Applies disabled styling.']
		]
	};

	// Local
	let color: string = 'red';
	let flavors: Record<string, boolean> = {
		vanilla: true,
		chocolate: false,
		strawberry: false
	};

	function triggerToast(term: string): void {
		const t: ToastSettings = { message: `You selected the <u>${term}</u> action.` };
		toastStore.trigger(t);
	}

	function section(c: string): void {
		color = c;
	}

	function filter(flavor: string): void {
		flavors[flavor] = !flavors[flavor];
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<!-- prettier-ignore -->
		<div class="grid grid-cols-1 xl:grid-cols-3 gap-4">
			<div class="card p-4 space-y-4 text-center">
                <p>Actions</p>
                <div class="flex justify-center space-x-2">
                    <span class="chip variant-soft" on:click={()=>{triggerToast('like')}} on:keypress>
                        <i class="fa-solid fa-heart" />
                        <span>Like</span>
                    </span>
                    <span class="chip variant-soft" on:click={()=>{triggerToast('share')}} on:keypress>
                        <i class="fa-solid fa-share" />
                        <span>Share</span>
                    </span>
                </div>
            </div>
            <!-- Selection -->
			<div class="card p-4 space-y-4 text-center">
                <p>Selection</p>
                <div class="flex justify-center space-x-2">
                    {#each ['red', 'green', 'blue'] as c}
                        <span class="chip {color === c ? 'variant-filled-primary' : 'variant-soft-primary'}" on:click={()=>{section(c)}} on:keypress>
                            {#if color === c}<span><i class="fa-solid fa-check" /></span>{/if}
                            <span>{c}</span>
                        </span>
                    {/each}
                </div>
            </div>
            <!-- Filters -->
			<div class="card p-4 space-y-4 text-center">
                <p>Multi-Select</p>
                <div class="flex justify-center space-x-2">
                    {#each Object.keys(flavors) as f}
                    <span class="chip {flavors[f] ? 'variant-filled-secondary' : 'variant-ghost-secondary'}" on:click={()=>{filter(f)}} on:keypress>
                        {#if flavors[f]}<span><i class="fa-solid fa-check" /></span>{/if}
                        <span class="capitalize">{f}</span>
                    </span>
                    {/each}
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
		<!-- Variants -->
		<section class="space-y-4">
			<h2>Variants</h2>
			<p>Supports all standard variant styles via <code>.variant-[style]-[color]</code>.</p>
			<CodeBlock language="html" code={`<span class="chip variant-filled-primary">Skeleton</span>`} />
			<div class="card p-4 grid grid-cols-1 md:grid-cols-5 gap-4">
				<!-- filled -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Filled</p>
					<div><span class="chip variant-filled-primary">primary</span></div>
					<div><span class="chip variant-filled-secondary">secondary</span></div>
					<div><span class="chip variant-filled-tertiary">tertiary</span></div>
					<div><span class="chip variant-filled-success">success</span></div>
					<div><span class="chip variant-filled-warning">warning</span></div>
					<div><span class="chip variant-filled-error">error</span></div>
					<div><span class="chip variant-filled-surface">surface</span></div>
				</div>
				<!-- soft -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Soft</p>
					<div><span class="chip variant-soft-primary">primary</span></div>
					<div><span class="chip variant-soft-secondary">secondary</span></div>
					<div><span class="chip variant-soft-tertiary">tertiary</span></div>
					<div><span class="chip variant-soft-success">success</span></div>
					<div><span class="chip variant-soft-warning">warning</span></div>
					<div><span class="chip variant-soft-error">error</span></div>
					<div><span class="chip variant-soft-surface">surface</span></div>
				</div>
				<!-- ringed -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Ringed</p>
					<div><span class="chip variant-ringed-primary">primary</span></div>
					<div><span class="chip variant-ringed-secondary">secondary</span></div>
					<div><span class="chip variant-ringed-tertiary">tertiary</span></div>
					<div><span class="chip variant-ringed-success">success</span></div>
					<div><span class="chip variant-ringed-warning">warning</span></div>
					<div><span class="chip variant-ringed-error">error</span></div>
					<div><span class="chip variant-ringed-surface">surface</span></div>
				</div>
				<!-- ghost -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Ghost</p>
					<div><span class="chip variant-ghost-primary">primary</span></div>
					<div><span class="chip variant-ghost-secondary">secondary</span></div>
					<div><span class="chip variant-ghost-tertiary">tertiary</span></div>
					<div><span class="chip variant-ghost-success">success</span></div>
					<div><span class="chip variant-ghost-warning">warning</span></div>
					<div><span class="chip variant-ghost-error">error</span></div>
					<div><span class="chip variant-ghost-surface">surface</span></div>
				</div>
				<!-- glass -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Glass</p>
					<div><span class="chip variant-glass-primary">primary</span></div>
					<div><span class="chip variant-glass-secondary">secondary</span></div>
					<div><span class="chip variant-glass-tertiary">tertiary</span></div>
					<div><span class="chip variant-glass-success">success</span></div>
					<div><span class="chip variant-glass-warning">warning</span></div>
					<div><span class="chip variant-glass-error">error</span></div>
					<div><span class="chip variant-glass-surface">surface</span></div>
				</div>
			</div>
			<!-- Active State -->
			<section class="space-y-4">
				<h2>Active State</h2>
				<p>Swap out variant styles to reflect changes in state.</p>
				<CodeBlock language="ts" code={`$: chipStateClass = (someCondition) ? 'variant-filled-primary' : 'variant-soft-primary';`} />
				<CodeBlock language="html" code={`<span class="chip {chipStateClass}">...</span>`} />
			</section>
		</section></svelte:fragment
	>
</DocsShell>
