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
	<header class="sticky top-0 z-10 grid grid-cols-[1fr_2fr] gap-4 bg-surface-100/50 dark:bg-surface-900/50 backdrop-blur-xl p-5">
		<button type="button" class="btn preset-tonal w-full">Import</button>
		<button type="button" class="btn preset-filled w-full">Generate</button>
	</header>
	<div class="p-5 pt-0">
		<p class="opacity-60">Use the controls below to adjust theme settings.</p>
	</div>
	<!-- Settings -->
	<div class="space-y-10">
		<Accordion value={settings} collapsible spaceY="space-y-0">
			{#snippet iconOpen()}<IconOpen size={16} />{/snippet}
			{#snippet iconClosed()}<IconClosed size={16} />{/snippet}
			<Accordion.Item
				value="colors"
				controlPadding="px-5 py-3"
				controlRounded="rounded-none"
				controlHover="hover:preset-tonal"
				panelPadding="p-5"
			>
				{#snippet lead()}
					<span class="btn btn-icon preset-tonal"><IconColors size={24} /></span>
				{/snippet}
				{#snippet control()}
					<span class="h4">Colors</span>
				{/snippet}
				{#snippet panel()}
					<div class="space-y-4">
						<p class="opacity-60">Define the palette and contrast tones.</p>
						<pre class="pre !bg-black">(pane-colors)</pre>
					</div>
				{/snippet}
			</Accordion.Item>
			<hr class="hr" />
			<Accordion.Item
				value="typography"
				controlPadding="px-5 py-3"
				controlRounded="rounded-none"
				controlHover="hover:preset-tonal"
				panelPadding="p-5"
			>
				{#snippet lead()}
					<span class="btn btn-icon preset-tonal"><IconTypography size={24} /></span>
				{/snippet}
				{#snippet control()}
					<span class="h4">Typography</span>
				{/snippet}
				{#snippet panel()}
					<div class="space-y-4">
						<p class="opacity-60">Define all typographic settings for your theme.</p>
						<pre class="pre !bg-black">(pane-typography)</pre>
					</div>
				{/snippet}
			</Accordion.Item>
			<hr class="hr" />
			<Accordion.Item
				value="spacing"
				controlPadding="px-5 py-3"
				controlRounded="rounded-none"
				controlHover="hover:preset-tonal"
				panelPadding="p-5"
			>
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
			<hr class="hr" />
			<Accordion.Item
				value="edges"
				controlPadding="px-5 py-3"
				controlRounded="rounded-none"
				controlHover="hover:preset-tonal"
				panelPadding="p-5"
			>
				{#snippet lead()}
					<span class="btn btn-icon preset-tonal"><IconEdges size={24} /></span>
				{/snippet}
				{#snippet control()}
					<span class="h4">Edges</span>
				{/snippet}
				{#snippet panel()}
					<div class="space-y-4">
						<p class="opacity-60">Define radius shape and edge widths.</p>
						<pre class="pre !bg-black">(pane-edges)</pre>
					</div>
				{/snippet}
			</Accordion.Item>
		</Accordion>
	</div>
	<!-- Footer -->
	<!-- <footer class="p-5"></footer> -->
</section>
