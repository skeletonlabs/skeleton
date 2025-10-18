<script lang="ts">
	import { XIcon } from '@lucide/svelte';
	import { Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<Dialog>
	<Dialog.Trigger class="btn preset-filled">Trigger</Dialog.Trigger>
	<Portal>
		<Dialog.Backdrop
			class="fixed inset-0 z-50 bg-surface-50-950/50 transition transition-discrete opacity-0 starting:data-[state=open]:opacity-0 data-[state=open]:opacity-100"
		/>
		<Dialog.Positioner class="fixed inset-0 z-50 flex justify-start">
			<Dialog.Content
				class="h-screen card bg-surface-100-900 w-sm p-4 space-y-4 shadow-xl transition transition-discrete opacity-0 -translate-x-full starting:data-[state=open]:opacity-0 starting:data-[state=open]:-translate-x-full data-[state=open]:opacity-100 data-[state=open]:translate-x-0"
			>
				<header class="flex justify-between items-center">
					<Dialog.Title class="text-2xl font-bold">Drawer Title</Dialog.Title>
					<Dialog.CloseTrigger class="btn-icon preset-tonal">
						<XIcon />
					</Dialog.CloseTrigger>
				</header>
				<p>This is example content for the slide out drawer panel.</p>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog>
