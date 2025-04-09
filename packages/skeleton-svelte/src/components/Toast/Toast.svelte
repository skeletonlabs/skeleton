<script lang="ts">
	import * as toast from '@zag-js/toast';
	import type { ToastProps } from './types.js';
	import { normalizeProps, useMachine } from '@zag-js/svelte';

	const props: ToastProps = $props();
	const service = useMachine(toast.machine, () => ({
		...props.toast,
		parent: props.parent,
		index: props.index
	}));
	const api = $derived(toast.connect(service, normalizeProps));
	const rxState = $derived.by(() => {
		switch (api.type) {
			case 'success':
				return props.stateSuccess;
			case 'warning':
				return props.stateWarning;
			case 'error':
				return props.stateError;
			default:
				return props.stateInfo;
		}
	});
</script>

<div
	class="{props.base} {props.width} {props.padding} {props.rounded} {rxState} {props.classes}"
	{...api.getRootProps()}
	data-testid="toast-root"
>
	<!-- Text -->
	<div class="{props.messageBase} {props.messageClasses}" data-testid="toast-message">
		<!-- Title -->
		<span class="{props.titleBase} {props.titleClasses}" {...api.getTitleProps()} data-testid="toast-title">{api.title}</span>
		<!-- Description -->
		<span class="{props.descriptionBase} {props.descriptionClasses}" {...api.getDescriptionProps()} data-testid="toast-description"
			>{api.description}</span
		>
	</div>
	{#if api.closable}
		<!-- Dismiss Button -->
		<button class="{props.btnDismissBase} {props.btnDismissClasses}" {...api.getCloseTriggerProps()} data-testid="toast-dismiss"
			>&times;</button
		>
	{/if}
</div>

<style>
	[data-part='root'] {
		translate: var(--x) var(--y);
		scale: var(--scale);
		z-index: var(--z-index);
		height: var(--height);
		opacity: var(--opacity);
		will-change: translate, opacity, scale;
	}
	[data-part='root'] {
		transition:
			translate 400ms,
			scale 400ms,
			opacity 400ms;
		transition-timing-function: cubic-bezier(0.21, 1.02, 0.73, 1);
	}
	[data-part='root'][data-state='closed'] {
		transition:
			translate 400ms,
			scale 400ms,
			opacity 200ms;
		transition-timing-function: cubic-bezier(0.06, 0.71, 0.55, 1);
	}
</style>
