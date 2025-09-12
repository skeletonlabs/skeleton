<script lang="ts">
	import { ProgressLinear } from '@skeletonlabs/skeleton-svelte';
</script>

<ProgressLinear value={null}>
	<ProgressLinear.Track>
		<ProgressLinear.Range class="my-custom-animation" />
	</ProgressLinear.Track>
</ProgressLinear>

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
			scale: 0.5 1;
			translate: 0%;
		}
		75% {
			scale: 1;
		}
		100% {
			translate: 100%;
		}
	}
</style>
