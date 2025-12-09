<script lang="ts">
	import {
		ArrowLeftRightIcon,
		BedDoubleIcon,
		BikeIcon,
		BookIcon,
		BubblesIcon,
		HouseIcon,
		MountainIcon,
		PopcornIcon,
		SailboatIcon,
		SettingsIcon,
		SkullIcon,
		TreePalmIcon,
		TvIcon,
	} from '@lucide/svelte';
	import { Navigation } from '@skeletonlabs/skeleton-svelte';

	const links = [
		{ label: 'Home', href: '#', icon: HouseIcon },
		{ label: 'Entertainment', href: '#', icon: BookIcon },
		{ label: 'Recreation', href: '#', icon: BikeIcon },
		{ label: 'Relaxation', href: '#', icon: TreePalmIcon },
	];
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

	let layoutRail = $state(true);

	function toggleLayout() {
		layoutRail = !layoutRail;
	}
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
			<Navigation layout="bar">
				<Navigation.Menu class="grid grid-cols-4 gap-2">
					{#each links as link (link)}
						{@const Icon = link.icon}
						<Navigation.TriggerAnchor class="Anchor" href={link.href}>
							<Icon class="size-5" />
							<Navigation.TriggerText>{link.label}</Navigation.TriggerText>
						</Navigation.TriggerAnchor>
					{/each}
				</Navigation.Menu>
			</Navigation>
		</div>
	</section>

	<section class="space-y-4">
		<h3 class="h3">Rail</h3>
		<!-- Tablet Wrapper -->
		<div class="w-full h-[728px] grid grid-cols-[auto_1fr] border border-surface-200-800">
			<!-- --- -->
			<Navigation layout="rail">
				<Navigation.Header>
					<Navigation.TriggerAnchor href="/" title="View Homepage" aria-label="View Homepage">
						<SkullIcon class="size-8" />
					</Navigation.TriggerAnchor>
				</Navigation.Header>
				<Navigation.Content>
					<Navigation.Menu>
						{#each links as link (link)}
							{@const Icon = link.icon}
							<Navigation.TriggerAnchor class="Anchor" href={link.href}>
								<Icon class="size-6" />
								<Navigation.TriggerText>{link.label}</Navigation.TriggerText>
							</Navigation.TriggerAnchor>
						{/each}
					</Navigation.Menu>
				</Navigation.Content>
				<Navigation.Footer>
					<Navigation.TriggerAnchor href="/" title="Settings" aria-label="Settings">
						<SettingsIcon class="size-6" />
					</Navigation.TriggerAnchor>
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
			<Navigation layout="sidebar" class="grid grid-rows-[auto_1fr_auto] gap-4">
				<Navigation.Header>
					<a href="https://www.skeleton.dev" class="btn-icon btn-icon-lg preset-filled-primary-500">
						<SkullIcon class="size-6" />
					</a>
				</Navigation.Header>
				<Navigation.Content>
					<Navigation.Group>
						<Navigation.Menu>
							<Navigation.TriggerAnchor href="/">
								<HouseIcon class="size-4" />
								<Navigation.TriggerText>Home</Navigation.TriggerText>
							</Navigation.TriggerAnchor>
						</Navigation.Menu>
					</Navigation.Group>
					{#each Object.entries(linksSidebar) as [category, links]}
						<Navigation.Group>
							<Navigation.Label class="capitalize pl-2">{category}</Navigation.Label>
							<Navigation.Menu>
								{#each links as link (link)}
									{@const Icon = link.icon}
									<Navigation.TriggerAnchor href={link.href} title={link.label} aria-label={link.label}>
										<Icon class="size-4" />
										<Navigation.TriggerText>{link.label}</Navigation.TriggerText>
									</Navigation.TriggerAnchor>
								{/each}
							</Navigation.Menu>
						</Navigation.Group>
					{/each}
				</Navigation.Content>
				<Navigation.Footer>
					<Navigation.TriggerAnchor href="/" title="Settings" aria-label="Settings">
						<SettingsIcon class="size-4" />
						<Navigation.TriggerText>Settings</Navigation.TriggerText>
					</Navigation.TriggerAnchor>
				</Navigation.Footer>
			</Navigation>
			<!-- --- -->
			<div class="flex justify-center items-center">
				<p class="opacity-50">Contents</p>
			</div>
		</div>
	</section>

	<section class="space-y-4">
		<h3 class="h3">Toggle Layout</h3>
		<pre class="pre">Layout: {layoutRail ? 'Rail' : 'Sidebar'}</pre>
		<div class="w-full h-[728px] grid grid-cols-[auto_1fr] items-stretch border border-surface-200-800">
			<!-- --- -->
			<Navigation layout={layoutRail ? 'rail' : 'sidebar'} class={layoutRail ? '' : 'grid grid-rows-[1fr_auto] gap-4'}>
				<Navigation.Content>
					<Navigation.Menu>
						{#each links as link (link)}
							{@const Icon = link.icon}
							<Navigation.TriggerAnchor href={link.href}>
								<Icon class={layoutRail ? 'size-6' : 'size-4'} />
								<Navigation.TriggerText>{link.label}</Navigation.TriggerText>
							</Navigation.TriggerAnchor>
						{/each}
					</Navigation.Menu>
				</Navigation.Content>
				<Navigation.Footer>
					<Navigation.Trigger onclick={toggleLayout}>
						<ArrowLeftRightIcon class={layoutRail ? 'size-6' : 'size-4'} />
						{#if !layoutRail}<span>Resize</span>{/if}
					</Navigation.Trigger>
				</Navigation.Footer>
			</Navigation>
			<!-- --- -->
			<div class="flex justify-center items-center">
				<p class="opacity-50">Contents</p>
			</div>
		</div>
	</section>
</div>
