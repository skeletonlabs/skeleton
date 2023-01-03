<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	// Props (settings)
	/** Query selector for the element to scan for headings. */
	export let target: string = '#page-content';
	/** Query selector for the allowed headings. From H2-H6. */
	export let allowedHeadings: string = 'h2, h3';
	/** Set the label text. */
	export let label: string = 'On This Page';

	// Props (styles)
	/** Set the component width style. */
	export let width: string = 'w-[240px]';
	/** Set the vertical spacing styles. */
	export let spacing: string = 'space-y-4';
	/** Set the row text color styles. */
	export let text: string = 'text-surface-600-300-token';
	/** Set the active text styles. */
	export let activeText: string = 'font-bold';
	/** Set the row hover styles. */
	export let hover: string = 'hover:bg-primary-hover-token';
	/** Set the row border radius styles. */
	export let rounded: string = 'rounded-token';

	// Props Regions
	/** Provide arbitrary styles for the label element. */
	export let regionLabel: string = 'font-bold';
	/** Provide arbitrary styles for the list element. */
	export let regionList: string = 'list-none';

	// Classes
	const cLabel: string = 'p-4 pt-0';
	const cListItem: string = 'px-4 py-2 cursor-pointer';

	// Local
	let headingsList: HTMLElement[] = [];
	let observer: IntersectionObserver;
	let activeIndexes: number[] = [];

	function generateHeadingList(): void {
		const elemTarget = document.querySelector(target);
		const elemHeadersList: any = elemTarget?.querySelectorAll(allowedHeadings);
		// Select only relevant headings
		elemHeadersList?.forEach((elem: HTMLElement, i: number) => {
			// Skip if `data-toc-ignore` attribute set
			if (elem.hasAttribute('data-toc-ignore')) return;
			// Generate a unique ID if none present
			if (!elem.id) {
				let newId = elem.innerText
					.replaceAll(/[^a-zA-Z0-9 ]/g, '')
					.replaceAll(' ', '-')
					.toLowerCase();
				elem.id = `${newId}-${i}`;
			}
			// Generate headings whitelist
			headingsList.push(elem);
		});
		// Update Headings list
		headingsList = [...headingsList];
	}

	// Sets the indentation amount per heading
	function setHeadingClasses(headingElem: HTMLElement): string {
		if (headingElem.tagName === 'H3') return 'ml-3';
		if (headingElem.tagName === 'H4') return 'ml-6';
		if (headingElem.tagName === 'H5') return 'ml-9';
		if (headingElem.tagName === 'H6') return 'ml-12';
		return '';
	}

	// Scrolls to the selected heading
	// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
	function scrollToHeading(headingElem: HTMLElement, i: number): void {
		const elemTarget: any = document.querySelector(`#${headingElem.id}`);
		elemTarget.scrollIntoView({ behavior: 'smooth' });
	}

	function observeElement(e: HTMLElement, headingIndex: number) {
		observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				// if (entries[0].intersectionRatio > 0) {
				if (activeIndexes.indexOf(headingIndex) === -1) {
					activeIndexes = [...activeIndexes, headingIndex];
				}
			} else {
				activeIndexes = activeIndexes.filter((v) => v != headingIndex);
			}
		});

		observer.observe(e);
	}

	function generateObservers() {
		headingsList.forEach((h: HTMLElement, i: number) => {
			observeElement(h, i);
			// get all elements between this heading and the next one and also observeit with i
			// if not the last
			// if the last then check all elements after it and observe it
		});
	}

	// Lifecycle
	onMount(() => {
		generateHeadingList();
		if (activeText) {
			// Only add observers if activeText is not empty.
			generateObservers();
		}
	});

	onDestroy(() => {
		observer?.disconnect();
	});

	// Reactive
	$: classesBase = `${width} ${spacing} ${$$props.class ?? ''}`;
	$: classesLabel = `${cLabel} ${regionLabel}`;
	$: classesList = `${regionList}`;
	$: classesListItem = `${cListItem} ${text} ${hover} ${rounded}`;
	$: setActiveClasses = (index: number): string => {
		if (activeIndexes.indexOf(index) === -1) {
			return '';
		} else {
			return activeText;
		}
	};
</script>

<!-- @component Allows you to quickly navigate the hierarchy of headings for the current page. -->

<div class="toc {classesBase}">
	<nav class="toc-list {classesList}">
		<div class="toc-label {classesLabel}">{label}</div>
		{#each headingsList as headingElem, i}
			<!-- prettier-ignore -->
			<li
				class="toc-list-item {classesListItem} {setHeadingClasses(headingElem)} {setActiveClasses(i)}"
				on:click={() => { scrollToHeading(headingElem, i); }}
				on:click
				on:keypress
			>
				{headingElem.innerText}
			</li>
		{/each}
	</nav>
</div>
