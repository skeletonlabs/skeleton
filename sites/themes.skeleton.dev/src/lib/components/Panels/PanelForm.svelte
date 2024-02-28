<script lang="ts">
	// Icons
	import IconBrand from 'lucide-svelte/icons/skull';
	import IconColors from 'lucide-svelte/icons/palette';
	import IconBackgrounds from 'lucide-svelte/icons/swatch-book';
	import IconSpacing from 'lucide-svelte/icons/scaling';
	import IconTypography from 'lucide-svelte/icons/whole-word';
	import IconEdges from 'lucide-svelte/icons/box-select';

	// Local
	const seedColors = [
		{ label: 'primary', hex: '#0170f3' },
		{ label: 'secondary', hex: '#7928ca' },
		{ label: 'tertiary', hex: '#ff0080' },
		{ label: 'success', hex: '#50e3c2' },
		{ label: 'warning', hex: '#f7b955' },
		{ label: 'error', hex: '#f33f33' },
		{ label: 'surface', hex: '#666666' }
	];

	// Reactive State
	let category = $state('colors');
</script>

<form class="space-y-10">
	<!-- Branding -->
	<h1 class="h6 font-mono">themes</h1>
	<!-- Selection -->
	<div class="flex items-center gap-4">
		{#if category === 'colors'}<IconColors size={24} />{/if}
		{#if category === 'backgrounds'}<IconBackgrounds size={24} />{/if}
		{#if category === 'spacing'}<IconSpacing size={24} />{/if}
		{#if category === 'typography'}<IconTypography size={24} />{/if}
		{#if category === 'edges'}<IconEdges size={24} />{/if}
		<select class="select" name="category" id="category" bind:value={category}>
			<option value="colors">Colors</option>
			<option value="backgrounds">Backgrounds</option>
			<option value="spacing">Scaling</option>
			<option value="typography">Typography</option>
			<option value="edges">Edges</option>
		</select>
	</div>
	<hr class="hr" />
	<!-- Colors -->
	{#if category === 'colors'}
		<fieldset class="space-y-4 md:space-y-8">
			{#each seedColors as color}
				<h2 class="h4 capitalize">{color.label}</h2>
				<div class="grid grid-cols-2 gap-4">
					<label class="label col-span-2">
						<div class="grid grid-cols-[auto_1fr] gap-2">
							<input class="input" type="color" value={color.hex} />
							<input class="input" type="text" value={color.hex} readonly tabindex="-1" />
						</div>
					</label>
					<label class="label">
						<div class="label-text capitalize">Light Contrast</div>
						<div class="grid grid-cols-[auto_1fr] gap-2">
							<input class="input" type="color" value="#FFFFFF" />
							<input class="input" type="text" value="#FFFFFF" readonly tabindex="-1" />
						</div>
					</label>
					<label class="label">
						<div class="label-text capitalize">Dark Contrast</div>
						<div class="grid grid-cols-[auto_1fr] gap-2">
							<input class="input" type="color" value="#000000" />
							<input class="input" type="text" value="#000000" readonly tabindex="-1" />
						</div>
					</label>
					<input class="input col-span-2" type="range" name="contrast" value="6" min="1" max="11" step="1" />
				</div>
				<hr class="hr" />
			{/each}
		</fieldset>
	{/if}
	<!-- Backgrounds -->
	{#if category === 'backgrounds'}
		<fieldset class="space-y-4 md:space-y-8">
			<label class="label">
				<div class="label-text">Base Color</div>
				<div class="grid grid-cols-[auto_1fr] gap-2">
					<input class="input" type="color" value="#FFFFFF" />
					<input class="input" type="text" value="#FFFFFF" readonly tabindex="-1" />
				</div>
			</label>
			<label class="label">
				<div class="label-text">Dark Mode</div>
				<div class="grid grid-cols-[auto_1fr] gap-2">
					<input class="input" type="color" value="#000000" />
					<input class="input" type="text" value="#000000" readonly tabindex="-1" />
				</div>
			</label>
		</fieldset>
	{/if}
	<!-- Spacing -->
	{#if category === 'spacing'}
		<fieldset class="space-y-4 md:space-y-8">
			<label class="label">
				<div class="label-text flex justify-between">
					<strong>Factor</strong>
					<span>(value)</span>
				</div>
				<input class="input" type="range" name="space-scale-factor" value="1" min="0.5" max="1.5" step="0.1" />
			</label>
		</fieldset>
	{/if}
	<!-- Typography -->
	{#if category === 'typography'}
		<fieldset class="space-y-4 md:space-y-8">
			<label class="label">
				<div class="label-text flex justify-between">
					<strong>Factor</strong>
					<span>(value)</span>
				</div>
				<input class="input" type="range" name="typography-scale-factor" value="3" min="1" max="9" step="1" />
			</label>
		</fieldset>
	{/if}
	<!-- Edges -->
	{#if category === 'edges'}
		<fieldset class="space-y-4 md:space-y-8">
			<label class="label">
				<div class="label-text flex justify-between">
					<strong>Rounded Base</strong>
					<span>(value)</span>
				</div>
				<input class="input" type="range" name="rounded-base" value="8" min="4" max="32" step="4" />
			</label>
			<label class="label">
				<div class="label-text flex justify-between">
					<strong>Rounded Containers</strong>
					<span>(value)</span>
				</div>
				<input class="input" type="range" name="rounded-container" value="1" min="0" max="5" step="1" />
			</label>
			<hr class="hr" />
			<label class="label">
				<div class="label-text flex justify-between">
					<strong>Borders</strong>
					<span>(value)</span>
				</div>
				<input class="input" type="range" name="borders" value="1" min="0" max="5" step="1" />
			</label>
			<label class="label">
				<div class="label-text flex justify-between">
					<strong>Rings</strong>
					<span>(value)</span>
				</div>
				<input class="input" type="range" name="rings" value="1" min="0" max="5" step="1" />
			</label>
			<label class="label">
				<div class="label-text flex justify-between">
					<strong>Outlines</strong>
					<span>(value)</span>
				</div>
				<input class="input" type="range" name="outlines" value="1" min="0" max="5" step="1" />
			</label>
			<label class="label">
				<div class="label-text flex justify-between">
					<strong>Dividers</strong>
					<span>(value)</span>
				</div>
				<input class="input" type="range" name="dividers" value="1" min="0" max="5" step="1" />
			</label>
		</fieldset>
	{/if}
</form>
