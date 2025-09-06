<script lang="ts">
	import { Popover } from '../../../src/index';
</script>

<Popover data-testid="root">
	<Popover.Trigger data-testid="trigger" />
	<Popover.Positioner data-testid="positioner">
		<Popover.Content data-testid="content">
			<Popover.Title data-testid="title" />
			<Popover.Description data-testid="description" />
			<Popover.CloseTrigger data-testid="close-trigger" />
		</Popover.Content>
	</Popover.Positioner>
</Popover>
