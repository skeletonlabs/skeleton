import { FloatingPanel, Portal } from '@skeletonlabs/skeleton-react';
import { GripVerticalIcon, XIcon, MinusIcon, MaximizeIcon, MinimizeIcon } from 'lucide-react';
import { useState } from 'react';

export default function Controlled() {
	const [open, setOpen] = useState(false);
	const [size, setSize] = useState({ width: 400, height: 300 });

	return (
		<div className="space-y-4">
			<div className="card p-4 space-y-4">
				<div className="flex items-center gap-4">
					<label className="label">
						<span>Open:</span>
						<input type="checkbox" className="checkbox" checked={open} onChange={(e) => setOpen(e.target.checked)} />
					</label>
				</div>
				<div className="flex items-center gap-4">
					<label className="label">
						<span>Width:</span>
						<input
							type="number"
							className="input"
							value={size.width}
							onChange={(e) => setSize({ ...size, width: Number(e.target.value) })}
							min={200}
							max={800}
						/>
					</label>
					<label className="label">
						<span>Height:</span>
						<input
							type="number"
							className="input"
							value={size.height}
							onChange={(e) => setSize({ ...size, height: Number(e.target.value) })}
							min={150}
							max={600}
						/>
					</label>
				</div>
			</div>

			<FloatingPanel
				open={open}
				onOpenChange={(details) => setOpen(details.open)}
				size={size}
				onSizeChange={(details) => setSize(details.size)}
			>
				<Portal>
					<FloatingPanel.Positioner className="z-50">
						<FloatingPanel.Content>
							<FloatingPanel.DragTrigger>
								<FloatingPanel.Header>
									<FloatingPanel.Title>
										<GripVerticalIcon className="size-4" />
										Controlled Panel
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
								<p>This panel's open state and size are controlled via the inputs above.</p>
								<p>Try changing the values or resizing/closing the panel to see the inputs update.</p>
								<FloatingPanel.ResizeTrigger axis="se" />
							</FloatingPanel.Body>
						</FloatingPanel.Content>
					</FloatingPanel.Positioner>
				</Portal>
			</FloatingPanel>
		</div>
	);
}
