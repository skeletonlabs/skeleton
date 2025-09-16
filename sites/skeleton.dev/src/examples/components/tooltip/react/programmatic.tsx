import { Tooltip, useTooltip } from '@skeletonlabs/skeleton-react';

export default function Programmatic() {
	const tooltip = useTooltip();
	return (
		<>
			<button className="btn preset-filled-primary-500" onClick={() => tooltip.setOpen(!tooltip.open)}>
				Tooltip is {tooltip.open ? 'Open' : 'Closed'}
			</button>

			<Tooltip.Provider value={tooltip}>
				<Tooltip.Trigger className="btn preset-filled">Trigger</Tooltip.Trigger>
				<Tooltip.Positioner>
					<Tooltip.Content className="card max-w-md p-2 bg-surface-100-900 shadow-xl">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente magni distinctio explicabo quisquam. Rerum impedit culpa
						nesciunt enim.
					</Tooltip.Content>
				</Tooltip.Positioner>
			</Tooltip.Provider>
		</>
	);
}
