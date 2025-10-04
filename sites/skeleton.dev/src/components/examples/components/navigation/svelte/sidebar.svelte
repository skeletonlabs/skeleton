<script lang="ts">
	import BedDoubleIcon from '@lucide/svelte/icons/bed-double';
	import BikeIcon from '@lucide/svelte/icons/bike';
	import BookIcon from '@lucide/svelte/icons/book';
	import BubblesIcon from '@lucide/svelte/icons/bubbles';
	import HouseIcon from '@lucide/svelte/icons/house';
	import MountainIcon from '@lucide/svelte/icons/mountain';
	import PopcornIcon from '@lucide/svelte/icons/popcorn';
	import SailboatIcon from '@lucide/svelte/icons/sailboat';
	import SettingsIcon from '@lucide/svelte/icons/settings';
	import SkullIcon from '@lucide/svelte/icons/skull';
	import TreePalmIcon from '@lucide/svelte/icons/tree-palm';
	import TvIcon from '@lucide/svelte/icons/tv';
	import { Navigation } from '@skeletonlabs/skeleton-svelte';

	const linksSidebar = {
		entertainment: [
			{ label: 'Books', href: '#', icon: BookIcon },
			{ label: 'Movies', href: '#', icon: PopcornIcon },
			{ label: 'Television', href: '#', icon: TvIcon },
		],
		recreation: [
			{ label: 'Biking', href: '#', icon: BikeIcon },
			{ label: 'Sailing', href: '#', icon: SailboatIcon },
			{ label: 'Hiking', href: '#', icon: MountainIcon },
		],
		relaxation: [
			{ label: 'Lounge', href: '#', icon: TreePalmIcon },
			{ label: 'Spa', href: '#', icon: BubblesIcon },
			{ label: 'Sleep', href: '#', icon: BedDoubleIcon },
		],
	};

	let anchorSidebar = 'btn hover:preset-tonal justify-start px-2 w-full';
</script>

<div class="w-full h-[728px] grid grid-cols-[auto_1fr] items-stretch border border-surface-200-800">
	<!-- --- -->
	<Navigation layout="sidebar" class="grid grid-rows-[auto_1fr_auto] gap-4">
		<Navigation.Header>
			<a href="https://www.skeleton.dev" class="btn-icon btn-icon-lg preset-filled-primary-500">
				<SkullIcon class="size-6" />
			</a>
		</Navigation.Header>
		<Navigation.Content>
			<Navigation.Group>
				<Navigation.Menu>
					<a href="/" class={anchorSidebar}>
						<HouseIcon class="size-4" />
						<span>Home</span>
					</a>
				</Navigation.Menu>
			</Navigation.Group>
			{#each Object.entries(linksSidebar) as [category, links]}
				<Navigation.Group>
					<Navigation.Label class="capitalize pl-2">{category}</Navigation.Label>
					<Navigation.Menu>
						{#each links as link (link)}
							{@const Icon = link.icon}
							<a href={link.href} class={anchorSidebar} title={link.label} aria-label={link.label}>
								<Icon class="size-4" />
								<span>{link.label}</span>
							</a>
						{/each}
					</Navigation.Menu>
				</Navigation.Group>
			{/each}
		</Navigation.Content>
		<Navigation.Footer>
			<a href="/" class={anchorSidebar} title="Settings" aria-label="Settings">
				<SettingsIcon class="size-4" />
				<span>Settings</span>
			</a>
		</Navigation.Footer>
	</Navigation>
	<!-- --- -->
	<div class="flex justify-center items-center">
		<p class="opacity-50">Contents</p>
	</div>
</div>
