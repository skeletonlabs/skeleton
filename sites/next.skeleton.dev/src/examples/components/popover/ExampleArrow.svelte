<script lang="ts">
	import { Popover } from '@skeletonlabs/skeleton-svelte';
</script>

<!-- Enable with the `arrow` prop, style with `arrowBackground` -->
<!-- NOTE: `!` (important) must be used for both light and dark mode styles -->
<Popover arrow arrowBackground="!bg-primary-500" triggerBase="btn preset-filled">
	{#snippet trigger()}Click Me{/snippet}
	{#snippet content()}
		<div class="card preset-filled-primary-500 p-4 max-w-[320px]">
			<p>This popover will have an small arrow that points at the trigger button.</p>
		</div>
	{/snippet}
</Popover>
