<script lang="ts">
	import { ProgressRing } from '@skeletonlabs/skeleton-svelte';

	let value = $state(25);
	let max = 100;
</script>

<div class="grid grid-cols-1 gap-4">
	<ProgressRing {value} {max} />
	<input type="range" class="input" bind:value {max} />
</div>
