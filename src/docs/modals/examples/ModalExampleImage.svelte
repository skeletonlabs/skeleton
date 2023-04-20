<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';

	export let parent: any;

	const cButton = 'fixed top-4 right-4 z-50 font-bold shadow-xl';
	const cImage = 'max-w-[90%] max-h-[90%] rounded-container-token overflow-hidden shadow-xl';
</script>

{#if $modalStore[0]}
	<!-- Button -->
	<button class="btn-icon variant-filled {cButton}" on:click={parent.onClose}>×</button>
	<!-- Image -->
	<img src={$modalStore[0]?.image} class={cImage} alt="Example" title="Source: {$modalStore[0]?.meta.source}" />
{/if}
