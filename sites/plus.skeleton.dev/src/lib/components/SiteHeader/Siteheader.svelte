<script lang="ts">
	import Skeleton from '$lib/components/Branding/Skeleton.svelte';
	import { getUser } from '$lib/features/auth/get-user.remote';
	import SignOutButton from '$lib/features/auth/sign-out-button.svelte';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { AppBar, Avatar, Menu, Popover, Portal } from '@skeletonlabs/skeleton-svelte';

	// Current User
	const user = $derived(await getUser());

	// Navigation
	const navigationDesign = [
		{ value: 'themes', href: '/design/themes', label: 'Theme Studio' },
		{ value: 'presets', href: '/design/presets', label: 'Preset Studio' },
		{ value: 'mesh', href: '/design/mesh', label: 'Mesh Studio' },
	];
	const navigation = [
		{ href: '/content/blocks', label: 'Blocks' },
		{ href: '/content/templates', label: 'Templates' },
		{ href: '/content/ui-kit', label: 'UI Kit' },
		{ href: '/content/tutorials', label: 'Tutorials' },
		{ href: '/content/community', label: 'Community' },
	];
</script>

<div class="sticky top-0 z-30 bg-surface-50-950/75 backdrop-blur-lg border-b border-surface-200-800">
	<AppBar class="container mx-auto bg-transparent">
		<AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">
			<AppBar.Lead>
				<a href="/" aria-label="Homepage" title="Homepage">
					<Skeleton class="fill-current size-elem-3xl" />
				</a>
			</AppBar.Lead>
			<AppBar.Headline class="flex items-center justify-start gap-1">
				<Menu>
					<Menu.Trigger class="btn btn-sm hover:preset-tonal">
						<span>Design</span>
						<ChevronDownIcon />
					</Menu.Trigger>
					<Portal>
						<Menu.Positioner>
							<Menu.Content class="z-50">
								{#each navigationDesign as item (item.value)}
									<Menu.Item value={item.value} class="p-0">
										<a href={item.href} class="block w-full px-2 py-1">
											<Menu.ItemText>{item.label}</Menu.ItemText>
										</a>
									</Menu.Item>
								{/each}
							</Menu.Content>
						</Menu.Positioner>
					</Portal>
				</Menu>
				{#each navigation as anchor (anchor.href)}
					<a href={anchor.href} class="btn btn-sm hover:preset-tonal">{anchor.label}</a>
				{/each}
			</AppBar.Headline>
			<AppBar.Trail class="flex gap-2">
				{#if user}
					<Popover>
						<Popover.Trigger>
							<Avatar class="size-10">
								<Avatar.Image src={user.image} alt="Avatar" />
								<Avatar.Fallback>{user.name.slice(0, 2).toUpperCase()}</Avatar.Fallback>
							</Avatar>
						</Popover.Trigger>
						<Portal>
							<Popover.Positioner>
								<Popover.Content class="card bg-surface-100-900 p-4 space-y-4 shadow-xl z-50">
									<p>{user.name}</p>
									<SignOutButton class="btn preset-tonal-error">Sign Out</SignOutButton>
								</Popover.Content>
							</Popover.Positioner>
						</Portal>
					</Popover>
				{:else}
					<a href="/auth/login" class="btn hover:preset-tonal">Login</a>
					<a href="/overview/pricing" class="btn preset-tonal">Get Full Access</a>
				{/if}
			</AppBar.Trail>
		</AppBar.Toolbar>
	</AppBar>
</div>
