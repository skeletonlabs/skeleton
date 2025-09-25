import { Popover } from '@skeletonlabs/skeleton-react';

export default function Default() {
	return (
		<Popover>
			<Popover.Trigger className="btn preset-filled">Trigger</Popover.Trigger>
			<Popover.Positioner>
				<Popover.Content className="card max-w-md p-4 bg-surface-100-900 shadow-xl space-y-2">
					<Popover.Title className="font-bold">Title</Popover.Title>
					<Popover.Description>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente magni distinctio explicabo quisquam. Rerum impedit culpa
						nesciunt enim.
					</Popover.Description>
					<Popover.CloseTrigger className="btn preset-tonal">Close</Popover.CloseTrigger>
				</Popover.Content>
			</Popover.Positioner>
		</Popover>
	);
}
