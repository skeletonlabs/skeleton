<script>
	import { Progress } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="flex flex-col gap-8 w-full">
	<Progress value={50} />
	<Progress value={50} height="h-4" />
	<Progress value={50} height="h-8" />
</div>
