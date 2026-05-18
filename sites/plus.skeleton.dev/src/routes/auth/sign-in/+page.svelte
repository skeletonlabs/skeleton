<script lang="ts">
	import { supportedOAuthProviders } from '$lib/auth/supported-oauth-providers';
	import SignInButton from '$lib/components/auth/sign-in-button.svelte';
</script>

<div class="space-y-6 text-center">
	<header class="space-y-2">
		<h1 class="h2">Sign In</h1>
		<p class="opacity-60">Choose a service and sign in to Skeleton Plus.</p>
	</header>
	<div class="grid grid-cols-1 items-center gap-2">
		{#each supportedOAuthProviders as provider}
			<SignInButton providerId={provider.id} class="btn btn-lg preset-filled w-full max-w-xs">
				<provider.Icon />
				<span>{provider.name}</span>
			</SignInButton>
		{/each}
	</div>
</div>
