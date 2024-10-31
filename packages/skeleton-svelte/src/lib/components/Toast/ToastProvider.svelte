<script lang="ts">
	import { setContext } from 'svelte';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
	import { useId } from '$lib/internal/use-id.js';
	import type { ToastProps, ToastProviderProps } from './types.js';

	let {
		// State
		stateInfo = 'preset-filled',
		stateError = 'preset-filled-error-500',
		stateSuccess = 'preset-filled-success-500',
		// Snippets
		children
	}: ToastProviderProps = $props();

	// State
	let toastQueue: ToastProps[] = $state([]);

	// Context
	setContext('toast', {
		create: (toast: ToastProps) => {
			toast.id = useId();
			toastQueue.push(toast);
			// Remove on Timeout
			setTimeout(() => {
				dismiss(toast.id);
			}, toast.duration);
		}
	});

	function dismiss(id: string | undefined) {
		if (!id) return;
		toastQueue = toastQueue.filter((t) => t.id !== id);
	}

	function getStateClasses(type?: string) {
		// prettier-ignore
		switch (type) {
			case 'error': return stateError;
			case 'success': return stateSuccess;
			default: return stateInfo;
		}
	}
</script>

<!-- Toast Group -->
<div class="fixed right-4 bottom-4 z-10 flex flex-col items-end gap-4">
	{#each toastQueue as toast, i (toast)}
		{@const stateClasses = getStateClasses(toast.type)}
		<!-- Toast -->
		<div
			class="card py-2 px-3 grid grid-cols-[1fr_auto] items-center gap-4 shadow-xl {stateClasses}"
			animate:flip={{ duration: 200 }}
			transition:fade={{ duration: 200 }}
		>
			<!-- Message -->
			<div class="grid grid-cols-1 max-w-[320px]">
				{#if toast.title}<div class="type-scale-1 font-bold whitespace-nowrap">{toast.title}</div>{/if}
				<div class="type-scale-1">{toast.description}</div>
			</div>
			<!-- Dismiss -->
			<button type="button" class="btn-icon btn-icon-sm hover:preset-tonal" onclick={() => dismiss(toast.id)}>&times;</button>
		</div>
	{/each}
</div>

{@render children?.()}
