'use client';

import { Popover } from '@skeletonlabs/skeleton-react';

export default function () {
	return (
		<Popover>
			<Popover.Trigger>Open</Popover.Trigger>
			<Popover.Positioner>
				<Popover.Content>
					<Popover.Arrow>
						<Popover.ArrowTip />
					</Popover.Arrow>
					<Popover.Title>Title</Popover.Title>
					<Popover.Description>Description</Popover.Description>
					<Popover.CloseTrigger>Close</Popover.CloseTrigger>
				</Popover.Content>
			</Popover.Positioner>
		</Popover>
	);
}
