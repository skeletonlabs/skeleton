<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import SignOutButton from '$lib/components/auth/sign-out-button.svelte';
	import Skeleton from '$lib/components/branding/skeleton.svelte';
	import { getUser } from '$lib/remote/auth/get-user.remote';
	import { routes } from '../../client/navigation/routes';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import MenuIcon from '@lucide/svelte/icons/menu';
	import XIcon from '@lucide/svelte/icons/x';
	import { AppBar, Avatar, Dialog, Menu, Popover, Portal, useDialog } from '@skeletonlabs/skeleton-svelte';

	const user = $derived(await getUser());

	const id = $props.id();
	const drawer = useDialog({ id });

	onNavigate(() => drawer().setOpen(false));
</script>

{#snippet navigationMobile()}
	<Dialog.Provider value={drawer}>
		<Dialog.Trigger class="btn-icon hover:preset-tonal lg:hidden" aria-label="Open menu">
			<MenuIcon />
		</Dialog.Trigger>
		<Portal>
			<Dialog.Backdrop
				class="fixed inset-0 z-50 bg-surface-50-950/50 transition transition-discrete opacity-0 starting:data-[state=open]:opacity-0 data-[state=open]:opacity-100"
			/>
			<Dialog.Positioner class="fixed inset-0 z-50 flex justify-start">
				<Dialog.Content
					class="h-screen card bg-surface-50-950/75 backdrop-blur-lg border-r border-surface-200-800 w-sm p-4 space-y-4 shadow-xl transition transition-discrete opacity-0 -translate-x-full starting:data-[state=open]:opacity-0 starting:data-[state=open]:-translate-x-full data-[state=open]:opacity-100 data-[state=open]:translate-x-0"
				>
					<header class="flex justify-between items-center">
						<Dialog.Title aria-label="Skeleton Plus">
							<Skeleton class="size-elem-3xl" />
						</Dialog.Title>
						<Dialog.CloseTrigger class="btn-icon preset-tonal">
							<XIcon />
						</Dialog.CloseTrigger>
					</header>
					<div class="space-y-4">
						{#each routes.design as anchor}
							{#if anchor.enabled}
								<a href={anchor.href} class="block btn hover:preset-tonal justify-start">
									{anchor.label}
								</a>
							{/if}
						{/each}
						<hr class="hr" />
						{#each routes.content as anchor}
							{#if anchor.enabled}
								<a href={anchor.href} class="block btn hover:preset-tonal justify-start">
									{anchor.label}
								</a>
							{/if}
						{/each}
					</div>
				</Dialog.Content>
			</Dialog.Positioner>
		</Portal>
	</Dialog.Provider>
{/snippet}

{#snippet navigationDesktop()}
	<div class="hidden lg:flex items-center justify-start">
		<!-- Menu: Design -->
		<Menu>
			<Menu.Trigger class="btn btn-sm hover:preset-tonal">
				<span>Design</span>
				<ChevronDownIcon />
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content class="z-50">
						{#each routes.design as anchor}
							{#if anchor.enabled}
								<Menu.Item value={anchor.label} class="p-0">
									<a href={anchor.href} class="block w-full px-2 py-1">
										<Menu.ItemText>{anchor.label}</Menu.ItemText>
									</a>
								</Menu.Item>
							{/if}
						{/each}
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu>
		<!-- Navigation -->
		{#each routes.content as anchor}
			{#if anchor.enabled}
				<a href={anchor.href} class="btn btn-sm hover:preset-tonal">{anchor.label}</a>
			{/if}
		{/each}
	</div>
{/snippet}

<div class="sticky top-0 z-30 bg-surface-50-950/75 backdrop-blur-lg border-b border-surface-200-800">
	<AppBar class="container mx-auto bg-transparent">
		<AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">
			<AppBar.Lead>
				<a href="/" class="flex items-center gap-4 self-start" aria-label="Homepage" title="Homepage">
					<Skeleton class="size-elem-3xl" />
				</a>
			</AppBar.Lead>
			<AppBar.Headline>
				{@render navigationMobile()}
				{@render navigationDesktop()}
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
					<a href="/auth/sign-in" class="btn hover:preset-tonal">Sign In</a>
					<a href="/overview/pricing" class="btn preset-tonal">Get Full Access</a>
				{/if}
			</AppBar.Trail>
		</AppBar.Toolbar>
	</AppBar>
</div>
