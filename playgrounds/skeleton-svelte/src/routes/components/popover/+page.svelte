<script>
	import { Popover, Portal } from "@skeletonlabs/skeleton-svelte";
</script>

<Popover>
	<Popover.Trigger class="btn preset-filled">Trigger</Popover.Trigger>
	<Portal>
		<Popover.Positioner>
			<Popover.Content class="card bg-surface-100-900 max-w-md space-y-2 p-4 shadow-xl">
				<Popover.Title class="font-bold">Title</Popover.Title>
				<Popover.Description>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente magni
					distinctio explicabo quisquam. Rerum impedit culpa nesciunt enim.
				</Popover.Description>
				<Popover.CloseTrigger class="btn preset-tonal">Close</Popover.CloseTrigger>
				<Popover.Arrow
					class="[--arrow-background:var(--color-surface-100-900)] [--arrow-size:--spacing(2)]"
				>
					<Popover.ArrowTip />
				</Popover.Arrow>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
