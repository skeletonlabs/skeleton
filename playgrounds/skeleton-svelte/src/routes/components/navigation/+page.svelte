<script lang="ts">
	import BookIcon from '@lucide/svelte/icons/book';
	import HouseIcon from '@lucide/svelte/icons/house';
	import MoviesIcon from '@lucide/svelte/icons/popcorn';
	import TvIcon from '@lucide/svelte/icons/tv';
	import { Navigation } from '@skeletonlabs/skeleton-svelte';

	const anchorClasses = 'btn hover:preset-tonal';
	const links = [
		{ label: 'Home', href: '#', icon: HouseIcon },
		{ label: 'Books', href: '#', icon: BookIcon },
		{ label: 'Movies', href: '#', icon: MoviesIcon },
		{ label: 'Television', href: '#', icon: TvIcon },
	];
</script>

<div class="space-y-10">
	<header>
		<h2 class="h2">Navigation</h2>
	</header>
	<section class="space-y-4">
		<h3 class="h3">Bar</h3>
		<Navigation parent="bar" class="max-w-[480px]">
			<Navigation.Menu>
				{#each links as link}
					{@const Icon = link.icon}
					<a href={link.href} class="{anchorClasses} flex-[25%] flex flex-col items-center gap-1">
						<Icon class="size-5" />
						<span class="text-xs">{link.label}</span>
					</a>
				{/each}
			</Navigation.Menu>
		</Navigation>
	</section>
	<section class="space-y-4">
		<h3 class="h3">Rail</h3>
		<Navigation parent="rail" class="h-[640px]">
			<!-- <Navigation.Header>(Logo)</Navigation.Header> -->
			<Navigation.Menu>
				{#each links as link}
					{@const Icon = link.icon}
					<a href={link.href} class="{anchorClasses} aspect-square flex flex-col items-center gap-1">
						<Icon class="size-5" />
						<span class="text-xs">{link.label}</span>
					</a>
				{/each}
			</Navigation.Menu>
			<!-- <Navigation.Footer>
				<a href="/">(Icon)</a>
			</Navigation.Footer> -->
		</Navigation>
	</section>
	<section class="space-y-4">
		<h3 class="h3">Sidebar</h3>
		<!-- <Navigation.Provider>
			<Navigation parent="sidebar">
				<Navigation.Header>
					<h1>Skeleton</h1>
				</Navigation.Header>
				<Navigation.Content>
					<Navigation.Group>
						<Navigation.Label>Links 1</Navigation.Label>
						<Navigation.Menu>
							{#each links as link}
								<a href={link.href} class="grid grid-cols-[auto_1fr] gap-2">
									<SomeIcon />
									<span>{link.label}</span>
								</a>
							{/each}
						</Navigation.Menu>
					</Navigation.Group>
					<Navigation.Group>
						<Navigation.Label>Links 2</Navigation.Label>
						<Navigation.Menu>
							{#each links as link}
								<a href={link.href} class="grid grid-cols-[auto_1fr] gap-2">
									<SomeIcon />
									<span>{link.label}</span>
								</a>
							{/each}
						</Navigation.Menu>
					</Navigation.Group>
				</Navigation.Content>
				<Navigation.Footer>
					<a href="#">Settings</a>
				</Navigation.Footer>
			</Navigation>
		</Navigation.Provider> -->
	</section>
</div>
