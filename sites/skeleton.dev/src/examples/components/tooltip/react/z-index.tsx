import { Portal, Tooltip } from '@skeletonlabs/skeleton-react';

export default function ZIndex() {
	return (
		<div className="grid grid-cols-2 gap-4">
			<Tooltip>
				<Tooltip.Trigger>Default (auto)</Tooltip.Trigger>
				<Portal>
					<Tooltip.Positioner>
						<Tooltip.Content className="card max-w-md p-2 bg-surface-100-900 shadow-xl">
							This example will be below the sibling.
						</Tooltip.Content>
					</Tooltip.Positioner>
				</Portal>
			</Tooltip>

			<Tooltip>
				<Tooltip.Trigger>Above (20)</Tooltip.Trigger>
				<Portal>
					<Tooltip.Positioner className="z-20!">
						<Tooltip.Content className="card max-w-md p-2 bg-surface-100-900 shadow-xl">
							This example will be above the sibling.
						</Tooltip.Content>
					</Tooltip.Positioner>
				</Portal>
			</Tooltip>

			<div className="col-span-2 h-[100px] relative">
				<div className="rounded bg-primary-200-800/75 w-full h-full z-10 flex justify-center items-center absolute">Sibling (10)</div>
			</div>
		</div>
	);
}
