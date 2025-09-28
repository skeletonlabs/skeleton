<script lang="ts">
	import { ProgressLinear } from '@skeletonlabs/skeleton-svelte';
</script>

<ProgressLinear value={null}>
	<ProgressLinear.Track>
		<ProgressLinear.Range class="animate-[custom-animation_2s_ease-in-out_infinite]" />
	</ProgressLinear.Track>
</ProgressLinear>

<style>
	@keyframes -global-custom-animation {
		from {
			scale: 0.5 1;
			transform: translateX(-200%);
		}
		25% {
			transform: translateX(50%);
		}
		50% {
			transform: translateX(-50%);
		}
		75% {
			transform: translateX(150%);
		}
		to {
			scale: 0.5 1;
			transform: translateX(200%);
		}
	}
</style>
