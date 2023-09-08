<script lang="ts" context="module">
	import { slide } from 'svelte/transition';
	import { prefersReducedMotionStore, type Transition, type TransitionParams } from '../../index.js';
	import { dynamicTransition } from '../../internal/transitions.js';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type SlideTransition = typeof slide;
	type TransitionIn = Transition;
	type TransitionOut = Transition;
	type Value = unknown;
</script>

<script
	lang="ts"
	generics="Value = unknown, TransitionIn extends Transition = SlideTransition, TransitionOut extends Transition = SlideTransition"
>
	import { createEventDispatcher } from 'svelte';
	// import { flip } from 'svelte/animate';
	// import {slide} from 'svelte/transition';

	// Types
	import type { AutocompleteOption } from './types.js';

	// Event Dispatcher
	type AutocompleteEvent = {
		selection: AutocompleteOption<Value>;
	};
	const dispatch = createEventDispatcher<AutocompleteEvent>();

	// Props
	/**
	 * Bind the input value.
	 * @type {Value | undefined}
	 */
	export let input: Value | undefined = undefined;
	/**
	 * Define values for the list.
	 * @type {AutocompleteOption<Value>[]}
	 */
	export let options: AutocompleteOption<Value>[] = [];
	/** Limit the total number of suggestions. */
	export let limit: number | undefined = undefined;
	/**
	 * Provide allowlist values.
	 * @type {Value[]}
	 */
	export let allowlist: Value[] = [];
	/**
	 * Provide denylist values.
	 * @type {Value[]}
	 */
	export let denylist: Value[] = [];
	/** Provide a HTML markup to display when no match is found. */
	export let emptyState = 'No Results Found.';
	// Props (region)
	/** Provide arbitrary classes to nav element. */
	export let regionNav = '';
	/** Provide arbitrary classes to each list. */
	export let regionList = 'list-nav';
	/** Provide arbitrary classes to each list item. */
	export let regionItem = '';
	/** Provide arbitrary classes to each button. */
	export let regionButton = 'w-full';
	/** Provide arbitrary classes to empty message. */
	export let regionEmpty = 'text-center';

	// Props (transition)
	/**
	 * Enable/Disable transitions
	 * @type {boolean}
	 */
	export let transitions = !$prefersReducedMotionStore;
	/**
	 * Provide the transition used on entry.
	 * @type {TransitionIn}
	 */
	export let transitionIn: TransitionIn = slide as TransitionIn;
	/**
	 * Transition params provided to `transitionIn`.
	 * @type {TransitionParams}
	 */
	export let transitionInParams: TransitionParams<TransitionIn> = { duration: 200 };
	/**
	 * Provide the transition used on exit.
	 * @type {TransitionOut}
	 */
	export let transitionOut: TransitionOut = slide as TransitionOut;
	/**
	 * Transition params provided to `transitionOut`.
	 * @type {TransitionParams}
	 */
	export let transitionOutParams: TransitionParams<TransitionOut> = { duration: 200 };

	// Local
	$: listedOptions = options;

	function filterByAllowDeny(_allowlist: typeof allowlist, _denylist: typeof denylist) {
		let _options = [...options];
		// Allowed Options
		if (_allowlist.length) {
			_options = _options.filter((option) => _allowlist.includes(option.value));
		}

		// Denied Options
		if (_denylist.length) {
			_options = _options.filter((option) => !_denylist.includes(option.value));
		}

		// Reset options
		if (!_allowlist.length && !_denylist.length) {
			_options = options;
		}

		listedOptions = _options;
	}

	function filterOptions(): AutocompleteOption[] {
		// Create a local copy of options
		let _options = [...listedOptions];
		// Filter options
		_options = _options.filter((option) => {
			// Format the input search value
			const inputFormatted = String(input).toLowerCase().trim();
			// Format the option
			let optionFormatted = JSON.stringify([option.label, option.value, option.keywords]).toLowerCase();
			// Check Match
			if (optionFormatted.includes(inputFormatted)) return option;
		});
		return _options;
	}

	function onSelection(option: AutocompleteOption<Value>) {
		/** @event {AutocompleteOption} selection - Fire on option select. */
		dispatch('selection', option);
	}

	// State
	$: filterByAllowDeny(allowlist, denylist);
	$: optionsFiltered = input ? filterOptions() : listedOptions;
	$: sliceLimit = limit !== undefined ? limit : optionsFiltered.length;
	// Reactive
	$: classesBase = `${$$props.class ?? ''}`;
	$: classesNav = `${regionNav}`;
	$: classesList = `${regionList}`;
	$: classesItem = `${regionItem}`;
	$: classesButton = `${regionButton}`;
	$: classesEmpty = `${regionEmpty}`;
</script>

<!-- animate:flip={{ duration }} -->
<div class="autocomplete {classesBase}" data-testid="autocomplete">
	{#if optionsFiltered.length > 0}
		<nav class="autocomplete-nav {classesNav}">
			<ul class="autocomplete-list {classesList}">
				{#each optionsFiltered.slice(0, sliceLimit) as option (option)}
					<li
						class="autocomplete-item {classesItem}"
						in:dynamicTransition|local={{ transition: transitionIn, params: transitionInParams, enabled: transitions }}
						out:dynamicTransition|local={{ transition: transitionOut, params: transitionOutParams, enabled: transitions }}
					>
						<button class="autocomplete-button {classesButton}" type="button" on:click={() => onSelection(option)} on:click on:keypress>
							{@html option.label}
						</button>
					</li>
				{/each}
			</ul>
		</nav>
	{:else}
		<div class="autocomplete-empty {classesEmpty}">{emptyState}</div>
	{/if}
</div>
