<script lang="ts">
	import { globals } from '$lib/state/generator.svelte';
	import ControlsBackgrounds from './ControlsBackgrounds.svelte';
	import ControlsColors from './ControlsColors.svelte';
	import ControlsCore from './ControlsCore.svelte';
	import ControlsEdges from './ControlsEdges.svelte';
	import ControlsSpacing from './ControlsSpacing.svelte';
	import ControlsTypography from './ControlsTypography.svelte';
	import ALargeSmallIcon from '@lucide/svelte/icons/a-large-small';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import ChevronUpIcon from '@lucide/svelte/icons/chevron-up';
	import LayersIcon from '@lucide/svelte/icons/layers';
	import PaletteIcon from '@lucide/svelte/icons/palette';
	import ScalingIcon from '@lucide/svelte/icons/scaling';
	import SquareDashedIcon from '@lucide/svelte/icons/square-dashed';
	import { Accordion, SegmentedControl } from '@skeletonlabs/skeleton-svelte';

	const items = [
		{
			value: 'colors',
			icon: PaletteIcon,
			label: 'Color Palette',
			component: ControlsColors,
		},
		{
			value: 'backgrounds',
			icon: LayersIcon,
			label: 'Backgrounds',
			component: ControlsBackgrounds,
		},
		{
			value: 'spacing',
			icon: ScalingIcon,
			label: 'Spacing',
			component: ControlsSpacing,
		},
		{
			value: 'edges',
			icon: SquareDashedIcon,
			label: 'Edges',
			component: ControlsEdges,
		},
		{
			value: 'typography',
			icon: ALargeSmallIcon,
			label: 'Typography',
			component: ControlsTypography,
		},
	];
</script>

<section class="relative h-screen bg-surface-100-900 pb-96 overflow-y-auto">
	<header
		class="sticky top-0 z-10 bg-surface-100/50 dark:bg-surface-900/50 backdrop-blur-xl p-5 flex justify-between items-center gap-4 shadow-lg"
	>
		<SegmentedControl
			name="display"
			defaultValue={globals.panel}
			onValueChange={(e) => (globals.panel = e.value as typeof globals.panel)}
			class="w-full"
		>
			<SegmentedControl.Indicator />
			<SegmentedControl.Item value="preview" class="w-full">
				<SegmentedControl.ItemText>Preview</SegmentedControl.ItemText>
				<SegmentedControl.ItemHiddenInput />
			</SegmentedControl.Item>
			<SegmentedControl.Item value="code" class="w-full">
				<SegmentedControl.ItemText>Code</SegmentedControl.ItemText>
				<SegmentedControl.ItemHiddenInput />
			</SegmentedControl.Item>
		</SegmentedControl>
	</header>
	<ControlsCore />
	<div class="space-y-10">
		<Accordion collapsible class="gap-0">
			{#each items as item (item)}
				<hr class="hr" />
				<Accordion.Item value={item.value} class="p-0">
					<Accordion.ItemHeading class="h4">
						<Accordion.ItemTrigger class="grid grid-cols-[auto_1fr_auto] gap-4 items-center hover:preset-tonal px-5 py-3 rounded-none">
							<span class="btn-icon preset-tonal">
								<svelte:component this={item.icon} class="size-5" />
							</span>
							{item.label}
							<Accordion.ItemIndicator>
								<Accordion.Context>
									{#snippet children(accordion)}
										{#if accordion().getItemState(item).expanded}
											<ChevronUpIcon />
										{:else}
											<ChevronDownIcon />
										{/if}
									{/snippet}
								</Accordion.Context>
							</Accordion.ItemIndicator>
						</Accordion.ItemTrigger>
					</Accordion.ItemHeading>
					<Accordion.ItemContent class="p-5">
						<svelte:component this={item.component} />
					</Accordion.ItemContent>
				</Accordion.Item>
			{/each}
			<hr class="hr" />
		</Accordion>
	</div>
	<footer class="p-5">
		<p class="text-xs opacity-50">When ready, tap the <strong>Code</strong> button to obtain your theme.</p>
	</footer>
</section>
