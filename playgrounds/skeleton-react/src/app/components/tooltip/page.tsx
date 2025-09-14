'use client';

import { Tooltip } from '@skeletonlabs/skeleton-react';

export default function Page() {
	return (
		<Tooltip>
			<Tooltip.Trigger>Trigger</Tooltip.Trigger>
			<Tooltip.Positioner>
				<Tooltip.Content>
					Content
					<Tooltip.Arrow>
						<Tooltip.ArrowTip />
					</Tooltip.Arrow>
				</Tooltip.Content>
			</Tooltip.Positioner>
		</Tooltip>
	);
}
