import { Dialog } from '@skeletonlabs/skeleton-react';

export default function Interaction() {
	return (
		<Dialog closeOnInteractOutside={false}>
			<Dialog.Trigger className="btn preset-filled">Trigger</Dialog.Trigger>
			<Dialog.Backdrop className="fixed inset-0 z-50 bg-surface-50-950/50" />
			<Dialog.Positioner className="fixed inset-0 z-50 flex justify-center items-center">
				<Dialog.Content className="card bg-surface-100-900 w-md p-4 space-y-2 shadow-xl">
					<Dialog.Title className="text-2xl font-bold">Dialog Title</Dialog.Title>
					<Dialog.Description>This dialog will only close with the Close button or via programmatic controls.</Dialog.Description>
					<Dialog.CloseTrigger className="btn preset-tonal">Close</Dialog.CloseTrigger>
				</Dialog.Content>
			</Dialog.Positioner>
		</Dialog>
	);
}
