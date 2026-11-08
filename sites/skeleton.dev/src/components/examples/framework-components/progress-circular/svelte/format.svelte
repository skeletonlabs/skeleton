<script lang="ts">
	import { Progress } from "@skeletonlabs/skeleton-svelte";
</script>

<div class="flex w-full items-center justify-evenly gap-4">
	<Progress class="w-fit items-center" formatOptions={{ style: "percent" }}>
		<Progress.Circle>
			<Progress.CircleTrack />
			<Progress.CircleRange />
		</Progress.Circle>
		<Progress.ValueText />
	</Progress>
	<Progress class="w-fit items-center" formatOptions={{ style: "decimal" }}>
		<Progress.Circle>
			<Progress.CircleTrack />
			<Progress.CircleRange />
		</Progress.Circle>
		<Progress.ValueText />
	</Progress>
	<Progress class="w-fit items-center" formatOptions={{ style: "currency", currency: "EUR" }}>
		<Progress.Circle>
			<Progress.CircleTrack />
			<Progress.CircleRange />
		</Progress.Circle>
		<Progress.ValueText />
	</Progress>
</div>
