import { FloatingPanel, Portal } from '@skeletonlabs/skeleton-react';
import { XIcon, MinusIcon, MaximizeIcon } from 'lucide-react';

export default function Default() {
	return (
		<FloatingPanel defaultOpen>
			<FloatingPanel.Trigger className="btn preset-filled">Open Panel</FloatingPanel.Trigger>
			<Portal>
				<FloatingPanel.Positioner className="z-50">
					<FloatingPanel.Content className="card w-96 bg-surface-100-900 shadow-xl overflow-hidden">
						<FloatingPanel.Header className="bg-surface-200-800 p-2">
							<div className="grid grid-cols-[1fr_auto] items-center gap-2">
								<FloatingPanel.DragTrigger className="cursor-move">
									<FloatingPanel.Title className="text-sm font-semibold px-2">Floating Panel</FloatingPanel.Title>
								</FloatingPanel.DragTrigger>
								<FloatingPanel.Control className="flex items-center gap-1">
									<FloatingPanel.StageTrigger stage="minimized" className="btn-icon btn-sm hover:preset-tonal">
										<MinusIcon className="size-4" />
									</FloatingPanel.StageTrigger>
									<FloatingPanel.StageTrigger stage="maximized" className="btn-icon btn-sm hover:preset-tonal">
										<MaximizeIcon className="size-4" />
									</FloatingPanel.StageTrigger>
									<FloatingPanel.CloseTrigger className="btn-icon btn-sm hover:preset-tonal">
										<XIcon className="size-4" />
									</FloatingPanel.CloseTrigger>
								</FloatingPanel.Control>
							</div>
						</FloatingPanel.Header>
						<FloatingPanel.Body className="p-4 space-y-4">
							<p>This is a floating panel that can be dragged, resized, minimized, and maximized.</p>
							<p>Try dragging from the header or resizing from the bottom-right corner.</p>
						</FloatingPanel.Body>
						<FloatingPanel.ResizeTrigger axis="se" className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize" />
					</FloatingPanel.Content>
				</FloatingPanel.Positioner>
			</Portal>
		</FloatingPanel>
	);
}
