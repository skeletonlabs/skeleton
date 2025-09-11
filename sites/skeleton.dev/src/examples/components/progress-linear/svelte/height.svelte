<script lang="ts">
	import { ProgressLinear } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="flex w-full flex-col gap-8">
	<ProgressLinear>
		<ProgressLinear.Track class="h-1">
			<ProgressLinear.Range />
		</ProgressLinear.Track>
	</ProgressLinear>
	<ProgressLinear>
		<ProgressLinear.Track class="h-4">
			<ProgressLinear.Range />
		</ProgressLinear.Track>
	</ProgressLinear>
	<ProgressLinear>
		<ProgressLinear.Track class="h-6">
			<ProgressLinear.Range />
		</ProgressLinear.Track>
	</ProgressLinear>
</div>
