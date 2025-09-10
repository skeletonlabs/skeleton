<script lang="ts">
	import { Dialog } from '@skeletonlabs/skeleton-svelte';
</script>

<Dialog>
	<Dialog.Trigger>Open Dialog</Dialog.Trigger>
	<Dialog.Backdrop />
	<Dialog.Positioner>
		<Dialog.Content>
			<Dialog.Title>This is the title</Dialog.Title>
			<Dialog.Description>This is the description</Dialog.Description>
			<Dialog.CloseTrigger />
		</Dialog.Content>
	</Dialog.Positioner>
</Dialog>
