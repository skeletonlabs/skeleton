import { Portal, Tooltip } from '@skeletonlabs/skeleton-react';

export default function Arrow() {
	return (
		<Tooltip>
			<Tooltip.Trigger>Hover</Tooltip.Trigger>
			<Portal>
				<Tooltip.Positioner>
					<Tooltip.Content className="card bg-surface-100-900 p-2 shadow-xl">
						<span>Hello Skeleton</span>
						<Tooltip.Arrow className="[--arrow-size:--spacing(2)] [--arrow-background:var(--color-surface-100-900)]">
							<Tooltip.ArrowTip />
						</Tooltip.Arrow>
					</Tooltip.Content>
				</Tooltip.Positioner>
			</Portal>
		</Tooltip>
	);
}
