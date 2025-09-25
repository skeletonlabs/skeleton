<script lang="ts">
	import IconSkull from '@lucide/svelte/icons/skull';
	import { Dialog } from '@skeletonlabs/skeleton-svelte';
</script>

<Dialog>
	<Dialog.Trigger>
		<IconSkull class="size-12" />
	</Dialog.Trigger>
	<Dialog.Backdrop class="fixed inset-0 z-50 bg-surface-50-950/50" />
	<Dialog.Positioner class="fixed inset-0 z-50 flex justify-center items-center p-4">
		<Dialog.Content>
			<div class="card border border-surface-200/30 bg-surface-50-900/30 backdrop-blur-sm w-full max-w-xl p-4 space-y-4 shadow-xl">
				<header class="flex justify-between items-center">
					<Dialog.Title class="text-2xl font-bold">Hello Skeleton</Dialog.Title>
					<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">&times</Dialog.CloseTrigger>
				</header>
				<img
					class="w-full rounded-container overflow-hidden"
					src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWVmbzcxanp6YmtxZ28xcXBqaXBscThsdDZ5Nm9ncWxkeWtqaHJ2bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/dn1PN6NtunfnUjUGFC/giphy.gif"
					alt="Skeleton Gif"
				/>
				<Dialog.Description class="text-center">Three spooky skeletons!</Dialog.Description>
			</div>
		</Dialog.Content>
	</Dialog.Positioner>
</Dialog>
