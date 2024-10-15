<script lang="ts">
	import Popover from '$lib/components/Popover/Popover.svelte';
	import IconX from 'lucide-svelte/icons/x';

	let openState = $state(false);

	function popoverOpen() {
		openState = true;
	}

	function popoverClose() {
		openState = false;
	}

	// function popoverToggle() {
	// 	openState = !openState;
	// }
	// setInterval(popoverToggle, 3000);
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Popovers</h1>
	</header>
	<aside class="card preset-tonal-warning p-4 text-center">
		<p>This component is available only for Svelte, and as temporary solution in Floating UI Svelte is available.</p>
	</aside>
	<section class="grid grid-cols-[1fr_auto] items-center gap-4">
		<pre class="pre">{JSON.stringify(openState, null, 2)}</pre>
		<button class="btn preset-filled" onclick={popoverOpen} disabled={openState}>Open Popover</button>
	</section>
	<section class="border border-surface-200-800 space-y-4 p-10 pb-[300px] flex justify-center items-center">
		<Popover bind:open={openState} positioning={{ placement: 'bottom', offset: { mainAxis: 20 } }} triggerBase="btn preset-filled" arrow>
			{#snippet trigger()}Click Me{/snippet}
			{#snippet content()}
				<div class="card bg-surface-200-800 p-4 space-y-4 max-w-[320px]">
					<header class="flex justify-between">
						<p class="font-bold type-scale-5">Popover</p>
						<button class="btn-icon" onclick={popoverClose}>
							<IconX />
						</button>
					</header>
					<article>
						<p class="opacity-60">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima aut odio maxime placeat quia eligendi distinctio.
						</p>
					</article>
				</div>
			{/snippet}
		</Popover>
	</section>
</div>
