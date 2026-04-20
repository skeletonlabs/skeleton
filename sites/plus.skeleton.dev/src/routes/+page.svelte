<script>
	import { getUser } from '$lib/features/auth/get-user.remote';
	import SignInButton from '$lib/features/auth/sign-in-button.svelte';
	import SignOutButton from '$lib/features/auth/sign-out-button.svelte';
	import { supportedOAuthProviders } from '$lib/features/auth/supported-oauth-providers';
	import { Avatar } from '@skeletonlabs/skeleton-svelte';

	const user = $derived(await getUser());
</script>

<h1 class="h1">Skeleton Plus</h1>

{#if user}
	<Avatar class="size-10">
		<Avatar.Image src={user.image} alt="Avatar" />
		<Avatar.Fallback>{user.name.slice(0, 2).toUpperCase()}</Avatar.Fallback>
	</Avatar>
	<p>Welcome, {user.name}!</p>
	<SignOutButton class="btn preset-tonal-error">Sign Out</SignOutButton>
{:else}
	<div class="grid gap-2">
		{#each supportedOAuthProviders as oAuthProvider}
			<SignInButton {oAuthProvider} class="btn preset-filled gap-4">
				<oAuthProvider.Icon class="size-4 grayscale" />
				Sign in through {oAuthProvider.name}
			</SignInButton>
		{/each}
	</div>
{/if}
