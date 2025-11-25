import { Popover, Portal } from '@skeletonlabs/skeleton-react';

export default function Arrow() {
	return (
		<Popover>
			<Popover.Trigger className="btn preset-filled">Trigger</Popover.Trigger>
			<Portal>
				<Popover.Positioner>
					<Popover.Content className="card max-w-md p-4 bg-surface-100-900 shadow-xl">
						<Popover.Description>This example will have a small arrow.</Popover.Description>
						<Popover.Arrow className="[--arrow-size:--spacing(2)] [--arrow-background:var(--color-surface-100-900)]">
							<Popover.ArrowTip />
						</Popover.Arrow>
					</Popover.Content>
				</Popover.Positioner>
			</Portal>
		</Popover>
	);
}
