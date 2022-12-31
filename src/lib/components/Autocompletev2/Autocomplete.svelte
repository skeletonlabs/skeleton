<script lang="ts">
	import { createEventDispatcher, set_input_value } from 'svelte/internal';

	// Event dispatcher
	const dispatch = createEventDispatcher();

	// Props (styles)
	/** Provide chip styles. */
	export let chip: string = `chip-primary`;
	/** Provide chip hover styles. */
	export let hover: string = 'hover:chip-error';
	/** Set the input padding styles. */
	export let padding: string = 'p-3';
	/** Set the input border radius styles. */
	export let rounded: string = 'rounded-container-token';
	/** Set the input focus ring styles. */
	export let ring: string = 'focus:ring-transparent';

	// Props (data)
	export let items: any[] = [];

	// Props (configuration)
	/** Optionally add a lable to the input */
	export let label: string = '';
	/** Optionally provide object field to be used as the label. */
	export let labelField: string = '';
	/** Optionally provide object field to be used as the value. */
	export let valueField: string = '';
	/** Optionally provide a keyword field to be used to search */
	export let keywordField: string = labelField;

	// Classes
	const cBase = 'unstyled border-token flex flex-wrap gap-2 items-center';
	const cLabel = 'unstyled w-full md:w-auto mr-2';
	const cInput = 'unstyled flex-auto border-transparent bg-transparent text-base px-1 py-0 focus:border-transparent min-h-[30px]';

	let searchInput: HTMLInputElement;
	let inputValue = '';
	let filteredItems: any[] = [];
	let selectedItems: any[] = [];

	function search() {
		let tempItems: any[] = [];
		if (inputValue) {
			items.forEach((item) => {
				if (item[keywordField].toLowerCase().includes(inputValue.toLowerCase())) {
					tempItems = [...tempItems, item];
				}
			});
		}
		filteredItems = tempItems;
	}

	function setInputValue(item) {
		inputValue = item[labelField];
		filteredItems = [];
		highlightIndex = null;
		searchInput.focus();
		inputValue = '';
		selectedItems = [...selectedItems, item];
	}

	function removeSelectedItem(item) {
		selectedItems = selectedItems.filter((i) => i !== item);
	}

	// function selectItem(item) {
	// 	// need to handle some parsing and config options here:
	// }

	// Handling input
	let highlightIndex = null;

	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}

	// Reactive
	$: classesBase = `${cBase} ${padding} ${rounded}`;
	$: classesChip = `${chip} ${hover}`;
	$: classesInput = `${cInput} ${ring}`;

	$: if (!inputValue) {
		filteredItems = [];
		highlightIndex = null;
	}

	$: highlightedItem = filteredItems[highlightIndex];
	$: console.log(selectedItems);

	function navigateDropdown(e) {
		if (e.key === 'ArrowDown' && highlightIndex <= filteredItems.length - 1) {
			highlightIndex === null ? (highlightIndex = 0) : highlightIndex++;
		} else if (e.key === 'ArrowUp' && highlightIndex !== null) {
			highlightIndex === 0 ? (highlightIndex = filteredItems.length - 1) : highlightIndex--;
		} else if (e.key === 'Enter') {
			setInputValue(filteredItems[highlightIndex]);
		} else {
			return;
		}
	}
</script>

<svelte:window on:keydown={(e) => navigateDropdown(e)} />

<div class="autocomplete-input {classesBase} autocomplete">
	<select class="autocomplete-select">
		{#each selectedItems as items}
			<option value={items[valueField]}>{items[labelField]}</option>
		{/each}
	</select>
	{#if label}<span class={cLabel}>{label}</span>{/if}
	{#each selectedItems as listItem, i}
		<!-- prettier-ignore -->
		<span class="chip {classesChip} mr-1" on:click={() => removeSelectedItem(listItem)}>
			<span>{listItem[labelField]}</span>
			<span>✕</span>
		</span>
	{/each}
	<input
		type="text"
		bind:this={searchInput}
		bind:value={inputValue}
		on:input={search}
		class="input-chip-field {classesInput}"
		tabindex="0"
		{...prunedRestProps()}
	/>
	<ul class="autocomplete-items-list">
		{#each filteredItems as item, i}
			<li class="autocomplete-items" class:autocomplete-active={i === highlightIndex} on:click={setInputValue(item)}>
				{@html item[labelField]}
			</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	.autocomplete {
		position: relative;
		display: flex;
		gap: 0;
	}

	.autocomplete-items-list {
		position: relative;
		margin: 0;
		padding: 0;
		top: 0;
		width: 100%;
	}

	li.autocomplete-items {
		list-style: none;
		z-index: 99;
		top: 100%;
		left: 0;
		right: 0;
		padding: 10px;
		cursor: pointer;
		background-color: inherit;
		color: inherit;
	}

	li.autocomplete-items:hover {
		background-color: green;
		color: white;
	}

	li.autocomplete-items:active {
		background-color: dodgerblue !important;
		color: white;
	}

	.autocomplete-active {
		background-color: dodgerblue !important;
		color: white;
	}

	.autocomplete-select {
		display: none;
	}
</style>
