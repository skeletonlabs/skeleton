import { Portal, Tooltip, useTooltip } from '@skeletonlabs/skeleton-react';

export default function Programmatic() {
	const tooltip = useTooltip();
	return (
		<div className="flex flex-col gap-4">
			<button className="btn preset-filled w-[150px]" onClick={() => tooltip.setOpen(!tooltip.open)}>
				Trigger
			</button>

			<Tooltip.Provider value={tooltip}>
				<Tooltip.Trigger>Anchor ({tooltip.open ? 'open' : 'closed'})</Tooltip.Trigger>
				<Portal>
					<Tooltip.Positioner>
						<Tooltip.Content className="card bg-surface-100-900 p-2  shadow-xl">Hello Skeleton</Tooltip.Content>
					</Tooltip.Positioner>
				</Portal>
			</Tooltip.Provider>
		</div>
	);
}
