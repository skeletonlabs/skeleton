<script>
	import { getProfile } from '$lib/auth/get-profile.remote';
	import { SUPPORTED_PROVIDERS } from '$lib/auth/supported-providers';
	import SignInButton from '$lib/components/sign-in-button.svelte';
	import SignOutButton from '$lib/components/sign-out-button.svelte';
	import { Avatar } from '@skeletonlabs/skeleton-svelte';

	const profile = $derived(await getProfile());
</script>

<h1 class="h1">Skeleton Plus</h1>

{#if profile}
	<Avatar class="size-10">
		<Avatar.Image src={profile.avatar_url} alt="Avatar" />
		<Avatar.Fallback>{profile.username.slice(0, 2).toUpperCase()}</Avatar.Fallback>
	</Avatar>
	<p>Welcome, {profile.username}!</p>
	<SignOutButton class="btn preset-tonal-error">Sign Out</SignOutButton>
{:else}
	<div class="grid gap-2">
		{#each SUPPORTED_PROVIDERS as provider}
			{@const LogoIcon = provider.icon}
			<SignInButton provider={provider.name} class="btn preset-filled gap-4">
				<LogoIcon class="w-5 h-5 grayscale" />
				Sign in through {provider.name}
			</SignInButton>
		{/each}
	</div>
{/if}
