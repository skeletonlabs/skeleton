<script>
	import { Progress } from '@skeletonlabs/skeleton-svelte';
</script>

<Progress value={undefined} meterAnimate="custom-animation" classes="w-full" />

<style>
	:global(.custom-animation) {
		animation: custom-animation 2s ease-in-out infinite;
	}
	@keyframes custom-animation {
        from {
            translate: -100%;
        }
		50% {
			width: 100%;
			translate: 0;
		}
		to {
			width: 100%;
			translate: 100%;
		}
	}
</style>
