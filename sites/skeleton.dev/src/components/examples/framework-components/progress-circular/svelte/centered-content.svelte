<script lang="ts">
	import { Progress } from "@skeletonlabs/skeleton-svelte";
</script>

<Progress class="relative w-fit">
	<div class="absolute inset-0 flex items-center justify-center">
		<Progress.ValueText />
	</div>
	<Progress.Circle>
		<Progress.CircleTrack />
		<Progress.CircleRange />
	</Progress.Circle>
</Progress>
