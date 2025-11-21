import { FloatingPanel, Portal } from '@skeletonlabs/skeleton-react';
import { GripVerticalIcon, MinimizeIcon, XIcon, MinusIcon, MaximizeIcon } from 'lucide-react';

export default function SizeConstraints() {
	return (
		<FloatingPanel maxSize={{ width: 900, height: 600 }} minSize={{ width: 300, height: 200 }}>
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
							<p>This panel has size constraints applied: minimum 300x200 pixels and maximum 900x600 pixels.</p>
							<p>Try resizing from the bottom-right corner - the panel will respect these boundaries.</p>
						</FloatingPanel.Body>
						<FloatingPanel.ResizeTrigger axis="se" />
					</FloatingPanel.Content>
				</FloatingPanel.Positioner>
			</Portal>
		</FloatingPanel>
	);
}
