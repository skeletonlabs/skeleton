<script lang="ts">
	import { Progress } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="flex gap-4 justify-evenly items-center w-full">
	<Progress class="w-fit">
		<Progress.Circle style="--size: 50px; --thickness: 5px;">
			<Progress.CircleTrack />
			<Progress.CircleRange />
		</Progress.Circle>
	</Progress>
	<Progress class="w-fit">
		<Progress.Circle>
			<Progress.CircleTrack />
			<Progress.CircleRange />
		</Progress.Circle>
	</Progress>
	<Progress class="w-fit">
		<Progress.Circle style="--size: 150px; --thickness: 15px;">
			<Progress.CircleTrack />
			<Progress.CircleRange />
		</Progress.Circle>
	</Progress>
</div>
