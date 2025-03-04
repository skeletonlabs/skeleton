<script lang="ts">
	import { Popover } from '@skeletonlabs/skeleton-svelte';
	import IconX from 'lucide-svelte/icons/x';

	let openState = $state(false);

	function popoverClose() {
		openState = false;
	}
</script>

<Popover
	open={openState}
	onOpenChange={(e) => (openState = e.open)}
	positioning={{ placement: 'top' }}
	triggerBase="btn preset-tonal"
	contentBase="card bg-surface-200-800 p-4 space-y-4 max-w-[320px]"
	arrow
	arrowBackground="!bg-surface-200 dark:!bg-surface-800"
>
	{#snippet trigger()}Click Me{/snippet}
	{#snippet content()}
		<header class="flex justify-between">
			<p class="text-xl font-bold">Popover Example</p>
			<button class="btn-icon hover:preset-tonal" onclick={popoverClose}><IconX /></button>
		</header>
		<article>
			<p class="opacity-60">
				This will display a basic popover with a header and body. This also includes a title, description, and close button.
			</p>
		</article>
	{/snippet}
</Popover>
