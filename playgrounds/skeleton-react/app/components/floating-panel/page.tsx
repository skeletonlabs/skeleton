'use client';

import { FloatingPanel, Portal } from '@skeletonlabs/skeleton-react';
import { XIcon, MinusIcon, MaximizeIcon, MinimizeIcon } from 'lucide-react';

export default function Page() {
	return (
		<FloatingPanel>
			<FloatingPanel.Trigger className="btn preset-filled">Open Panel</FloatingPanel.Trigger>
			<Portal>
				<FloatingPanel.Positioner className="z-50">
					<FloatingPanel.Content>
						<FloatingPanel.DragTrigger>
							<FloatingPanel.Header>
								<FloatingPanel.Title>Floating Panel</FloatingPanel.Title>
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
							<p>This is a floating panel that can be dragged, resized, minimized, and maximized.</p>
							<p>Try dragging from the header or resizing from the bottom-right corner.</p>
							<FloatingPanel.ResizeTrigger axis="se" />
						</FloatingPanel.Body>
					</FloatingPanel.Content>
				</FloatingPanel.Positioner>
			</Portal>
		</FloatingPanel>
	);
}
