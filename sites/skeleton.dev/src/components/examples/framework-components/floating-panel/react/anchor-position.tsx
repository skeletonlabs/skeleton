import { FloatingPanel, Portal } from '@skeletonlabs/skeleton-react';
import { GripVerticalIcon, XIcon, MinusIcon, MaximizeIcon, MinimizeIcon } from 'lucide-react';
import { useRef } from 'react';

export default function AnchorPosition() {
	const buttonRef = useRef<HTMLButtonElement>(null);

	return (
		<div className="space-y-4">
			<button ref={buttonRef} className="btn preset-filled">
				Anchor Element
			</button>

			<FloatingPanel
				defaultPosition={{
					x: buttonRef.current ? buttonRef.current.offsetLeft + buttonRef.current.offsetWidth + 10 : 100,
					y: buttonRef.current ? buttonRef.current.offsetTop : 100,
				}}
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
								<p>This panel starts positioned next to the anchor element above.</p>
								<p>Try dragging it to a new position.</p>
								<FloatingPanel.ResizeTrigger axis="se" />
							</FloatingPanel.Body>
						</FloatingPanel.Content>
					</FloatingPanel.Positioner>
				</Portal>
			</FloatingPanel>
		</div>
	);
}
