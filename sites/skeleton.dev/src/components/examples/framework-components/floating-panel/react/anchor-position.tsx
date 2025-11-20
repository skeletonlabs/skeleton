import { FloatingPanel, Portal } from '@skeletonlabs/skeleton-react';
import { GripVerticalIcon, XIcon, MinusIcon, MaximizeIcon, MinimizeIcon } from 'lucide-react';

export default function AnchorPosition() {
	return (
		<div className="space-y-4">
			<FloatingPanel
				getAnchorPosition={({ boundaryRect }) => ({
					x: boundaryRect.x + boundaryRect.width / 2 - 150,
					y: boundaryRect.y + boundaryRect.height / 2 - 100,
				})}
			>
				<FloatingPanel.Trigger className="btn preset-filled">Open Panel</FloatingPanel.Trigger>
				<Portal>
					<FloatingPanel.Positioner className="z-50">
						<FloatingPanel.Content>
							<FloatingPanel.DragTrigger>
								<FloatingPanel.Header>
									<FloatingPanel.Title>
										<GripVerticalIcon className="size-4" />
										Anchored Panel
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
								<p>This panel is centered in the viewport using getAnchorPosition.</p>
								<p>The position is calculated based on the boundary rectangle.</p>
								<FloatingPanel.ResizeTrigger axis="se" />
							</FloatingPanel.Body>
						</FloatingPanel.Content>
					</FloatingPanel.Positioner>
				</Portal>
			</FloatingPanel>
		</div>
	);
}
