'use client';

import { Popover } from '@skeletonlabs/skeleton-react';

export default function Page() {
	return (
		<Popover>
			<Popover.Trigger>Open</Popover.Trigger>
			<Popover.Positioner>
				<Popover.Content>
					<Popover.Title>Title</Popover.Title>
					<Popover.Description>Description</Popover.Description>
					<Popover.CloseTrigger>Close</Popover.CloseTrigger>
					<Popover.Arrow style={{ '--arrow-size': 'calc(var(--spacing) * 2)', '--arrow-background': 'var(--color-surface-100-900)' }}>
						<Popover.ArrowTip />
					</Popover.Arrow>
				</Popover.Content>
			</Popover.Positioner>
		</Popover>
	);
}
