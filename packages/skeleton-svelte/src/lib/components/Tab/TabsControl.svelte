<script lang="ts">
	import type { TabsControlProps } from './types.js';

	let {
		name,
		group,
		// A11y
		title = '',
		label = '',
		controls = '',
		// Root
		base = 'flex',
		text = 'hover:text-primary-600-400',
		justify = 'justify-center',
		active = 'border-b-2 border-surface-950-50 text-surface-950-50',
		inactive = 'text-surface-600-400 fill-surface-600-400',
		background = '',
		padding = 'px-4 py-2',
		rounded = '',
		spacingY = 'space-y-1',
		cursor = 'cursor-pointer',
		classes = '',
		// Tab
		tabBackground = 'focus:preset-filled-primary-50-950',
		tabPadding = 'p-2',
		tabRounded = 'rounded-container',
		tabOutline = 'focus:outline focus:outline-primary-600-400 !outline-2',
		tabClasses = '',
		// Tab Content
		contentBase = 'flex',
		contentSpaceX = 'space-x-1',
		contentClasses = '',
		// Events
		onclick = () => {},
		onkeypress = () => {},
		onkeydown = () => {},
		onkeyup = () => {},
		onchange = () => {},
		// Snippets
		children
	}: TabsControlProps = $props();

	const selected = $derived(group === name);
	const rxActive = $derived(selected ? active : inactive);

	let elemInput: HTMLInputElement;

	function onTabKeyDown(event: KeyboardEvent) {
		onkeydown(event);
		
		if (['Enter', 'Space'].includes(event.code)) {
			elemInput.click();
			return;
		}

		if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.code)) return;
		event.preventDefault();

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

<label class="{base} {text} {justify} {rxActive} {background} {padding} {rounded} {spacingY} {cursor} {classes}" aria-label={label} {title}>
	<div
		aria-controls={controls}
		tabindex={selected ? 0 : -1}
		aria-selected={selected}
		data-testid="tabs-control"
		role="tab"
		class="{tabBackground} {tabPadding} {tabRounded} {tabOutline} {tabClasses}"
		onkeydown={onTabKeyDown}
		{onkeypress}
		{onkeyup}
	>
		<!-- NOTE: Don't use `hidden` as it prevents `required` from operating -->
		<div class="h-0 w-0 flex-none overflow-hidden">
			<input bind:this={elemInput} type="radio" bind:group {name} value={name} onchange={() => onchange(group)} {onclick} tabindex="-1" />
		</div>
		{#if children}
			<div class="{contentBase} {contentSpaceX} {contentClasses}">
				{@render children()}
			</div>
		{/if}
	</div>
</label>
