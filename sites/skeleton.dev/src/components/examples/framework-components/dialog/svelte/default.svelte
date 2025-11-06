<script lang="ts">
	import { XIcon } from '@lucide/svelte';
	import { Dialog, Portal } from '@skeletonlabs/skeleton-svelte';

	// The following animation is optional.
	// This may also be included inline.
	const animation =
		'transition transition-discrete opacity-0 translate-y-[100px] starting:data-[state=open]:opacity-0 starting:data-[state=open]:translate-y-[100px] data-[state=open]:opacity-100 data-[state=open]:translate-y-0';
</script>

<Dialog>
	<Dialog.Trigger class="btn preset-filled">Trigger</Dialog.Trigger>
	<Portal>
		<Dialog.Backdrop class="fixed inset-0 z-50 bg-surface-50-950/50" />
		<Dialog.Positioner class="fixed inset-0 z-50 flex justify-center items-center p-4">
			<Dialog.Content class="card bg-surface-100-900 w-full max-w-xl p-4 space-y-4 shadow-xl {animation}">
				<header class="flex justify-between items-center">
					<Dialog.Title class="text-lg font-bold">Hello Skeleton</Dialog.Title>
					<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
						<XIcon class="size-4" />
					</Dialog.CloseTrigger>
				</header>
				<Dialog.Description>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</Dialog.Description>
				<footer class="flex justify-end gap-2">
					<Dialog.CloseTrigger class="btn preset-tonal">Cancel</Dialog.CloseTrigger>
					<button type="button" class="btn preset-filled">Save</button>
				</footer>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog>
