<script lang="ts">
	import { Dialog } from '@skeletonlabs/skeleton-svelte';
</script>

<Dialog>
	<Dialog.Trigger class="btn preset-filled">Trigger</Dialog.Trigger>
	<Dialog.Backdrop />
	<Dialog.Positioner>
		<Dialog.Content class="card max-w-md p-4 bg-surface-100-900 shadow-xl space-y-2">
			<Dialog.Title class="font-bold">Dialog Title</Dialog.Title>
			<Dialog.Description>This is a description of the dialog.</Dialog.Description>

			<Dialog>
				<Dialog.Trigger class="btn preset-filled">Trigger</Dialog.Trigger>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content class="card max-w-md p-4 bg-surface-100-900 shadow-xl space-y-2">
						<Dialog.Title class="font-bold">Dialog Title</Dialog.Title>
						<Dialog.Description>This is a description of the dialog.</Dialog.Description>
						<Dialog.CloseTrigger class="btn preset-tonal">Close</Dialog.CloseTrigger>
					</Dialog.Content>
				</Dialog.Positioner>
			</Dialog>

			<Dialog.CloseTrigger class="btn preset-tonal">Close</Dialog.CloseTrigger>
		</Dialog.Content>
	</Dialog.Positioner>
</Dialog>
