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
                <div class="flex justify-center space-x-2">
                    {#each ['red', 'green', 'blue'] as c}
                        <span class="chip chip-primary" class:chip-active={ color === c } on:click={()=>{section(c)}} on:keypress>
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
                    <span class="chip chip-secondary" class:chip-secondary-active={flavors[f]} on:click={()=>{filter(f)}} on:keypress>
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
			<h2>Active State</h2>
			<p>Dynamically add <code>.chip-active</code> or <code>.chip-[color]-active</code> classes to show an active state.</p>
			<CodeBlock language="ts" code={`let color: string = 'red';`} />
			<CodeBlock language="html" code={`<span class="chip" class:chip-active={color === 'red'}>Red</span>`} />
		</section>
		<hr />
		<section class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
			<div class="space-y-2">
				<h2>Input Chips</h2>
				<p>A dedicated input component for accepting multiple values using chips.</p>
			</div>
			<a class="btn btn-ghost-surface" href="/components/input-chips">Input Chip &rarr;</a>
		</section>
	</svelte:fragment>
</DocsShell>
