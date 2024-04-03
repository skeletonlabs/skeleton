<script>
	import { Progress } from '@skeletonlabs/skeleton-svelte';
</script>

<Progress value={undefined} meterAnimate="my-custom-animation" classes="w-full" />

<style>
	:global(.my-custom-animation) {
		animation: my-custom-animation 2s ease-in-out infinite;
	}
	@keyframes my-custom-animation {
		from {
			translate: -100%;
		}
		25% {
			scale: 1;
		}
		50% {
			scale: 0.25 1;
			translate: 50%;
		}
		75% {
			scale: 1;
		}
		to {
			translate: 200%;
		}
	}
</style>
