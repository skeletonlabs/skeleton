<script lang="ts">
	import { MenuIcon } from '@lucide/svelte';
	import { Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();
</script>

<Dialog>
	<Dialog.Trigger class="btn-icon hover:preset-tonal">
		<MenuIcon class="size-4" />
	</Dialog.Trigger>
	<Portal>
		<Dialog.Backdrop
			class="fixed inset-0 z-50 bg-surface-50-950/50 transition transition-discrete opacity-0 starting:data-[state=open]:opacity-0 data-[state=open]:opacity-100"
		/>
		<Dialog.Positioner class="fixed inset-0 z-50 flex justify-start">
			<Dialog.Content
				class="card border-r border-surface-200-800 bg-surface-50-950/75 backdrop-blur-lg w-sm h-dvh p-4 space-y-4 shadow-xl overflow-y-auto hide-scrollbar-track transition transition-discrete opacity-0 -translate-x-full starting:data-[state=open]:opacity-0 starting:data-[state=open]:-translate-x-full data-[state=open]:opacity-100 data-[state=open]:translate-x-0"
			>
				<header class="flex justify-between items-center gap-4">
					<Dialog.Title class="text-2xl font-bold">Skeleton</Dialog.Title>
					<Dialog.CloseTrigger class="btn-icon hover:preset-tonal rounded-full">&times</Dialog.CloseTrigger>
				</header>
				<hr class="hr" />
				<div class="overflow-y-auto">
					{@render children()}
				</div>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog>
