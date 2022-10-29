<script lang="ts">
	import { page } from '$app/stores';
	import { writable, type Writable } from 'svelte/store';

	import { storeCurrentUrl, storeMobileDrawer } from '$docs/stores';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	import { menuNavLinks } from './links';
	import AppRail from '$lib/components/AppRail/AppRail.svelte';
	import AppRailTile from '$lib/components/AppRail/AppRailTile.svelte';

	// Props
	export let embedded: boolean = false;

	// Local
	const storeCategory: Writable<string> = writable('guides'); // guides | docs | tailwind | svelte | utilities
	let filteredMenuNavLinks: any[] = menuNavLinks;

	// ListItem Click Handler
	function onListItemClick(): void {
		// On Drawer embed Only:
		if (!embedded) return;
		storeMobileDrawer.set(false);
	}

	function setNavCategory(c: string): void {
		storeCategory.set(c);
		// prettier-ignore
		switch($storeCategory) {
			case('guides'): filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'guides'); break;
			case('docs'): filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'docs'); break;
			case('elements'): filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'elements'); break;
			case('svelte'): filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => ['components', 'actions'].includes(linkSet.id)); break;
			case('utilities'): filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'utilities'); break;
		}
	}

	// Lifecycle
	page.subscribe((p) => {
		let pathMatch: string = p.url.pathname.split('/')[1];
		if (['components', 'actions'].includes(pathMatch)) pathMatch = 'svelte';
		setNavCategory(pathMatch);
	});
	storeCategory.subscribe((c: string) => {
		setNavCategory(c);
	});

	// Reactive
	$: classesActive = (href: string) => ($storeCurrentUrl?.includes(href) ? '!bg-primary-500' : '');
</script>

<div class="grid grid-cols-[auto_1fr] h-full border-r border-black/5 dark:border-white/5 {$$props.class ?? ''}">
	<!-- App Rail -->
	<AppRail selected={storeCategory} background="bg-white/30 dark:bg-black/30">
		<AppRailTile label="Guides" value={'guides'}><SvgIcon name="cubes" width="w-6" height="h-6" /></AppRailTile>
		<AppRailTile label="Docs" value={'docs'}><SvgIcon name="book" width="w-6" height="h-6" /></AppRailTile>
		<AppRailTile label="Tailwind" value={'elements'}><SvgIcon name="tailwind" width="w-6" height="h-6" /></AppRailTile>
		<AppRailTile label="Svelte" value={'svelte'}><SvgIcon name="svelte" width="w-6" height="h-6" /></AppRailTile>
		<AppRailTile label="Utilities" value={'utilities'}><SvgIcon name="screwdriver" width="w-6" height="h-6" /></AppRailTile>
	</AppRail>
	<!-- Nav Links -->
	<section class="p-4 pb-20 space-y-4 overflow-y-auto">
		{#each filteredMenuNavLinks as { id, title, list }, i}
			{#if list.length > 0}
				<!-- Title -->
				<div {id} class="text-primary-500 font-bold uppercase px-4">{title}</div>
				<!-- Navigation List -->
				<nav class="list-nav">
					<ul>
						{#each list as { href, label, badge }}
							<li on:click={onListItemClick} on:keypress>
								<a {href} value={href} class={classesActive(href)} data-sveltekit-prefetch>
									<span class="flex-auto">{label}</span>
									{#if badge}<span class="badge bg-accent-500 text-white">{badge}</span>{/if}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
				<!-- Divider -->
				{#if i + 1 < filteredMenuNavLinks.length}<hr class="!my-6 opacity-50" />{/if}
			{/if}
		{/each}
	</section>
</div>
