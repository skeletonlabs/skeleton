<script>import { onMount } from 'svelte';
// Props (settings)
/** Query selector for the element to scan for headings. */
export let target = '#page-content';
/** Query selector for the allowed headings. From H2-H6. */
export let allowedHeadings = 'h2, h3';
/** Set the label text. */
export let label = 'On This Page';
// Props (styles)
/** Set the component width style. */
export let width = 'w-[240px]';
/** Set the vertical spacing styles. */
export let spacing = 'space-y-4';
/** Set the row text color styles. */
export let text = 'text-surface-600-300-token';
/** Set the row hover styles. */
export let hover = 'hover:bg-primary-hover-token';
/** Set the row border radius styles. */
export let rounded = 'rounded-token';
// Props Regions
/** Provide arbitrary styles for the label element. */
export let regionLabel = 'font-bold';
/** Provide arbitrary styles for the list element. */
export let regionList = 'list-none';
// Classes
const cLabel = 'p-4 pt-0';
const cListItem = 'px-4 py-2 cursor-pointer';
// Local
let headingsList = [];
function generateHeadingList() {
    const elemTarget = document.querySelector(target);
    const elemHeadersList = elemTarget?.querySelectorAll(allowedHeadings);
    // Select only relevant headings
    elemHeadersList?.forEach((elem, i) => {
        // Skip if `data-toc-ignore` attribute set
        if (elem.hasAttribute('data-toc-ignore'))
            return;
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
function setHeadingClasses(headingElem) {
    if (headingElem.tagName === 'H3')
        return 'ml-3';
    if (headingElem.tagName === 'H4')
        return 'ml-6';
    if (headingElem.tagName === 'H5')
        return 'ml-9';
    if (headingElem.tagName === 'H6')
        return 'ml-12';
    return '';
}
// Scrolls to the selected heading
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
function scrollToHeading(headingElem, i) {
    const elemTarget = document.querySelector(`#${headingElem.id}`);
    elemTarget.scrollIntoView({ behavior: 'smooth' });
}
// Lifecycle
onMount(() => {
    generateHeadingList();
});
// Reactive
$: classesBase = `${width} ${spacing} ${$$props.class ?? ''}`;
$: classesLabel = `${cLabel} ${regionLabel}`;
$: classesList = `${regionList}`;
$: classesListItem = `${cListItem} ${text} ${hover} ${rounded}`;
</script>

<!-- @component Allows you to quickly navigate the hierarchy of headings for the current page. -->

<div class="toc {classesBase}">
	<nav class="toc-list {classesList}">
		<div class="toc-label {classesLabel}">{label}</div>
		{#each headingsList as headingElem, i}
			<!-- prettier-ignore -->
			<li
				class="toc-list-item {classesListItem} {setHeadingClasses(headingElem)}"
				on:click={() => { scrollToHeading(headingElem, i); }}
				on:click
				on:keypress
			>
				{headingElem.innerText}
			</li>
		{/each}
	</nav>
</div>
