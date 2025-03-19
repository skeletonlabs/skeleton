<script lang="ts">
	import { normalizeProps, useMachine } from '@zag-js/svelte';
	import * as toast from '@zag-js/toast';
	import Toast from './Toast.svelte';
	import type { ToastProviderProps } from './types.js';
	import { setToastContext } from './context.js';

	const {
		// Toast
		toastBase = 'rounded',
		toastPadding = 'p-4',
		toastGap = '',
		toastShadow = '',
		toastClasses = '',
		// Title
		titleBase = 'text-lg font-semibold',
		titleClasses = '',
		// Description
		descriptionBase = '',
		descriptionClasses = '',
		// Dismiss Button
		buttonDismissBase = 'btn',
		buttonDimissPreset = 'preset-filled-primary-500',
		buttonDismissHover = '',
		buttonDismissClasses = '',
		// State
		stateInfo = 'preset-filled-surface-200-800',
		stateError = 'preset-filled-error-500',
		stateSuccess = 'preset-filled-success-500',
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
			{toastPadding}
			{toastGap}
			{toastShadow}
			{toastClasses}
			{titleBase}
			{titleClasses}
			{descriptionBase}
			{descriptionClasses}
			{buttonDismissBase}
			{buttonDimissPreset}
			{buttonDismissHover}
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
