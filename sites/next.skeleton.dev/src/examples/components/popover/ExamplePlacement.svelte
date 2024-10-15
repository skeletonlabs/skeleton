<script lang="ts">
	import { Popover } from '@skeletonlabs/skeleton-svelte';
</script>

<Popover triggerBase="btn preset-filled" positioning={{ placement: 'top' }}>
	{#snippet trigger()}Click Me{/snippet}
	{#snippet content()}
		<div class="card bg-surface-200-800 p-4">
			<p>A simple tooltip.</p>
		</div>
	{/snippet}
</Popover>
