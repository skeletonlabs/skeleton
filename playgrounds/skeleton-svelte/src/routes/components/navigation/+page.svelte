<script lang="ts">
	import BikeIcon from '@lucide/svelte/icons/bike';
	import BookIcon from '@lucide/svelte/icons/book';
	import HouseIcon from '@lucide/svelte/icons/house';
	import MenuIcon from '@lucide/svelte/icons/menu';
	import MountainIcon from '@lucide/svelte/icons/mountain';
	import MoviesIcon from '@lucide/svelte/icons/popcorn';
	import SailboatIcon from '@lucide/svelte/icons/sailboat';
	import SettingsIcon from '@lucide/svelte/icons/settings';
	import TvIcon from '@lucide/svelte/icons/tv';
	import WavesIcon from '@lucide/svelte/icons/waves';
	import { Navigation } from '@skeletonlabs/skeleton-svelte';

	const buttonClasses = 'btn hover:preset-tonal';
	const links = [
		{ label: 'Home', href: '#', icon: HouseIcon },
		{ label: 'Books', href: '#', icon: BookIcon },
		{ label: 'Movies', href: '#', icon: MoviesIcon },
		{ label: 'Television', href: '#', icon: TvIcon },
	];
	const linksSidebar = {
		entertainment: [
			{ label: 'Books', href: '#', icon: BookIcon },
			{ label: 'Movies', href: '#', icon: MoviesIcon },
			{ label: 'Television', href: '#', icon: TvIcon },
		],
		recreation: [
			{ label: 'Biking', href: '#', icon: BikeIcon },
			{ label: 'Sailing', href: '#', icon: SailboatIcon },
			{ label: 'Hiking', href: '#', icon: MountainIcon },
			{ label: 'Swimming', href: '#', icon: WavesIcon },
		],
	};
</script>

<div class="space-y-10">
	<header>
		<h2 class="h2">Navigation</h2>
	</header>
	<section class="space-y-4">
		<h3 class="h3">Bar</h3>
		<!-- Mobile Wrapper -->
		<div class="w-[375px] h-[667px] grid grid-rows-[1fr_auto] border border-surface-200-800">
			<div class="flex justify-center items-center">
				<p>Contents</p>
			</div>
			<!-- --- -->
			<Navigation layout="bar">
				<Navigation.Menu>
					{#each links as link}
						{@const Icon = link.icon}
						<a href={link.href} class="{buttonClasses} flex-[25%] flex flex-col items-center gap-1">
							<Icon class="size-5" />
							<span class="text-xs">{link.label}</span>
						</a>
					{/each}
				</Navigation.Menu>
			</Navigation>
			<!-- --- -->
		</div>
	</section>
	<section class="space-y-4">
		<h3 class="h3">Rail</h3>
		<!-- Tablet Wrapper -->
		<div class="w-full h-[728px] grid grid-cols-[auto_1fr] border border-surface-200-800">
			<!-- --- -->
			<Navigation layout="rail">
				<Navigation.Header>
					<button type="button" class="{buttonClasses} aspect-square w-full flex flex-col items-center gap-1">
						<MenuIcon class="size-5" />
					</button>
				</Navigation.Header>
				<Navigation.Menu class="flex-1">
					{#each links as link}
						{@const Icon = link.icon}
						<a href={link.href} class="{buttonClasses} aspect-square w-full flex flex-col items-center gap-1">
							<Icon class="size-5" />
							<span class="text-xs">{link.label}</span>
						</a>
					{/each}
				</Navigation.Menu>
				<Navigation.Footer>
					<a href="/settings" class="{buttonClasses} aspect-square w-full flex flex-col items-center gap-1">
						<SettingsIcon class="size-5" />
					</a>
				</Navigation.Footer>
			</Navigation>
			<!-- --- -->
			<div class="flex justify-center items-center">
				<p class="opacity-50">Contents</p>
			</div>
		</div>
	</section>
	<section class="space-y-4">
		<h3 class="h3">Sidebar</h3>
		<div class="w-full h-[728px] grid grid-cols-[auto_1fr] items-stretch border border-surface-200-800">
			<!-- --- -->
			<!-- <Navigation.Provider> -->
			<Navigation layout="sidebar" class="grid grid-rows-[auto_1fr_auto] gap-4">
				<Navigation.Header>
					<button type="button" class="btn-icon hover:preset-tonal">
						<MenuIcon class="size-4" />
					</button>
				</Navigation.Header>
				<Navigation.Content>
					<Navigation.Group>
						<Navigation.Label class="pl-2">Entertainment</Navigation.Label>
						<Navigation.Menu>
							{#each linksSidebar.entertainment as link}
								{@const Icon = link.icon}
								<a href={link.href} class="{buttonClasses} justify-start px-2">
									<Icon class="size-4" />
									<span>{link.label}</span>
								</a>
							{/each}
						</Navigation.Menu>
					</Navigation.Group>
					<Navigation.Group>
						<Navigation.Label class="pl-2">Recreation</Navigation.Label>
						<Navigation.Menu>
							{#each linksSidebar.recreation as link}
								{@const Icon = link.icon}
								<a href={link.href} class="{buttonClasses} justify-start px-2">
									<Icon class="size-4" />
									<span>{link.label}</span>
								</a>
							{/each}
						</Navigation.Menu>
					</Navigation.Group>
				</Navigation.Content>
				<Navigation.Footer>
					<a href="/" class="{buttonClasses} justify-start px-2 w-full">
						<SettingsIcon class="size-4" />
						<span>Settings</span>
					</a>
				</Navigation.Footer>
			</Navigation>
			<!-- </Navigation.Provider> -->
			<!-- --- -->
			<div class="flex justify-center items-center">
				<p class="opacity-50">Contents</p>
			</div>
		</div>
	</section>
</div>
