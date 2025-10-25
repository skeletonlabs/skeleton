<script lang="ts">
	import { MoonIcon, SunIcon } from '@lucide/svelte';
	import { Switch } from '@skeletonlabs/skeleton-svelte';

	let checked = $state(false);

	$effect(() => {
		const mode = localStorage.getItem('mode') || 'light';
		checked = mode === 'dark';
	});

	const onCheckedChange = (event: { checked: boolean }) => {
		const mode = event.checked ? 'dark' : 'light';
		document.documentElement.setAttribute('data-mode', mode);
		localStorage.setItem('mode', mode);
		checked = event.checked;
	};
</script>

<svelte:head>
	<script>
		const mode = localStorage.getItem('mode') || 'light';
		document.documentElement.setAttribute('data-mode', mode);
	</script>
</svelte:head>

<Switch {checked} {onCheckedChange}>
	<Switch.Control>
		<Switch.Thumb>
			<Switch.Context>
				{#snippet children(switch_)}
					{#if switch_().checked}
						<SunIcon class="size-4 stroke-surface-50-950" />
					{:else}
						<MoonIcon class="size-4 stroke-surface-950-50" />
					{/if}
				{/snippet}
			</Switch.Context>
		</Switch.Thumb>
	</Switch.Control>
	<Switch.HiddenInput />
</Switch>
