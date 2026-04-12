<script>
	import { getUser } from '$lib/auth/get-user.remote';
	import SignInButton from '$lib/components/sign-in-button.svelte';
	import SignOutButton from '$lib/components/sign-out-button.svelte';

	const user = $derived(await getUser());
</script>

<h1 class="h1">Skeleton Plus</h1>

{#if user}
	<p>Logged in user email: {user.email}</p>
	<SignOutButton class="btn preset-tonal-error">Sign Out</SignOutButton>
{:else}
	<SignInButton class="btn preset-filled" provider="github">Sign In Through Github</SignInButton>
{/if}
