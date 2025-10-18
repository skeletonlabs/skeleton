import { Popover, Portal, usePopover } from '@skeletonlabs/skeleton-react';

export default function Default() {
	const popover = usePopover({
		closeOnInteractOutside: false,
	});

	function showAndHide() {
		popover.setOpen(true);
		setTimeout(() => {
			popover.setOpen(false);
		}, 3000);
	}
	return (
		<div className="flex flex-col gap-4">
			<button className="btn preset-filled" onClick={showAndHide}>
				Show for 3 seconds
			</button>

			<Popover.Provider value={popover}>
				<Popover.Trigger className="btn preset-tonal">Anchor</Popover.Trigger>
				<Portal>
					<Popover.Positioner>
						<Popover.Content className="card max-w-sm p-4 bg-surface-100-900 shadow-xl space-y-2">
							<Popover.Description>This popover will appear, stay open for three seconds, then close on it's own.</Popover.Description>
						</Popover.Content>
					</Popover.Positioner>
				</Portal>
			</Popover.Provider>
		</div>
	);
}
