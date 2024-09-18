<script lang="ts">
	// Components (Skeleton)
	import { Accordion, Segment, Switch, Tabs } from '@skeletonlabs/skeleton-svelte';
	// Components (Settings)
	import ControlsCore from './ControlsCore.svelte';
	import ControlsSpacing from './ControlsSpacing.svelte';
	import ControlsEdges from './ControlsEdges.svelte';
	// Icons
	import IconColors from 'lucide-svelte/icons/palette';
	import IconTypography from 'lucide-svelte/icons/a-large-small';
	import IconSpacing from 'lucide-svelte/icons/scaling';
	import IconEdges from 'lucide-svelte/icons/box-select';
	import IconOpen from 'lucide-svelte/icons/chevron-up';
	import IconClosed from 'lucide-svelte/icons/chevron-down';
	import IconCheck from 'lucide-svelte/icons/check';
	import IconSeed from 'lucide-svelte/icons/sprout';
	import IconRandom from 'lucide-svelte/icons/dices';
	import ControlsTypography from './ControlsTypography.svelte';

	// Local
	const accordionItemProps = {
		controlPadding: 'px-5 py-3',
		controlRounded: 'rounded-none',
		controlHover: 'hover:preset-tonal',
		panelPadding: 'p-5'
	};

	// State
	const settings = $state([]);

	// Control Colors
	interface ColorSelection {
		label: string;
		description: string;
		value: string;
		class: string;
	}
	const colorSelection: ColorSelection[] = [
		{ label: 'Primary', description: 'The primary brand color.', value: 'primary', class: 'preset-filled-primary-500' },
		{ label: 'Secondary', description: 'A secondary accent color.', value: 'secondary', class: 'preset-filled-secondary-500' },
		{ label: 'Tertiary', description: 'A tertiary accent color.', value: 'tertiary', class: 'preset-filled-tertiary-500' },
		{ label: 'Success', description: 'Used for successful states.', value: 'success', class: 'preset-filled-success-500' },
		{ label: 'Warning', description: 'Used for warning states.', value: 'warning', class: 'preset-filled-warning-500' },
		{ label: 'Error', description: 'Used for error states.', value: 'error', class: 'preset-filled-error-500' },
		{ label: 'Surface', description: 'The neutral surface tones.', value: 'surface', class: 'preset-filled-surface-500' }
	];
	let colorCurrentTab = $state('primary');
	let colorAllShades = $state(false);
	const rxSwatchArr = $derived(colorAllShades ? [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] : [50, 500, 950]);
</script>

<section class="relative h-screen bg-surface-100-900 overflow-y-auto">
	<!-- Header -->
	<header
		class="sticky top-0 z-10 bg-surface-100/50 dark:bg-surface-900/50 backdrop-blur-xl p-5 flex justify-between items-center gap-4 shadow"
	>
		<p class="font-bold">Settings</p>
		<button type="button" class="btn preset-outlined-surface-200-800" disabled>Import</button>
	</header>
	<!-- Controls: ore -->
	<ControlsCore />
	<!-- Settings Accordion -->
	<div class="space-y-10">
		<Accordion value={settings} collapsible spaceY="space-y-0">
			{#snippet iconOpen()}<IconOpen size={16} />{/snippet}
			{#snippet iconClosed()}<IconClosed size={16} />{/snippet}
			<hr class="hr" />
			<!-- Controls: Colors -->
			<Accordion.Item value="colors" {...accordionItemProps}>
				{#snippet lead()}<IconColors size={24} class="btn btn-icon preset-tonal" />{/snippet}
				{#snippet control()}<span class="h4">Colors</span>{/snippet}
				{#snippet panel()}
					<div class="space-y-4">
						<p class="opacity-60">Define the palette and contrast tones for each color.</p>
						<!-- Color Tabs -->
						<Tabs bind:value={colorCurrentTab} fluid>
							{#snippet list()}
								{#each colorSelection as color}
									<Tabs.Control value={color.value} labelBase="flex justify-center" stateInactive="">
										<div class="aspect-square w-[52px] rounded flex justify-center items-center {color.class}" title={color.description}>
											{#if color.value === colorCurrentTab}<IconCheck />{/if}
										</div>
									</Tabs.Control>
								{/each}
							{/snippet}
							{#snippet content()}
								{#each colorSelection as color}
									{#if color.value === colorCurrentTab}
										<div class="space-y-4">
											<!-- Actions -->
											<div class="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4">
												<p class="font-bold">Shades</p>
												<button type="button" class="btn preset-outlined-surface-200-800">
													<IconSeed size={16} />
												</button>
												<button type="button" class="btn preset-outlined-surface-200-800">
													<IconRandom size={16} />
												</button>
												<Switch name="example" bind:checked={colorAllShades}>
													<span class="type-scale-1 opacity-60">All</span>
												</Switch>
											</div>
											<!-- Shades -->
											<table class="table">
												<tbody>
													{#each rxSwatchArr as shade}
														<tr>
															<td class="type-scale-1 opacity-60">{shade}</td>
															<td><input type="text" class="input" value="#000000" /></td>
															<td><input class="input" type="color" value="#000000" /></td>
														</tr>
													{/each}
												</tbody>
											</table>
											<!-- Contrast -->
											<div class="space-y-4">
												<p class="font-bold">Contrast</p>
												<table class="table">
													<tbody>
														<tr>
															<td class="type-scale-1 opacity-60">Light Mode</td>
															<td><input type="text" class="input" value="#000000" /></td>
															<td><input class="input" type="color" value="#000000" /></td>
														</tr>
														<tr>
															<td class="type-scale-1 opacity-60">Dark Mode</td>
															<td><input type="text" class="input" value="#FFFFFF" /></td>
															<td><input class="input" type="color" value="#FFFFFF" /></td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									{/if}
								{/each}
							{/snippet}
						</Tabs>
					</div>
				{/snippet}
			</Accordion.Item>
			<hr class="hr" />
			<!-- Controls: Typography -->
			<Accordion.Item value="typography" {...accordionItemProps}>
				{#snippet lead()}<IconTypography size={24} class="btn btn-icon preset-tonal" />{/snippet}
				{#snippet control()}<span class="h4">Typography</span>{/snippet}
				{#snippet panel()}<ControlsTypography />{/snippet}
			</Accordion.Item>
			<hr class="hr" />
			<!-- Controls: Spacing -->
			<Accordion.Item value="spacing" {...accordionItemProps}>
				{#snippet lead()}<IconSpacing size={24} class="btn btn-icon preset-tonal" />{/snippet}
				{#snippet control()}<span class="h4">Spacing</span>{/snippet}
				{#snippet panel()}<ControlsSpacing />{/snippet}
			</Accordion.Item>
			<hr class="hr" />
			<!-- Controls: Edges -->
			<Accordion.Item value="edges" {...accordionItemProps}>
				{#snippet lead()}<IconEdges size={24} class="btn btn-icon preset-tonal" />{/snippet}
				{#snippet control()}<span class="h4">Edges</span>{/snippet}
				{#snippet panel()}<ControlsEdges />{/snippet}
			</Accordion.Item>
			<hr class="hr" />
		</Accordion>
	</div>
	<!-- Footer -->
	<!-- <footer class="p-5 space-y-4"></footer> -->
</section>
