<script lang="ts">
	import { fade } from 'svelte/transition';
	import { modalStore } from '@skeletonlabs/skeleton';

	export let parent: any;

	const cButton = 'fixed top-4 right-4 z-50 font-bold';
	const cImage = '';

	// Animate Button Fade
	let showButton = false;
	setTimeout(() => {
		showButton = true;
	}, 500);
</script>

<div>
	<!-- Button -->
	{#if showButton}
		<button class="btn-icon btn-icon-lg btn-filled {cButton}" on:click={parent.onClose} transition:fade|local>×</button>
	{/if}
	<!-- Image -->
	<img src={$modalStore[0]?.meta.src} class={cImage} alt="Example" />
</div>
