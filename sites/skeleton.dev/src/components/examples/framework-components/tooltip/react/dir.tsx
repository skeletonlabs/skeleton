import { Portal, Tooltip } from '@skeletonlabs/skeleton-react';

export default function Dir() {
	return (
		<Tooltip dir="rtl">
			<Tooltip.Trigger>Hover</Tooltip.Trigger>
			<Portal>
				<Tooltip.Positioner>
					<Tooltip.Content className="card bg-surface-100-900 p-2  shadow-xl">Hello Skeleton</Tooltip.Content>
				</Tooltip.Positioner>
			</Portal>
		</Tooltip>
	);
}
