<script lang="ts">
	import { Modal } from '@skeletonlabs/skeleton-svelte';

	let drawerState = $state(false);

	function drawerClose() {
		drawerState = false;
	}
</script>

<!--
Tips for Drawer modals:
- Use `contentBase` to set styles, incuding height/width
- Set justify-start to align to the left
- Clear the align and padding styles
- Use `positionerClasses` to set the
- Set transition.x values that matches content width in pixels
-->

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
			<h2 class="h2">Drawer Example</h2>
		</header>
		<article>
			<p class="opacity-60">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ab adipisci. Libero cumque sunt quis error veritatis amet, expedita
				voluptatem. Quos repudiandae consequuntur voluptatem et dicta quas, reprehenderit velit excepturi?
			</p>
		</article>
		<footer>
			<button type="button" class="btn preset-filled" onclick={drawerClose}>Close Drawer</button>
		</footer>
	{/snippet}
</Modal>
