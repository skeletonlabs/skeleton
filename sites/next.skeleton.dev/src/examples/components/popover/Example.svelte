<script lang="ts">
	import { Popover } from '@skeletonlabs/skeleton-svelte';
	import IconX from 'lucide-svelte/icons/x';

	let openState = $state(false);

	function popoverClose() {
		openState = false;
	}
</script>

<Popover bind:open={openState} triggerBase="btn preset-filled">
	<!-- Trigger -->
	{#snippet trigger()}Click Me{/snippet}
	<!-- Content -->
	{#snippet content()}
		<div class="card bg-surface-200-800 p-4 space-y-4 max-w-[320px]">
			<!-- Header -->
			<header class="flex justify-between">
				<!-- Title -->
				<p class="font-bold type-scale-5">Example</p>
				<!-- Close Button -->
				<button class="btn-icon" onclick={popoverClose}>
					<IconX />
				</button>
			</header>
			<!-- Body -->
			<article>
				<p class="opacity-60">
					This will display a basic popover with a header and body. Including a title, description, and close button.
				</p>
			</article>
		</div>
	{/snippet}
</Popover>
