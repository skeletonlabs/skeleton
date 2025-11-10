import { Dialog, Portal } from '@skeletonlabs/skeleton-react';
import { XIcon } from 'lucide-react';

export default function Drawer() {
	// The following animations are optional.
	// These may also be included inline.
	const animBackdrop = 'transition transition-discrete opacity-0 starting:data-[state=open]:opacity-0 data-[state=open]:opacity-100';
	const animModal =
		'transition transition-discrete opacity-0 -translate-x-full starting:data-[state=open]:opacity-0 starting:data-[state=open]:-translate-x-full data-[state=open]:opacity-100 data-[state=open]:translate-x-0';

	return (
		<Dialog>
			<Dialog.Trigger className="btn preset-filled">Trigger</Dialog.Trigger>
			<Portal>
				<Dialog.Backdrop className={`fixed inset-0 z-50 bg-surface-50-950/50 ${animBackdrop}`} />
				<Dialog.Positioner className="fixed inset-0 z-50 flex justify-start">
					<Dialog.Content className={`h-screen card bg-surface-100-900 w-sm p-4 space-y-4 shadow-xl ${animModal}`}>
						<header className="flex justify-between items-center">
							<Dialog.Title className="text-2xl font-bold">Drawer</Dialog.Title>
							<Dialog.CloseTrigger className="btn-icon preset-tonal">
								<XIcon />
							</Dialog.CloseTrigger>
						</header>
						<p>A slide out drawer panel.</p>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog>
	);
}
