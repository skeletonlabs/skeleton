<script lang="ts">
	import { GripVerticalIcon, XIcon, MinusIcon, MaximizeIcon, MinimizeIcon } from '@lucide/svelte';
	import { FloatingPanel, Portal } from '@skeletonlabs/skeleton-svelte';

	let open = $state(false);
	let size = $state({
		width: 400,
		height: 300,
	});
</script>

<div class="card bg-surface-100-900 p-4 flex flex-col gap-4">
	<label class="label">
		<span class="label-text">Open</span>
		<input type="checkbox" class="checkbox" bind:checked={open} />
	</label>
	<label class="label">
		<span class="label-text">Width:</span>
		<input type="number" class="input" bind:value={size.width} />
	</label>
	<label class="label">
		<span class="label-text">Height:</span>
		<input type="number" class="input" bind:value={size.height} />
	</label>
</div>

<FloatingPanel {open} onOpenChange={(details) => (open = details.open)} {size} onSizeChange={(details) => (size = details.size)}>
	<Portal>
		<FloatingPanel.Positioner class="z-50">
			<FloatingPanel.Content>
				<FloatingPanel.DragTrigger>
					<FloatingPanel.Header>
						<FloatingPanel.Title>
							<GripVerticalIcon class="size-4" />
							Controlled Panel
						</FloatingPanel.Title>
						<FloatingPanel.Control>
							<FloatingPanel.StageTrigger stage="minimized">
								<MinusIcon class="size-4" />
							</FloatingPanel.StageTrigger>
							<FloatingPanel.StageTrigger stage="maximized">
								<MaximizeIcon class="size-4" />
							</FloatingPanel.StageTrigger>
							<FloatingPanel.StageTrigger stage="default">
								<MinimizeIcon class="size-4" />
							</FloatingPanel.StageTrigger>
							<FloatingPanel.CloseTrigger>
								<XIcon class="size-4" />
							</FloatingPanel.CloseTrigger>
						</FloatingPanel.Control>
					</FloatingPanel.Header>
				</FloatingPanel.DragTrigger>
				<FloatingPanel.Body>
					<p>This panel's open state and size are controlled via the inputs above.</p>
					<p>Try changing the values or resizing/closing the panel to see the inputs update.</p>
				</FloatingPanel.Body>
				<FloatingPanel.ResizeTrigger axis="se" />
			</FloatingPanel.Content>
		</FloatingPanel.Positioner>
	</Portal>
</FloatingPanel>
