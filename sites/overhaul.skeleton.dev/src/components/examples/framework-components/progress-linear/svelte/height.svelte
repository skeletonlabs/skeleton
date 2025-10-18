<script lang="ts">
	import { Progress } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="flex w-full flex-col gap-8">
	<Progress>
		<Progress.Track class="h-1">
			<Progress.Range />
		</Progress.Track>
	</Progress>
	<Progress>
		<Progress.Track class="h-4">
			<Progress.Range />
		</Progress.Track>
	</Progress>
	<Progress>
		<Progress.Track class="h-6">
			<Progress.Range />
		</Progress.Track>
	</Progress>
</div>
