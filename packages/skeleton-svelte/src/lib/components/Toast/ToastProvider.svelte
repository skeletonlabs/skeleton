<script lang="ts">
	import { setContext } from 'svelte';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';

	import type { PlacementStyles, Toast, ToastProviderProps } from './types.js';

	const {
		placement = 'bottom-end',
		offset = '16px',
		dismissLabel = '',
		// Group
		groupBase = 'fixed flex flex-col items-end',
		groupZIndex = 'z-[888]',
		groupGap = 'gap-4',
		groupClasses = '',
		// Toast
		toastBase = 'card py-2 px-3 grid grid-cols-[1fr_auto] items-center',
		toastPadding = 'py-2 px-3',
		toastGap = 'gap-4',
		toastShadow = 'shadow-xl',
		toastClasses = '',
		// Message
		messageBase = 'grid grid-cols-1 max-w-xs text-xs',
		messageTitle = 'font-bold',
		messageDescription = '',
		messageClasses = '',
		// Dismiss Button
		btnDismissBase = 'btn-icon btn-icon-sm text-base',
		btnDimissPreset = '',
		btnDismissHover = 'hover:preset-tonal',
		btnDismissClasses = '',
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
	let placementOptions: Record<string, PlacementStyles> = {
		'top-start': { top: offset, left: offset, 'align-items': 'flex-start' },
		'top-end': { top: offset, right: offset, 'align-items': 'flex-end' },
		'bottom-start': { bottom: offset, left: offset, 'align-items': 'flex-start' },
		'bottom-end': { bottom: offset, right: offset, 'align-items': 'flex-end' }
	};

	// State
	let toastQueue: Toast[] = $state([]);

	// Context
	const id = $props.id();
	setContext('toast', {
		create: (toast: Toast) => {
			// Set default settings
			toast = {
				...defaults[String(toast.type || 'info')],
				...toast,
				id: id
			};
			// Push to Queue
			toastQueue.push(toast);
			// Set duration timeout
			setTimeout(() => {
				dismiss(toast.id);
			}, toast.duration);
		}
	});

	function formatStyleAttr(style: PlacementStyles) {
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
{#if toastQueue.length}
	<div
		class="{groupBase} {groupZIndex} {groupGap} {groupClasses}"
		style={formatStyleAttr(placementOptions[placement])}
		data-part="root"
		data-testid="toast-provider"
	>
		{#each toastQueue as toast, i (toast)}
			{@const stateClasses = getStateClasses(toast.type)}
			<!-- Toast -->
			<div
				data-index={i}
				data-type={toast.type}
				class="{toastBase} {toastPadding} {toastGap} {toastShadow} {toastClasses} {stateClasses}"
				animate:flip={{ duration: 200 }}
				transition:fade={{ duration: 200 }}
			>
				<!-- Message -->
				<div class="{messageBase} {messageClasses}">
					{#if toast.title}<div class={messageTitle}>{toast.title}</div>{/if}
					<div class={messageDescription}>{toast.description}</div>
				</div>
				<!-- Dismiss -->
				<button
					type="button"
					class="{btnDismissBase} {btnDimissPreset} {btnDismissHover} {btnDismissClasses}"
					onclick={() => dismiss(toast.id)}
				>
					{#if dismissLabel}{dismissLabel}{:else}&times;{/if}
				</button>
			</div>
		{/each}
	</div>
{/if}

{@render children?.()}
