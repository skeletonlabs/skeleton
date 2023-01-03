<script lang="ts">
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

	/** Allow duplicate selections */
	export let allowDuplicates: boolean = false;
	/** Allow multiple selections */
	export let multiple: boolean = false;
	/** Convert keywords to lowercase */
	export let lowercaseKeywords: boolean = true;
	/** Provide custom external search function */
	export let searchFunction: any = false;
	/** Optionally provide a minimum number of characters to search */
	export let minCharactersToSearch: number = 0;
	/** Optionally provide the maximum number of dropdown items to show */
	export let maxItemsToShowInList: number = 0;
	/** Optionally provide the delay between stopped typing and search */
	export let delay: number = 200;

	// Props (Input)
	/** Optionally provide a placeholder for the input. */
	export let placeholder: string = '';
	/** Optionally provide a name for the input. */
	export let name: string = '';
	/** Optionally provide a disabled value for the input. */
	export let disabled: boolean = false;
	/** Optionally provide a required value for the input. */
	export let required: boolean = false;

	// Props (Select)
	/** Optionally provide a name for the select input. */
	export let selectName: string = '';
	/** Optionally provide an id for the select input. */
	export let selectId: string = '';

	// Classes
	const cBase = 'unstyled border-token flex flex-wrap gap-2 items-center';
	const cLabel = 'unstyled w-full md:w-auto mr-2 mb-1';
	const cInput = 'unstyled flex-auto border-transparent bg-transparent text-base px-1 py-0 focus:border-transparent min-h-[30px]';

	let searchInput: HTMLInputElement;
	let inputValue: string = '';

	/* Internal List Items*/
	let listItems: ListItem[] = [];
	let filteredItems: any[] = [];
	let filteredListItems: ListItem[] = [];
	let selectedListItems: ListItem[] = [];

	/* Enable component consumers to bind local variables to the selected items and values */
	export let selectedItems: any = [];
	export let selectedValues: any = [];

	/* Dropdown UI State */
	let opened: boolean = false;
	let loading: boolean = false;
	let highlightIndex: any;

	/* Custom Async Search State */
	let lastRequestId: number = 0;
	let lastResponseId: number = 0;
	let inputDelayTimeout: NodeJS.Timeout;

	/** Given an item, returns the label using provided label field, or the value of the item */
	export let labelFunction = function (item: Record<PropertyKey, unknown>) {
		if (item === undefined || item === null) {
			return '';
		}
		return labelField ? item[labelField] : item;
	};

	/** Given an item, returns the keywords using provided keywords field, or the label */
	export let keywordsFunction = function (item: Record<PropertyKey, unknown>) {
		if (item === undefined || item === null) {
			return '';
		}
		return keywordsField ? item[keywordsField] : labelFunction(item);
	};

	/** Given an item, returns the value using provided value field, or the label */
	export let valueFunction = function (item: Record<PropertyKey, unknown>) {
		if (item === undefined || item === null) {
			return item;
		}
		return valueField ? item[valueField] : item;
	};

	/** Used alongside the safeString function to safely parse strings
	 *  NOTE: This may be slightly unnecessary.
	 */
	export let stringFunction = function (item: any) {
		return item.toString();
	};

	/** Search/Filter through the items with the provided input data
	 * If a custom search function wasn't provided, will use the internal
	 * search logic defined to filtered the array of items to display
	 * within the dropdown.
	 */
	async function search() {
		opened = true;

		let tempItems: any[] = [];
		let currentInputValue = inputValue;

		if (minCharactersToSearch > 1 && currentInputValue.length < minCharactersToSearch) {
			currentInputValue = '';
			return;
		}

		/** If no custom search function provided - return full list of items */
		if (!searchFunction) {
			/** Internal 'search' */
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
			/** External Search */
			lastRequestId = lastRequestId + 1;
			const currentRequestId = lastRequestId;
			loading = true;

			// if searchFunction is a generator function
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

			// If searchFunction is a regular function
			else {
				console.log('running search function');
				let result = await searchFunction(currentInputValue);

				// If a response to a newer request has been received
				// while responses to this request were being loaded,
				// then we can just throw away these outdated results.
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

	/**
	 * Executes the given function with the provided argument and safely checks if the
	 * function was executed successfully by catching any errors.
	 * Returns the expected result of the function if the function was executed
	 * successfully, otherwise returns `null`.
	 *
	 * @param {function} fn - The function to be executed.
	 * @param {*} arg - The argument to be passed to the function.
	 * @returns {*} - Returns the expected result of the function if the function was executed successfully, `null` otherwise.
	 */
	function safeFunction(fn: Function, arg: any) {
		if (typeof fn !== 'function') {
			console.error(`Not a function: ${fn}, argument: ${arg}`);
			return undefined;
		}

		let result = null;

		try {
			result = fn(arg);
		} catch (err) {
			console.warn(`Error executing function: ${fn} with argument: ${arg}`);
		}
		return result;
	}

	/* Used to safely parse/check for strings.
	 * This is useful if objects may have unpredictable property names
	 * and should prevent the app from breaking. There may be a better way to handle
	 * this though.
	 */
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

	/** Constructs list items into a manageable and predictable format,
	 * regardless if they are passed in as an array of values or an
	 * array of objects.
	 */
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

	/** Constructs a single list item to the internal ListItem type */
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

	$: selectedItems = selectedListItems.map((item) => item.item);
	$: selectedValues = selectedListItems.map((item) => item.value);

	/* This enables users to delete items with backspace
	 * I believe this will require some refactoring into a single
	 * map with the various functions triggered by its respective key.
	 */
	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Backspace') {
			if (inputValue === '') {
				removeSelectedItem(selectedListItems.length - 1);
			}
		} else {
			return navigateDropdown(e);
		}
	}

	/* Handle debouncing and search for the on:input event */
	function onInput() {
		if (inputDelayTimeout) {
			clearTimeout(inputDelayTimeout);
		}

		if (delay) {
			inputDelayTimeout = setTimeout(search, delay);
		} else {
			search();
		}
	}

	/* This still needs to be sharpened a bit.
	 * There are still a few bugs that exist when certain key combinations
	 * are pressed.
	 */
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
		<select class="autocomplete-select" name={selectName} id={selectId} {multiple}>
			{#each selectedListItems as item}
				<option value={item.value} selected>{item.label}</option>
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
			{placeholder}
			{name}
			{disabled}
			{required}
			{...prunedRestProps()}
		/>
		<ul class="autocomplete-items-list" class:autocomplete-hidden={filteredListItems.length === 0 || opened === false}>
			{#each filteredListItems as item, i}
				<li
					class="autocomplete-item"
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
		@apply relative flex gap-0;
	}

	.autocomplete-items-list {
		@apply absolute m-0 p-1 top-[110%] right-0 w-full bg-surface-500 rounded-lg;
	}

	input {
		position: relative;
	}

	li.autocomplete-item {
		@apply relative list-none top-full left-0 right-0 p-2 cursor-pointer bg-inherit text-inherit rounded-lg my-0.5;
	}

	li.autocomplete-item:hover {
		@apply bg-primary-500 text-white !important;
	}

	li.autocomplete-item:active {
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
