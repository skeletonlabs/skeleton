import { Popover, Portal } from "@skeletonlabs/skeleton-react";

export default function Dir() {
	return (
		<Popover dir="rtl">
			<Popover.Trigger className="btn preset-filled">Trigger</Popover.Trigger>
			<Portal>
				<Popover.Positioner>
					<Popover.Content className="card bg-surface-100-900 max-w-md space-y-2 p-4 shadow-xl">
						<Popover.Title className="font-bold">Title</Popover.Title>
						<Popover.Description>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente magni
							distinctio explicabo quisquam. Rerum impedit culpa nesciunt enim.
						</Popover.Description>
						<Popover.CloseTrigger className="btn preset-tonal">
							Close
						</Popover.CloseTrigger>
					</Popover.Content>
				</Popover.Positioner>
			</Portal>
		</Popover>
	);
}
