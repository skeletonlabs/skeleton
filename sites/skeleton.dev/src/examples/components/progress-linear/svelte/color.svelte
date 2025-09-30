<script lang="ts">
	import { Progress } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="flex w-full flex-col gap-8">
	<Progress>
		<Progress.Track>
			<Progress.Range class="bg-primary-500" />
		</Progress.Track>
	</Progress>
	<Progress>
		<Progress.Track>
			<Progress.Range class="bg-secondary-500" />
		</Progress.Track>
	</Progress>
	<Progress>
		<Progress.Track>
			<Progress.Range class="bg-tertiary-500" />
		</Progress.Track>
	</Progress>
</div>
