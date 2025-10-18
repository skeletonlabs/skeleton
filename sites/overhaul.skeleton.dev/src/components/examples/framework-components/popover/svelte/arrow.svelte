<script>
	import { Popover, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<Popover>
	<Popover.Trigger class="btn preset-filled">Trigger</Popover.Trigger>
	<Portal>
		<Popover.Positioner>
			<Popover.Content class="card max-w-md p-4 bg-surface-100-900 shadow-xl space-y-2">
				<Popover.Description>This example will have a small arrow.</Popover.Description>
				<Popover.Arrow style="--arrow-size: calc(var(--spacing) * 2); --arrow-background: var(--color-surface-100-900);">
					<Popover.ArrowTip />
				</Popover.Arrow>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
