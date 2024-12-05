<script lang="ts">
	import { Modal } from '@skeletonlabs/skeleton-svelte';

	let { Component } = $props();
	let drawerState = $state(false);

	function drawerClose() {
		drawerState = false;
	}

	$effect(() => {
		console.log('Component received:', Component);
	});
</script>

<Modal
	bind:open={drawerState}
	triggerBase="btn preset-tonal"
	contentBase="bg-surface-100-900 p-4 space-y-4 shadow-xl w-[480px] h-screen"
	positionerJustify="justify-start"
	positionerAlign=""
	positionerPadding=""
	transitionsPositionerIn={{ x: -480, duration: 200 }}
	transitionsPositionerOut={{ x: -480, duration: 200 }}
>
	{#snippet trigger()}
		Open Drawer
	{/snippet}
	{#snippet content()}
		{#if Component}
			<Component />
		{:else}
			<p>Component not received</p>
		{/if}
		<p>Debug: Component type: {typeof Component}</p>
		<footer>
			<button type="button" class="btn preset-filled" onclick={drawerClose}>
				Close Drawer
			</button>
		</footer>
	{/snippet}
</Modal>