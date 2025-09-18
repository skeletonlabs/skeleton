import { Dialog } from '@skeletonlabs/skeleton-react';
import { XIcon } from 'lucide-react';

export default function Drawer() {
	return (
		<>
			<Dialog>
				<Dialog.Trigger className="btn preset-filled">Trigger</Dialog.Trigger>
				<Dialog.Backdrop className="fixed inset-0 z-50 bg-surface-50-950/50 data-[state=open]:animate-[fade-in_100ms_ease-in-out]" />
				<Dialog.Positioner className="fixed inset-0 z-50 flex justify-start">
					<Dialog.Content className="h-screen card bg-surface-100-900 w-sm p-4 space-y-4 shadow-xl data-[state=open]:animate-[slide-out_100ms_ease-in-out]">
						<header className="flex justify-between items-center">
							<Dialog.Title className="text-2xl font-bold">Drawer Title</Dialog.Title>
							<Dialog.CloseTrigger className="btn-icon preset-tonal">
								<XIcon />
							</Dialog.CloseTrigger>
						</header>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, soluta optio assumenda nobis dignissimos minus doloremque in
							aliquid amet laboriosam! Soluta recusandae facilis provident ratione a! Vitae expedita rerum magni.
						</p>
					</Dialog.Content>
				</Dialog.Positioner>
			</Dialog>

			{/* NOTE: places these styles in your global stylesheet. */}
			<style>{`
				@keyframes fade-in {
					from {
						opacity: 0;
					}
					to {
						opacity: 100;
					}
				}

				@keyframes slide-out {
					from {
						transform: translateX(-100%);
						opacity: 0;
					}
					to {
						transform: translateX(0);
						opacity: 100;
					}
				}
			`}</style>
		</>
	);
}
