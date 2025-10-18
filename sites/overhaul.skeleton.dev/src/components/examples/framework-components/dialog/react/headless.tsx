import { Dialog, Portal } from '@skeletonlabs/skeleton-react';
import { SkullIcon } from 'lucide-react';

export default function Headless() {
	return (
		<Dialog>
			<Dialog.Trigger>
				<SkullIcon className="size-12" />
			</Dialog.Trigger>
			<Portal>
				<Dialog.Backdrop className="fixed inset-0 z-50 bg-surface-50-950/50" />
				<Dialog.Positioner className="fixed inset-0 z-50 flex justify-center items-center p-4">
					<Dialog.Content>
						<div className="card border border-surface-200/30 bg-surface-50-900/30 backdrop-blur-sm w-full max-w-xl p-4 space-y-4 shadow-xl">
							<header className="flex justify-between items-center">
								<Dialog.Title className="text-2xl font-bold">Hello Skeleton</Dialog.Title>
								<Dialog.CloseTrigger className="btn-icon hover:preset-tonal">✕</Dialog.CloseTrigger>
							</header>
							<img
								className="w-full rounded-container overflow-hidden"
								src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWVmbzcxanp6YmtxZ28xcXBqaXBscThsdDZ5Nm9ncWxkeWtqaHJ2bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/dn1PN6NtunfnUjUGFC/giphy.gif"
								alt="Skeleton Gif"
							/>
							<Dialog.Description className="text-center">Three spooky skeletons!</Dialog.Description>
						</div>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog>
	);
}
