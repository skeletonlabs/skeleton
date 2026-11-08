import { Dialog, Portal } from "@skeletonlabs/skeleton-react";

export default function AlertDialog() {
	return (
		<Dialog role="alertdialog">
			<Dialog.Trigger className="btn preset-filled">Trigger</Dialog.Trigger>
			<Portal>
				<Dialog.Backdrop className="bg-error-50-950/50 fixed inset-0 z-50" />
				<Dialog.Positioner className="fixed inset-0 z-50 flex items-center justify-center">
					<Dialog.Content className="card preset-filled-error-500 w-md space-y-2 p-4 shadow-xl">
						<Dialog.Title className="text-2xl font-bold">Alert</Dialog.Title>
						<Dialog.Description>Something important has happened!</Dialog.Description>
						<Dialog.CloseTrigger className="btn preset-tonal-error">
							Close
						</Dialog.CloseTrigger>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog>
	);
}
