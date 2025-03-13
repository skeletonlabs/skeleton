<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconFrown from '@lucide/svelte/icons/frown';
	import IconSmile from '@lucide/svelte/icons/smile';
</script>

<Switch name="compact" controlWidth="w-9" controlActive="preset-filled-tertiary-500" compact>
	{#snippet inactiveChild()}<IconFrown size="20" />{/snippet}
	{#snippet activeChild()}<IconSmile size="20" />{/snippet}
</Switch>
