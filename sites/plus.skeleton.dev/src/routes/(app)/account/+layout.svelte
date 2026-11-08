<script lang="ts">
	import { routes } from "#lib/navigation/routes.ts";
	import { getUser } from "#lib/remote/auth/get-user.remote.ts";
	import { Avatar } from "@skeletonlabs/skeleton-svelte";

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
				<p class="truncate font-bold">{user.name}</p>
				<p class="truncate text-xs opacity-60">{user.email}</p>
				<p class="badge preset-filled-primary-500">Plus Activated</p>
			</div>
		</header>
	{/if}
	<hr class="hr" />
	<!-- Navigation -->
	<ul class="container-cell space-y-2">
		{#each routes.account as { href, label, icon: Icon } (href)}
			<li>
				<a {href} class="btn hover:preset-tonal flex items-center justify-start gap-2">
					{#if Icon}
						<Icon class="size-elem-base opacity-60" />
					{/if}
					{label}
				</a>
			</li>
		{/each}
	</ul>
{/snippet}

<div class="grid h-full grid-cols-1 items-stretch lg:grid-cols-[auto_minmax(0,1fr)]">
	<!-- Sidebar -->
	<aside class="bg-surface-50-950 border-surface-200-800 hidden w-60 border-r lg:block">
		{@render sidebar()}
	</aside>
	<!-- Page Content -->
	<div>
		{@render children()}
	</div>
</div>
