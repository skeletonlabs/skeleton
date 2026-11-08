<script lang="ts">
	import { Progress } from "@skeletonlabs/skeleton-svelte";
</script>

<div class="flex w-full items-center justify-evenly gap-4">
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
