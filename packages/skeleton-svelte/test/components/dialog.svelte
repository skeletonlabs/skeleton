<script lang="ts">
	import { Dialog } from '../../src/index.js';
</script>

<Dialog>
	<Dialog.Trigger data-testid="trigger" />
	<Dialog.Backdrop data-testid="backdrop" />
	<Dialog.Positioner data-testid="positioner">
		<Dialog.Content data-testid="content">
			<Dialog.Title data-testid="title" />
			<Dialog.Description data-testid="description" />
			<Dialog.CloseTrigger data-testid="close-trigger" />
		</Dialog.Content>
	</Dialog.Positioner>
</Dialog>
