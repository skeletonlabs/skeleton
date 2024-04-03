<script>
	import { Progress } from '@skeletonlabs/skeleton-svelte';
</script>

<Progress value={undefined} meterAnimate="my-custom-animation" />

<style>
	/*
		Note: The `:global` modifier is used to apply the
		animation to the progress bar because Svelte styles
		are scoped by default.
	*/
	:global(.my-custom-animation) {
		animation: my-custom-animation 2s ease-in-out infinite;
	}
	@keyframes my-custom-animation {
		0% {
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
		100% {
			translate: 200%;
		}
	}
</style>
