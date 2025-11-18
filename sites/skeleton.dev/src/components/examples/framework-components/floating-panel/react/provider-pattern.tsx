import { FloatingPanel, Portal, useFloatingPanel } from '@skeletonlabs/skeleton-react';
import { XIcon } from 'lucide-react';

export default function Default() {
	const floatingPanel = useFloatingPanel({
		defaultOpen: false,
	});

	function openPanel() {
		floatingPanel.setOpen(true);
	}

	return (
		<div className="flex flex-col gap-4">
			<button className="btn preset-filled" onClick={openPanel}>
				Open Panel Programmatically
			</button>

			<FloatingPanel.Provider value={floatingPanel}>
				<FloatingPanel.Trigger className="btn preset-tonal">Or Click Here</FloatingPanel.Trigger>
				<Portal>
					<FloatingPanel.Positioner className="z-50">
						<FloatingPanel.Content className="card w-96 bg-surface-100-900 shadow-xl overflow-hidden">
							<FloatingPanel.Header className="bg-surface-200-800 p-2">
								<div className="grid grid-cols-[1fr_auto] items-center gap-2">
									<FloatingPanel.DragTrigger className="cursor-move">
										<FloatingPanel.Title className="text-sm font-semibold px-2">Provider Pattern</FloatingPanel.Title>
									</FloatingPanel.DragTrigger>
									<FloatingPanel.CloseTrigger className="btn-icon btn-sm hover:preset-tonal">
										<XIcon className="size-4" />
									</FloatingPanel.CloseTrigger>
								</div>
							</FloatingPanel.Header>
							<FloatingPanel.Body className="p-4">
								<p>This panel can be controlled programmatically using the provider pattern.</p>
							</FloatingPanel.Body>
						</FloatingPanel.Content>
					</FloatingPanel.Positioner>
				</Portal>
			</FloatingPanel.Provider>
		</div>
	);
}
