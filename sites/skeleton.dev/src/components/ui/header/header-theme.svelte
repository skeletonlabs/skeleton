<script lang="ts">
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import PaletteIcon from '@lucide/svelte/icons/palette';
	import { themes } from '@skeletonlabs/skeleton-common';
	import { Popover, Portal, SegmentedControl } from '@skeletonlabs/skeleton-svelte';

	let activeMode: string | undefined = $state();
	let activeTheme: string | undefined = $state();

	function setActiveMode(mode: string) {
		activeMode = mode;
		localStorage.setItem('mode', mode);
		document.documentElement.setAttribute('data-mode', mode);
	}

	async function setActiveTheme(theme: string) {
		activeTheme = theme;
		localStorage.setItem('theme', theme);
		document.documentElement.setAttribute('data-theme', theme);
	}

	$effect(() => {
		activeMode = localStorage.getItem('mode') || 'system';
		activeTheme = localStorage.getItem('theme') || 'skeleton';
	});
</script>

<Popover>
	<Popover.Trigger class="btn hover:preset-tonal data-[state=open]:preset-tonal px-2">
		<PaletteIcon class="size-4" />
		<span>Theme</span>
		<ChevronDownIcon class="size-4 opacity-50" />
	</Popover.Trigger>
	<Portal>
		<Popover.Positioner class="z-[51]!">
			<Popover.Content class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-2 shadow-xl">
				<SegmentedControl value={activeMode} onValueChange={(details) => details.value && setActiveMode(details.value)} class="w-full mb-2">
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
				<span class="label">
					<span class="label-text">Choose Theme</span>
					<div class="grid lg:grid-cols-3 gap-2">
						{#each themes as theme (theme)}
							<button
								data-theme={theme.name}
								class="bg-surface-50-950 p-3 preset-outlined-surface-100-900 hover:preset-outlined-surface-950-50 rounded-md grid grid-cols-[auto_1fr_auto] items-center gap-4 {activeTheme ===
								theme.name
									? 'preset-outlined-surface-500'
									: ''}"
								onclick={() => setActiveTheme(theme.name)}
							>
								<span>{theme.emoji}</span>
								<h3 class="text-sm capitalize font-bold text-left">{theme.name}</h3>
								<div class="flex justify-center items-center -space-x-1.5">
									<div class="aspect-square w-4 bg-primary-500 border-[1px] border-black/10 rounded-full"></div>
									<div class="aspect-square w-4 bg-secondary-500 border-[1px] border-black/10 rounded-full"></div>
									<div class="aspect-square w-4 bg-tertiary-500 border-[1px] border-black/10 rounded-full"></div>
								</div>
							</button>
						{/each}
					</div>
				</span>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
