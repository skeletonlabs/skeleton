'use client';

import { Dialog } from '@skeletonlabs/skeleton-react';

export default function Page() {
	return (
		<Dialog>
			<Dialog.Trigger>Open Dialog</Dialog.Trigger>
			<Dialog.Backdrop />
			<Dialog.Positioner>
				<Dialog.Content>
					<Dialog.Title>Dialog Title</Dialog.Title>
					<Dialog.Description>This is a description of the dialog.</Dialog.Description>
					<Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
				</Dialog.Content>
			</Dialog.Positioner>
		</Dialog>
	);
}
