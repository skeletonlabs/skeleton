<script lang="ts">
	import { menuNavLinks } from '$docs/DocsNavigation/links';
	import { modalStore } from '$lib/utilities/Modal/stores';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

	// Local
	let searchTerm = '';
	let navigationOriginal: any[] = Object.values(menuNavLinks);
	let navigation: any[] = navigationOriginal;

	function filterList(list: any[]): any[] {
		return list.filter((rowObj: any) => {
			const formattedSearchTerm = searchTerm.toLowerCase() || '';
			return Object.values(rowObj).join(' ').toLowerCase().includes(formattedSearchTerm);
		});
	}

	function onSearch(): void {
		let navDeepCopy = JSON.parse(JSON.stringify(navigationOriginal));
		navigation = navDeepCopy.filter((category: any) => {
			category.list = filterList(category.list);
			if (category.list.length) return category;
		});
	}

	const cBase = '';
	const cHeader = 'flex items-center space-x-4 p-4';
	const cList = 'pr-1 space-y-4 rounded-container-token max-h-[60vh] md:max-h-[75vh] p-4 space-y-4 overflow-y-auto';
	const cCard = 'card card-body py-2 bg-surface-200-700-token hover:bg-primary-500 flex justify-between items-center';
</script>

<div class="docs-search {cBase}">
	<header class="docs-search-header {cHeader}">
		<SvgIcon name="search" />
		<input bind:value={searchTerm} type="search" placeholder="Search..." on:input={onSearch} />
		<!-- prettier-ignore -->
		<button class="btn-icon btn-ghost-surface btn-sm" on:click={() => { modalStore.close(); }}>✕</button>
	</header>
	<hr />
	<div class="docs-search-categories {cList}">
		{#each navigation as category}
			<div class="space-y-4">
				<strong>{category.title}</strong>
				<nav class="space-y-2">
					{#each category.list as link}
						<!-- prettier-ignore -->
						<a class="{cCard}" href={link.href} on:click={() => { modalStore.close(); }}>
							<div>
								<p>{link.label}</p>
								<small class="opacity-75">{link.href}</small>
							</div>
							<span class="opacity-75">&rarr;</span>
						</a>
					{/each}
				</nav>
			</div>
		{/each}
	</div>
</div>
