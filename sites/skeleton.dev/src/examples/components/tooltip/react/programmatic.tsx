import { Tooltip, useTooltip } from '@skeletonlabs/skeleton-react';

export default function Programmatic() {
	const tooltip = useTooltip();
	return (
		<div className="flex flex-col gap-4">
			<button className="btn preset-filled w-[150px]" onClick={() => tooltip.setOpen(!tooltip.open)}>
				Trigger
			</button>

			<Tooltip.Provider value={tooltip}>
				<Tooltip.Trigger>Anchor ({tooltip.open ? 'open' : 'closed'})</Tooltip.Trigger>
				<Tooltip.Positioner>
					<Tooltip.Content className="card max-w-md p-2 bg-surface-100-900 shadow-xl">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente magni distinctio explicabo quisquam. Rerum impedit culpa
						nesciunt enim.
					</Tooltip.Content>
				</Tooltip.Positioner>
			</Tooltip.Provider>
		</div>
	);
}
