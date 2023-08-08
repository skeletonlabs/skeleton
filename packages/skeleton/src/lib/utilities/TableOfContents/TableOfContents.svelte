<script lang="ts">
	import { fade } from 'svelte/transition';

	// Types
	import type { CssClasses } from '../../index.js';
	// Stores
	import { tocStore } from './stores.js';

	// Props (styles)
	/** Provide text for the title. Accepts HTML. */
	export let title = 'Table of Contents';
	/** Provide classes to set the inactive anchor styles. */
	export let inactive: CssClasses = 'opacity-60 hover:opacity-100';
	/** Provide classes to set the active anchor styles. */
	export let active: CssClasses = 'text-primary-500';
	/** Set the active permalink ID on load. */
	export let activeId = '';
	/**
	 * Set indentation per each queried element.
	 * @type {Record(string, string)}
	 */
	export let indentStyles = {
		h2: '',
		h3: 'ml-4',
		h4: 'ml-8',
		h5: 'ml-12',
		h6: 'ml-16'
	};

	// Props (regions)
	/** Provide arbitrary classes to style the title element. */
	export let regionTitle: CssClasses = '';
	/** Provide arbitrary classes to style the list element. */
	export let regionList: CssClasses = '';
	/** Provide arbitrary classes to style the list item elements. */
	export let regionListItem: CssClasses = '';
	/** Provide arbitrary classes to style the anchor elements. */
	export let regionAnchor: CssClasses = '';

	// Styles
	const cBase = 'space-y-4';
	const cTitle = 'font-bold';
	const cList = 'space-y-2';
	const cListItem = 'block';
	const cAnchor = '';

	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesTitle = `${cTitle} ${regionTitle}`;
	$: classesList = `${cList} ${regionList}`;
	$: classesListItem = `${cListItem} ${regionListItem}`;
	$: classesAnchor = `${cAnchor} ${regionAnchor}`;
</script>

{#if $tocStore.length}
	<nav class="toc {classesBase}" data-testid="toc" transition:fade|local={{ duration: 100 }}>
		{#if title}
			<span class="toc-title {classesTitle}">{@html title}</span>
		{/if}
		<ul class="toc-list {classesList}">
			{#each $tocStore as tocHeading}
				<li class="toc-list-item {classesListItem} {indentStyles[tocHeading.element]}">
					<a
						href="#{tocHeading.id}"
						class="toc-anchor {classesAnchor} {tocHeading.id === activeId ? active : inactive}"
						on:click={() => {
							activeId = tocHeading.id;
						}}
					>
						{tocHeading.text}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}