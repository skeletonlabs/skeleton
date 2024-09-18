<script lang="ts">
	// Components (Skeleton)
	import { Accordion, Segment, Switch } from '@skeletonlabs/skeleton-svelte';
	// Components (local)
	import Edges from '$lib/components/Edges/Edges.svelte';
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

	// State
	const settings = $state([]);

	// Colors
	interface ColorSelection {
		label: string;
		desc: string;
		value: string;
		class: string;
	}
	const colorSelection: ColorSelection[] = [
		{ label: 'Primary', desc: 'The primary brand color.', value: 'primary', class: 'preset-filled-primary-500' },
		{ label: 'Secondary', desc: 'A secondary accent color.', value: 'secondary', class: 'preset-filled-secondary-500' },
		{ label: 'Tertiary', desc: 'A tertiary accent color.', value: 'tertiary', class: 'preset-filled-tertiary-500' },
		{ label: 'Success', desc: 'Used for successful states.', value: 'success', class: 'preset-filled-success-500' },
		{ label: 'Warning', desc: 'Used for warning states.', value: 'warning', class: 'preset-filled-warning-500' },
		{ label: 'Error', desc: 'Used for error states.', value: 'error', class: 'preset-filled-error-500' },
		{ label: 'Surface', desc: 'The neutral surface tones.', value: 'surface', class: 'preset-filled-surface-500' }
	];
	let colorCurrent = $state('primary');
	let colorAllShades = $state(false);
	const rxSwatchArr = $derived(colorAllShades ? [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] : [50, 500, 950]);

	// Typography
	let typographyType = $state('base');

	// Forms
	const formEdges = $state({
		'rounded-base': 6,
		'rounded-container': 12,
		borders: 1,
		rings: 1,
		outlines: 1,
		dividers: 1
	});
</script>

