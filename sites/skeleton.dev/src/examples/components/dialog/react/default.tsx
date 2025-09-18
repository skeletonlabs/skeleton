import { Dialog } from '@skeletonlabs/skeleton-react';

export default function Default() {
	return (
		<Dialog>
			<Dialog.Trigger className="btn preset-filled">Trigger</Dialog.Trigger>
			<Dialog.Backdrop />
			<Dialog.Positioner>
				<Dialog.Content className="card max-w-md p-4 bg-surface-100-900 shadow-xl space-y-2">
					<Dialog.Title className="font-bold">Dialog Title</Dialog.Title>
					<Dialog.Description>This is a description of the dialog.</Dialog.Description>
					<Dialog.CloseTrigger className="btn preset-tonal">Close</Dialog.CloseTrigger>
				</Dialog.Content>
			</Dialog.Positioner>
		</Dialog>
	);
}
