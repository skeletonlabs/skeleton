<script lang="ts">
	import { Tooltip } from '../../../src/index.js';
</script>

<Tooltip>
	<Tooltip.Trigger data-testid="trigger" />
	<Tooltip.Positioner data-testid="positioner">
		<Tooltip.Content data-testid="content">
			<Tooltip.Arrow data-testid="arrow">
				<Tooltip.ArrowTip data-testid="arrow-tip" />
			</Tooltip.Arrow>
		</Tooltip.Content>
	</Tooltip.Positioner>
</Tooltip>
