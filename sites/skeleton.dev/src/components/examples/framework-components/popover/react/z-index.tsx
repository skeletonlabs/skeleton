import { Popover, Portal } from "@skeletonlabs/skeleton-react";

export default function ZIndex() {
	return (
		<div className="grid grid-cols-2 gap-4">
			<Popover>
				<Popover.Trigger className="btn preset-filled">Default (auto)</Popover.Trigger>
				<Portal>
					<Popover.Positioner>
						<Popover.Content className="card bg-surface-100-900 max-w-md space-y-2 p-4">
							<Popover.Description>
								This example will be below the sibling.
							</Popover.Description>
						</Popover.Content>
					</Popover.Positioner>
				</Portal>
			</Popover>

			<Popover>
				<Popover.Trigger className="btn preset-filled">Above (20)</Popover.Trigger>
				<Portal>
					<Popover.Positioner className="z-20!">
						<Popover.Content className="card bg-surface-100-900 max-w-md space-y-2 p-4 shadow-xl">
							<Popover.Description>
								This example will be above the sibling.
							</Popover.Description>
						</Popover.Content>
					</Popover.Positioner>
				</Portal>
			</Popover>

			<div className="relative col-span-2 h-[100px]">
				<div className="bg-primary-200-800/75 absolute z-10 flex h-full w-full items-center justify-center rounded">
					Sibling (10)
				</div>
			</div>
		</div>
	);
}
