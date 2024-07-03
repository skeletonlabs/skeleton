<script lang="ts">
	import type { SegmentItemProps } from './types.js';

	let {
		group = $bindable(),
		name,
		value,
		title,
		disabled = false,
		// Root
		base = 'btn',
		active = 'preset-filled',
		hover = 'hover:preset-tonal',
		classes = '',
		// Input
		radioBase = 'hidden absolute pointer-events-none',
		// Label
		labelBase = 'pointer-events-none',
		labelClasses = '',
		// Events
		onchange = () => {},
		// Snippets
		children
	}: SegmentItemProps = $props();

	// Ref
	let elemCheckbox: HTMLInputElement;

	// Reactive
	const checked = $derived(group === value);
	const rxActive = $derived(checked ? active : hover);

	function onClickHandler() {
		elemCheckbox.checked = true;
		group = value;
	}

	function onChangeHandler(event: any) {
		if (onchange) onchange(event.target.value);
	}
</script>

<button onclick={onClickHandler} type="button" class="{base} {rxActive} {classes}" {title} {disabled}>
	<!-- Radio Input (hidden) -->
	<input
		class={radioBase}
		type="radio"
		bind:this={elemCheckbox}
		bind:group
		{name}
		{value}
		{checked}
		onchange={onChangeHandler}
		tabindex="-1"
	/>
	<!-- Label -->
	<label for={name} class="{labelBase} {labelClasses}">
		{#if children}{@render children()}{/if}
	</label>
</button>
