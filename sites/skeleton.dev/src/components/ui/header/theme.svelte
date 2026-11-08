<script lang="ts">
	import { themes } from "@/modules/themes";
	import ArrowUpRightIcon from "@lucide/svelte/icons/arrow-up-right";
	import ChevronDownIcon from "@lucide/svelte/icons/chevron-down";
	import LaptopMinimalCheckIcon from "@lucide/svelte/icons/laptop-minimal-check";
	import MoonIcon from "@lucide/svelte/icons/moon";
	import PaletteIcon from "@lucide/svelte/icons/palette";
	import SunIcon from "@lucide/svelte/icons/sun";
	import { Popover, Portal, SegmentedControl } from "@skeletonlabs/skeleton-svelte";

	let activeMode: string | undefined = $state();
	let activeTheme: string | undefined = $state();

	function setActiveMode(mode: string) {
		activeMode = mode;
		localStorage.setItem("mode", mode);
		document.documentElement.setAttribute("data-mode", mode);
	}

	async function setActiveTheme(theme: string) {
		activeTheme = theme;
		localStorage.setItem("theme", theme);
		document.documentElement.setAttribute("data-theme", theme);
	}

	$effect(() => {
		activeMode = localStorage.getItem("mode") || "system";
		activeTheme = localStorage.getItem("theme") || "skeleton";
	});
</script>

<Popover>
	<Popover.Trigger class="btn hover:preset-tonal data-[state=open]:preset-tonal px-2">
		<PaletteIcon class="size-4" />
		<span class="hidden xl:inline">Theme</span>
		<ChevronDownIcon class="size-4 opacity-50" />
	</Popover.Trigger>
	<Portal>
		<Popover.Positioner>
			<Popover.Content
				class="card bg-surface-50-950 border-surface-200-800 z-50 max-h-[75vh] space-y-4 overflow-y-auto border p-2 shadow-xl lg:max-h-none"
			>
				<!-- Mode Selection -->
				<div>
					<SegmentedControl
						value={activeMode}
						onValueChange={(details) => details.value && setActiveMode(details.value)}
						class="bg-surface-50-950 mb-2 w-full"
					>
						<SegmentedControl.Control>
							<SegmentedControl.Indicator />
							<SegmentedControl.Item value="system">
								<SegmentedControl.ItemText class="flex items-center gap-2">
									<LaptopMinimalCheckIcon class="size-4" />
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
					<div class="grid grid-cols-1 gap-2 lg:grid-cols-3">
						{#each themes as theme (theme)}
							<button
								data-theme={theme.name}
								class="bg-surface-50-950 preset-outlined-surface-100-900 hover:preset-outlined-surface-950-50 grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-md p-3 {activeTheme ===
								theme.name
									? 'preset-outlined-surface-500'
									: ''}"
								onclick={() => setActiveTheme(theme.name)}
							>
								<span>{theme.emoji}</span>
								<h3 class="text-left text-sm font-bold capitalize">{theme.name}</h3>
								<div class="flex items-center justify-center -space-x-1.5">
									<div
										class="bg-primary-500 aspect-square w-4 rounded-full border-[1px] border-black/10"
									></div>
									<div
										class="bg-secondary-500 aspect-square w-4 rounded-full border-[1px] border-black/10"
									></div>
									<div
										class="bg-tertiary-500 aspect-square w-4 rounded-full border-[1px] border-black/10"
									></div>
								</div>
							</button>
						{/each}
					</div>
				</div>
				<!-- Create a Theme -->
				<div class="card bg-primary-500 mx-auto flex items-center justify-center py-4">
					<a
						href="https://themes.skeleton.dev/"
						target="_blank"
						class="btn preset-filled"
					>
						<span>Create a Theme</span>
						<ArrowUpRightIcon class="size-4" />
					</a>
				</div>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
