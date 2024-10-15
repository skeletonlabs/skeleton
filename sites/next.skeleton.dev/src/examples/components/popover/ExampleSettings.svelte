<script lang="ts">
	import { Popover } from '@skeletonlabs/skeleton-svelte';
</script>

<!-- Define advanced settings via the `positioning` prop object below -->
<Popover triggerBase="btn preset-filled" positioning={{ placement: 'right', offset: { mainAxis: 20 } }}>
	{#snippet trigger()}Click Me{/snippet}
	{#snippet content()}
		<div class="card bg-surface-200-800 p-4">
			<p>I'm offset by 20px!</p>
		</div>
	{/snippet}
</Popover>
