'use client';

import { Popover, Portal } from '@skeletonlabs/skeleton-react';

export default function Page() {
	return (
		<Popover>
			<Popover.Trigger>Open</Popover.Trigger>
			<Portal>
				<Popover.Positioner>
					<Popover.Content>
						<Popover.Title>Title</Popover.Title>
						<Popover.Description>Description</Popover.Description>
						<Popover.CloseTrigger>Close</Popover.CloseTrigger>
						<Popover.Arrow
							style={{
								['--arrow-size' as string]: 'calc(var(--spacing) * 2)',
								['--arrow-background' as string]: 'var(--color-surface-100-900)',
							}}
						>
							<Popover.ArrowTip />
						</Popover.Arrow>
					</Popover.Content>
				</Popover.Positioner>
			</Portal>
		</Popover>
	);
}
