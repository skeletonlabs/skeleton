<script lang="ts">
	// Components
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconColors from 'lucide-svelte/icons/palette';
	import IconTypography from 'lucide-svelte/icons/a-large-small';
	import IconSpacing from 'lucide-svelte/icons/scaling';
	import IconEdges from 'lucide-svelte/icons/box-select';
	import IconOpen from 'lucide-svelte/icons/chevron-up';
	import IconClosed from 'lucide-svelte/icons/chevron-down';

	// State
	const settings = $state(['spacing']);
</script>

<section class="relative h-screen bg-surface-100-900 overflow-y-auto">
	<!-- Header -->
	<header class="sticky top-0 z-10 bg-surface-100/90 dark:bg-surface-900/90 backdrop-blur-xl p-5">
		<button type="button" class="btn btn-lg preset-filled w-full">Generate Theme</button>
	</header>
	<!-- Settings -->
	<div class="p-5 space-y-10">
		<p class="opacity-60">Use the controls below to adjust theme settings.</p>
		<Accordion value={settings} collapsible>
			{#snippet iconOpen()}<IconOpen size={16} />{/snippet}
			{#snippet iconClosed()}<IconClosed size={16} />{/snippet}
			<Accordion.Item value="colors" controlHover="hover:preset-tonal">
				{#snippet lead()}
					<span class="btn btn-icon preset-tonal"><IconColors size={24} /></span>
				{/snippet}
				{#snippet control()}
					<span class="h4">Colors</span>
				{/snippet}
				{#snippet panel()}
					<pre class="pre !bg-black">(pane-colors)</pre>
				{/snippet}
			</Accordion.Item>
			<Accordion.Item value="typography" controlHover="hover:preset-tonal">
				{#snippet lead()}
					<span class="btn btn-icon preset-tonal"><IconTypography size={24} /></span>
				{/snippet}
				{#snippet control()}
					<span class="h4">Typography</span>
				{/snippet}
				{#snippet panel()}
					<pre class="pre !bg-black">(pane-typography)</pre>
				{/snippet}
			</Accordion.Item>
			<Accordion.Item value="spacing" controlHover="hover:preset-tonal">
				{#snippet lead()}
					<span class="btn btn-icon preset-tonal"><IconSpacing size={24} /></span>
				{/snippet}
				{#snippet control()}
					<span class="h4">Spacing</span>
				{/snippet}
				{#snippet panel()}
					<div class="space-y-4">
						<p class="opacity-60">Define the scale factor for properties like padding, margin, width, height, gap, space, and more.</p>
						<label class="label">
							<span class="label-text">Scale Factor</span>
							<input class="input" type="range" value="75" max="100" />
						</label>
					</div>
				{/snippet}
			</Accordion.Item>
			<Accordion.Item value="edges" controlHover="hover:preset-tonal">
				{#snippet lead()}
					<span class="btn btn-icon preset-tonal"><IconEdges size={24} /></span>
				{/snippet}
				{#snippet control()}
					<span class="h4">Edges</span>
				{/snippet}
				{#snippet panel()}
					<pre class="pre !bg-black">(pane-edges)</pre>
				{/snippet}
			</Accordion.Item>
		</Accordion>
	</div>
	<!-- Footer -->
	<!-- <footer class="p-5"></footer> -->
</section>
