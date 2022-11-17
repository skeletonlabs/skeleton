<script lang="ts">
	import { menuNavLinks, type MenuNavCategory, type MenuNavLink } from '$docs/DocsNavigation/links';
	import { modalStore } from '$lib/utilities/Modal/stores';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	import { storeRecentlySearched, storeFavSearch } from '../stores';
	// Local
	let searchTerm: string = '';
	let navigationOriginal = Object.values(menuNavLinks);
	let navigation = navigationOriginal;
	let highlighted: HTMLAnchorElement;
	function filterList(list: MenuNavLink[]) {
		return list.filter((rowObj) => {
			const formattedSearchTerm = searchTerm.toLowerCase() || '';
			return Object.values(rowObj).join(' ').toLowerCase().includes(formattedSearchTerm);
		});
	}

	function onSearch(): void {
		let navDeepCopy = JSON.parse(JSON.stringify(navigationOriginal));
		navigation = navDeepCopy.filter((category: MenuNavCategory) => {
			category.list = filterList(category.list);
			if (category.list.length) return category;
		});
		searchResults.getElementsByTagName('a')[0].setAttribute('aria-selected', 'true');
	}

	function onKey(e: KeyboardEvent): void {
		if (e.key === 'Enter') {
			const firstEl = searchResults.querySelector('[aria-selected="true"]');
			if (firstEl instanceof HTMLAnchorElement) firstEl.click();
		}
	}

	/** Sets the aria-selected attribute */
	function onMouseOver(e: MouseEvent | FocusEvent): void {
		// set every element to false to reset only when a new valid element is hovered
		searchResults.querySelectorAll('[aria-selected="true"]')?.forEach((el) => el.setAttribute('aria-selected', 'false'));
		const target = e.target as HTMLAnchorElement;
		if (target.tagName === 'A') {
			highlighted = target;
			highlighted.setAttribute('aria-selected', 'true');
		}
	}

	function onClick(link: MenuNavLink) {
		modalStore.close();
		storeRecentlySearched.update((list) => {
			if (list.includes(link)) return list;
			return [link, ...list];
		});
	}

	let searchResults: HTMLDivElement;

	const cBase: string = '';
	const cHeader: string = 'flex items-center space-x-4 p-4';
	const cList: string = 'pr-1 space-y-4 rounded-container-token max-h-[60vh] md:max-h-[75vh] p-4 space-y-4 overflow-y-auto';
	const cCard: string = 'card card-body py-2 bg-surface-200-700-token aria-selected:bg-primary-500 flex justify-between items-center';
</script>

<div class="docs-search {cBase}">
	<header class="docs-search-header {cHeader}">
		<SvgIcon name="search" />
		<input bind:value={searchTerm} type="search" placeholder="Search..." on:input={onSearch} on:keypress={onKey} />
		<!-- prettier-ignore -->
		<button class="btn-icon" on:click={() => { modalStore.close(); }}><kbd>Esc</kbd></button>
	</header>
	<hr />
	<div bind:this={searchResults} class="docs-search-categories {cList}">
		{#if searchTerm.length === 0}
			<div class="space-y-4">
				<strong>Recently Searched</strong>
				<nav>
					<ul class="list-none space-y-2">
						{#each $storeRecentlySearched as link, i}
							<li>
								<a
									aria-selected="false"
									on:mouseover={onMouseOver}
									on:focus={onMouseOver}
									class={cCard}
									href={link.href}
									on:click={() => onClick(link)}
								>
									<div>
										<p>{link.label}</p>
										<small class="opacity-75">{link.href}</small>
									</div>
									<button
										on:click|preventDefault={() => {
											$storeRecentlySearched = $storeRecentlySearched.filter((_, index) => index !== i);
										}}
									>
										<SvgIcon class="w-10 h-10" name="close" />
									</button>
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
		{:else}
			{#each navigation as category, i}
				<div class="space-y-4">
					<strong>{category.title}</strong>
					<nav>
						<ul class="list-none space-y-2">
							{#each category.list as link, i}
								<li>
									<a
										aria-selected="false"
										on:mouseover={onMouseOver}
										on:focus={onMouseOver}
										class={cCard}
										href={link.href}
										on:click={() => onClick(link)}
									>
										<div>
											<p>{link.label}</p>
											<small class="opacity-75">{link.href}</small>
										</div>
										<span class="opacity-75">&rarr;</span>
									</a>
								</li>
							{/each}
						</ul>
					</nav>
				</div>
			{/each}
		{/if}
	</div>
</div>
