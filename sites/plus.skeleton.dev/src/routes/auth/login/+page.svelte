<script lang="ts">
	import { supportedOAuthProviders } from '$lib/client/auth/supported-oauth-providers';
	import SignInButton from '$lib/components/auth/sign-in-button.svelte';
</script>

<div class="space-y-6 text-center">
	<header class="space-y-2">
		<h1 class="h2">Login</h1>
		<p class="opacity-60">Choose a service and login to Skeleton Plus.</p>
	</header>
	<div class="grid grid-cols-1 items-center gap-2">
		{#each supportedOAuthProviders as oAuthProvider (oAuthProvider.id)}
			<SignInButton {oAuthProvider} class="btn btn-lg preset-filled w-full max-w-xs">
				<oAuthProvider.Icon />
				<span>{oAuthProvider.name}</span>
			</SignInButton>
		{/each}
	</div>
</div>
