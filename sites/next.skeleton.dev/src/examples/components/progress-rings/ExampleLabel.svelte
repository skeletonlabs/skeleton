<script lang="ts">
	import { ProgressRing } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="grid grid-cols-1 justify-center gap-4">
	<ProgressRing value={25} max={100} showLabel />
</div>
