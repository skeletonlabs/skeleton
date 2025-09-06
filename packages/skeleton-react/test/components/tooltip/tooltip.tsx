import { Tooltip } from '@skeletonlabs/skeleton-react';

export default function () {
	return (
		<Tooltip data-testid="root">
			<Tooltip.Trigger data-testid="trigger" />
			<Tooltip.Positioner data-testid="positioner">
				<Tooltip.Content>
					<Tooltip.Arrow data-testid="arrow">
						<Tooltip.ArrowTip data-testid="arrow-tip" />
					</Tooltip.Arrow>
				</Tooltip.Content>
			</Tooltip.Positioner>
		</Tooltip>
	);
}
