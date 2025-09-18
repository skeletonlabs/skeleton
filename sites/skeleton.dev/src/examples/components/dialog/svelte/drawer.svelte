<script lang="ts">
	import XIcon from '@lucide/svelte/icons/x';
	import { Dialog } from '@skeletonlabs/skeleton-svelte';
</script>

<Dialog>
	<Dialog.Trigger class="btn preset-filled">Trigger</Dialog.Trigger>
	<Dialog.Backdrop class="fixed inset-0 z-50 bg-surface-50-950/50 data-[state=open]:animate-[fade-in_100ms_ease-in-out]" />
	<Dialog.Positioner class="fixed inset-0 z-50 flex justify-start">
		<Dialog.Content
			class="h-screen card bg-surface-100-900 w-sm p-4 space-y-4 shadow-xl data-[state=open]:animate-[slide-out_100ms_ease-in-out]"
		>
			<header class="flex justify-between items-center">
				<Dialog.Title class="text-2xl font-bold">Drawer Title</Dialog.Title>
				<Dialog.CloseTrigger class="btn-icon preset-tonal">
					<XIcon />
				</Dialog.CloseTrigger>
			</header>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, soluta optio assumenda nobis dignissimos minus doloremque in
				aliquid amet laboriosam! Soluta recusandae facilis provident ratione a! Vitae expedita rerum magni.
			</p>
		</Dialog.Content>
	</Dialog.Positioner>
</Dialog>

<!-- NOTE: places these styles in your global stylesheet. -->
<style>
	@keyframes -global-fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 100;
		}
	}

	@keyframes -global-slide-out {
		from {
			transform: translateX(-100%);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 100;
		}
	}
</style>
