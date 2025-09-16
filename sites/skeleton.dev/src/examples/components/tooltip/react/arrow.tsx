import { Tooltip } from '@skeletonlabs/skeleton-react';

export default function Arrow() {
	return (
		<Tooltip>
			<Tooltip.Trigger className="btn preset-filled">Trigger</Tooltip.Trigger>
			<Tooltip.Positioner>
				<Tooltip.Content className="card max-w-md p-2 bg-surface-100-900 shadow-xl">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente magni distinctio explicabo quisquam. Rerum impedit culpa
					nesciunt enim.
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
		</Tooltip>
	);
}
