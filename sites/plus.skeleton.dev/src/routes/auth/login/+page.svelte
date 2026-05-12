<script lang="ts">
	import SignInButton from '$lib/features/auth/sign-in-button.svelte';
	import { supportedOAuthProviders } from '$lib/features/auth/supported-oauth-providers';
</script>

<div class="space-y-6 text-center">
	<header class="space-y-2">
		<h1 class="h2">Login Now</h1>
		<p class="opacity-60">Choose a service below to login to Skeleton Plus.</p>
	</header>
	<div class="grid gap-2">
		{#each supportedOAuthProviders as oAuthProvider (oAuthProvider.id)}
			<SignInButton {oAuthProvider} class="btn btn-lg preset-filled w-full">
				<oAuthProvider.Icon />
				<span>{oAuthProvider.name}</span>
			</SignInButton>
		{/each}
	</div>
</div>
