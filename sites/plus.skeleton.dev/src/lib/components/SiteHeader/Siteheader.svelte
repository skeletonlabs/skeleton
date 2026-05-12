<script lang="ts">
	import { getUser } from '$lib/features/auth/get-user.remote';
	import SignOutButton from '$lib/features/auth/sign-out-button.svelte';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import SkullIcon from '@lucide/svelte/icons/skull';
	import { AppBar, Avatar, Menu, Popover, Portal } from '@skeletonlabs/skeleton-svelte';

	const user = $derived(await getUser());
	// const user = {
	// 	name: 'Jane Doe',
	// 	image: 'https://i.pravatar.cc/150?u=skeleton-plus',
	// };
</script>

<div class="sticky top-0 z-30 bg-surface-50-950 border-b border-surface-200-800">
	<AppBar class="container mx-auto bg-transparent">
		<AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">
			<AppBar.Lead>
				<a href="/" aria-label="Homepage" title="Homepage">
					<SkullIcon />
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
								<Menu.Item value="themes" class="p-0">
									<a href="/content/design/themes" class="block w-full px-2 py-1">
										<Menu.ItemText>Theme Studio</Menu.ItemText>
									</a>
								</Menu.Item>
								<Menu.Item value="presets" class="p-0">
									<a href="/content/design/presets" class="block w-full px-2 py-1">
										<Menu.ItemText>Preset Studio</Menu.ItemText>
									</a>
								</Menu.Item>
								<Menu.Item value="mesh" class="p-0">
									<a href="/content/design/mesh" class="block w-full px-2 py-1">
										<Menu.ItemText>Mesh Studio</Menu.ItemText>
									</a>
								</Menu.Item>
							</Menu.Content>
						</Menu.Positioner>
					</Portal>
				</Menu>
				<a href="/content/blocks" class="btn btn-sm hover:preset-tonal">Blocks</a>
				<a href="/content/templates" class="btn btn-sm hover:preset-tonal">Templates</a>
				<a href="/content/ui-kit" class="btn btn-sm hover:preset-tonal">UI Kit</a>
				<a href="/content/tutorials" class="btn btn-sm hover:preset-tonal">Tutorials</a>
				<a href="/content/community" class="btn btn-sm hover:preset-tonal">Community</a>
			</AppBar.Headline>
			<AppBar.Trail class="gap-1">
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
					<a href="/auth/login" class="btn preset-filled">Login</a>
				{/if}
			</AppBar.Trail>
		</AppBar.Toolbar>
	</AppBar>
</div>
