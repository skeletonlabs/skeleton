<script lang="ts">
	import MenuIcon from "@lucide/svelte/icons/menu";
	import { Dialog, Portal } from "@skeletonlabs/skeleton-svelte";
	import type { Snippet } from "svelte";

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
			class="bg-surface-50-950/50 fixed inset-0 z-50 opacity-0 transition transition-discrete data-[state=open]:opacity-100 starting:data-[state=open]:opacity-0"
		/>
		<Dialog.Positioner class="fixed inset-0 z-50 flex justify-start">
			<Dialog.Content
				class="card border-surface-200-800 bg-surface-50-950/75 hide-scrollbar-track h-dvh w-sm -translate-x-full space-y-4 overflow-y-auto border-r p-4 opacity-0 shadow-xl backdrop-blur-lg transition transition-discrete data-[state=open]:translate-x-0 data-[state=open]:opacity-100 motion-reduce:transition-none starting:data-[state=open]:-translate-x-full starting:data-[state=open]:opacity-0"
			>
				<header class="flex items-center justify-between gap-4">
					<Dialog.Title class="text-2xl font-bold">Skeleton</Dialog.Title>
					<Dialog.CloseTrigger class="btn-icon hover:preset-tonal rounded-full"
						>&times</Dialog.CloseTrigger
					>
				</header>
				<hr class="hr" />
				<div class="overflow-y-auto">
					{@render children()}
				</div>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog>
