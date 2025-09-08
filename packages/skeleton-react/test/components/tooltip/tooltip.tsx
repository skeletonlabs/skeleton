import { Tooltip } from '../../../src/index';

export default function () {
	return (
		<Tooltip>
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
