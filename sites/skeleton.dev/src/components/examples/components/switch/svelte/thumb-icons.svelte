<script lang="ts">
	import { MoonIcon, SunIcon } from '@lucide/svelte';
	import { Switch } from '@skeletonlabs/skeleton-svelte';
</script>

<Switch>
	<Switch.Control>
		<Switch.Thumb>
			<Switch.Context>
				{#snippet children(switch_)}
					{#if switch_().checked}
						<SunIcon class="size-3" />
					{:else}
						<MoonIcon class="size-3" />
					{/if}
				{/snippet}
			</Switch.Context>
		</Switch.Thumb>
	</Switch.Control>
	<Switch.HiddenInput />
</Switch>
