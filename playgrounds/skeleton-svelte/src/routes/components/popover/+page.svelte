<script>
	import { Popover, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<Popover>
	<Popover.Trigger class="btn preset-filled">Trigger</Popover.Trigger>
	<Portal>
		<Popover.Positioner>
			<Popover.Content class="card max-w-md p-4 bg-surface-100-900 shadow-xl space-y-2">
				<Popover.Title class="font-bold">Title</Popover.Title>
				<Popover.Description>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente magni distinctio explicabo quisquam. Rerum impedit culpa
					nesciunt enim.
				</Popover.Description>
				<Popover.CloseTrigger class="btn preset-tonal">Close</Popover.CloseTrigger>
				<Popover.Arrow class="[--arrow-size:--spacing(2)] [--arrow-background:var(--color-surface-100-900)]">
					<Popover.ArrowTip />
				</Popover.Arrow>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
