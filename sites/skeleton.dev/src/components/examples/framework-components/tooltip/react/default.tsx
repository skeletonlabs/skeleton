import { Portal, Tooltip } from '@skeletonlabs/skeleton-react';

export default function Default() {
	return (
		<Tooltip>
			<Tooltip.Trigger>Hover Me</Tooltip.Trigger>
			<Portal>
				<Tooltip.Positioner>
					<Tooltip.Content className="card p-2 preset-filled-surface-950-50">
						<span>Hello Skeleton</span>
						<Tooltip.Arrow
							style={{
								['--arrow-size' as string]: 'calc(var(--spacing) * 2)',
								['--arrow-background' as string]: 'var(--color-surface-950-50)',
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
