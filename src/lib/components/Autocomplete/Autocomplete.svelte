<script lang="ts">
	import { createEventDispatcher } from 'svelte/internal';

	// Event dispatcher
	const dispatch = createEventDispatcher();

	interface ListItem {
		label: string;
		keywords: string;
		item: unknown;
		value: unknown;
	}

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
	export let keywordsField: string = labelField;
	/** Optionally provide a placeholder. */
	export let placeholder: string = '';
	/** Allow duplicate selections */
	export let allowDuplicates: boolean = false;
	/** Allow multiple selections */
	export let multiple: boolean = false;
	/** Convert keywords to lowercase */
	export let lowercaseKeywords: boolean = true;
	/** Provide custom external search function */
	export let searchFunction: any = false;
	/** Optionally provide a minimum number of characters to search */
	export let minCharactersToSearch: number = 2;
	/** Optionally provide the maximum number of dropdown items to show */
	export let maxItemsToShowInList: number = 0;
	/** Optionally provide the delay between stopped typing and search */
	export let delay: number = 200;

	// Classes
	const cBase = 'unstyled border-token flex flex-wrap gap-2 items-center';
	const cLabel = 'unstyled w-full md:w-auto mr-2 mb-1';
	const cInput = 'unstyled flex-auto border-transparent bg-transparent text-base px-1 py-0 focus:border-transparent min-h-[30px]';

	let searchInput: HTMLInputElement;
	let inputValue: string = '';
	let filteredItems: any[] = [];
	let listItems: ListItem[] = [];
	let filteredListItems: ListItem[] = [];
	let selectedListItems: ListItem[] = [];
	let opened: boolean = false;
	let loading: boolean = false;

	let lastRequestId: number = 0;
	let lastResponseId: number = 0;
	let inputDelayTimeout: NodeJS.Timeout;

	export let labelFunction = function (item: Record<PropertyKey, unknown>) {
		if (item === undefined || item === null) {
			return '';
		}
		return labelField ? item[labelField] : item;
	};

	export let keywordsFunction = function (item: Record<PropertyKey, unknown>) {
		if (item === undefined || item === null) {
			return '';
		}
		return keywordsField ? item[keywordsField] : labelFunction(item);
	};

	export let valueFunction = function (item: Record<PropertyKey, unknown>) {
		if (item === undefined || item === null) {
			return item;
		}
		return valueField ? item[valueField] : item;
	};

	export let stringFunction = function (item: any) {
		return item.toString();
	};

	async function search() {
		opened = true;

		let tempItems: any[] = [];
		let currentInputValue = inputValue;

		if (minCharactersToSearch > 1 && currentInputValue.length < minCharactersToSearch) {
			currentInputValue = '';
			return;
		}

		// If no search text -> load all items
		if (!searchFunction) {
			// Internal Search
			constructListItems(items);
			if (inputValue) {
				listItems.forEach((item) => {
					if (item.keywords.includes(inputValue.toLowerCase())) {
						tempItems = [...tempItems, item];
					}
				});
			}
			filteredListItems = tempItems;
		} else {
			// External Search
			lastRequestId = lastRequestId + 1;
			const currentRequestId = lastRequestId;
			loading = true;

			// searchFunction is a generator function
			if (searchFunction.constructor.name === 'AsyncGeneratorFunction') {
				for await (const chunk of searchFunction(currentInputValue, maxItemsToShowInList)) {
					if (currentRequestId < lastResponseId) {
						return false;
					}

					if (currentRequestId > lastResponseId) {
						items = [];
					}

					lastResponseId = currentRequestId;

					items = [...items, ...chunk];
					constructListItems(items);
				}
			}

			// searchFunction is a regular function
			else {
				console.log('running search function');
				let result = await searchFunction(currentInputValue);

				// If a response to a newer request has been received
				// while responses to this request were being loaded,
				// then we can just throw away these outdate results.
				if (currentRequestId < lastResponseId) {
					return false;
				}

				lastResponseId = currentRequestId;
				items = result;
				constructListItems(items);
				listItems.forEach((item) => {
					if (item.keywords.includes(inputValue.toLowerCase())) {
						tempItems = [...tempItems, item];
					}
				});
				filteredListItems = [...tempItems];
			}

			loading = false;
		}
	}

	function safeFunction(fn: Function, arg: any) {
		if (typeof fn !== 'function') {
			console.error(`Not a function: ${fn}, argument: ${arg}`);
			return undefined;
		}

		let result;

		try {
			result = fn(arg);
		} catch (err) {
			console.warn(`Error executing function: ${fn} with argument: ${arg}`);
		}
		return result;
	}

	function safeStringFunction(fn: Function, arg: any) {
		let result = safeFunction(fn, arg);
		if (result === undefined || result === null) {
			return '';
		}
		if (typeof result !== 'string') {
			result = result.toString();
		}
		return result;
	}

	function safeLabelFunction(item: unknown) {
		return safeStringFunction(labelFunction, item);
	}

	function safeKeywordsFunction(item: unknown) {
		const keywords = safeStringFunction(keywordsFunction, item);
		let result = lowercaseKeywords ? keywords.toLowerCase().trim() : keywords;

		return result;
	}

	function constructListItems(items: any[]) {
		if (!Array.isArray(items)) {
			console.warn('Autocomplete must be an array, but received:', items);
			items = [];
		}

		const length = items ? items.length : 0;

		listItems = new Array(length);

		if (length > 0) {
			items.forEach((item, idx) => {
				const listItem = constructListItem(item);
				if (listItem === undefined) {
					console.warn(`Undefined item for: ${item}`);
				}
				listItems[idx] = listItem;
			});
		}
	}

	function constructListItem(item: any): ListItem {
		if (typeof item === 'object') {
			return {
				/** Keyword representation of the item*/
				keywords: safeKeywordsFunction(item),
				/** Label representation of the item */
				label: safeLabelFunction(item),
				/** Value representation of the item */
				value: valueFunction(item),
				/** The original item */
				item: item
			};
		} else {
			const itemValue = safeStringFunction(stringFunction, item);
			return {
				keywords: itemValue.toLowerCase(),
				label: itemValue,
				value: itemValue,
				item: item
			};
		}
	}

	function setInputValue(item: ListItem) {
		filteredListItems = [];
		highlightIndex = null;
		searchInput.focus();
		if (multiple) {
			inputValue = '';
			if (!allowDuplicates) {
				if (selectedListItems.length === 0) {
					selectedListItems = [...selectedListItems, item];
					return;
				} else {
					for (let i = 0; i < selectedListItems.length; i++) {
						if (selectedListItems[i].value === item.value) {
							return;
						}
					}
				}
			}
			selectedListItems = [...selectedListItems, item];
			return;
		}
		inputValue = item.label;

		selectedListItems = [item];
	}

	function removeSelectedItem(index: number) {
		selectedListItems = selectedListItems.filter((item, idx) => idx !== index);
	}

	// Handling input
	let highlightIndex: any;

	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}

	// Reactive
	$: classesBase = `${cBase} ${padding} ${rounded}`;
	$: classesChip = `${chip} ${hover}`;
	$: classesInput = `${cInput} ${ring}`;

	$: if (!inputValue) {
		filteredListItems = [];
		highlightIndex = null;
	}

	// $: console.log(selectedListItems);
	$: console.log('Highlight Index: ', highlightIndex);
	$: console.log('Filtered List Items: ', filteredListItems);
	$: console.log('Selected List Items: ', selectedListItems);

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Backspace') {
			if (inputValue === '') {
				removeSelectedItem(selectedListItems.length - 1);
			}
		} else {
			return navigateDropdown(e);
		}
	}

	function onInput() {
		console.log('on input');
		if (inputDelayTimeout) {
			clearTimeout(inputDelayTimeout);
		}

		if (delay) {
			inputDelayTimeout = setTimeout(search, delay);
		} else {
			search();
		}
	}

	function navigateDropdown(e: KeyboardEvent) {
		if (e.key === 'ArrowDown' && highlightIndex <= filteredListItems.length - 1) {
			highlightIndex === null ? (highlightIndex = 0) : highlightIndex++;
		} else if (e.key === 'ArrowUp' && highlightIndex !== null) {
			highlightIndex === 0 ? (highlightIndex = filteredItems.length - 1) : highlightIndex--;
		} else if (e.key === 'Enter') {
			console.log('hit enter key');
			let currentItem = filteredListItems[highlightIndex];
			setInputValue(currentItem);
		} else if (e.key === 'Escape') {
			opened = false;
		} else if (e.key === 'Tab') {
			let currentItem = filteredListItems[highlightIndex];
			setInputValue(currentItem);
			opened = false;
		} else {
			return;
		}
	}
