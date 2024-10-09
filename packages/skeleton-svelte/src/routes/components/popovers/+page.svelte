<script lang="ts">
	import Popover from '$lib/components/Popover/Popover.svelte';

	let openState = $state(true);

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
	<section class="grid grid-cols-[1fr_auto] items-center gap-4">
		<pre class="pre">{JSON.stringify(openState, null, 2)}</pre>
		<button class="btn preset-filled" onclick={popoverOpen} disabled={openState}>Open Popover</button>
	</section>
	<section class="border border-surface-200-800 space-y-4 h-[700px] flex justify-center items-center">
		<Popover
			bind:open={openState}
			positioning={{ placement: 'bottom', offset: { mainAxis: 20 } }}
			arrow
			arrowBackground="!bg-surface-200 dark:!bg-surface-800"
		>
			{#snippet trigger()}
				<span class="btn preset-filled">Click Me</span>
			{/snippet}
			{#snippet content()}
				<div class="card bg-surface-200-800 p-4 space-y-4 max-w-[320px]">
					<p class="font-bold type-scale-5">Popover</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima aut odio maxime placeat quia eligendi distinctio.</p>
					<button class="btn preset-outlined-surface-300-700 w-full" onclick={popoverClose}>Close Popover</button>
				</div>
			{/snippet}
		</Popover>
	</section>
</div>
