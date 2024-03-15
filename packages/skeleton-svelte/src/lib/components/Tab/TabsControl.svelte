<script lang="ts">
	import { getContext } from 'svelte';
	import type { TabsControlProps } from './types.js';

	let {
		name,
		group,
		title = '',
		// A11y
		controls = '',
		// Root
		base = getContext<string>('base'),
		justify = getContext<string>('justify'),
		active = getContext<string>('active'),
		inactive = getContext<string>('inactive'),
		background = getContext<string>('background'),
		padding = getContext<string>('padding'),
		rounded = getContext<string>('rounded'),
		spacingY = getContext<string>('spacingY'),
		cursor = getContext<string>('cursor'),
		classes = getContext<string>('classes'),
		// Tab
		tabBase = 'flex',
		tabSpaceX = 'space-x-1',
		tabClasses = '',
		// Snippets
		children
	}: TabsControlProps = $props();

	const rxSelected = $derived(group === name);
	const rxActive = $derived(rxSelected ? active : inactive);
</script>

<!-- @component A Tab Control component. -->

<label class="{base} {justify} {rxActive} {background} {padding} {rounded} {spacingY} {cursor} {classes}" {title}>
	<div aria-controls={controls} tabindex="0" data-testid="tabs-control" role="tab">
		<div class="h-0 w-0 flex-none overflow-hidden">
			<input type="radio" bind:group {name} value={name} tabindex="-1" />
		</div>
		{#if children}
			<div class="{tabBase} {tabSpaceX} {tabClasses}">
				{@render children()}
			</div>
		{/if}
	</div>
</label>