</script>

<svelte:window on:click={() => (opened = false)} />
<div>
	{#if label}<div class="pb-1">
			<span class={cLabel}>
				{label}
			</span>
		</div>
	{/if}
	<div class="autocomplete-input {classesBase} autocomplete">
		<select class="autocomplete-select">
			{#each selectedListItems as item}
				<option value={item.value}>{item.label}</option>
			{/each}
		</select>
		{#if multiple}
			{#each selectedListItems as listItem, i}
				<!-- prettier-ignore -->
				<span class="chip {classesChip} mr-1" on:click={() => removeSelectedItem(i)} on:keypress={() => false}>
			<span>{listItem.label}</span>
			<span>✕</span>
		</span>
			{/each}
		{/if}
		<input
			type="text"
			bind:this={searchInput}
			bind:value={inputValue}
			on:input={() => onInput()}
			on:click={() => search()}
			on:keydown={(e) => handleKeyDown(e)}
			class="input-chip-field {classesInput}"
			tabindex="0"
			{...prunedRestProps()}
			{placeholder}
		/>
		<ul class="autocomplete-items-list" class:autocomplete-hidden={filteredListItems.length === 0 || opened === false}>
			{#each filteredListItems as item, i}
				<li
					class="autocomplete-items"
					class:autocomplete-active={i === highlightIndex}
					on:click={() => setInputValue(item)}
					on:keypress={(e) => handleKeyDown(e)}
				>
					{@html item.label}
				</li>
			{/each}
		</ul>
	</div>
</div>

<style lang="postcss">
	.autocomplete {
		position: relative;
		display: flex;
		gap: 0;
	}

	.autocomplete:hover {
		z-index: 1000;
	}

	.autocomplete:focus {
		z-index: 1000;
	}

	.autocomplete:active {
		z-index: 1000;
	}

	.autocomplete-items-list {
		position: absolute;
		margin: 0;
		padding: 0;
		top: 110%;
		right: 0;
		width: 100%;

		@apply bg-surface-500 rounded-lg p-1;
	}

	.autocomplete-items-list:hover {
	}

	input {
		position: relative;
	}

	li.autocomplete-items {
		list-style: none;
		top: 100%;
		left: 0;
		right: 0;
		padding: 10px;
		cursor: pointer;
		background-color: inherit;
		color: inherit;
		position: relative;

		@apply rounded-lg my-0.5;
	}

	li.autocomplete-items {
		@apply hover:bg-primary-500 hover:text-white !important;
	}

	li.autocomplete-items:active {
		@apply bg-primary-500 text-surface-50 !important;
	}

	.autocomplete-active {
		@apply bg-primary-500 text-surface-50 !important;
	}

	.autocomplete-select {
		display: none;
	}

	.autocomplete-hidden {
		display: none;
	}
</style>
