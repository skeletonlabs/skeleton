<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconMoon from 'lucide-svelte/icons/moon';
	import IconSun from 'lucide-svelte/icons/sun';

	// Bind to the checked state
	let mode = $state(false);

	// Handle the change in state when toggled.
	function handleModeChange() {
		console.log({mode});
		// NOTE: implementation may differ per Tailwind config and framework:
		// https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
	}
</script>

<Switch id="mode" name="mode" stateActive="bg-surface-200" bind:checked={mode} onCheckedChange={handleModeChange}>
    {#snippet inactiveChild()}<IconMoon size="14" />{/snippet}
    {#snippet activeChild()}<IconSun size="14" />{/snippet}
</Switch>