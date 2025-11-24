<script lang="ts">
	import { Progress } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="flex gap-4 justify-evenly items-center w-full">
	<Progress value={75} class="w-fit">
		<Progress.Circle class="[--size:--spacing(12)] [--thickness:--spacing(1.5)]">
			<Progress.CircleTrack />
			<Progress.CircleRange />
		</Progress.Circle>
	</Progress>
	<Progress value={75} class="w-fit">
		<Progress.Circle>
			<Progress.CircleTrack />
			<Progress.CircleRange />
		</Progress.Circle>
	</Progress>
	<Progress value={75} class="w-fit">
		<Progress.Circle class="[--size:--spacing(32)] [--thickness:--spacing(3)]">
			<Progress.CircleTrack />
			<Progress.CircleRange />
		</Progress.Circle>
	</Progress>
</div>
