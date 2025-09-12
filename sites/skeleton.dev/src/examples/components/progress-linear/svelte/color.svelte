<script lang="ts">
	import { ProgressLinear } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="flex w-full flex-col gap-8">
	<ProgressLinear>
		<ProgressLinear.Track>
			<ProgressLinear.Range class="bg-primary-500" />
		</ProgressLinear.Track>
	</ProgressLinear>
	<ProgressLinear>
		<ProgressLinear.Track>
			<ProgressLinear.Range class="bg-secondary-500" />
		</ProgressLinear.Track>
	</ProgressLinear>
	<ProgressLinear>
		<ProgressLinear.Track>
			<ProgressLinear.Range class="bg-tertiary-500" />
		</ProgressLinear.Track>
	</ProgressLinear>
</div>
