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
		<ProgressLinear.Track class="h-2">
			<ProgressLinear.Range />
		</ProgressLinear.Track>
	</ProgressLinear>
	<ProgressLinear>
		<ProgressLinear.Track class="h-3">
			<ProgressLinear.Range />
		</ProgressLinear.Track>
	</ProgressLinear>
</div>
