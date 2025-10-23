<script lang="ts">
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import PaletteIcon from '@lucide/svelte/icons/palette';
	import { themes } from '@skeletonlabs/skeleton-common';
	import { Popover, Portal, SegmentedControl } from '@skeletonlabs/skeleton-svelte';

	let mode: string | null = $state(null);

	$effect(() => {
		mode = localStorage.getItem('mode') || 'system';
	});

	$effect(() => {
		if (mode) {
			localStorage.setItem('mode', mode);
			document.documentElement.setAttribute('data-mode', mode);
		}
	});
</script>

<Popover>
	<Popover.Trigger class="btn hover:preset-tonal p-2">
		<PaletteIcon class="size-4" />
		<span>Theme</span>
		<ChevronDownIcon class="size-4 opacity-50" />
	</Popover.Trigger>
	<Portal>
		<Popover.Positioner class="z-[51]!">
			<Popover.Content class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-2 shadow-xl">
				<SegmentedControl value={mode} onValueChange={(details) => (mode = details.value)}>
					<SegmentedControl.Label>Choose Mode</SegmentedControl.Label>
					<SegmentedControl.Control>
						<SegmentedControl.Indicator />
						<SegmentedControl.Item value="system">
							<SegmentedControl.ItemText>System</SegmentedControl.ItemText>
							<SegmentedControl.ItemHiddenInput />
						</SegmentedControl.Item>
						<SegmentedControl.Item value="light">
							<SegmentedControl.ItemText>Light</SegmentedControl.ItemText>
							<SegmentedControl.ItemHiddenInput />
						</SegmentedControl.Item>
						<SegmentedControl.Item value="dark">
							<SegmentedControl.ItemText>Dark</SegmentedControl.ItemText>
							<SegmentedControl.ItemHiddenInput />
						</SegmentedControl.Item>
					</SegmentedControl.Control>
				</SegmentedControl>
				<hr class="hr" />
				<div class="grid lg:grid-cols-3">
					{#each themes as theme (theme)}
						<div class="p-2" data-theme={theme.name}>
							<span>{theme.name}</span>
						</div>
					{/each}
				</div>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
