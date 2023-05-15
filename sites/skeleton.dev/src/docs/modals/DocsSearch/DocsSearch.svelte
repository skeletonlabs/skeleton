<script lang="ts">
	import { menuNavLinks, type List } from '$docs/links';
	import { modalStore } from '@skeletonlabs/skeleton';

	// Classes
	const cBase =
		'card bg-surface-100/60 dark:bg-surface-500/30 backdrop-blur-lg overflow-hidden w-full max-w-[800px] shadow-xl mt-8 mb-auto';
	const cHeader = 'bg-surface-300-600-token flex items-center';
	const cSearchInput = 'bg-transparent border-0 ring-0 focus:ring-0 w-full p-4 text-lg';
	const cResults = 'overflow-x-auto max-h-[480px] hide-scrollbar';
	const cResultAnchor = '!rounded-none justify-between hover:variant-soft focus:!variant-filled-primary outline-0';
	const cFooter = 'hidden md:flex items-center gap-2 bg-surface-300-600-token p-4 text-xs font-bold';

	// Local
	let searchTerm = '';
	let resultsCopy = [...menuNavLinks['/docs'], ...menuNavLinks['/elements'], ...menuNavLinks['/svelte'], ...menuNavLinks['/utilities']];
	let results = resultsCopy;

	// Elements
	let elemDocSearch: HTMLElement;

	function filterList(list: List) {
		return list.filter((rowObj) => {
			const formattedSearchTerm = searchTerm.toLowerCase() || '';
			return Object.values(rowObj).join(' ').toLowerCase().includes(formattedSearchTerm);
		});
	}

	function onInput(): void {
		let resultsDeepCopy = structuredClone(resultsCopy);
		results = resultsDeepCopy.filter((category) => {
			category.list = filterList(category.list);
			if (category.list.length) return category;
		});
	}

	function onKeyDown(event: KeyboardEvent): void {
		if (['Enter', 'ArrowDown'].includes(event.code)) {
			const queryFirstAnchorElement = elemDocSearch.querySelector('a');
			if (queryFirstAnchorElement) queryFirstAnchorElement.focus();
		}
	}
</script>

<div bind:this={elemDocSearch} class="modal-search {cBase}">
	<!-- Header -->
	<header class="modal-search-header {cHeader}">
		<i class="fa-solid fa-magnifying-glass text-xl ml-4" />
		<input class={cSearchInput} bind:value={searchTerm} type="search" placeholder="Search..." on:input={onInput} on:keydown={onKeyDown} />
	</header>
	<!-- Results -->
	{#if results.length > 0}
		<nav class="list-nav {cResults}">
			{#each results as category}
				<div class="text-sm font-bold p-4">{category.title}</div>
				<ul>
					{#each category.list as link}
						<li class="text-lg">
							<a
								class={cResultAnchor}
								href={link.href}
								on:click={() => {
									modalStore.close();
								}}
							>
								<div class="flex items-center gap-4">
									<i class="fa-regular fa-file" />
									<span class="flex-auto font-bold opacity-75">{link.label}</span>
								</div>
								<span class="hidden md:block text-xs opacity-50">{link.href}</span>
							</a>
						</li>
					{/each}
				</ul>
			{/each}
		</nav>
	{:else}
		<div class="p-4">
			<p>No Results found for <code class="code">{searchTerm}</code>.</p>
		</div>
	{/if}
	<!-- Footer -->
	<footer class="modal-search-footer {cFooter}">
		<div><kbd class="kbd">Esc</kbd> to close</div>
		<div><kbd class="kbd">Tab</kbd> to navigate</div>
		<div><kbd class="kbd">Enter</kbd> to select</div>
	</footer>
</div>
