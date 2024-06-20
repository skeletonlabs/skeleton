<script>
	import { Progress } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="flex w-full flex-col gap-8">
	<Progress value={50} max={100} meterBg="bg-primary-500" />
	<Progress value={50} max={100} meterBg="bg-secondary-500" />
	<Progress value={50} max={100} meterBg="bg-tertiary-500" />
</div>
