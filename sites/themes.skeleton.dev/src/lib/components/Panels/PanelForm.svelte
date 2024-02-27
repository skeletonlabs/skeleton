<script lang="ts">
	import IconColors from 'lucide-svelte/icons/palette';
	import IconBackgrounds from 'lucide-svelte/icons/swatch-book';
	import IconScaling from 'lucide-svelte/icons/scaling';
	import IconTypography from 'lucide-svelte/icons/whole-word';
	import IconEdges from 'lucide-svelte/icons/box-select';

	const colors = [
		{ label: 'primary', hex: '#0170f3' },
		{ label: 'secondary', hex: '#7928ca' },
		{ label: 'tertiary', hex: '#ff0080' },
		{ label: 'success', hex: '#50e3c2' },
		{ label: 'warning', hex: '#f7b955' },
		{ label: 'error', hex: '#f33f33' },
		{ label: 'surface', hex: '#666666' }
	];
</script>

<form class="space-y-10">
	<!-- Colors -->
	<fieldset class="space-y-4 md:space-y-8">
		<div class="flex items-center gap-4">
			<IconColors size={24} />
			<h2 class="font-bold type-scale-3">Colors</h2>
		</div>
		<div class="grid grid-cols-2 gap-4">
			{#each colors as color}
				<label class="label">
					<div class="label-text capitalize">{color.label}</div>
					<div class="grid grid-cols-[auto_1fr] gap-2">
						<input class="input" type="color" value={color.hex} />
						<input class="input" type="text" value={color.hex} readonly tabindex="-1" />
					</div>
				</label>
			{/each}
		</div>
	</fieldset>
	<hr class="hr" />
	<!-- Backgrounds -->
	<fieldset class="space-y-4 md:space-y-8">
		<div class="flex items-center gap-4">
			<IconBackgrounds size={24} />
			<h2 class="font-bold type-scale-3">Backgrounds</h2>
		</div>
		<div class="grid grid-cols-2 gap-4">
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
		</div>
	</fieldset>
	<hr class="hr" />
	<!-- Spacing -->
	<fieldset class="space-y-4 md:space-y-8">
		<div class="flex items-center gap-4">
			<IconScaling size={24} />
			<h2 class="font-bold type-scale-3">Scaling</h2>
		</div>
		<label class="label">
			<div class="label-text flex justify-between">
				<strong>Factor</strong>
				<span>(value)</span>
			</div>
			<input class="input" type="range" name="space-scale-factor" value="1" min="0.5" max="1.5" step="0.1" />
		</label>
	</fieldset>
	<hr class="hr" />
	<!-- Type Scale -->
	<fieldset class="space-y-4 md:space-y-8">
		<div class="flex items-center gap-4">
			<IconTypography size={24} />
			<h2 class="font-bold type-scale-3">Typography</h2>
		</div>
		<label class="label">
			<div class="label-text flex justify-between">
				<strong>Factor</strong>
				<span>(value)</span>
			</div>
			<input class="input" type="range" name="space-scale-factor" value="3" min="1" max="9" step="1" />
		</label>
	</fieldset>
	<hr class="hr" />
	<!-- Edges -->
	<fieldset class="space-y-4 md:space-y-8">
		<div class="flex items-center gap-4">
			<IconEdges size={24} />
			<h2 class="font-bold type-scale-3">Edges</h2>
		</div>
		<label class="label">
			<div class="label-text flex justify-between">
				<strong>Rounded Base</strong>
				<span>(value)</span>
			</div>
			<input class="input" type="range" name="space-scale-factor" value="8" min="4" max="32" step="4" />
		</label>
		<label class="label">
			<div class="label-text flex justify-between">
				<strong>Rounded Containers</strong>
				<span>(value)</span>
			</div>
			<input class="input" type="range" name="space-scale-factor" value="1" min="0" max="5" step="1" />
		</label>
		<div class="grid grid-cols-2 gap-8">
			<label class="label">
				<div class="label-text flex justify-between">
					<strong>Borders</strong>
					<span>(value)</span>
				</div>
				<input class="input" type="range" name="space-scale-factor" value="1" min="0" max="5" step="1" />
			</label>
			<label class="label">
				<div class="label-text flex justify-between">
					<strong>Rings</strong>
					<span>(value)</span>
				</div>
				<input class="input" type="range" name="space-scale-factor" value="1" min="0" max="5" step="1" />
			</label>
			<label class="label">
				<div class="label-text flex justify-between">
					<strong>Outlines</strong>
					<span>(value)</span>
				</div>
				<input class="input" type="range" name="space-scale-factor" value="1" min="0" max="5" step="1" />
			</label>
			<label class="label">
				<div class="label-text flex justify-between">
					<strong>Dividers</strong>
					<span>(value)</span>
				</div>
				<input class="input" type="range" name="space-scale-factor" value="1" min="0" max="5" step="1" />
			</label>
		</div>
	</fieldset>
</form>
