<script lang="ts">
	import { GripVerticalIcon, XIcon, MinusIcon, MaximizeIcon, MinimizeIcon } from '@lucide/svelte';
	import { FloatingPanel, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="space-y-4">
	<FloatingPanel
		getAnchorPosition={(ctx) => {
			if (!ctx.triggerRect) return { x: 0, y: 0 };
			return {
				x: ctx.triggerRect.x + ctx.triggerRect.width / 2,
				y: ctx.triggerRect.y + ctx.triggerRect.height / 2,
			};
		}}
	>
		<FloatingPanel.Trigger class="btn preset-filled">Open Panel</FloatingPanel.Trigger>
		<Portal>
			<FloatingPanel.Positioner class="z-50">
				<FloatingPanel.Content>
					<FloatingPanel.DragTrigger>
						<FloatingPanel.Header>
							<FloatingPanel.Title>
								<GripVerticalIcon class="size-4" />
								Anchored Panel
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
						<p>This panel is centered in the viewport using getAnchorPosition.</p>
						<p>The position is calculated based on the boundary rectangle.</p>
					</FloatingPanel.Body>
					<FloatingPanel.ResizeTrigger axis="se" />
				</FloatingPanel.Content>
			</FloatingPanel.Positioner>
		</Portal>
	</FloatingPanel>
</div>
