import { Dialog, Portal } from '@skeletonlabs/skeleton-react';

export default function ZIndex() {
	return (
		<Dialog>
			<Dialog.Trigger className="btn preset-filled">Trigger</Dialog.Trigger>
			<Portal>
				<Dialog.Backdrop className="fixed inset-0 z-50 bg-surface-50-950/50" />
				<Dialog.Positioner className="fixed inset-0 z-50 flex justify-center items-center">
					<Dialog.Content className="card bg-surface-100-900 w-md p-4 space-y-2 shadow-xl">
						<Dialog.Title className="text-2xl font-bold">Setting Z-Index</Dialog.Title>
						<Dialog.Description>This dialog will have a z-index value of 50.</Dialog.Description>
						<Dialog.CloseTrigger className="btn preset-tonal">Close</Dialog.CloseTrigger>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog>
	);
}
