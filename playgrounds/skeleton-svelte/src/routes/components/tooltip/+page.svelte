<script lang="ts">
	import { Tooltip } from '@skeletonlabs/skeleton-svelte';

	let openState = $state(false);

	function tooltipOpen() {
		openState = true;
	}
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Tooltips</h1>
	</header>
	<aside class="card preset-tonal-warning p-4 text-center">
		<!-- prettier-ignore -->
		<p>This component is available only for Svelte. It will remain until <a href="https://floating-ui-svelte.vercel.app/" target="_blank" class="underline">Floating UI Svelte</a> ready for production.</p>
	</aside>
	<section class="grid grid-cols-[1fr_auto] items-center gap-4">
		<pre class="pre">{JSON.stringify(openState, null, 2)}</pre>
		<button class="btn preset-filled" onclick={tooltipOpen} disabled={openState}>Hover</button>
	</section>
	<section class="border border-surface-200-800 space-y-4 p-20 flex justify-center items-center">
		<Tooltip bind:open={openState} positioning={{ placement: 'top' }} triggerBase="btn preset-tonal" contentBase="card preset-filled p-4">
			{#snippet trigger()}Hover Me{/snippet}
			{#snippet content()}This is a tooltip.{/snippet}
		</Tooltip>
	</section>
</div>
