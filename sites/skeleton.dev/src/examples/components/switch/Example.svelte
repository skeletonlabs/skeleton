<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';

	let state = $state(false);
</script>

<Switch name="example" checked={state} onCheckedChange={(e) => (state = e.checked)} />
