<script lang="ts">
	import { Progress } from "@skeletonlabs/skeleton-svelte";
</script>

<div class="flex w-full items-center justify-evenly gap-4">
	<Progress value={75} class="w-fit">
		<Progress.Circle class="[--size:--spacing(12)]">
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
		<Progress.Circle class="[--size:--spacing(32)]">
			<Progress.CircleTrack />
			<Progress.CircleRange />
		</Progress.Circle>
	</Progress>
</div>
