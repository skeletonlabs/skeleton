<script lang="ts">
	import { Modal } from '@skeletonlabs/skeleton-svelte';

	let modalState = $state(false);
	let drawerState = $state(false);

	function modalOpen() {
		modalState = true;
	}

	function modalClose() {
		modalState = false;
	}

	function drawerClose() {
		drawerState = false;
	}
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Modal</h1>
	</header>
	<aside class="card preset-tonal-warning p-4 text-center">
		<!-- prettier-ignore -->
		<p>This component is available only for Svelte. It will remain until <a href="https://floating-ui-svelte.vercel.app/" target="_blank" class="underline">Floating UI Svelte</a> ready for production.</p>
	</aside>
	<section class="grid grid-cols-[1fr_auto] items-center gap-4">
		<pre class="pre">{JSON.stringify(modalState, null, 2)}</pre>
		<button class="btn preset-filled" onclick={modalOpen} disabled={modalState}>Open Popover</button>
	</section>
	<section class="border border-surface-200-800 space-y-4 p-20 flex justify-center items-center">
		<Modal
			bind:open={modalState}
			triggerBase="btn preset-tonal"
			contentBase="card bg-surface-100-900 p-4 space-y-4 max-w-screen-sm shadow-xl"
		>
			{#snippet trigger()}Open Modal{/snippet}
			{#snippet content()}
				<header class="flex justify-between">
					<h2 class="h2">Example Modal</h2>
				</header>
				<article>
					<p class="opacity-60">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ab adipisci. Libero cumque sunt quis error veritatis amet,
						expedita voluptatem. Quos repudiandae consequuntur voluptatem et dicta quas, reprehenderit velit excepturi?
					</p>
				</article>
				<footer class="flex justify-end gap-4">
					<button type="button" class="btn preset-tonal" onclick={modalClose}>Cancel</button>
					<button type="button" class="btn preset-filled" onclick={modalClose}>Confirm</button>
				</footer>
			{/snippet}
		</Modal>
	</section>
	<section class="border border-surface-200-800 space-y-4 p-20 flex justify-center items-center">
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
			{#snippet trigger()}Open Drawer{/snippet}
			{#snippet content()}
				<header class="flex justify-between">
					<h2 class="h2">Example Modal</h2>
				</header>
				<article>
					<p class="opacity-60">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ab adipisci. Libero cumque sunt quis error veritatis amet,
						expedita voluptatem. Quos repudiandae consequuntur voluptatem et dicta quas, reprehenderit velit excepturi?
					</p>
				</article>
				<footer>
					<button type="button" class="btn preset-filled" onclick={drawerClose}>Close Drawer</button>
				</footer>
			{/snippet}
		</Modal>
	</section>
</div>
