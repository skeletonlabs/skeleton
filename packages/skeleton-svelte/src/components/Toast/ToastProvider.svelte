<script lang="ts">
	import { normalizeProps, useMachine } from '@zag-js/svelte';
	import * as toast from '@zag-js/toast';
	import Toast from './Toast.svelte';
	import type { ToastProviderProps } from './types.js';
	import { setToastContext } from './context.js';

	const {
		// Toast
		toastBase = 'rounded p-4 min-w-92 flex justify-between',
		toastClasses = '',
		// Text Region
		textRegionBase = 'grid gap-1',
		textRegionClasses = '',
		// Title
		titleBase = 'text-lg font-semibold',
		titleClasses = '',
		// Description
		descriptionBase = '',
		descriptionClasses = '',
		// Dismiss Button
		buttonDismissBase = 'btn btn-icon bg-surface-950-50 text-surface-50-950',
		buttonDismissClasses = '',
		// State
		stateInfo = 'bg-surface-200-800',
		stateError = 'bg-error-200-800',
		stateSuccess = 'bg-success-200-800',
		children,
		...rest
	}: ToastProviderProps = $props();

	const id = $props.id();
	const toaster = $derived(toast.createStore(rest));
	const service = useMachine(toast.group.machine, () => ({
		id: id,
		store: toaster
	}));
	const api = $derived(toast.group.connect(service, normalizeProps));

	setToastContext({
		get toaster() {
			return toaster;
		}
	});
</script>

{@render children?.()}

<div {...api.getGroupProps()}>
	{#each api.getToasts() as toast, index (toast.id)}
		<Toast
			{toastBase}
			{toastClasses}
			{textRegionBase}
			{textRegionClasses}
			{titleBase}
			{titleClasses}
			{descriptionBase}
			{descriptionClasses}
			{buttonDismissBase}
			{buttonDismissClasses}
			{stateInfo}
			{stateError}
			{stateSuccess}
			{toast}
			{index}
			parent={service}
		></Toast>
	{/each}
</div>
