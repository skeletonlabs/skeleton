<script lang="ts">
	import { crawlPage } from '../../index.js';
	import { onDestroy, onMount } from 'svelte';

	// Types
	import type { CssClasses } from '../../index.js';
	import type { QueryIndent } from './types.js';

	// Props
	/** Set the title text. */
	export let title = 'On This Page';
	/**
	 * List of included queries and their indentation classes. when empty headings are included.
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
	export let excludeQuery: string = '';
	/** Query selector for the scrollable page element. */
	export let scrollParent = '#page';
	/** Query selector for the element to scan for headings. */
	export let target = '#page';
	/** Change this prop to trigger update. */
	export let triggerUpdate:unknown = undefined;

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
	function getIndentation(element: HTMLElement): string {
		if (!element) return '';
		for (const includedItem of includeList) {
			const query = includedItem.query;
			if (query.toLowerCase() === element.tagName?.toLowerCase() || query === element.id || element.classList?.contains(query))
				return includedItem.indentClass;
		}
		return '';
	}
	function scrollToElement(element: HTMLElement) {
		if(!scrollElement) return;
		console.log(element);
		scrollElement.scrollTo({
			top: element.offsetTop - scrollElement.offsetTop,
			// TODO: change to auto if prefersReducedMotion is set.
			behavior: `smooth`
		})
	}
	function pageScrollHandler() {
		let smallestTopValue = Infinity;
		filteredElements.forEach((element) => {
			const rect = element.getBoundingClientRect();
			const isVisible = rect.top >= 0 && rect.bottom >= (scrollElement?.getBoundingClientRect().top ?? 0);
			if (isVisible && rect.top < smallestTopValue) {
				smallestTopValue = rect.top;
				activeElement = element;
			}
		});
	}
	function refreshList(): void {
		const notSelectorQuery = `:not(${excludeQuery})`;
		const includeQuery = includeList.map((item) => item.query + (excludeQuery ? notSelectorQuery : '')).join(',');
		if (!targetElement || includeQuery.length === 0) return;
		filteredElements = [...targetElement.querySelectorAll(includeQuery)] as HTMLElement[]
		pageScrollHandler();
	}

	$: triggerUpdate, refreshList();

	// Lifecycle
	onMount(() => {
		targetElement = document.querySelector(target) as HTMLElement | null;
		scrollElement = document.querySelector(scrollParent) as HTMLElement | null;
		scrollElement?.addEventListener('scroll', pageScrollHandler);
		refreshList();
	});
	onDestroy(() => {
		scrollElement?.removeEventListener('scroll', pageScrollHandler);
	});

	// Local
	let filteredElements: HTMLElement[] = [];
	let activeElement: HTMLElement;
	let targetElement: HTMLElement | null;
	let scrollElement: HTMLElement | null;

	// Reactive
	$: classesBase = `${width} ${spacing} ${$$props.class ?? ''}`;
	$: classesList = `${cList} ${regionList}`;
	$: classesTitle = `${cTitle} ${regionTitle}`;
	$: classesListItem = `${cListItem} ${text} ${hover} ${rounded}`;
</script>

{#if filteredElements.length > 0}
	<aside class="toc {classesBase}">
		<nav class="toc-list {classesList}">
			<div class="toc-title {classesTitle}">{title}</div>
			{#each filteredElements as filteredElement}
				<li
					class="toc-list-item {classesListItem} {getIndentation(filteredElement)} {activeElement === filteredElement ? active : ''}"
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
