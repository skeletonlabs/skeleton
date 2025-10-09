'use client';

import { Portal, Tooltip } from '@skeletonlabs/skeleton-react';

export default function Page() {
	return (
		<Tooltip>
			<Tooltip.Trigger>Trigger</Tooltip.Trigger>
			<Portal>
				<Tooltip.Positioner>
					<Tooltip.Content>
						Content
						<Tooltip.Arrow
							style={{
								['--arrow-size' as string]: 'calc(var(--spacing) * 2)',
								['--arrow-background' as string]: 'var(--color-surface-100-900)',
							}}
						>
							<Tooltip.ArrowTip />
						</Tooltip.Arrow>
					</Tooltip.Content>
				</Tooltip.Positioner>
			</Portal>
		</Tooltip>
	);
}
