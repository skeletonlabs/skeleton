<script lang="ts">
	import { Progress } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="flex gap-4 justify-evenly items-center w-full">
	<Progress class="w-fit">
		<Progress.Circle>
			<Progress.CircleTrack />
			<Progress.CircleRange class="stroke-primary-500" />
		</Progress.Circle>
	</Progress>
	<Progress class="w-fit">
		<Progress.Circle>
			<Progress.CircleTrack />
			<Progress.CircleRange class="stroke-secondary-500" />
		</Progress.Circle>
	</Progress>
	<Progress class="w-fit">
		<Progress.Circle>
			<Progress.CircleTrack />
			<Progress.CircleRange class="stroke-tertiary-500" />
		</Progress.Circle>
	</Progress>
</div>
