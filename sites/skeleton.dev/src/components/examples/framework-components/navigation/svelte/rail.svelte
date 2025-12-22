<script lang="ts">
	import { BikeIcon, BookIcon, HouseIcon, SettingsIcon, SkullIcon, TreePalmIcon } from '@lucide/svelte';
	import { Navigation } from '@skeletonlabs/skeleton-svelte';

	const links = [
		{ label: 'Home', href: '/#', icon: HouseIcon },
		{ label: 'Entertainment', href: '/#', icon: BookIcon },
		{ label: 'Recreation', href: '/#', icon: BikeIcon },
		{ label: 'Relaxation', href: '/#', icon: TreePalmIcon },
	];
</script>

<div class="w-full h-[640px] grid grid-cols-[auto_1fr] border border-surface-200-800">
	<!-- --- -->
	<Navigation layout="rail">
		<Navigation.Header>
			<Navigation.TriggerAnchor href="/#" title="View Homepage" aria-label="View Homepage">
				<SkullIcon class="size-8" />
			</Navigation.TriggerAnchor>
		</Navigation.Header>
		<Navigation.Content>
			<Navigation.Menu>
				{#each links as link (link)}
					{@const Icon = link.icon}
					<Navigation.TriggerAnchor href={link.href}>
						<Icon class="size-5" />
						<Navigation.TriggerText>{link.label}</Navigation.TriggerText>
					</Navigation.TriggerAnchor>
				{/each}
			</Navigation.Menu>
		</Navigation.Content>
		<Navigation.Footer>
			<Navigation.TriggerAnchor href="/#" title="Settings" aria-label="Settings">
				<SettingsIcon class="size-5" />
			</Navigation.TriggerAnchor>
		</Navigation.Footer>
	</Navigation>
	<!-- --- -->
	<div class="flex justify-center items-center">
		<p class="opacity-50">Contents</p>
	</div>
</div>
