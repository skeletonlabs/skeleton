import { FloatingPanel, Portal } from '@skeletonlabs/skeleton-react';
import { GripVerticalIcon, MinimizeIcon, XIcon, MinusIcon, MaximizeIcon } from 'lucide-react';

export default function Default() {
	return (
		<FloatingPanel>
			<FloatingPanel.Trigger className="btn preset-filled">Open Panel</FloatingPanel.Trigger>
			<Portal>
				<FloatingPanel.Positioner className="z-50">
					<FloatingPanel.Content>
						<FloatingPanel.DragTrigger>
							<FloatingPanel.Header>
								<FloatingPanel.Title>
									<GripVerticalIcon className="size-4" />
									Floating Panel
								</FloatingPanel.Title>
								<FloatingPanel.Control>
									<FloatingPanel.StageTrigger stage="minimized">
										<MinusIcon className="size-4" />
									</FloatingPanel.StageTrigger>
									<FloatingPanel.StageTrigger stage="maximized">
										<MaximizeIcon className="size-4" />
									</FloatingPanel.StageTrigger>
									<FloatingPanel.StageTrigger stage="default">
										<MinimizeIcon className="size-4" />
									</FloatingPanel.StageTrigger>
									<FloatingPanel.CloseTrigger>
										<XIcon className="size-4" />
									</FloatingPanel.CloseTrigger>
								</FloatingPanel.Control>
							</FloatingPanel.Header>
						</FloatingPanel.DragTrigger>
						<FloatingPanel.Body>
							<p>
								This is a floating panel that can be dragged, resized, minimized, and maximized. Try dragging from the header or resizing
								from the bottom-right corner.
							</p>
						</FloatingPanel.Body>
						<FloatingPanel.ResizeTrigger className="bg-primary-500/50" placement="n" />
						<FloatingPanel.ResizeTrigger className="bg-primary-500/50" placement="e" />
						<FloatingPanel.ResizeTrigger className="bg-primary-500/50" placement="w" />
						<FloatingPanel.ResizeTrigger className="bg-primary-500/50" placement="s" />
						<FloatingPanel.ResizeTrigger className="bg-primary-500/50" placement="ne" />
						<FloatingPanel.ResizeTrigger className="bg-primary-500/50" placement="se" />
						<FloatingPanel.ResizeTrigger className="bg-primary-500/50" placement="sw" />
						<FloatingPanel.ResizeTrigger className="bg-primary-500/50" placement="nw" />
					</FloatingPanel.Content>
				</FloatingPanel.Positioner>
			</Portal>
		</FloatingPanel>
	);
}
