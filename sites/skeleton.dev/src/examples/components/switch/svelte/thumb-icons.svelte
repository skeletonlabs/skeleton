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
						<Sun class="size-3 stroke-surface-50-950" />
					{:else}
						<Moon class="size-3 stroke-surface-950-50" />
					{/if}
				{/snippet}
			</Switch.Context>
		</Switch.Thumb>
	</Switch.Control>
	<Switch.HiddenInput />
</Switch>
