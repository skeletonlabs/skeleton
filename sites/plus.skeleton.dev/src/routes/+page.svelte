<script>
	import SignInButton from '$lib/components/auth/sign-in-button.svelte';
	import SignOutButton from '$lib/components/auth/sign-out-button.svelte';
	import { getUser } from '$lib/remote/get-user.remote';
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
		<SignInButton provider="github" class="btn preset-filled gap-4">Sign in through GitHub</SignInButton>
	</div>
{/if}
