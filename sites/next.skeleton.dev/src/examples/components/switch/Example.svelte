<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';

	// You can optionally bind the checked state.
	let state = $state(false);
</script>

<Switch id="example" name="example" bind:checked={state} onCheckedChange={() => console.log({ state })} />
