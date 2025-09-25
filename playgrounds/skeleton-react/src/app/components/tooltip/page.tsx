'use client';

import { Tooltip } from '@skeletonlabs/skeleton-react';

export default function Page() {
	return (
		<Tooltip>
			<Tooltip.Trigger>Trigger</Tooltip.Trigger>
			<Tooltip.Positioner>
				<Tooltip.Content>
					Content
					<Tooltip.Arrow style={{ '--arrow-size': 'calc(var(--spacing) * 2)', '--arrow-background': 'var(--color-surface-100-900)' }}>
						<Tooltip.ArrowTip />
					</Tooltip.Arrow>
				</Tooltip.Content>
			</Tooltip.Positioner>
		</Tooltip>
	);
}
