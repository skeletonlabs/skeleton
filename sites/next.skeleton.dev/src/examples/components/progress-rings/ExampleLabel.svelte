<script lang="ts">
	import { ProgressRing } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="grid grid-cols-1 gap-4 justify-center">
	<ProgressRing value={25} max={100} showLabel />
</div>
