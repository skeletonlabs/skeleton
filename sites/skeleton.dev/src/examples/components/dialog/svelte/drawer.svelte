<script lang="ts">
	import XIcon from '@lucide/svelte/icons/x';
	import { Dialog } from '@skeletonlabs/skeleton-svelte';
</script>

<Dialog>
	<Dialog.Trigger class="btn preset-filled">Trigger</Dialog.Trigger>
	<Dialog.Backdrop />
	<Dialog.Positioner class="z-50! justify-start">
		<Dialog.Content class="h-screen card max-w-md p-4 bg-surface-100-900 shadow-xl space-y-2">
			<header class="flex justify-between items-center">
				<Dialog.Title class="font-bold">Drawer Title</Dialog.Title>
				<Dialog.CloseTrigger class="btn-icon preset-tonal">
					<XIcon />
				</Dialog.CloseTrigger>
			</header>
		</Dialog.Content>
	</Dialog.Positioner>
</Dialog>
