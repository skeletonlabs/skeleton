<script lang="ts">
	import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import SystemIcon from '@lucide/svelte/icons/laptop-minimal-check';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import PaletteIcon from '@lucide/svelte/icons/palette';
	import SunIcon from '@lucide/svelte/icons/sun';
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
		<span class="hidden xl:inline">Theme</span>
		<ChevronDownIcon class="size-4 opacity-50" />
	</Popover.Trigger>
	<Portal>
		<Popover.Positioner class="z-[51]!">
			<Popover.Content
				class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4 shadow-xl max-h-[75vh] lg:max-h-none overflow-y-auto"
			>
				<!-- Mode Selection -->
				<div>
					<SegmentedControl
						value={activeMode}
						onValueChange={(details) => details.value && setActiveMode(details.value)}
						class="bg-surface-50-950 w-full mb-2"
					>
						<SegmentedControl.Control>
							<SegmentedControl.Indicator />
							<SegmentedControl.Item value="system">
								<SegmentedControl.ItemText class="flex items-center gap-2">
									<SystemIcon class="size-4" />
									<span>System</span>
								</SegmentedControl.ItemText>
								<SegmentedControl.ItemHiddenInput />
							</SegmentedControl.Item>
							<SegmentedControl.Item value="light">
								<SegmentedControl.ItemText class="flex items-center gap-2">
									<SunIcon class="size-4" />
									<span>Light</span>
								</SegmentedControl.ItemText>
								<SegmentedControl.ItemHiddenInput />
							</SegmentedControl.Item>
							<SegmentedControl.Item value="dark">
								<SegmentedControl.ItemText class="flex items-center gap-2">
									<MoonIcon class="size-4" />
									<span>Dark</span>
								</SegmentedControl.ItemText>
								<SegmentedControl.ItemHiddenInput />
							</SegmentedControl.Item>
						</SegmentedControl.Control>
					</SegmentedControl>
				</div>
				<!-- Theme Selection -->
				<div class="space-y-4">
					<div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
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
				</div>
				<!-- Create a Theme -->
				<div class="card bg-primary-500 flex justify-center items-center py-4 mx-auto">
					<a href="https://themes.skeleton.dev/" target="_blank" class="btn preset-filled">
						<span>Create a Theme</span>
						<ArrowUpRightIcon class="size-4" />
					</a>
				</div>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
