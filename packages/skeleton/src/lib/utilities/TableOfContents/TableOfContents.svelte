<script lang="ts">
	import { fade } from 'svelte/transition';

	// Types
	import type { CssClasses } from '../../index.js';
	// Stores
	import { tocStore, tocActiveId } from './stores.js';

	// Props (styles)
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
	export let indentStyles: Record<string, string> = {
		h2: '',
		h3: 'ml-4',
		h4: 'ml-8',
		h5: 'ml-12',
		h6: 'ml-16'
	};

	// Props (regions)
	/** Provide arbitrary classes to the lead regions, used for titles. */
	export let regionLead: CssClasses = 'font-bold';
	/** Provide arbitrary classes to style the list element. */
	export let regionList: CssClasses = '';
	/** Provide arbitrary classes to style the list item elements. */
	export let regionListItem: CssClasses = '';
	/** Provide arbitrary classes to style the anchor elements. */
	export let regionAnchor: CssClasses = '';

	// Styles
	const cBase = 'space-y-4';
	const cList = 'space-y-2';
	const cListItem = 'block';
	const cAnchor = '';

	// State
	$: reactiveActiveId = $tocActiveId ? $tocActiveId : activeId.replace('#', '');
	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesList = `${cList} ${regionList}`;
	$: classesListItem = `${cListItem} ${regionListItem}`;
	$: classesAnchor = `${cAnchor} ${regionAnchor}`;
</script>

{#if $tocStore.length}
	<nav class="toc {classesBase}" data-testid="toc" transition:fade|local={{ duration: 100 }}>
		<!-- Slot: Default (title) -->
		<div class={regionLead}>
			<slot>Table of Contents</slot>
		</div>
		<!-- List -->
		<ul class="toc-list {classesList}">
			{#each $tocStore as tocHeading}
				<li class="toc-list-item {classesListItem} {indentStyles[tocHeading.element]}">
					<a
						href="#{tocHeading.id}"
						class="toc-anchor {classesAnchor} {tocHeading.id === reactiveActiveId ? active : inactive}"
						on:click={() => {
							reactiveActiveId = tocHeading.id;
						}}
					>
						{tocHeading.text}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}
