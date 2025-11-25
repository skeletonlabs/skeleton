'use client';

import { Popover, Portal } from '@skeletonlabs/skeleton-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/components/popover/')({
	component: Page,
});

function Page() {
	return (
		<Popover>
			<Popover.Trigger>Open</Popover.Trigger>
			<Portal>
				<Popover.Positioner>
					<Popover.Content>
						<Popover.Title>Title</Popover.Title>
						<Popover.Description>Description</Popover.Description>
						<Popover.CloseTrigger>Close</Popover.CloseTrigger>
						<Popover.Arrow className="[--arrow-size:--spacing(2)] [--arrow-background:var(--color-surface-100-900)]">
							<Popover.ArrowTip />
						</Popover.Arrow>
					</Popover.Content>
				</Popover.Positioner>
			</Portal>
		</Popover>
	);
}