<section class="relative h-screen bg-surface-100-900 overflow-y-auto">
	<!-- Header -->
	<header
		class="sticky top-0 z-10 bg-surface-100/50 dark:bg-surface-900/50 backdrop-blur-xl p-5 flex justify-between items-center gap-4 shadow"
	>
		<p class="font-bold">Settings</p>
		<button type="button" class="btn preset-outlined-surface-200-800" disabled>Import</button>
	</header>
	<div class="p-5">
		<input type="text" class="input" placeholder="Enter theme name..." />
	</div>
	<!-- Form: Settings -->
	<form class="space-y-10">
		<Accordion value={settings} collapsible spaceY="space-y-0">
			{#snippet iconOpen()}<IconOpen size={16} />{/snippet}
			{#snippet iconClosed()}<IconClosed size={16} />{/snippet}

			<hr class="hr" />

			<!-- Colors -->
			<Accordion.Item
				value="colors"
				controlPadding="px-5 py-3"
				controlRounded="rounded-none"
				controlHover="hover:preset-tonal"
				panelPadding="p-5"
			>
				{#snippet lead()}
					<span class="btn btn-icon preset-tonal"><IconColors size={24} /></span>
				{/snippet}
				{#snippet control()}
					<span class="h4">Colors</span>
				{/snippet}
				{#snippet panel()}
					<div class="space-y-4">
						<p class="opacity-60">Define the palette and contrast tones for each color.</p>
						<!-- Color Select -->
						<div class="grid grid-cols-7 gap-4">
							{#each colorSelection as color}
								<button
									type="button"
									class="aspect-square w-full rounded flex justify-center items-center {color.class}"
									title={color.label}
									onclick={() => (colorCurrent = color.value)}
								>
									{#if color.value === colorCurrent}<IconCheck />{/if}
								</button>
							{/each}
						</div>
						<hr class="hr" />
						<!-- Actions -->
						<div class="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4">
							<h3 class="h5 capitalize">{colorCurrent}</h3>
							<button type="button" class="btn btn-icon preset-outlined-surface-200-800">
								<IconSeed size={16} />
							</button>
							<button type="button" class="btn btn-icon preset-outlined-surface-200-800">
								<IconRandom size={16} />
							</button>
							<Switch name="example" bind:checked={colorAllShades}>
								<span class="type-scale-1 opacity-60">All</span>
							</Switch>
						</div>
						<!-- Shades -->
						<table class="table caption-bottom">
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
					</div>
				{/snippet}
			</Accordion.Item>

			<hr class="hr" />

			<!-- Typography -->
			<Accordion.Item
				value="typography"
				controlPadding="px-5 py-3"
				controlRounded="rounded-none"
				controlHover="hover:preset-tonal"
				panelPadding="p-5"
			>
				{#snippet lead()}
					<span class="btn btn-icon preset-tonal"><IconTypography size={24} /></span>
				{/snippet}
				{#snippet control()}
					<span class="h4">Typography</span>
				{/snippet}
				{#snippet panel()}
					<div class="space-y-4">
						<p class="opacity-60">Define all typographic settings for your theme.</p>
						<Segment name="align" bind:value={typographyType} width="w-full">
							<Segment.Item value="base" classes="w-full">Base</Segment.Item>
							<Segment.Item value="headings" classes="w-full">Headings</Segment.Item>
							<Segment.Item value="anchors" classes="w-full">Anchors</Segment.Item>
						</Segment>
						<div class="grid grid-cols-2 gap-4">
							<!-- Colors -->
							<label class="label">
								<span class="label-text">Base Color</span>
								<select class="select" name="base-color">
									<option value="xxx">...</option>
								</select>
							</label>
							<label class="label">
								<span class="label-text">Dark Mode</span>
								<select class="select" name="dark-mode">
									<option value="xxx">...</option>
								</select>
							</label>
							<!-- Font -->
							<label class="label col-span-2">
								<span class="label-text">Font Family</span>
								<select class="select" name="font-family">
									<option value="xxx">...</option>
								</select>
							</label>
							<!-- Misc -->
							<label class="label">
								<span class="label-text">Font Size</span>
								<select class="select" name="font-size">
									<option value="xxx">...</option>
								</select>
							</label>
							<label class="label">
								<span class="label-text">Line Height</span>
								<select class="select" name="line-height">
									<option value="xxx">...</option>
								</select>
							</label>
							<label class="label">
								<span class="label-text">Font Weight</span>
								<select class="select" name="font-weight">
									<option value="xxx">...</option>
								</select>
							</label>
							<label class="label">
								<span class="label-text">Font Style</span>
								<select class="select" name="font-style">
									<option value="xxx">...</option>
								</select>
							</label>
							<label class="label">
								<span class="label-text">Letter Spacing</span>
								<select class="select" name="letter-spacing">
									<option value="xxx">...</option>
								</select>
							</label>
						</div>
					</div>
				{/snippet}
			</Accordion.Item>

			<hr class="hr" />

			<!-- Spacing -->
			<Accordion.Item
				value="spacing"
				controlPadding="px-5 py-3"
				controlRounded="rounded-none"
				controlHover="hover:preset-tonal"
				panelPadding="p-5"
			>
				{#snippet lead()}
					<span class="btn btn-icon preset-tonal"><IconSpacing size={24} /></span>
				{/snippet}
				{#snippet control()}
					<span class="h4">Spacing</span>
				{/snippet}
				{#snippet panel()}
					<div class="space-y-4">
						<p class="opacity-60">Define the scale factor for properties like padding, margin, width, height, gap, space, and more.</p>
						<label class="label">
							<div class="label-text flex justify-between items-center">
								<span>Scale Factor</span>
								<span class="opacity-60">1x</span>
							</div>
							<input class="input" type="range" value="75" max="100" />
						</label>
					</div>
				{/snippet}
			</Accordion.Item>

			<hr class="hr" />

			<!-- Edges -->
			<Accordion.Item
				value="edges"
				controlPadding="px-5 py-3"
				controlRounded="rounded-none"
				controlHover="hover:preset-tonal"
				panelPadding="p-5"
			>
				{#snippet lead()}
					<span class="btn btn-icon preset-tonal"><IconEdges size={24} /></span>
				{/snippet}
				{#snippet control()}
					<span class="h4">Edges</span>
				{/snippet}
				{#snippet panel()}
					<div class="space-y-4">
						<p class="opacity-60">Define radius shape and edge widths.</p>
						<div class="label">
							<span class="label-text">Rounded Base</span>
							<Edges name="rounded-base" items={[0, 2, 4, 6, 12, 24, 9999]} bind:value={formEdges['rounded-base']} />
						</div>
						<div class="label">
							<span class="label-text">Rounded Container</span>
							<Edges name="rounded-container" items={[0, 2, 4, 6, 12, 24]} bind:value={formEdges['rounded-container']} />
						</div>
						<hr class="hr" />
						<div class="label">
							<span class="label-text">Borders</span>
							<Edges name="borders" items={[0, 1, 2, 4, 6]} bind:value={formEdges['borders']} thickness />
						</div>
						<div class="label">
							<span class="label-text">Rings</span>
							<Edges name="rings" items={[0, 1, 2, 4, 6]} bind:value={formEdges['rings']} thickness />
						</div>
						<div class="label">
							<span class="label-text">Outlines</span>
							<Edges name="outlines" items={[0, 1, 2, 4, 6]} bind:value={formEdges['outlines']} thickness />
						</div>
						<div class="label">
							<span class="label-text">Dividers</span>
							<Edges name="dividers" items={[0, 1, 2, 4, 6]} bind:value={formEdges['dividers']} thickness />
						</div>
					</div>
				{/snippet}
			</Accordion.Item>

			<hr class="hr" />
		</Accordion>
	</form>
	<!-- Footer -->
	<!-- <footer class="p-5">
		<pre class="pre !bg-black">formEdges: {JSON.stringify(formEdges, null, 2)}</pre>
	</footer> -->
</section>
