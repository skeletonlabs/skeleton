<script lang="ts">
	import { afterUpdate } from 'svelte';
	import type { HTMLInputAttributes, MouseEventHandler } from 'svelte/elements';
	import type { AutocompleteConfig, AutocompleteOptions } from './types';

	interface $$Props extends HTMLInputAttributes {
		items: Record<PropertyKey, unknown>[];
		options: AutocompleteOptions;
	}

	interface FnMap extends Record<PropertyKey, unknown> {
		Tab: (() => void) | null;
		ShiftTab: (() => void) | null;
		ArrowDown: () => void;
		ArrowUp: () => void;
		Enter: (e: KeyboardEvent) => void;
		Backspace: ((e: KeyboardEvent) => void) | null;
	}

	interface ListItem {
		keywords: string;
		/** Item label */
		label: string;
		/** Reference to the original item */
		item: unknown;

		highlighted?: string;
	}

	// interface ExampleDataModel {
	// 	id: number;
	// 	name: string;
	// 	value: string;
	// }
	export let items: unknown[];

	export let options: AutocompleteOptions;

	export let defaultConfig: AutocompleteConfig = {
		search: '',
		labelField: '',
		valueField: '',
		keywordsField: '',
		showList: false,
		selectFirstIfEmpty: false,
		multiple: false,
		create: false,
		minCharactersToSearch: 1,
		tabIndex: 0,
		delay: 0,
		lock: false,
		matchAllKeywords: true,
		sanitizeUserInput: true,
		orderableSelection: false,
		showLoadingIndicator: false,
		lowercaseKeywords: true,
		ignoreAccents: true,
		showClear: false,
		maxItemsToShowInList: 0,
		hideArrow: false,
		selectName: '',
		selectId: ''
	};

	const config: AutocompleteConfig = { ...defaultConfig, ...options };

	config.keywordsField = config.keywordsField ?? config.labelField;

	export let labelFunction = function <T extends Record<PropertyKey, unknown>>(item: T) {
		if (item === undefined || item === null) {
			return '';
		}
		return config.labelField ? item[config.labelField] : item;
	};

	export let keywordsFunction = function <T extends Record<PropertyKey, unknown>>(item: T) {
		if (item === undefined || item === null) {
			return '';
		}
		return config.keywordsField ? item[config.keywordsField] : labelFunction(item);
	};

	export let valueFunction = function (item: Record<PropertyKey, unknown> | Record<PropertyKey, unknown>[], forceSingle: boolean = false) {
		if (item === undefined || item === null) {
			return item;
		}

		if (!config.multiple || forceSingle || !Array.isArray(item)) {
			item = item as Record<PropertyKey, unknown>;
			return config.valueField ? item[config.valueField] : item;
		}

		if (Array.isArray(item)) {
			return item.map((i) => (config.valueField ? i[config.valueField] : i));
		}
	};

	export let keywordsCleanFunction = function (keywords: string) {
		return keywords;
	};

	export let userInputFunction = function (userInput: string) {
		return userInput;
	};

	export let beforeChange = function (previousSelectedItem: unknown, newSelectedItem: unknown) {
		return true;
	};

	export let searchFunction: unknown = false;

	export let onChange = function (newSelectedItem: unknown) {};

	export let onFocus = function () {};

	export let onCreate = function () {};

	export let itemFilterFunction = function (listItem: ListItem, searchWords: string[]) {
		const matches = numberOfMatches(listItem, searchWords);
		if (config.matchAllKeywords) {
			return matches >= searchWords.length;
		} else {
			return matches > 0;
		}
	};

	export let itemSortFunction = function (itemOne: ListItem, itemTwo: ListItem, searchWords: string[]) {
		return numberOfMatches(itemOne, searchWords) - numberOfMatches(itemTwo, searchWords);
	};

	let itemsOriginal = structuredClone(items);
	let searchTerm = '';

	export let selectedItem: unknown[] | unknown = config.multiple ? [] : undefined;
	export let value = undefined;
	export let highlightedItem = undefined;

	const uniqueId = 'sautocomplete-' + Math.floor(Math.random() * 1000);

	// HTML Elements
	let input: HTMLInputElement;
	let list: HTMLDivElement;
	let inputContainer: HTMLDivElement;

	// UI State
	let opened: boolean = false;
	let loading: boolean = false;
	let highlightIndex: number = -1;
	let filteredTextLength: number = 0;

	// Model
	let filteredListItems: ListItem[];
	let listItems: ListItem[];

	let lastRequestId: number = 0;
	let lastResponseId: number = 0;

	let inputDelayTimeout: NodeJS.Timeout;

	let setPositionOnNextUpdate = false;

	// Lifecycle events
	// afterUpdate(() => {
	// 	if (setPositionOnNextUpdate) {
	// 		setScrollAwareListPosition();
	// 	}
	// 	setPositionOnNextUpdate = false;
	// });

	/**
	 * Executes the given function with the provided argument and safely checks if the function was executed successfully.
	 *
	 * @param {Function} fn - The function to be executed.
	 * @param {*} arg - The argument to be passed to the function.
	 * @returns {string | undefined} - Returns the value `fn(arg)` if successful, `undefined` otherwise.
	 */
	function safeFunction(fn: Function, arg: any) {
		if (typeof fn !== 'function') {
			console.error(`Not a function: ${fn}, argument: ${arg}`);
			return undefined;
		}

		let result;
		try {
			result = fn(arg);
		} catch (err) {
			console.warn(`Error executing function: ${fn} on value: ${arg}`);
		}
		return result;
	}

	function safeStringFunction(fn: Function, arg: any) {
		let result = safeFunction(fn, arg);
		if (result === undefined || result === null) {
			result = '';
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
		let result = safeStringFunction(keywordsCleanFunction, keywords);
		result = config.lowercaseKeywords ? result.toLowerCase().trim() : result;

		if (config.ignoreAccents) {
			result = removeAccents(result);
		}

		return result;
	}

	function prepareListItems() {
		if (!Array.isArray(items)) {
			console.warn('Autocomplete items must be an array, but received:', items);
			items = [];
		}

		const length = items ? items.length : 0;

		listItems = new Array(length);

		if (length > 0) {
			items.forEach((item, idx) => {
				const listItem = getListItem(item);
				if (listItem === undefined) {
					console.warn('Undefined item for: ', item);
				}
				listItems[idx] = listItem;
			});
		}

		filteredListItems = listItems;
	}

	function getListItem(item: unknown) {
		return {
			/** Keyword representation of the item */
			keywords: safeKeywordsFunction(item),
			/** Item label */
			label: safeLabelFunction(item),
			/** Reference to the original item */
			item: item
		};
	}

	$: items, searchFunction || prepareListItems();

	function onSelectedItemChanged() {
		value = valueFunction(selectedItem);
		if (selectedItem && !config.multiple) {
			config.search = safeLabelFunction(selectedItem);
		}

		filteredListItems = listItems;
		onChange(selectedItem);
	}

	$: selectedItem, onSelectedItemChanged();

	$: highlightedItem =
		filteredListItems && highlightIndex && highlightIndex >= 0 && highlightIndex < filteredListItems.length
			? filteredListItems[highlightIndex].item
			: null;

	$: showList = opened && ((items && items.length > 0) || filteredTextLength > 0);

	$: hasSelection =
		(config.multiple && selectedItem && Array.isArray(selectedItem) && selectedItem.length > 0) || (!config.multiple && selectedItem);

	$: clearable = config.showClear || ((config.lock || config.multiple) && hasSelection);

	function prepareUserInput(userInput: string) {
		if (userInput === undefined || userInput === null) {
			return '';
		}

		if (!config.sanitizeUserInput) {
			return userInput;
		}

		const filteredText = userInput.replace(/[&/\\#,+()$~%.'":*?<>{}]/g, ' ').trim();

		const sanitizedText = safeStringFunction(userInputFunction, filteredText);
		const trimmedText = config.lowercaseKeywords ? sanitizedText.toLowerCase().trim() : sanitizedText.trim();

		return trimmedText;
	}

	function numberOfMatches(listItem: ListItem, searchWords: string[]) {
		if (!listItem) {
			return 0;
		}

		const keywords = listItem.keywords;

		let matches = 0;

		searchWords.forEach((word) => {
			if (keywords.includes(word)) {
				matches++;
			}
		});
		return matches;
	}

	async function search() {
		let filteredText = prepareUserInput(config.search);
		if (config.minCharactersToSearch > 1 && filteredText.length < config.minCharactersToSearch) {
			filteredText = '';
		}

		filteredTextLength = filteredText.length;

		// if no search text load all items
		if (filteredText === '') {
			if (searchFunction) {
				// rerun search function
				items = [];
			} else {
				filteredListItems = listItems;
			}
			if (closeIfMinCharsToSearchReached()) {
				return;
			}
		}

		if (!searchFunction) {
			processListItems(filteredText);
		}
	}

	function processListItems(filteredText: string) {
		// cleans, filters, orders, and highlights the list items
		prepareListItems();

		const textFilteredWithoutAccents = config.ignoreAccents ? removeAccents(filteredText) : filteredText;
		const searchWords = textFilteredWithoutAccents.split(/\s+/g).filter((word) => word !== '');

		// local search
		let tempFilteredListItems: ListItem[];

		tempFilteredListItems = listItems.filter((item) => itemFilterFunction(item, searchWords));

		tempFilteredListItems = tempFilteredListItems.sort((itemOne, itemTwo) => itemSortFunction(itemOne, itemTwo, searchWords));

		const _highlightFilter = highlightFilter(searchWords, 'label');
		filteredListItems = tempFilteredListItems.map(_highlightFilter);
		closeIfMinCharsToSearchReached();
		return true;
	}

	function afterCreate(createdItem: ListItem) {
		let listItem;
		if ('undefined' !== typeof createdItem) {
			prepareListItems();
			filteredListItems = listItems;
			let index = findItemIndex(createdItem, filteredListItems);

			// if items array was not updated, add created item manually
			if (index <= 0) {
				items = [createdItem];
				prepareListItems();
				filteredListItems = listItems;
				index = 0;
			}

			if (index >= 0) {
				highlightIndex = index;
				listItem = filteredListItems[highlightIndex];
			}
		}
		return listItem;
	}

	function selectListItem(listItem: ListItem) {
		// // do we want to deal with creating items or nah?
		// if ('undefined' === typeof listItem && config.create) {
		// 	return false;
		// }

		if (config.lock && selectedItem) {
			return true;
		}

		const newSelectedItem = listItem.item;

		if (beforeChange(selectedItem, newSelectedItem)) {
			if (!config.multiple) {
				selectedItem = undefined; // triggers change even if the same item is selected
				selectedItem = newSelectedItem;
			}

			if (Array.isArray(selectedItem)) {
				if (!selectedItem) {
					selectedItem = [newSelectedItem];
				} else if (Array.isArray(selectedItem) && selectedItem.includes(newSelectedItem)) {
					selectedItem = selectedItem.filter((item) => item !== newSelectedItem);
				} else {
					selectedItem = [...selectedItem, newSelectedItem];
				}
			}

			return true;
		}
	}

	function selectItem() {
		const listItem = filteredListItems[highlightIndex];
		if (selectListItem(listItem)) {
			close();
			if (config.multiple) {
				config.search = '';
				input.focus();
			}
		} else {
			// logs
		}
	}

	function up() {
		open();
		if (highlightIndex > 0) {
			highlightIndex--;
		}

		highlight();
	}

	function down() {
		open();
		if (highlightIndex < filteredListItems.length - 1) {
			highlightIndex++;
		}

		highlight();
	}

	function highlight() {
		const query = '.selected';

		const el = list && list.querySelector(query);

		if (el) {
			// if (typeof el.scrollIntoViewIfNeeded === 'function') {
			// 	el.scrollIntoViewIfNeeded();
			// }
			// if (typeof el.scrollIntoView === 'function') {
			// 	el.scrollIntoView();
			// } else {
			// 	// debug logs
			// }
		} else {
			// debug logs
		}
	}

	function onListItemClick(listItem: ListItem) {
		if (selectListItem(listItem)) {
			close();
			if (config.multiple) {
				config.search = '';
				input.focus();
			}
		}
	}

	function onDocumentClick(e: Event) {
		if ((e.composedPath() as HTMLElement[]).some((path) => path.classList && path.classList.contains(uniqueId))) {
			highlight();
		} else {
			close();
		}
	}

	function onKeyDown(e: KeyboardEvent) {
		let key = e.key;
		if (key === 'Tab' && e.shiftKey) {
			key = 'ShiftTab';
		}

		const fnMap: FnMap = {
			Tab: opened ? close : null,
			ShiftTab: opened ? close : null,
			ArrowDown: down.bind(function (this: KeyboardEvent) {}),
			ArrowUp: up.bind(function (this: KeyboardEvent) {}),
			Escape: onEsc.bind(function (this: KeyboardEvent) {}),
			Backspace: config.multiple && hasSelection && !config.search ? onBackspace.bind(function (this: KeyboardEvent) {}) : null
		};

		const fn = fnMap[key];

		if (typeof fn === 'function') {
			fn(e);
		}
	}

	function onKeyPress(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			onEnter(e);
		}
	}

	function onEnter(e: KeyboardEvent) {
		if (opened) {
			e.preventDefault();
			selectItem();
		}
	}

	function onInput(e: Event) {
		if (inputDelayTimeout) {
			clearTimeout(inputDelayTimeout);
		}

		if (config.delay) {
			inputDelayTimeout = setTimeout(processInput, config.delay);
		} else {
			processInput();
		}
	}

	function unselectItem(unselectItem: ListItem) {
		if (Array.isArray(selectedItem)) {
			selectedItem = selectedItem.filter((item) => unselectItem !== item);
			input.focus();
		}
	}

	function processInput() {
		highlightIndex = 0;
		open();
	}

	function onInputClick() {
		resetListToAllItemsAndOpen();
	}

	function onBackspace(e: KeyboardEvent) {
		if (Array.isArray(selectedItem)) {
			unselectItem(selectedItem[selectedItem.length - 1]);
		}
	}

	function onEsc(e: KeyboardEvent) {
		e.stopPropagation();
		if (opened) {
			input.focus();
			close();
		}
	}

	function onFocusInternal() {
		onFocus();

		resetListToAllItemsAndOpen();
	}

	function resetListToAllItemsAndOpen() {
		if (searchFunction && !listItems.length) {
			search();
		} else if (!config.search) {
			filteredListItems = listItems;
		}

		open();

		if (selectedItem) {
			const index = findItemIndex(selectedItem as ListItem, filteredListItems);
			if (index >= 0) {
				highlightIndex = index;
				highlight();
			}
		}
	}

	function findItemIndex(item: ListItem, items: ListItem[]) {
		let index = -1;
		for (let i = 0; i < items.length; i++) {
			const listItem = items[i];
			if ('undefined' === typeof listItem) {
				continue;
			}

			if (item === listItem.item) {
				index = i;
				break;
			}
		}
		return index;
	}

	export function highlightFilter(keywords: string[], field: 'label' | 'keywords' | 'item') {
		return (item: ListItem) => {
			let label = item[field] as string;

			const newItem: ListItem = Object.assign({ highlighted: undefined }, item);
			newItem.highlighted = label;

			const labelLowercase = label.toLowerCase();
			const labelLowercaseNoAc = config.ignoreAccents ? removeAccents(labelLowercase) : labelLowercase;

			if (keywords && keywords.length) {
				const positions = [];

				for (let i = 0; i < keywords.length; i++) {
					let keyword = keywords[i];
					if (config.ignoreAccents) {
						keyword = removeAccents(keyword);
					}
					const keywordLen = keyword.length;

					let pos1 = 0;

					do {
						pos1 = labelLowercaseNoAc.indexOf(keyword, pos1);
						if (pos1 >= 0) {
							let pos2 = pos1 + keywordLen;
							positions.push([pos1, pos2]);
							pos1 = pos2;
						}
					} while (pos1 !== -1);
				}

				if (positions.length > 0) {
					const keywordPatterns = new Set();
					for (let i = 0; i < positions.length; i++) {
						const pair = positions[i];
						const pos1 = pair[0];
						const pos2 = pair[1];

						const keywordPattern = labelLowercase.substring(pos1, pos2);

						keywordPatterns.add(keywordPattern);
					}
					for (let keywordPattern of keywordPatterns) {
						// FIXME: workaround for wrong replacement <b> tags??
						if (keywordPattern === 'b') {
							continue;
						}

						const reg = new RegExp('(' + keywordPattern + ')', 'ig');

						const newHighlighted: string = newItem.highlighted.replace(reg, '<b>$1</b>');
						newItem.highlighted = newHighlighted;
					}
				}
			}
			return newItem;
		};
	}

	function closeIfMinCharsToSearchReached() {
		if (notEnoughSearchText()) {
			close();
			return true;
		}
		return false;
	}

	function clear() {
		config.search = '';
		selectedItem = config.multiple ? [] : undefined;

		setTimeout(() => {
			input.focus();
			close();
		});
	}

	function notEnoughSearchText() {
		return (
			config.minCharactersToSearch > 0 &&
			config.search.length < config.minCharactersToSearch &&
			(searchFunction || config.search.length > 0)
		);
	}

	function open() {
		if (notEnoughSearchText()) {
			return;
		}

		setPositionOnNextUpdate = true;

		opened = true;
	}

	function close() {
		opened = false;
		loading = false;
		if (!config.search && config.selectFirstIfEmpty) {
			highlightIndex = 0;
			selectItem();
		}
	}

	function removeAccents(str: string) {
		return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	}

	function isConfirmed(listItem: ListItem) {
		if (!selectedItem) {
			return false;
		}
		if (config.multiple) {
			return (selectedItem as ListItem[]).includes(listItem);
		} else {
			return listItem === selectedItem;
		}
	}

	let draggingOver: number | null = null;

	function dragStart(event: DragEvent, index: string) {
		if (config.orderableSelection) {
			event.dataTransfer?.setData('source', index);
		}
	}

	function dragOver(event: DragEvent, index: number) {
		if (config.orderableSelection) {
			event.preventDefault();
			draggingOver = index;
		}
	}

	function dragLeave(event: DragEvent, index: boolean) {
		if (config.orderableSelection) {
			draggingOver = null;
		}
	}

	function drop(event: DragEvent, index: number) {
		if (config.orderableSelection) {
			event.preventDefault();
			draggingOver = null;
			let eventData = event.dataTransfer?.getData('source');
			if (eventData) {
				let from = parseInt(eventData);
				let to = index;
				if (from != to) {
					moveSelectedItem(from, to);
				}
			}
		}
	}

	function moveSelectedItem(from: number, to: number) {
		let newSelection = [...(selectedItem as ListItem[])];
		if (from < to) {
			newSelection.splice(to + 1, 0, newSelection[from]);
			newSelection.splice(from, 1);
		} else {
			newSelection.splice(to, 0, newSelection[from]);
			newSelection.splice(from + 1, 1);
		}
		selectedItem = newSelection;
	}

	function setScrollAwareListPosition() {
		const { height: viewPortHeight } = window.document.documentElement.getBoundingClientRect();
		const { bottom: inputButton, height: inputHeight } = inputContainer.getBoundingClientRect();
		const { height: listHeight } = list.getBoundingClientRect();

		if (inputButton + listHeight > viewPortHeight) {
			list.style.top = `${inputHeight + listHeight}px`;
		} else {
			list.style.top = '0px';
		}
	}
</script>

<div
	class="autocomplete select is-fullwidth dark {uniqueId}"
	class:hide-arrow={config.hideArrow || !items.length}
	class:is-multiple={config.multiple}
	class:show-clear={clearable}
	class:is-loading={config.showLoadingIndicator && loading}
>
	<select name={config.selectName} id={config.selectId}>
		{#if !config.multiple && hasSelection}
			<option value={valueFunction(selectedItem, true)} selected> {safeLabelFunction(selectedItem)}</option>
		{:else if config.multiple && hasSelection}
			{#each selectedItem as i}
				<option value={valueFunction(i, true)}>{safeLabelFunction(i)}</option>
			{/each}
		{/if}
	</select>
	<div class="input-container" bind:this={inputContainer}>
		{#if config.multiple && hasSelection && Array.isArray(selectedItem)}
			{#each selectedItem as tagItem, i (valueFunction(tagItem, true))}
				<div>
					<slot name="tag" label={safeLabelFunction(tagItem)} item={tagItem} {unselectItem}>
						<div class="tags has-addons">
							<span class="tag">{safeLabelFunction(tagItem)}</span>
							<span
								class="tag is-delete"
								on:click|preventDefault={() => unselectItem(tagItem)}
								on:keypress|preventDefault={(e) => {
									e.key == 'Enter' && unselectItem(tagItem);
								}}
							/>
						</div>
					</slot>
				</div>
			{/each}
		{/if}
		<input
			type="text"
			class="input autocomplete-input"
			id={''}
			tabindex={config.tabIndex}
			bind:this={input}
			bind:value={config.search}
			on:input={onInput}
			on:focus={onFocusInternal}
			on:keypress={onKeyPress}
			on:keydown={onKeyDown}
			on:click={onInputClick}
			{...$$restProps}
		/>
		<div class="autocomplete-list {showList ? '' : 'hidden'} is-fullwidth" bind:this={list}>
			{#if filteredListItems && filteredListItems.length > 0}
				{#each filteredListItems as listItem, idx (listItem)}
					{#if listItem && (config.maxItemsToShowInList <= 0 || idx < config.maxItemsToShowInList)}
						<div
							class="autocomplete-list-item"
							class:selected={idx === highlightIndex}
							class:confirmed={isConfirmed(listItem.item)}
							on:click={() => onListItemClick(listItem)}
							on:keypress={(e) => {
								e.key == 'Enter' && onListItemClick(listItem);
							}}
							on:pointerenter={() => {
								highlightIndex = idx;
							}}
						>
							<slot name="item" item={listItem.item} label={listItem.highlighted ? listItem.highlighted : listItem.label}>
								{#if listItem.highlighted}
									{@html listItem.highlighted}
								{:else}
									{@html listItem.label}
								{/if}
							</slot>
						</div>
					{/if}
				{/each}
			{/if}
		</div>
	</div>
</div>

<svelte:window on:click={onDocumentClick} />

<style lang="postcss">
	.autocomplete {
		@apply min-w-min inline-block max-w-full relative align-top w-full;
	}

	.autocomplete-input {
		width: 100%;
		height: 100%;
		padding: 5px 11px;
	}

	.autocomplete-list {
		@apply w-full transition-all duration-200 mt-1;

		@apply text-black dark:text-white;

		@apply bg-surface-200-700-token;

		@apply border-token border-surface-400-500-token focus:border-secondary-500;

		@apply shadow-sm;

		@apply rounded-sm;

		@apply relative z-10;
	}

	.autocomplete-list-item {
		@apply py-1 px-3 text-surface-100 cursor-pointer rounded-sm;
	}

	.autocomplete-list-item.confirmed {
		@apply bg-primary-600/50 text-surface-50;
	}
	.autocomplete-list-item.selected {
		@apply bg-primary-500 text-surface-50;
	}
	.autocomplete-list-item-no-results {
		padding: 5px 15px;
		color: #999;
		line-height: 1;
	}
	.autocomplete-list-item-create {
		padding: 5px 15px;
		line-height: 1;
	}
	.autocomplete-list-item-loading {
		padding: 5px 15px;
		line-height: 1;
	}

	.autocomplete-list.hidden {
		visibility: hidden;
	}

	.autocomplete.show-clear .autocomplete-clear-button {
		cursor: pointer;
		display: block;
		text-align: center;
		position: absolute;
		right: 0.1em;
		padding: 0.3em 0.6em;
		top: 50%;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		z-index: 4;
	}

	.autocomplete:not(.show-clear) .autocomplete-clear-button {
		display: none;
	}

	.autocomplete select {
		display: none;
	}

	.autocomplete.is-multiple .input-container {
		@apply h-10 px-2 flex flex-wrap items-stretch bg-surface-500 relative rounded-token;
	}

	/* .autocomplete.is-multiple .input-container {
		height: auto;
		box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
		border-radius: 4px;
		padding-left: 0.4em;
		padding-right: 0.4em;
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
		background-color:;
	} */

	.autocomplete.is-multiple .tag {
		display: flex;
		margin-top: 0.5em;
		margin-bottom: 0.3em;
	}

	.autocomplete.is-multiple .tag.is-delete {
		cursor: pointer;
	}

	.autocomplete.is-multiple .tags {
		margin-right: 0.3em;
		margin-bottom: 0;
	}

	.autocomplete.is-multiple .autocomplete-input {
		display: flex;
		width: 100%;
		flex: 1 1 50px;
		min-width: 3em;
		border: none;
		box-shadow: none;
		background: none;
	}
</style>
