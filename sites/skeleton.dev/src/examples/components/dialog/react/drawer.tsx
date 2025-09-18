import { Dialog } from '@skeletonlabs/skeleton-react';
import { XIcon } from 'lucide-react';

export default function Drawer() {
	return (
		<Dialog>
			<Dialog.Trigger className="btn preset-filled">Trigger</Dialog.Trigger>
			<Dialog.Backdrop />
			<Dialog.Positioner className="z-50! justify-start">
				<Dialog.Content className="h-screen card max-w-md p-4 bg-surface-100-900 shadow-xl space-y-2">
					<header className="flex justify-between items-center">
						<Dialog.Title className="font-bold">Drawer Title</Dialog.Title>
						<Dialog.CloseTrigger className="btn-icon preset-tonal">
							<XIcon />
						</Dialog.CloseTrigger>
					</header>
				</Dialog.Content>
			</Dialog.Positioner>
		</Dialog>
	);
}
