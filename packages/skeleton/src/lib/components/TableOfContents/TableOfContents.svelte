<script lang="ts">
	import { onDestroy, onMount, createEventDispatcher } from 'svelte';

	// Types
	import type { CssClasses } from '../../index.js';
	import type { QueryIndent } from './types.js';

	// Events
	const dispatch = createEventDispatcher();

	// Props
	/** Set the title text. */
	export let title = 'On This Page';
	/**
	 * List of included queries and their indentation classes.
	 * @type {QueryIndent[]}
	 */
	export let includeList: QueryIndent[] = [
		{ query: 'h2', indentClass: '' },
		{ query: 'h3', indentClass: 'ml-3' },
		{ query: 'h4', indentClass: 'ml-6' },
		{ query: 'h5', indentClass: 'ml-9' },
		{ query: 'h6', indentClass: 'ml-12' }
	];
	/** Query selector for elements to exclude from the list. */
	export let excludeQuery = '';
	/** Query selector for the scrollable page element. */
	export let scrollParent = '#page';
	/** Query selector for the element to scan. */
	export let target = '#page';
	/** 
	 * Change this prop to trigger update.
	 * @type {unknown}
	 */
	export let triggerUpdate: unknown = undefined;

	// Props (styles)
	/** Set the component width style. */
	export let width: CssClasses = 'w-[240px]';
	/** Set the vertical spacing styles. */
	export let spacing: CssClasses = 'space-y-4';
	/** Set the row text color styles. */
	export let text: CssClasses = 'text-surface-600-300-token';
	/** Set the row hover styles. */
	export let hover: CssClasses = 'hover:bg-primary-hover-token';
	/** Set the row border radius styles. */
	export let rounded: CssClasses = 'rounded-token';
	/** Set the active row styles */
	export let active: CssClasses = 'bg-primary-active-token !text-on-primary-token';

	// Props Regions
	/** Provide arbitrary styles for the title. */
	export let regionTitle: CssClasses = 'font-bold';
	/** Provide arbitrary styles for the list element. */
	export let regionList: CssClasses = '';

	// Classes
	const cTitle = 'p-4 pt-0';
	const cList = 'list-none space-y-1';
	const cListItem = 'px-4 py-2 cursor-pointer';

	// Functionality
	function getIndent(element: HTMLElement): string {
		if (!element) return '';
		for (const includedItem of includeList) {
			const query = includedItem.query;
			// check if query matches the type of the element.
			if (query.toLowerCase() === element.tagName?.toLowerCase()) return includedItem.indentClass;

			// check if query matches the Id of the element.
			if (query.startsWith('#') && query.substring(1) === element.id) return includedItem.indentClass;

			// check if query matches a class in the element.
			if (query.startsWith('.') && element.classList?.contains(query.substring(1))) return includedItem.indentClass;
		}
		return '';
	}
	function scrollToElement(element: HTMLElement) {
		if (!scrollElement) return;
		scrollElement.scrollBy({
			// distance between parent and target child.
			top: element.getBoundingClientRect().top - scrollElement.getBoundingClientRect().top,
			// TODO: change to auto if prefersReducedMotion is set.
			behavior: `smooth`
		});
	}
	// iterate through all elements, gets the top visible element and sets it as active.
	function activateTopVisibleElement() {
		let smallestTopValue = Infinity;

		filteredElements.forEach((element) => {
			const elementPos = element.getBoundingClientRect();
			const parentTop = scrollElement?.getBoundingClientRect().top ?? 0;
			const isVisible = elementPos.top >= 0 && elementPos.bottom >= parentTop;
			if (isVisible && elementPos.top < smallestTopValue) {
				smallestTopValue = elementPos.top;
				activeElement = element;
			}
		});
	}
	function refreshList(): void {
		// include :not() only when exclude query is not empty.
		const notSelectorQuery = excludeQuery ? `:not(${excludeQuery})` : '';
		// join all include queries. ex: h2,h3,h4,h5,h6
		const includeQuery = includeList.map((item) => item.query).join(',');
		if (!parentElement || includeQuery.length === 0) return;
		filteredElements = [...parentElement.querySelectorAll(`${notSelectorQuery}:is(${includeQuery})`)] as HTMLElement[];
		activateTopVisibleElement();
		/** @event {{ filteredElements: HTMLElement[] }} updateList - Fires when the links list is updated. */
		dispatch('updateList', {
			filteredElements: filteredElements
		});
	}
	// whenever the variable change, the function will be called.
	$: triggerUpdate, refreshList();

	// Lifecycle
	onMount(() => {
		parentElement = document.querySelector(target) as HTMLElement | null;
		scrollElement = document.querySelector(scrollParent) as HTMLElement | null;
		scrollElement?.addEventListener('scroll', activateTopVisibleElement);
		refreshList();
	});
	onDestroy(() => {
		scrollElement?.removeEventListener('scroll', activateTopVisibleElement);
	});

	// Local
	let filteredElements: HTMLElement[] = [];
	let activeElement: HTMLElement;
	let parentElement: HTMLElement | null;
	let scrollElement: HTMLElement | null;

	// Reactive
	$: classesBase = `${width} ${spacing} ${$$props.class ?? ''}`;
	$: classesList = `${cList} ${regionList}`;
	$: classesTitle = `${cTitle} ${regionTitle}`;
	$: classesListItem = `${cListItem} ${text} ${hover} ${rounded}`;
</script>

{#if filteredElements.length > 0}
	<aside class="toc {classesBase}" data-testid="toc">
		<nav class="toc-list {classesList}">
			<div class="toc-title {classesTitle}">{title}</div>
			{#each filteredElements as filteredElement}
				<!-- TODO: Remove for V2 -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<!-- prettier-ignore -->
				<li
					class="toc-list-item {classesListItem} {getIndent(filteredElement)} {activeElement === filteredElement ? active : ''}"
					on:click={() => scrollToElement(filteredElement)}
					on:click
					on:keypress
				>
					{filteredElement.firstChild?.nodeValue}
				</li>
			{/each}
		</nav>
	</aside>
{/if}
