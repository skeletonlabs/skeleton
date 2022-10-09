<script lang="ts">
	import { storeCurrentUrl, storeMobileDrawer } from '$docs/stores';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	import { menuNavLinks } from './links';

	// Props
	export let embedded: boolean = false;

	// Local
	let inputSearch: string = '';
	let filteredMenuNavLinks: any[] = menuNavLinks;

	// ListItem Click Handler
	function onListItemClick(): void {
		clearSearch();
		// On Drawer embed Only:
		if (!embedded) return;
		storeMobileDrawer.set(false);
	}

	// Search Handler
	function onSearch(): void {
		// Reset with Deep Copy
		filteredMenuNavLinks = JSON.parse(JSON.stringify(menuNavLinks));
		// If search value
		if (inputSearch?.length > 0) {
			// Loop each set
			filteredMenuNavLinks.forEach((linkSet: any) => {
				// Filter the links
				linkSet.list = linkSet.list.filter((linkObj: any) => {
					const target: string = JSON.stringify(linkObj).toLowerCase();
					const searchTerm: string | undefined = inputSearch?.toLowerCase();
					return target.includes(searchTerm);
				});
			});
		}
	}

	// Clear Search -- NOTE: timeout prevents anchor race condition
	function clearSearch(): void {
		setTimeout(() => {
			inputSearch = '';
			onSearch();
		}, 1);
	}

	// Reactive
	$: classesActive = (href: string) => ($storeCurrentUrl?.includes(href) ? '!bg-primary-500' : '');
</script>

<div class="m-4 mb-20 {$$props.class ?? ''}">
	<!-- Search -->
	<header class="sticky top-0 z-10 bg-white/5 dark:bg-black/5 backdrop-blur -m-4 mb-2 p-4 shadow-lg">
		<input type="search" placeholder="Search..." bind:value={inputSearch} on:input={onSearch} />
	</header>
	<!-- Lists -->
	{#each filteredMenuNavLinks as { id, title, list }, i}
		{#if list.length > 0}
			<!-- Title -->
			<div {id} class="text-primary-500 text-sm font-bold uppercase p-4">{title}</div>
			<!-- Navigation List -->
			<nav class="list-nav">
				<ul>
					{#each list as { href, label, badge, icon }}
						<li on:click={onListItemClick}>
							<a {href} value={href} class={classesActive(href)} data-sveltekit-prefetch>
								{#if icon}
									<span>
										<div class="bg-accent-500 w-7 h-7 flex justify-center items-center rounded shadow">
											<SvgIcon name={icon} width="w-4" fill="fill-white" height="h-10" />
										</div>
									</span>
								{/if}
								<span class="flex-auto">{label}</span>
								{#if badge}<span class="badge bg-accent-500 text-white">{badge}</span>{/if}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
			<!-- Divider -->
			{#if i + 1 < filteredMenuNavLinks.length}<hr class="my-4 opacity-50" />{/if}
		{/if}
	{/each}
</div>
