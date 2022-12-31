// Autocomplete Types

export interface AutocompleteModel<T extends Record<PropertyKey, unknown>> {
	/** The original source list item data */
	source: T[];
	/** The unfiltered, modified source data */
	base: T[];
	/** The filtered source data, shown in UI */
	filtered: T[];

	/** Selected item(s) */
	selectedItem?: T | T[];
	/** Selected value */
	value?: string;
	/** Highlighted item */
	highlightedItem?: T;

	/** Unique ID */
	uniqueId: string;

	/** The current search term. */
	search: "";
	/** Function to retrieve items (alternative to providing items) */
	searchFunction: Function | boolean;

	/** Field of item to be used as the label in the dropdown list */
	labelField?: string;
	/** Field of item to be used as the value in the dropdown list */
	valueField?: string;
	/** Function used to transform/set label */
	labelFunction: Function;
	/** Function used to transform/set value */
	valueFunction: Function;
	/** Function used to transform user input */
	userInputFunction: Function;

	/** Function that runs before changing selected item */
	beforeChange: Function;
	/** Function that runs when selected item is changed */
	onChange: Function;
	/** Function that runs when an item is created */
	onCreate: Function;
	/** Function that runs when component is focused */
	onFocus: Function;
	/** Function that runs when component is blurred */
	onBlur: Function;

	/** Select first item in list if no items selected */
	selectFirstIfEmpty: boolean;
	/** Minimum characters before search function is called */
	minSearchLength: number;
	/** Maximum items to render in the dropdown list */
	maxNumItemsShown: number;
	/** Allow selection of multiple items */
	multiple: boolean;
	/** Allow creation of new items */
	create: boolean;

	/** Custom item filter function */
	itemFilterFunction?: Function;
	/** Custom item sort function */
	itemSortFunction?: Function;
	/** Disable selection after initial selection */
	lockSelection: boolean;
	/** Delay between keypress and executing search function */
	searchDelay: number;
	/** Perform local filtering of items even if searchFunction is provided */
	localFiltering: boolean;
	/** Perform local sorting of items even if searchFunction is provided */
	localSorting: boolean;
	/** Sanitize user input */
	sanitizeInput: boolean;
	/** Lowercase keywords derived from each item */
	lowercaseKeywords: boolean;
	/** Close dropdown when component loses focus */
	closeOnBlur: boolean;
	/** Allow selection reordering via drag and drop (multiple must be true) */
	reorderable: boolean;

	/** Hide Arrow */
	hideArrow: boolean;
	/** Show clear selection button */
	showClearSelection: boolean;
	/** Show loading indicator when async function is executed */
	showLoadingIndicator: boolean;
	/** Text displayed when no items match the input text */
	noResultsText: string;
	/** Text displayed while async loading */
	loadingText: string;

	/** Text displayed when too many results to show */
	tooManyResultsText: string;
	/** Text displayed when item not found but want to create anyway */
	createText: string;
}

export interface AutocompleteOptionsTwo {
	/** The current search term. */
	search?: "";
	/** Function to retrieve items (alternative to providing items) */
	searchFunction?: Function | boolean;

	/** Field of item to be used as the label in the dropdown list */
	labelField?: string;
	/** Field of item to be used as the value in the dropdown list */
	valueField?: string;
	/** Function used to transform/set label */
	labelFunction?: Function;
	/** Function used to transform/set value */
	valueFunction?: Function;
	/** Function used to transform user input */
	userInputFunction?: Function;

	/** Function that runs before changing selected item */
	beforeChange?: Function;
	/** Function that runs when selected item is changed */
	onChange?: Function;
	/** Function that runs when an item is created */
	onCreate?: Function;

	/** Select first item in list if no items selected */
	selectFirstIfEmpty?: boolean;
	/** Minimum characters before search function is called */
	minSearchLength?: number;
	/** Maximum items to render in the dropdown list */
	maxNumItemsShown?: number;
	/** Allow selection of multiple items */
	multiple?: boolean;
	/** Allow creation of new items */
	create?: boolean;

	/** Custom item filter function */
	itemFilterFunction?: Function;
	/** Custom item sort function */
	itemSortFunction?: Function;
	/** Disable selection after initial selection */
	lockSelection?: boolean;
	/** Delay between keypress and executing search function */
	searchDelay?: number;
	/** Perform local filtering of items even if searchFunction is provided */
	localFiltering?: boolean;
	/** Perform local sorting of items even if searchFunction is provided */
	localSorting?: boolean;
	/** Sanitize user input */
	sanitizeInput?: boolean;
	/** Lowercase keywords derived from each item */
	lowercaseKeywords?: boolean;
	/** Close dropdown when component loses focus */
	closeOnBlur?: boolean;
	/** Allow selection reordering via drag and drop (multiple must be true) */
	reorderable?: boolean;

	/** Hide Arrow */
	hideArrow?: boolean;
	/** Show clear selection button */
	showClearSelection?: boolean;
	/** Show loading indicator when async function is executed */
	showLoadingIndicator?: boolean;
	/** Text displayed when no items match the input text */
	noResultsText?: string;
	/** Text displayed while async loading */
	loadingText?: string;

	/** Text displayed when too many results to show */
	tooManyResultsText?: string;
	/** Text displayed when item not found but want to create anyway */
	createText?: string;
}

export interface AutocompleteOptions {
	search?: string;
	labelField?: string;
	valueField?: string;
	keywordsField?: string;
	showList?: boolean;
	selectFirstIfEmpty?: boolean;
	minCharactersToSearch?: number;
	multiple?: boolean;
	create?: boolean;
	searchFunction?: Function;
	tabIndex?: number;
	matchAllKeywords?: boolean;
	lock?: boolean;
	delay?: number;
	sanitizeUserInput?: boolean;
	orderableSelection?: boolean;
	showLoadingIndicator?: boolean;
	keywordsFieldName?: string;
	lowercaseKeywords?: boolean;
	ignoreAccents?: boolean;
	showClear?: boolean;
	maxItemsToShowInList?: number;
    hideArrow?: boolean
    selectName?: string;
    selectId?: string;
}

export interface AutocompleteConfig {
	search: string;
	labelField: string;
	valueField: string;
	keywordsField: string;
	showList: boolean;
	selectFirstIfEmpty: boolean;
	minCharactersToSearch: number;
	multiple: boolean;
	create: boolean;
	tabIndex: number;
	matchAllKeywords: boolean;
	lock: boolean;
	delay: number;
	sanitizeUserInput: boolean;
	orderableSelection: boolean;
	showLoadingIndicator: boolean;
	lowercaseKeywords: boolean;
	ignoreAccents: boolean;
	showClear: boolean;
	maxItemsToShowInList: number;
    hideArrow: boolean;
    selectName: string;
    selectId: string;
}
