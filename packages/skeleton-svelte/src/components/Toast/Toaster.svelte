<script lang="ts">
	import { normalizeProps, useMachine } from '@zag-js/svelte';
	import * as toast from '@zag-js/toast';
	import Toast from './Toast.svelte';
	import type { ToasterProps } from './types.js';

	const {
		// Toaster
		toaster,
		// Toast
		base = 'flex justify-between items-center gap-3',
		width = 'min-w-xs',
		padding = 'p-3',
		rounded = 'rounded-container',
		classes = '',
		// Message
		messageBase = 'grid',
		messageClasses = '',
		// Title
		titleBase = 'font-semibold',
		titleClasses = '',
		// Description
		descriptionBase = 'text-sm',
		descriptionClasses = '',
		// Dismiss Button
		btnDismissBase = 'btn-icon hover:preset-tonal',
		btnDismissClasses = '',
		// State
		stateInfo = 'preset-outlined-surface-200-800 preset-filled-surface-50-950',
		stateSuccess = 'preset-filled-success-500',
		stateWarning = 'preset-filled-warning-500',
		stateError = 'preset-filled-error-500'
	}: ToasterProps = $props();

	const id = $props.id();
	const service = useMachine(toast.group.machine, () => ({
		id: id,
		store: toaster
	}));
	const api = $derived(toast.group.connect(service, normalizeProps));
</script>

<div {...api.getGroupProps()} data-testid="toaster-root">
	{#each api.getToasts() as toast, index (toast.id)}
		<Toast
			{base}
			{width}
			{padding}
			{rounded}
			{classes}
			{messageBase}
			{messageClasses}
			{titleBase}
			{titleClasses}
			{descriptionBase}
			{descriptionClasses}
			{btnDismissBase}
			{btnDismissClasses}
			{stateInfo}
			{stateError}
			{stateWarning}
			{stateSuccess}
			{toast}
			{index}
			parent={service}
		></Toast>
	{/each}
</div>
