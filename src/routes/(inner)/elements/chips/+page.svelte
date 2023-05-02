<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	import { variants } from '$docs/components/DocsPreview/options';
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
			['<code class="code">chip</code>', '', 'Provides the standard chip style.'],
			['<code class="code">chip-[color]</code>', '<a class="anchor" href="/docs/colors">Any theme color.</a>', 'Applies a variant style.'],
			['<code class="code">chip-active</code>', '', 'Sets the default active state.'],
			[
				'<code class="code">chip-[color]-active</code>',
				'<a class="anchor" href="/docs/colors">Any theme color.</a>',
				'Set a colored active state.'
			],
			['<code class="code">chip-disabled</code>', '', 'Applies disabled styling.']
		]
	};

	// Local
	let currentVariant = 'variant-filled';
	let color = 'red';
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
		<DocsPreview>
			<svelte:fragment slot="preview">
				<span class="chip {currentVariant}">Chip</span>
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<div class="flex justify-center gap-4">
					<select bind:value={currentVariant} class="select w-auto">
						{#each variants as vSet}
							<optgroup label={vSet.label}>
								{#each vSet.list as v}
									<option value={v}>{v}</option>
								{/each}
							</optgroup>
						{/each}
					</select>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="html" code={`<span class="chip variant-filled">Chip</span>`} />
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>Apply <code class="code">.chip</code> to any inline element, such as a <em>span</em> or <em>anchor</em> tag.</p>
		<section class="space-y-4">
			<h2 class="h2">Action Chips</h2>
			<p>Use chips to create small related set of actions.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<!-- prettier-ignore -->
					<div class="flex justify-center space-x-2">
						<span class="chip variant-soft hover:variant-filled" on:click={()=>{triggerToast('like')}} on:keypress>
							<i class="fa-solid fa-heart" />
							<span>Like</span>
						</span>
						<span class="chip variant-soft hover:variant-filled" on:click={()=>{triggerToast('share')}} on:keypress>
							<i class="fa-solid fa-share" />
							<span>Share</span>
						</span>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<span class="chip variant-soft hover:variant-filled" on:click={doSomething}>
	<span>(icon)</span>
	<span>Action</span>
</span>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<section class="space-y-4">
			<h2 class="h2">State</h2>
			<p>Dynamically modify chip classes to represent state. See the examples below using this technique.</p>
			<CodeBlock language="ts" code={`$: chipStateClass = (someCondition) ? 'variant-filled-primary' : 'variant-soft-primary';`} />
			<CodeBlock language="html" code={`<span class="chip {chipStateClass}">...</span>`} />
			<!-- Single Selection -->
			<h3 class="h3">Single Selection</h3>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="flex justify-center space-x-2">
						{#each ['red', 'blue', 'green'] as c}
							<!-- prettier-ignore -->
							<span
								class="chip {color === c ? 'variant-filled' : 'variant-soft'}"
								on:click={() => { section(c); }}
								on:keypress
							>
								{#if color === c}<span><i class="fa-solid fa-check" /></span>{/if}
								<span>{c}</span>
							</span>
						{/each}
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="ts" code={`let color = 'red';`} />
					<CodeBlock
						language="html"
						code={`
{#each ['red', 'blue', 'green'] as c}
	<span
		class="chip {color === c ? 'variant-filled' : 'variant-soft'}"
		on:click={() => { section(c); }}
		on:keypress
	>
		{#if color === c}(<span>(icon)</span>){/if}
		<span>{c}</span>
	</span>
{/each}
`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<!-- Multiple Selection -->
			<h3 class="h3">Multiple Selection</h3>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="flex justify-center space-x-2">
						{#each Object.keys(flavors) as f}
							<!-- prettier-ignore -->
							<span
								class="chip {flavors[f] ? 'variant-filled' : 'variant-soft'}"
								on:click={() => { filter(f); }}
								on:keypress
							>
								{#if flavors[f]}<span><i class="fa-solid fa-check" /></span>{/if}
								<span class="capitalize">{f}</span>
							</span>
						{/each}
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
let flavors: Record<string, boolean> = {
	vanilla: true,
	chocolate: false,
	strawberry: false
};
`}
					/>
					<CodeBlock
						language="html"
						code={`
{#each Object.keys(flavors) as f}
	<span
		class="chip {flavors[f] ? 'variant-filled' : 'variant-soft'}"
		on:click={() => { filter(f); }}
		on:keypress
	>
		{#if flavors[f]}<span>(icon)</span>{/if}
		<span class="capitalize">{f}</span>
	</span>
{/each}
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
	</svelte:fragment>
</DocsShell>
