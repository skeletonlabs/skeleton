<script lang="ts">
	import { routes } from '$lib/client/navigation/routes';
	import { getUser } from '$lib/remote/auth/get-user.remote';
	import { Avatar } from '@skeletonlabs/skeleton-svelte';

	const { children } = $props();

	const user = $derived(await getUser());
</script>

{#snippet sidebar()}
	<!-- Header -->
	{#if user}
		<header class="container-cell flex flex-col items-start gap-4">
			<Avatar class="size-12">
				<Avatar.Image src={user.image} alt="Avatar" />
				<Avatar.Fallback>{user.name.slice(0, 2).toUpperCase()}</Avatar.Fallback>
			</Avatar>
			<div class="space-y-0.5">
				<p class="font-bold truncate">{user.name}</p>
				<p class="text-xs opacity-60 truncate">{user.email}</p>
				<p class="badge preset-filled-primary-500">Plus Activated</p>
			</div>
		</header>
	{/if}
	<hr class="hr" />
	<!-- Navigation -->
	<ul class="container-cell space-y-2">
		{#each routes.account as { href, label, icon: Icon } (href)}
			<li>
				<a {href} class="flex items-center gap-2 btn justify-start hover:preset-tonal">
					{#if Icon}
						<Icon class="size-elem-base opacity-60" />
					{/if}
					{label}
				</a>
			</li>
		{/each}
	</ul>
{/snippet}

<div class="h-full grid grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)] items-stretch">
	<!-- Sidebar -->
	<aside class="hidden lg:block w-60 bg-surface-50-950 border-r border-surface-200-800">
		{@render sidebar()}
	</aside>
	<!-- Page Content -->
	<div>
		{@render children()}
	</div>
</div>
