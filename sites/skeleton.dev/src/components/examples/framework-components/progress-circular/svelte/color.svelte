<script lang="ts">
	import { Progress } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="flex gap-4 justify-evenly items-center w-full">
	<Progress value={40} class="w-fit">
		<Progress.Circle>
			<Progress.CircleTrack class="stroke-primary-50-950" />
			<Progress.CircleRange class="stroke-primary-500" />
		</Progress.Circle>
	</Progress>
	<Progress value={40} class="w-fit">
		<Progress.Circle>
			<Progress.CircleTrack class="stroke-secondary-50-950" />
			<Progress.CircleRange class="stroke-secondary-500" />
		</Progress.Circle>
	</Progress>
	<Progress value={40} class="w-fit">
		<Progress.Circle>
			<Progress.CircleTrack class="stroke-tertiary-50-950" />
			<Progress.CircleRange class="stroke-tertiary-500" />
		</Progress.Circle>
	</Progress>
</div>
