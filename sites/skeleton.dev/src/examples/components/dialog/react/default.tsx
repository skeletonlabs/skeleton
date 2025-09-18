import { Dialog } from '@skeletonlabs/skeleton-react';

export default function Default() {
	return (
		<>
			<Dialog>
				<Dialog.Trigger className="btn preset-filled">Trigger</Dialog.Trigger>
				<Dialog.Backdrop className="data-[state=open]:animate-[fade-in_100ms_ease-in-out]" />
				<Dialog.Positioner>
					<Dialog.Content className="card max-w-md p-4 bg-surface-100-900 shadow-xl space-y-2 data-[state=open]:animate-[slide-up_100ms_ease-in-out]">
						<Dialog.Title className="font-bold">Dialog Title</Dialog.Title>
						<Dialog.Description>This is a description of the dialog.</Dialog.Description>
						<Dialog.CloseTrigger className="btn preset-tonal">Close</Dialog.CloseTrigger>
					</Dialog.Content>
				</Dialog.Positioner>
			</Dialog>
			<style>{`
				@keyframes fade-in {
					from {
						opacity: 0;
					}
					to {
						opacity: 100;
					}
				}

				@keyframes slide-up {
					from {
						transform: translateY(1rem);
						opacity: 0;
					}
					to {
						transform: translateY(0);
						opacity: 100;
					}
				}
			`}</style>
		</>
	);
}
