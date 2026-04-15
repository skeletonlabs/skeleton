<script>
	import { getProfile } from '$lib/auth/get-profile.remote';
	import SignInButton from '$lib/components/sign-in-button.svelte';
	import SignOutButton from '$lib/components/sign-out-button.svelte';

	const profile = $derived(await getProfile());
</script>

<h1 class="h1">Skeleton Plus</h1>

{#if profile}
	<p>Welcome, {profile.username}!</p>
	<SignOutButton class="btn preset-tonal-error">Sign Out</SignOutButton>
{:else}
	<SignInButton class="btn preset-filled" provider="github">Sign In Through Github</SignInButton>
{/if}
