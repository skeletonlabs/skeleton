<script lang="ts">
	import SearchIcon from '@lucide/svelte/icons/search';
	import { Dialog, Portal } from '@skeletonlabs/skeleton-svelte';

	let inputRef: HTMLInputElement;
</script>

<Dialog initialFocusEl={() => inputRef}>
	<Dialog.Trigger class="btn preset-tonal justify-start">
		<SearchIcon class="size-4 opacity-60" />
		<span class="opacity-60">Search...</span>
		<span class="badge badge-icon preset-outlined-surface-500 text-xs opacity-30 hidden md:flex">⌘ K</span>
	</Dialog.Trigger>
	<Portal>
		<Dialog.Backdrop class="fixed inset-0 z-50 bg-surface-50-950/50 backdrop-blur-[2px]" />
		<Dialog.Positioner class="fixed inset-0 z-50 flex justify-center items-start mt-[5%] p-4">
			<Dialog.Content
				class="card bg-surface-50-950/90 backdrop-blur-sm border border-surface-200-800 w-full max-w-[960px] p-4 space-y-4 shadow-[0_0_100px_rgba(0,0,0,0.25)] shadow-primary-500/50 transition transition-discrete duration-200 opacity-0 starting:data-[state=open]:opacity-0 data-[state=open]:opacity-100"
			>
				<header class="flex justify-between items-center">
					<Dialog.Title class="font-bold text-lg">Explore</Dialog.Title>
					<Dialog.CloseTrigger class="btn-icon hover:preset-tonal rounded-full">&times</Dialog.CloseTrigger>
				</header>
				<hr class="hr" />
				<input bind:this={inputRef} type="search" class="input p-4 py-2 text-xl" placeholder="Search..." />
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog>
