<script lang="ts">
	import { setContext } from 'svelte';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
	import { useId } from '$lib/internal/use-id.js';
	import type { Toast, ToastProviderProps } from './types.js';

	let {
		placement = 'bottom-end',
		offset = '16px',
		// State
		stateInfo = 'preset-filled',
		stateError = 'preset-filled-error-500',
		stateSuccess = 'preset-filled-success-500',
		// Snippets
		children
	}: ToastProviderProps = $props();

	// Local
	let defaults: Record<string, Toast> = {
		info: { duration: 5000 },
		error: { duration: 5000 },
		success: { duration: 2000 }
	};
	let placementOptions: Record<string, { top?: string; bottom?: string; left?: string; right?: string }> = {
		'top-start': { top: offset, left: offset },
		'top-end': { top: offset, right: offset },
		'bottom-start': { bottom: offset, left: offset },
		'bottom-end': { bottom: offset, right: offset }
	};

	// State
	let toastQueue: Toast[] = $state([]);

	// Context
	setContext('toast', {
		create: (toast: Toast) => {
			// Set default settings
			toast = {
				...defaults[String(toast.type)],
				...toast,
				id: useId()
			};
			// Push to Queue
			toastQueue.push(toast);
			// Set duration timeout
			setTimeout(() => {
				dismiss(toast.id);
			}, toast.duration);
		}
	});

	function formatStyleAttr(style: { top?: string; bottom?: string; left?: string; right?: string }) {
		return Object.entries(style)
			.map(([k, v]) => `${k}:${v}`)
			.join(';');
	}

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
<div class="fixed z-10 flex flex-col items-end gap-4" style={formatStyleAttr(placementOptions[placement])}>
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
