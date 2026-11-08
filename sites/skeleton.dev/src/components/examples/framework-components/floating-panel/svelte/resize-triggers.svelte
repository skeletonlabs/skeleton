<script>
	import GripVerticalIcon from '@lucide/svelte/icons/grip-vertical';
	import MaximizeIcon from '@lucide/svelte/icons/maximize';
	import MinimizeIcon from '@lucide/svelte/icons/minimize';
	import MinusIcon from '@lucide/svelte/icons/minus';
	import XIcon from '@lucide/svelte/icons/x';
	import { FloatingPanel, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<FloatingPanel>
	<FloatingPanel.Trigger class="btn preset-filled">Open Panel</FloatingPanel.Trigger>
	<Portal>
		<FloatingPanel.Positioner class="z-50">
			<FloatingPanel.Content>
				<FloatingPanel.DragTrigger>
					<FloatingPanel.Header>
						<FloatingPanel.Title>
							<GripVerticalIcon class="size-4" />
							Floating Panel
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
								<XIcon className="size-4" />
							</FloatingPanel.CloseTrigger>
						</FloatingPanel.Control>
					</FloatingPanel.Header>
				</FloatingPanel.DragTrigger>
				<FloatingPanel.Body>
					<p>
						This is a floating panel that can be dragged, resized, minimized, and maximized. Try dragging from the header or resizing from
						the bottom-right corner.
					</p>
				</FloatingPanel.Body>
				<FloatingPanel.ResizeTrigger class="bg-primary-500/50" placement="n" />
				<FloatingPanel.ResizeTrigger class="bg-primary-500/50" placement="e" />
				<FloatingPanel.ResizeTrigger class="bg-primary-500/50" placement="w" />
				<FloatingPanel.ResizeTrigger class="bg-primary-500/50" placement="s" />
				<FloatingPanel.ResizeTrigger class="bg-primary-500/50" placement="ne" />
				<FloatingPanel.ResizeTrigger class="bg-primary-500/50" placement="se" />
				<FloatingPanel.ResizeTrigger class="bg-primary-500/50" placement="sw" />
				<FloatingPanel.ResizeTrigger class="bg-primary-500/50" placement="nw" />
			</FloatingPanel.Content>
		</FloatingPanel.Positioner>
	</Portal>
</FloatingPanel>
