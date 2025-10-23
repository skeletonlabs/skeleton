<script>
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import PaletteIcon from '@lucide/svelte/icons/palette';
	import { Popover, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<Popover positioning={{ placement: 'bottom' }}>
	<Popover.Trigger class="btn hover:preset-tonal p-2">
		<PaletteIcon class="size-4" />
		<span>Theme</span>
		<ChevronDownIcon class="size-4 opacity-50" />
	</Popover.Trigger>
	<Portal>
		<Popover.Positioner class="z-[51]!">
			<Popover.Content class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-2 shadow-xl">
				<!-- TODO -->
				<p>(themes)</p>
				<!-- --- -->
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
