<script lang="ts">
	import { Dialog, Portal } from "@skeletonlabs/skeleton-svelte";
</script>

<Dialog role="alertdialog">
	<Dialog.Trigger class="btn preset-filled">Trigger</Dialog.Trigger>
	<Portal>
		<Dialog.Backdrop class="bg-error-50-950/50 fixed inset-0 z-50" />
		<Dialog.Positioner class="fixed inset-0 z-50 flex items-center justify-center">
			<Dialog.Content class="card preset-filled-error-500 w-md space-y-2 p-4 shadow-xl">
				<Dialog.Title class="text-2xl font-bold">Alert</Dialog.Title>
				<Dialog.Description>Something important has happened!</Dialog.Description>
				<Dialog.CloseTrigger class="btn preset-tonal-error">Close</Dialog.CloseTrigger>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog>
