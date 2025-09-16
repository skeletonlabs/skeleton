import { Popover } from '@skeletonlabs/skeleton-react';
import type { CSSProperties } from 'react';

export default function Arrow() {
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
					<Popover.Arrow
						style={{ '--arrow-size': 'calc(var(--spacing) * 2)', '--arrow-background': 'var(--color-surface-100-900)' } as CSSProperties}
					>
						<Popover.ArrowTip />
					</Popover.Arrow>
				</Popover.Content>
			</Popover.Positioner>
		</Popover>
	);
}
