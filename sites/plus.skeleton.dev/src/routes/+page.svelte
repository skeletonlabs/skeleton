<script>
	import { getProfile } from '$lib/auth/get-profile.remote';
	import { SUPPORTED_PROVIDERS } from '$lib/auth/supported-providers';
	import SignInButton from '$lib/components/sign-in-button.svelte';
	import SignOutButton from '$lib/components/sign-out-button.svelte';

	const profile = $derived(await getProfile());
</script>

<h1 class="h1">Skeleton Plus</h1>

{#if profile}
	<p>Welcome, {profile.username}!</p>
	<SignOutButton class="btn preset-tonal-error">Sign Out</SignOutButton>
{:else}
	{#each SUPPORTED_PROVIDERS as provider}
		<SignInButton {provider} class="btn preset-tonal-primary">Sign in with <span class="capitalize">{provider}</span></SignInButton>
	{/each}
{/if}
