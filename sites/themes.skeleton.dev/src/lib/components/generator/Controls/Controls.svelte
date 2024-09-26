<script lang="ts">
	// State
	import { globals } from '$lib/state/generator.svelte';
	// Components (Skeleton)
	import { Accordion, Segment } from '@skeletonlabs/skeleton-svelte';
	// Components (Settings)
	import ControlsCore from './ControlsCore.svelte';
	import ControlsColors from './ControlsColors.svelte';
	import ControlsBackgrounds from './ControlsBackgrounds.svelte';
	import ControlsTypography from './ControlsTypography.svelte';
	import ControlsSpacing from './ControlsSpacing.svelte';
	import ControlsEdges from './ControlsEdges.svelte';
	// Icons
	import IconColors from 'lucide-svelte/icons/palette';
	import IconBackgrounds from 'lucide-svelte/icons/layers-2';
	import IconTypography from 'lucide-svelte/icons/a-large-small';
	import IconSpacing from 'lucide-svelte/icons/scaling';
	import IconEdges from 'lucide-svelte/icons/box-select';
	import IconOpen from 'lucide-svelte/icons/chevron-up';
	import IconClosed from 'lucide-svelte/icons/chevron-down';

	// Local
	const accordionItemProps = {
		controlPadding: 'px-5 py-3',
		controlRounded: 'rounded-none',
		controlHover: 'hover:preset-tonal',
		panelPadding: 'p-5'
	};

	// State
	const settings = $state([]);
</script>

<section class="relative h-screen bg-surface-100-900 pb-96 overflow-y-auto">
	<!-- Header -->
	<header
		class="sticky top-0 z-10 bg-surface-100/50 dark:bg-surface-900/50 backdrop-blur-xl p-5 flex justify-between items-center gap-4 shadow-lg"
	>
		<Segment name="display" bind:value={globals.panel as string} classes="w-full">
			<Segment.Item value="preview" classes="w-full">Preview</Segment.Item>
			<Segment.Item value="code" classes="w-full">Code</Segment.Item>
		</Segment>
	</header>
	<!-- Controls: Core -->
	<ControlsCore />
	<!-- Settings Accordion -->
	<div class="space-y-10">
		<Accordion value={settings} collapsible spaceY="space-y-0">
			{#snippet iconOpen()}<IconOpen size={16} />{/snippet}
			{#snippet iconClosed()}<IconClosed size={16} />{/snippet}
			<hr class="hr" />
			<!-- Controls: Colors -->
			<Accordion.Item value="colors" {...accordionItemProps}>
				{#snippet lead()}<IconColors size={24} class="btn btn-icon preset-tonal" />{/snippet}
				{#snippet control()}<span class="h4">Color Palette</span>{/snippet}
				{#snippet panel()}<ControlsColors />{/snippet}
			</Accordion.Item>
			<hr class="hr" />
			<!-- Controls: Backgrounds -->
			<Accordion.Item value="backgrounds" {...accordionItemProps}>
				{#snippet lead()}<IconBackgrounds size={24} class="btn btn-icon preset-tonal" />{/snippet}
				{#snippet control()}<span class="h4">Backgrounds</span>{/snippet}
				{#snippet panel()}<ControlsBackgrounds />{/snippet}
			</Accordion.Item>
			<hr class="hr" />
			<!-- Controls: Spacing -->
			<Accordion.Item value="spacing" {...accordionItemProps}>
				{#snippet lead()}<IconSpacing size={24} class="btn btn-icon preset-tonal" />{/snippet}
				{#snippet control()}<span class="h4">Spacing</span>{/snippet}
				{#snippet panel()}<ControlsSpacing />{/snippet}
			</Accordion.Item>
			<hr class="hr" />
			<!-- Controls: Edges -->
			<Accordion.Item value="edges" {...accordionItemProps}>
				{#snippet lead()}<IconEdges size={24} class="btn btn-icon preset-tonal" />{/snippet}
				{#snippet control()}<span class="h4">Edges</span>{/snippet}
				{#snippet panel()}<ControlsEdges />{/snippet}
			</Accordion.Item>
			<hr class="hr" />
			<!-- Controls: Typography -->
			<Accordion.Item value="typography" {...accordionItemProps}>
				{#snippet lead()}<IconTypography size={24} class="btn btn-icon preset-tonal" />{/snippet}
				{#snippet control()}<span class="h4">Typography</span>{/snippet}
				{#snippet panel()}<ControlsTypography />{/snippet}
			</Accordion.Item>
			<hr class="hr" />
		</Accordion>
	</div>
	<!-- Footer -->
	<!-- <footer class="p-5"></footer> -->
</section>
