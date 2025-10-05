import { Dialog, Portal } from '@skeletonlabs/skeleton-react';
import { XIcon, MenuIcon } from 'lucide-react';

export default function Drawer() {
	return (
		<Dialog>
			<Dialog.Trigger className="xl:hidden btn-icon translate-x" title="Open drawer">
				<MenuIcon />
			</Dialog.Trigger>
			<Portal>
				<Dialog.Backdrop className="fixed inset-0 z-50 bg-surface-50-950/50 transition transition-discrete opacity-0 starting:data-[state=open]:opacity-0 data-[state=open]:opacity-100" />
				<Dialog.Positioner className="fixed inset-0 z-50 flex justify-start">
					<Dialog.Content className="h-dvh overflow-y-scroll card rounded-none bg-surface-100-900 w-sm space-y-4 shadow-xl transition transition-discrete opacity-0 -translate-x-full starting:data-[state=open]:opacity-0 starting:data-[state=open]:-translate-x-full data-[state=open]:opacity-100 data-[state=open]:translate-x-0 z-50">
						<header className="flex justify-between items-center p-6 from-surface-100-900 from-75% to-surface-100-900/0 bg-linear-to-b start sticky top-0">
							<h2 className="h3">Skeleton</h2>
							<Dialog.CloseTrigger className="btn-icon" title="Close drawer">
								<XIcon />
							</Dialog.CloseTrigger>
						</header>
						<div className="p-4">
							<slot />
						</div>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog>
	);
}
