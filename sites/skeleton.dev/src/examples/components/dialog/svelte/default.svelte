<script lang="ts">
	import { Dialog } from '@skeletonlabs/skeleton-svelte';
</script>

<Dialog>
	<Dialog.Trigger class="btn preset-filled">Trigger</Dialog.Trigger>
	<Dialog.Backdrop class="data-[state=open]:animate-[fade-in_100ms_ease-in-out]" />
	<Dialog.Positioner>
		<Dialog.Content class="card max-w-md p-4 bg-surface-100-900 shadow-xl space-y-2 data-[state=open]:animate-[slide-up_100ms_ease-in-out]">
			<Dialog.Title class="font-bold">Dialog Title</Dialog.Title>
			<Dialog.Description>This is a description of the dialog.</Dialog.Description>
			<Dialog.CloseTrigger class="btn preset-tonal">Close</Dialog.CloseTrigger>
		</Dialog.Content>
	</Dialog.Positioner>
</Dialog>

<style>
	@keyframes -global-fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 100;
		}
	}

	@keyframes -global-slide-up {
		from {
			transform: translateY(1rem);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 100;
		}
	}
</style>
