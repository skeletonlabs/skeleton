<script lang="ts">
	import ThermometerSunIcon from '@lucide/svelte/icons/thermometer-sun';
	import { Progress } from '@skeletonlabs/skeleton-svelte';
</script>

<Progress class="w-fit relative">
	<div class="absolute inset-0 flex items-center justify-center">
		<ThermometerSunIcon />
	</div>
	<Progress.Circle>
		<Progress.CircleTrack />
		<Progress.CircleRange />
	</Progress.Circle>
</Progress>
