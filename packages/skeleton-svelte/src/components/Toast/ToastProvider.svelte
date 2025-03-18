<script lang="ts">
	import { normalizeProps, useMachine } from '@zag-js/svelte';
	import * as toast from '@zag-js/toast';
	import Toast from './Toast.svelte';
	import type { ToastProviderProps } from './types.js';
	import { setToastContext } from './context.js';

	const {
		// Toast
		toastBase = 'card py-2 px-3 grid grid-cols-[1fr_auto] items-center',
		toastPadding = 'py-2 px-3',
		toastGap = 'gap-4',
		toastShadow = 'shadow-xl',
		toastClasses = '',
		// Title
		titleBase = 'font-bold',
		titleClasses = '',
		// Description
		descriptionBase = 'text-sm',
		descriptionClasses = '',
		// Dismiss Button
		buttonDismissBase = 'btn-icon btn-icon-sm text-base',
		buttonDimissPreset = '',
		buttonDismissHover = 'hover:preset-tonal',
		buttonDismissClasses = '',
		// State
		stateInfo = 'preset-filled',
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
