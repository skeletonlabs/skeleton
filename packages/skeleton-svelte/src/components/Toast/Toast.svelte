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
	const stateClasses = $derived.by(() => {
		switch (api.type) {
			case 'info':
				return props.stateInfo;
			case 'error':
				return props.stateError;
			case 'success':
				return props.stateSuccess;
		}
	});
</script>

<div
	class="{props.toastBase} {stateClasses} {props.toastPadding} {props.toastShadow} {props.toastGap} {props.toastClasses}"
	{...api.getRootProps()}
>
	<h3 class="{props.titleBase} {props.titleClasses}" {...api.getTitleProps()}>{api.title}</h3>
	<p class="{props.descriptionBase} {props.descriptionClasses}" {...api.getDescriptionProps()}>{api.description}</p>
	<button
		class="{props.buttonDismissBase} {props.buttonDimissPreset} {props.buttonDismissHover} {props.buttonDismissClasses}"
		onclick={api.dismiss}>Close</button
	>
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
