<script lang="ts">
	import type { SegmentProps } from './types.js';

	let {
		group = $bindable(),
		name,
		value,
		title,
		disabled,
		// Root
		base,
		active = 'preset-filled',
		hover = 'hover:preset-tonal',
		// disabled = 'opacity-50 cursor-not-allowed',
		classes,
		// Children
		childrenBase = 'btn cursor-pointer',
		childrenClasses,
		// Events
		onclick = () => {},
		onchange = () => {},
		// Snippets
		children
	}: SegmentProps = $props();

	function onClickHandler() {
		group = value;
		onclick(value);
		onchange(value);
	}

	// Reactive
	const checked = $derived(group === value);
	const rxActive = $derived(checked ? active : hover);
</script>

<div aria-checked={checked} class="{base} {classes}" {title}>
	<!-- Hidden Input -->
	<div class="h-0 w-0 overflow-hidden">
		<input type="radio" bind:group {name} {value} {checked} tabindex="-1" />
	</div>
	<!-- Children -->
	{#if children}
		<button onclick={onClickHandler} class="{childrenBase} {rxActive} {childrenClasses}" {disabled}>
			{@render children()}
		</button>
	{/if}
</div>
