'use client';

import { Dialog, Portal } from '@skeletonlabs/skeleton-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/components/dialog/')({
	component: Page,
});

function Page() {
	return (
		<Dialog>
			<Dialog.Trigger className="btn preset-filled">Trigger</Dialog.Trigger>
			<Portal>
				<Dialog.Backdrop className="fixed inset-0 z-50 bg-surface-50-950/50" />
				<Dialog.Positioner className="fixed inset-0 z-50 flex justify-center items-center">
					<Dialog.Content className="card bg-surface-100-900 w-md p-4 space-y-2 shadow-xl">
						<Dialog.Title className="text-2xl font-bold">Hello World</Dialog.Title>
						<Dialog.Description>This is an example of a basic dialog.</Dialog.Description>
						<Dialog.CloseTrigger className="btn preset-tonal">Close</Dialog.CloseTrigger>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog>
	);
}
