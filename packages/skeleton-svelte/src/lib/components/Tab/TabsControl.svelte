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
		// Events
		onclick = getContext<(event: MouseEvent) => {}>('onclick'),
		onkeypress = getContext<(event: KeyboardEvent) => {}>('onkeypress'),
		onkeydown = getContext<(event: KeyboardEvent) => {}>('onkeydown'),
		onkeyup = getContext<(event: KeyboardEvent) => {}>('onkeyup'),
		onchange = getContext<(group: string) => {}>('onchange'),
		// Snippets
		children
	}: TabsControlProps = $props();

	const selected = $derived(group === name);
	const rxActive = $derived(selected ? active : inactive);

	let elemInput: HTMLInputElement;

	function onTabKeyDown(event: KeyboardEvent) {
		onkeydown(event);
		if (!['Enter', 'Space', 'ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.code)) return;

		event.preventDefault();

		if (['Enter', 'Space'].includes(event.code)) {
			elemInput.click();
			return;
		}

		const currTab = elemInput.closest('[role="tab"]');
		if (!currTab) return;

		const tabList = elemInput.closest('[role="tablist"]');
		if (!tabList) return;

		const isRTL = getComputedStyle(tabList).direction === 'rtl';
		const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));
		const currIndex = tabs.indexOf(currTab);

		let nextIndex = -1;
		switch (event.code) {
			case 'ArrowRight':
				if (isRTL) {
					nextIndex = currIndex - 1 < 0 ? tabs.length - 1 : currIndex - 1;
				} else {
					nextIndex = currIndex + 1 >= tabs.length ? 0 : currIndex + 1;
				}
				break;
			case 'ArrowLeft':
				if (isRTL) {
					nextIndex = currIndex + 1 >= tabs.length ? 0 : currIndex + 1;
				} else {
					nextIndex = currIndex - 1 < 0 ? tabs.length - 1 : currIndex - 1;
				}
				break;
			case 'Home':
				nextIndex = 0;
				break;
			case 'End':
				nextIndex = tabs.length - 1;
				break;
		}

		if (nextIndex < 0) return;

		const nextTab = tabs![nextIndex!];
		const nextTabInput = nextTab?.querySelector('input');
		if (nextTabInput) {
			nextTabInput.click();
			(nextTab as HTMLDivElement).focus();
		}
	}
</script>

<!-- @component A Tab Control component. -->

<label class="{base} {text} {justify} {rxActive} {background} {padding} {rounded} {spacingY} {cursor} {classes}" {title}>
	<li
		aria-controls={controls}
		tabindex={selected ? 0 : -1}
		aria-selected={selected}
		data-testid="tabs-control"
		role="tab"
		class="{tabBase} {tabRounded} {tabOutline} {tabClasses}"
		onkeydown={onTabKeyDown}
		{onkeypress}
		{onkeyup}
	>
		<div class="h-0 w-0 flex-none overflow-hidden">
			<input bind:this={elemInput} type="radio" bind:group {name} value={name} onchange={() => onchange(group)} {onclick} tabindex="-1" />
		</div>
		{#if children}
			<div class="{contentBase} {contentSpaceX} {contentClasses}">
				{@render children()}
			</div>
		{/if}
	</li>
</label>
