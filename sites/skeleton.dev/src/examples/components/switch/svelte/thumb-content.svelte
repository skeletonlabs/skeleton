<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	import Sun from '@lucide/svelte/icons/sun';
	import Moon from '@lucide/svelte/icons/moon';
</script>

<Switch>
	<Switch.Control>
		<Switch.Thumb>
			<Switch.Context>
				{#snippet children(ctx)}
					{#if ctx.api.checked}
						<Sun size={12} />
					{:else}
						<Moon size={12} />
					{/if}
				{/snippet}
			</Switch.Context>
		</Switch.Thumb>
	</Switch.Control>
	<Switch.Label>Label</Switch.Label>
	<Switch.HiddenInput />
</Switch>
