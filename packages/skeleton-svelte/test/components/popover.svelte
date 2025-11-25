<script lang="ts">
	import { Popover } from '../../src/index.js';
</script>

<Popover>
	<Popover.Anchor data-testid="anchor" />
	<Popover.Trigger data-testid="trigger" />
	<Popover.Positioner data-testid="positioner">
		<Popover.Content data-testid="content">
			<Popover.Arrow data-testid="arrow">
				<Popover.ArrowTip data-testid="arrow-tip" />
			</Popover.Arrow>
			<Popover.Title data-testid="title" />
			<Popover.Description data-testid="description" />
			<Popover.CloseTrigger data-testid="close-trigger" />
		</Popover.Content>
	</Popover.Positioner>
</Popover>
