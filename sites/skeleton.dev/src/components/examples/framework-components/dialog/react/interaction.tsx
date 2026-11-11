import { Dialog, Portal } from "@skeletonlabs/skeleton-react";

export default function Interaction() {
	return (
		<Dialog closeOnInteractOutside={false}>
			<Dialog.Trigger className="btn preset-filled">Trigger</Dialog.Trigger>
			<Portal>
				<Dialog.Backdrop className="bg-surface-50-950/50 fixed inset-0 z-50" />
				<Dialog.Positioner className="fixed inset-0 z-50 flex items-center justify-center">
					<Dialog.Content className="card bg-surface-100-900 w-md space-y-2 p-4 shadow-xl">
						<Dialog.Title className="text-2xl font-bold">Dialog Title</Dialog.Title>
						<Dialog.Description>
							This dialog will only close with the Close button or via programmatic
							controls.
						</Dialog.Description>
						<Dialog.CloseTrigger className="btn preset-tonal">
							Close
						</Dialog.CloseTrigger>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog>
	);
}
