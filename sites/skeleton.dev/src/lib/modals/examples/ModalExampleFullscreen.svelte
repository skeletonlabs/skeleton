<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();

	/*
		Notes:
		- Use `w-screen h-screen` to fit the visible canvas size.
		- Use `-m-4` to counter the backdrop padding (FIXME: incoming in Skeleton v3+)
	*/
	const cBase = 'bg-surface-100-800-token w-screen h-screen -m-4 p-4 flex justify-center items-center';
</script>

{#if $modalStore[0]}
	<div class="modal-example-fullscreen {cBase}">
		<div class="flex flex-col items-center space-y-4">
			<h2 class="h2">Full Screen Modal</h2>
			<p>This demonstrates a full screen modal dialog.</p>
			<button class="btn variant-filled" on:click={parent.onClose}>× Close</button>
		</div>
	</div>
{/if}
