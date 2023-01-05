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
	/** Set the row hover styles. */
	export let hover: string = 'hover:bg-primary-hover-token';
	/** Set the row border radius styles. */
	export let rounded: string = 'rounded-token';
	/** Set the active text styles. */
	export let activeText: string = 'bg-primary-active-token';
	/** Highlight all headings with content visible in the viewport instead of just the top active heading. */
	export let highlightAllActive: boolean = false;
	/** Highlight parent headings along with the current active heading(s). */
	export let highlightParentHeadings: boolean = false;

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
	let elementsList: HTMLElement[] = [];
	let elementToHeading: any = {};
	let headingsParents: any = {};
	let activeParents: number[] = [];
	let observer: IntersectionObserver | null = null;
	let activeIndexes: number[] = [];
	let observerThreshold: number = 0.25;

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

		// Get all elements in our elemTarget and convert it from an HTMLCollection to an array. Filter the array, so that only the allowed headings and elements with no children are in the list to avoid problems with elements that wrap around others.
		const allowedHeadingsLowerCase = allowedHeadings.toLowerCase();
		elementsList = [].slice.call(elemTarget?.getElementsByTagName('*'));
		elementsList = elementsList.filter(
			(item) => allowedHeadingsLowerCase.includes(item.nodeName.toLowerCase()) || item.children.length === 0
		);
		elementsList.splice(0, elementsList.indexOf(headingsList[0]));
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

	function findParentIndexes(): void {
		/** Get all parents for each heading element, by checking
		 *  which previous headings in the list have a lower H value,
		 *  so H1 < H2 < H3 < ...
		 */
		headingsList.forEach((h, i) => {
			headingsParents[i] = null;
			let currHeading: string = h.tagName;

			let parents: number[] = [];

			for (let j = i - 1; j >= 0; j--) {
				if (headingsList[j].tagName < currHeading) {
					currHeading = headingsList[j].tagName;
					parents = [...parents, j];
				}
			}

			headingsParents[i] = parents.length > 0 ? parents : null;
		});
	}

	function observerCallback(entries: IntersectionObserverEntry[]) {
		for (let i = 0; i < entries.length; i++) {
			const elementIndex = elementsList.indexOf(<HTMLElement>entries[i].target);
			const tocIndex = elementToHeading[elementIndex];

			if (entries[i].intersectionRatio >= observerThreshold) {
				// Only add the observed element to the activeIndexes list if it isn't added yet.
				if (activeIndexes.indexOf(elementIndex) === -1) {
					activeIndexes = [...activeIndexes, elementIndex];
					if (headingsParents[tocIndex]) {
						activeParents = [...activeParents, ...headingsParents[tocIndex]];
					}
				}
			} else {
				// Remove the observed element from the activeIndexes list if the intersection ratio is below the threshold.
				activeIndexes = activeIndexes.filter((item) => item !== elementIndex);

				// Remove all parents of obsIndex from the activeParents list.
				if (headingsParents[tocIndex]) {
					headingsParents[tocIndex]?.forEach((parent: number) => {
						const index = activeParents.indexOf(parent);
						activeParents.splice(index, 1);
					});
				}
			}
		}
	}

	function observeElement(e: HTMLElement) {
		if (!observer) {
			// Create one observer, that observes all elements.
			observer = new IntersectionObserver(observerCallback, { root: null, threshold: observerThreshold });
		}

		observer.observe(e);
	}

	function createElementHeadingCorrespondence() {
		headingsList.forEach((h: HTMLElement, i: number) => {
			// Find all elements between the current heading and the next one and observe them.
			const startIndex = elementsList.indexOf(headingsList[i]);
			const endIndex = i !== headingsList.length - 1 ? elementsList.indexOf(headingsList[i + 1]) : elementsList.length;

			for (let j = startIndex; j < endIndex; j++) {
				elementToHeading[j] = i;
			}
		});
	}

	function generateObservers() {
		elementsList.forEach((e) => observeElement(e));
	}

	// Lifecycle
	onMount(() => {
		generateHeadingList();
		if (activeText) {
			// Only add observers if activeText is not empty.
			findParentIndexes();
			createElementHeadingCorrespondence();
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
	$: classesListItem = `${cListItem} ${hover} ${rounded}`;

	// Find active heading by looking at the lowest active index.
	$: activeHeading = Math.min(...activeIndexes.map((item) => elementToHeading[item]));
	$: setTextClasses = (index: number): string => {
		if (
			highlightParentHeadings &&
			(headingsParents[activeHeading]?.includes(index) || (highlightAllActive && activeParents.includes(index)))
		) {
			return activeText;
		}
		if (highlightAllActive && activeIndexes.some((item) => elementToHeading[item] === index)) {
			return activeText;
		}
		if (index === activeHeading) {
			return activeText;
		}

		return text;
	};
</script>

<!-- @component Allows you to quickly navigate the hierarchy of headings for the current page. -->

<div class="toc {classesBase}">
	<nav class="toc-list {classesList}">
		<div class="toc-label {classesLabel}">{label}</div>
		{#each headingsList as headingElem, i}
			<!-- prettier-ignore -->
			<li
				class="toc-list-item {classesListItem} {setHeadingClasses(headingElem)} {setTextClasses(i)}"
				on:click={() => { scrollToHeading(headingElem, i); }}
				on:click
				on:keypress
			>
				{headingElem.innerText}
			</li>
		{/each}
	</nav>
</div>
