<script lang="ts">
	import { onMount } from 'svelte';

	// Props (settings)
	/** Set the label text. */
	export let label: string = 'On This Page';
	/** Set the accepted headings from H2 to H6. */
	export let queryElements: string = 'h2, h3';
	/** The Scrollable page element. */
	export let container: string = '#page';
	/** The target element that contains headings. */
	export let target: string = '#page';
	/** Must have more than this many headings to be shown. */
	export let minimumHeadings: number = 0;
	/** The scroll offset in pixels. */
	export let scrollOffset: number = -100;

	// Classes
	const cBase: string = 'w-[200px] space-y-4';
	const cLabel: string = 'font-bold p-4 pt-0';
	const cList: string = 'list-none';
	const cListItem: string = 'px-4 py-2 text-surface-600-300-token hover:bg-primary-hover-token rounded-token cursor-pointer';

	// Local
	let headings: any = [];

	// Sets the indentation amount per heading
	function setHeadingClasses(headingElem: HTMLElement): string {
		if (headingElem.tagName === 'H3') return 'ml-4';
		if (headingElem.tagName === 'H4') return 'ml-8';
		if (headingElem.tagName === 'H5') return 'ml-12';
		if (headingElem.tagName === 'H6') return 'ml-16';
		return '';
	}

	// Scrolls to the selected heading
	function scrollToHeading(headingElem: HTMLElement, i: number): void {
		const elemContainer: any = document.querySelector(container);
		const elemTarget: any = document.querySelector(`#${headingElem.id}`);
		const topPos = elemTarget?.offsetTop;
		if (topPos && elemContainer) {
			elemContainer.scrollTop = 0; // reset to 0 ensure offset works
			elemContainer.scrollBy({
				top: topPos + scrollOffset,
				behavior: 'smooth'
			});
		}
	}

	// Lifecycle
	onMount(() => {
		const elemContainer = document.querySelector(target);
		const elemHeadersList: any = elemContainer?.querySelectorAll(queryElements);
		// Select only relevant headings
		elemHeadersList?.forEach((elem: HTMLElement, i: number) => {
			// Skip if ignore attribute set
			if (elem.hasAttribute('data-toc-ignore')) return;
			// Generate Unique ID if none present
			if (!elem.id) {
				let newId = elem.innerText
					.replaceAll(/[^a-zA-Z0-9 ]/g, '')
					.replaceAll(' ', '-')
					.toLowerCase();
				elem.id = `${newId}-${i}`;
			}
			// Generate headings whitelist
			headings.push(elem);
		});
		// Update Headings Array
		headings = [...headings];
	});

	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesLabel = `${cLabel}`;
	$: classesList = `${cList}`;
	$: classesListItem = `${cListItem}`;
</script>

<!-- @component Allows you to quickly navigate the hierarchy of headings for the current page. -->

{#if headings.length > minimumHeadings}
	<div class="toc {classesBase}">
		<nav class="toc-list {classesList}">
			<div class="toc-label {classesLabel}">{label}</div>
			{#each headings as headingElem, i}
				<!-- prettier-ignore -->
				<li
					class="toc-list-item {classesListItem} {setHeadingClasses(headingElem)}"
					on:click={() => { scrollToHeading(headingElem, i); }}
					on:keypress
				>
					{headingElem.innerText}
				</li>
			{/each}
		</nav>
	</div>
{/if}
