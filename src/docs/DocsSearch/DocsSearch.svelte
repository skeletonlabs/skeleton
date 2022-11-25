<script lang="ts">
	import { menuNavLinks, type MenuNavCategory, type MenuNavLink } from '$docs/DocsNavigation/links';
	import { modalStore } from '$lib/utilities/Modal/stores';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	import { storeRecentlySearched, storeFavSearch } from '../stores';
	import Divider from '$lib/components/Divider/Divider.svelte';
	import { filter } from '$lib';

	const elemWhitelist: string = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';

	// Local
	let searchTerm: string = '';
	let navigationOriginal = Object.values(menuNavLinks);
	let navigation = navigationOriginal;
	let highlighted: HTMLAnchorElement;
	let highlightedIndex = 0;

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

	/** set every element to false to reset only when a new valid element is hovered */
	function clearAllSelected(): void {
		const selected = searchResults.querySelectorAll('[aria-selected="true"]');
		selected.forEach((el) => el.setAttribute('aria-selected', 'false'));
	}

	/** Sets the aria-selected attribute */
	function onFocus(e: MouseEvent | FocusEvent, index: number): void {
		clearAllSelected();
		const target = e.target;
		if (!target) return;
		if (target instanceof HTMLAnchorElement) {
			target.setAttribute('aria-selected', 'true');
			highlighted = target;
			highlightedIndex = index;
		}
	}

	/** If the click is on an `<a>` tag, then the modal needs to close. It then updates the recently searched with the link. */
	function onClick(e: MouseEvent, link: MenuNavLink) {
		if (e.target instanceof HTMLAnchorElement) {
			modalStore.close();
		}
		storeRecentlySearched.update((list) => {
			if ([...list].some((val) => val.label === link.label)) return list;
			list.add(link);
			return list;
		});
	}

	/** Checks to see if the link is already present- if it is, it removes it. If it isn't, then it adds it. */
	function toggleFavSearch(link: MenuNavLink) {
		storeFavSearch.update((list) => {
			if ([...list].some((val) => val.label === link.label)) {
				list.delete(link);
			} else {
				list.add(link);
			}
			return list;
		});
	}

	function removeRecentSearch(link: MenuNavLink) {
		storeRecentlySearched.update((list) => {
			list.delete(link);
			return list;
		});
	}

	function onKey(e: KeyboardEvent) {
		const focusableElems: HTMLElement[] = Array.from(searchResults.querySelectorAll(elemWhitelist));
		let focusedIndex = focusableElems.indexOf(document.activeElement as HTMLElement);
		alert(e.key);
		switch (e.key) {
			case 'Escape':
				modalStore.close();
				break;
			case 'Enter':
				const firstEl = searchResults.querySelector('[aria-selected="true"]');
				if (firstEl instanceof HTMLAnchorElement) firstEl.click();
				break;
			case 'ArrowLeft':
			case 'ArrowUp':
				focusableElems[focusedIndex === 0 ? focusableElems.length - 1 : focusedIndex - 1].focus();
				break;
			case 'ArrowRight':
			case 'ArrowDown':
				focusableElems[focusedIndex === focusableElems.length - 1 ? 0 : focusedIndex + 1].focus();
				break;
			default:
				const regexLetters = /[a-zA-Z]/;
				// This makes sure that if you deselect the input, you can still type queries
				if (regexLetters.test(e.key)) {
					searchInput.focus();
				}
		}
	}

	let searchResults: HTMLDivElement;
	let searchInput: HTMLInputElement;

	const cBase: string = '';
	const cHeader: string = 'flex items-center space-x-4 p-4';
	const cList: string = 'pr-1 space-y-4 rounded-container-token max-h-[60vh] md:max-h-[75vh] p-4 space-y-4 overflow-y-auto';
	const cCard: string = 'card card-body py-2 bg-surface-200-700-token aria-selected:bg-primary-500 flex justify-between items-center';
</script>

<div class="docs-search {cBase}">
	<header class="docs-search-header {cHeader}">
		<SvgIcon name="search" />
		<input bind:this={searchInput} bind:value={searchTerm} type="search" placeholder="Search..." on:input={onSearch} />
		<!-- prettier-ignore -->
		<button class="md:btn-icon" on:click={() => { modalStore.close(); }}>
			<SvgIcon class="md:hidden w-10 h-10" name="close" />
			<kbd class='hidden md:inline'>Esc</kbd>
		</button>
	</header>
	<hr />
	<div bind:this={searchResults} on:keypress={onKey} class="docs-search-categories {cList}">
		{#if searchTerm.length === 0 && [...$storeRecentlySearched, ...$storeFavSearch].length !== 0}
			<div class="space-y-4">
				<strong>Recently Searched {highlightedIndex}</strong>
				<nav>
					<ul class="list-none space-y-2">
						{#each [...$storeRecentlySearched]
							.reverse()
							.filter((link) => ![...$storeFavSearch].some((fav) => fav.label === link.label))
							.slice(0, 5) as link, i}
							<li>
								<a
									aria-selected="false"
									on:mouseover={(e) => onFocus(e, i)}
									on:focus={(e) => onFocus(e, i)}
									class={cCard}
									href={link.href}
									on:click={(e) => onClick(e, link)}
								>
									<div class="pointer-events-none">
										<p>{link.label}</p>
										<small class="opacity-75">{link.href}</small>
									</div>
									<div class="flex space-x-4">
										<button
											on:click|preventDefault={() => {
												toggleFavSearch(link);
											}}
										>
											<SvgIcon class="w-10 h-10" name="heartOutline" />
										</button>
										<Divider vertical={true} borderStyle="h-auto" borderWidth="border-l" borderColor="border-surface-400-500-token" />
										<button
											on:click|preventDefault={() => {
												removeRecentSearch(link);
											}}
										>
											<SvgIcon class="w-10 h-10" name="close" />
										</button>
									</div>
								</a>
							</li>
						{/each}
					</ul>
				</nav>
				{#if $storeFavSearch.size > 0}
					<div class="my-4">
						<strong>Favorites</strong>
					</div>
					<nav>
						<ul class="list-none space-y-2">
							{#each [...$storeFavSearch].reverse() as link, i}
								<li>
									<a
										aria-selected="false"
										on:mouseover={(e) => onFocus(e, i)}
										on:focus={(e) => onFocus(e, i)}
										class={cCard}
										href={link.href}
										on:click={(e) => onClick(e, link)}
									>
										<div class="pointer-events-none">
											<p>{link.label}</p>
											<small class="opacity-75">{link.href}</small>
										</div>
										<button
											on:click|preventDefault={() => {
												toggleFavSearch(link);
											}}
										>
											<SvgIcon class="w-10 h-10" name="heart" />
										</button>
									</a>
								</li>
							{/each}
						</ul>
					</nav>
				{/if}
			</div>
		{/if}
		{#each navigation as category, i}
			<div class="space-y-4">
				<strong>{category.title} {highlightedIndex}</strong>
				<nav>
					<ul class="list-none space-y-2">
						{#each category.list as link, j}
							<li>
								<a
									aria-selected="false"
									on:mouseover={(e) => onFocus(e, i)}
									on:focus={(e) => onFocus(e, i)}
									class={cCard}
									href={link.href}
									on:click={(e) => onClick(e, link)}
								>
									<div class="pointer-events-none">
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
	</div>
</div>
