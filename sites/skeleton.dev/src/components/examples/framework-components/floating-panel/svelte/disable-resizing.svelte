<script lang="ts">
	import { GripVerticalIcon, XIcon, MinusIcon, MaximizeIcon, MinimizeIcon } from '@lucide/svelte';
	import { FloatingPanel, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<FloatingPanel resizable={false}>
	<FloatingPanel.Trigger class="btn preset-filled">Open Panel</FloatingPanel.Trigger>
	<Portal>
		<FloatingPanel.Positioner class="z-50">
			<FloatingPanel.Content>
				<FloatingPanel.DragTrigger>
					<FloatingPanel.Header>
						<FloatingPanel.Title>
							<GripVerticalIcon class="size-4" />
							Fixed Size Panel
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
					<p>This panel cannot be resized.</p>
					<p>Try dragging the edges - they won't respond.</p>
				</FloatingPanel.Body>
				<FloatingPanel.ResizeTrigger axis="se" />
			</FloatingPanel.Content>
		</FloatingPanel.Positioner>
	</Portal>
</FloatingPanel>
