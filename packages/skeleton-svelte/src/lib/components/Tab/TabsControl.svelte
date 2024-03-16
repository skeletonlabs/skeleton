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
		text = getContext<string>('text'),
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
		tabBase = '',
		tabRounded = 'rounded-container',
		tabOutline = 'focus:outline focus:outline-primary-600-400 focus:outline-offset-4',
		tabClasses = '',
		// Tab Content
		contentBase = 'flex',
		contentSpaceX = 'space-x-1',
		contentClasses = '',
		// Snippets
		children
	}: TabsControlProps = $props();

	const rxSelected = $derived(group === name);
	const rxActive = $derived(rxSelected ? active : inactive);
</script>

<!-- @component A Tab Control component. -->

<label class="{base} {text} {justify} {rxActive} {background} {padding} {rounded} {spacingY} {cursor} {classes}" {title}>
	<div aria-controls={controls} tabindex="0" data-testid="tabs-control" role="tab" 
		 class="{tabBase} {tabRounded} {tabOutline} {tabClasses}">
		<div class="h-0 w-0 flex-none overflow-hidden">
			<input type="radio" bind:group {name} value={name} tabindex="-1" />
		</div>
		{#if children}
			<div class="{contentBase} {contentSpaceX} {contentClasses}">
				{@render children()}
			</div>
		{/if}
	</div>
</label>
