import { Dialog, Portal } from '@skeletonlabs/skeleton-react';
import { XIcon } from 'lucide-react';

export default function Default() {
	// The following animation is optional.
	// This may also be included inline.
	const animation =
		'transition transition-discrete opacity-0 translate-y-[100px] starting:data-[state=open]:opacity-0 starting:data-[state=open]:translate-y-[100px] data-[state=open]:opacity-100 data-[state=open]:translate-y-0';

	return (
		<Dialog>
			<Dialog.Trigger className="btn preset-filled">Trigger</Dialog.Trigger>
			<Portal>
				<Dialog.Backdrop className="fixed inset-0 z-50 bg-surface-50-950/50" />
				<Dialog.Positioner className="fixed inset-0 z-50 flex justify-center items-center p-4">
					<Dialog.Content className={`card bg-surface-100-900 w-full max-w-xl p-4 space-y-4 shadow-xl ${animation}`}>
						<header className="flex justify-between items-center">
							<Dialog.Title className="text-lg font-bold">Hello Skeleton</Dialog.Title>
							<Dialog.CloseTrigger className="btn-icon hover:preset-tonal">
								<XIcon className="size-4" />
							</Dialog.CloseTrigger>
						</header>
						<Dialog.Description>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</Dialog.Description>
						<footer className="flex justify-end gap-2">
							<Dialog.CloseTrigger className="btn preset-tonal">Cancel</Dialog.CloseTrigger>
							<button type="button" className="btn preset-filled">
								Save
							</button>
						</footer>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog>
	);
}
