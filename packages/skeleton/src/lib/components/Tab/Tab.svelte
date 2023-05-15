<script lang="ts">
	// Slots
	/**
	 * @slot lead - Provides a leading position, which can be used for icons.
	 */

	import { getContext } from 'svelte';

	// Types
	import type { CssClasses } from '@skeletonlabs/skeleton';

	// Props
	/**
	 * Set the radio group binding value.
	 * @type {any}
	 * */
	export let group: any;
	/**
	 * Set a unique name value for the input.
	 * @type {string}
	 * */
	export let name: string;
	/**
	 * Set the input's value.
	 * @type {any}
	 * */
	export let value: any;

	// Props (a11y)
	/** Set the ARIA controls value to define which panel this tab controls. */
	export let controls = '';

	// Props (regions)
	/** Provide arbitrary classes to style the tab region. */
	export let regionTab: CssClasses = '';

	// Context
	/** Provide classes to style each tab's active styles. */
	export let active: CssClasses = getContext('active');
	/** Provide classes to style each tab's hover styles. */
	export let hover: CssClasses = getContext('hover');
	/** Provide classes to style each tab's flex styles. */
	export let flex: CssClasses = getContext('flex');
	/** Provide classes to style each tab's padding styles. */
	export let padding: CssClasses = getContext('padding');
	/** Provide classes to style each tab's box radius styles. */
	export let rounded: CssClasses = getContext('rounded');
	/** Provide classes to set the vertical spacing between items. */
	export let spacing: CssClasses = getContext('spacing');

	// Classes
	const cBase = 'text-center cursor-pointer transition-colors duration-100';
	const cInterface = '';

	// Local
	let elemInput: HTMLElement;

	// A11y Key Down Handler
	function onKeyDown(event: KeyboardEvent): void {
		if (['Enter', 'Space'].includes(event.code)) {
			event.preventDefault();
			elemInput.click();
		} else if (event.code === 'ArrowRight') {
			const tabList = elemInput.closest('.tab-list');
			if (!tabList) return;
			const tabs = Array.from(tabList.querySelectorAll('.tab'));

			const currTab = elemInput.closest('.tab');
			if (!currTab) return;

			const currIndex = tabs.indexOf(currTab);
			const nextIndex = currIndex + 1 >= tabs.length ? 0 : currIndex + 1;
			const nextTab = tabs[nextIndex];
			const nextTabInput = nextTab?.querySelector('input');
			if (nextTab && nextTabInput) {
				nextTabInput.click();
				(nextTab as HTMLElement).focus();
			}
		} else if (event.code === 'ArrowLeft') {
			const tabList = elemInput.closest('.tab-list');
			if (!tabList) return;
			const tabs = Array.from(tabList.querySelectorAll('.tab'));

			const currTab = elemInput.closest('.tab');
			if (!currTab) return;

			const currIndex = tabs.indexOf(currTab);
			const nextIndex = currIndex - 1 < 0 ? tabs.length - 1 : currIndex - 1;
			const nextTab = tabs[nextIndex];
			const nextTabInput = nextTab?.querySelector('input');
			if (nextTab && nextTabInput) {
				nextTabInput.click();
				(nextTab as HTMLElement).focus();
			}
		}
	}

	// Reactive
	$: selected = value === group;
	$: classesActive = selected ? active : hover;
	$: classesBase = `${cBase} ${flex} ${padding} ${rounded} ${classesActive} ${$$props.class ?? ''}`;
	$: classesInterface = `${cInterface} ${spacing}`;
	$: classesTab = `${regionTab}`;

	// RestProps
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<label class={classesBase}>
	<!-- A11y attributes are not allowed on <label> -->
	<div
		class="tab {classesTab}"
		data-testid="tab"
		role="tab"
		aria-controls={controls}
		aria-selected={selected}
		tabindex={selected ? 0 : -1}
		on:keydown={onKeyDown}
		on:keydown
		on:keyup
		on:keypress
	>
		<!-- NOTE: Don't use `hidden` as it prevents `required` from operating -->
		<div class="h-0 w-0 overflow-hidden">
			<input bind:this={elemInput} type="radio" bind:group {name} {value} {...prunedRestProps()} tabindex="-1" on:click on:change />
		</div>
		<!-- Interface -->
		<div class="tab-interface {classesInterface}">
			{#if $$slots.lead}<div class="tab-lead"><slot name="lead" /></div>{/if}
			<div class="tab-label"><slot /></div>
		</div>
	</div>
</label>
