import { Popover } from '@skeletonlabs/skeleton-react';

export default function ZIndex() {
	return (
		<div className="grid grid-cols-2 gap-4">
			<Popover>
				<Popover.Trigger className="btn preset-filled">Default (auto)</Popover.Trigger>
				<Popover.Positioner>
					<Popover.Content className="card max-w-md p-4 bg-surface-100-900 space-y-2">
						<Popover.Description>This example will be below the sibling.</Popover.Description>
					</Popover.Content>
				</Popover.Positioner>
			</Popover>

			<Popover>
				<Popover.Trigger className="btn preset-filled">Above (20)</Popover.Trigger>
				<Popover.Positioner className="z-20!">
					<Popover.Content className="card max-w-md p-4 bg-surface-100-900 shadow-xl space-y-2">
						<Popover.Description>This example will be above the sibling.</Popover.Description>
					</Popover.Content>
				</Popover.Positioner>
			</Popover>

			<div className="col-span-2 h-[100px] relative">
				<div className="rounded bg-primary-200-800/75 w-full h-full z-10 flex justify-center items-center absolute">Sibling (10)</div>
			</div>
		</div>
	);
}
