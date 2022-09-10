<script lang="ts">
	import { createEventDispatcher, getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	// Event Handler
	const dispatch = createEventDispatcher();

	// Props (A11y)
	export let setsize: number | undefined = undefined;
	export let posinset: number | undefined = undefined;

	// Context
	export let parentTag: string = getContext('parentTag');
	export let selected: Writable<any> = getContext('selected');
	export let highlight: string = getContext('highlight');
	export let hover: string = getContext('hover');

	// Base Classes
	const cBase: string = 'list-none px-4 py-3';
	const cRowFlex: string = 'flex flex-row items-center space-x-4';
	const cItemHover: string = `${hover} cursor-pointer`;

	// Local
	let elemItem: HTMLElement;
	let tag: string = 'li';
	let role: string | undefined = parentTag === 'nav' ? 'option' : undefined;

	// Set Wrapping Tag
	// prettier-ignore
	switch (parentTag) {
		case 'dl': tag = 'div'; break;
		case 'nav': tag = 'a'; break;
		default: break;
	}

	// A11y Input Handler
	function onKeyDown(event: any): void {
		dispatch('keydown', event);
		if (['Enter', 'Space'].includes(event.code)) {
			event.preventDefault();
			if (parentTag === 'nav') {
				elemItem.click();
			}
		}
	}

	// Input Handler
	function onClickHandler(event: any): void {
		dispatch('click', event);
		if (!$selected || !$$props.value) {
			return;
		}
		typeof $selected === 'object' ? handleMultiSelect() : handleSingleSelect();
	}
	function handleSingleSelect(): void {
		selected.set($$props.value);
	}
	function handleMultiSelect(): void {
		const v: any = $$props.value;
		const local: any[] = $selected;
		// Add
		if (local.includes(v)) {
			local.splice(local.indexOf(v), 1);
			selected.set(local);
		}
		// Remove
		else {
			selected.set([...local, v]);
		}
	}

	// Reactive Selection State
	$: isSelected = () => {
		if ($selected && $$props.value) {
			return typeof $selected === 'object' ? $selected.includes($$props.value) : $selected === $$props.value;
		}
		return false;
	};
	// Reactive Clases
	$: classesHighlight = isSelected() ? highlight : '';
	$: classesHover = parentTag === 'nav' ? cItemHover : '';
	$: classesRowFlex = parentTag !== 'dl' ? cRowFlex : '';
	$: classesBase = `list-row ${cBase} ${classesRowFlex} ${classesHover} ${classesHighlight} ${$$props.class || ''}`;
</script>

<svelte:element
	this={tag}
	bind:this={elemItem}
	href={$$props.href}
	class={classesBase}
	data-testid="list-row"
	on:click={onClickHandler}
	on:keydown={onKeyDown}
	{role}
	aria-setsize={setsize}
	aria-posinset={posinset}
	tabindex="0"
>
	{#if parentTag === 'dl'}
		<dt><slot name="dt" /></dt>
		<dd><slot name="dd" /></dd>
	{:else}
		<!-- Slot: Lead -->
		{#if $$slots.lead}<slot name="lead" />{/if}

		<!-- Slot: Content -->
		<div class="flex-1"><slot /></div>

		<!-- Slot: Trail -->
		{#if $$slots.trail}<slot name="trail" />{/if}
	{/if}
</svelte:element>
