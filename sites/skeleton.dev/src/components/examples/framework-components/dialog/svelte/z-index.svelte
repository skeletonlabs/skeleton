<script lang="ts">
	import { Dialog, Portal } from "@skeletonlabs/skeleton-svelte";
</script>

<Dialog>
	<Dialog.Trigger class="btn preset-filled">Trigger</Dialog.Trigger>
	<Portal>
		<Dialog.Backdrop class="bg-surface-50-950/50 fixed inset-0 z-50" />
		<Dialog.Positioner class="fixed inset-0 z-50 flex items-center justify-center">
			<Dialog.Content class="card bg-surface-100-900 w-md space-y-2 p-4 shadow-xl">
				<Dialog.Title class="text-2xl font-bold">Setting Z-Index</Dialog.Title>
				<Dialog.Description>This dialog will have a z-index value of 50.</Dialog.Description
				>
				<Dialog.CloseTrigger class="btn preset-tonal">Close</Dialog.CloseTrigger>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog>
