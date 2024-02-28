<script lang="ts">
	import IconSun from 'lucide-svelte/icons/sun';
	import IconMoon from 'lucide-svelte/icons/moon';
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
</script>

<div class="space-y-4 md:space-y-8">
	<!-- Backgrounds -->
	<fieldset class="space-y-4 md:space-y-8">
		<h2 class="h4">Backgrounds</h2>
		<label class="label">
			<div class="label-text">Base Color</div>
			<div class="grid grid-cols-[auto_1fr] gap-2">
				<input class="input" type="color" value="#FFFFFF" />
				<input class="input" type="text" value="#FFFFFF" tabindex="-1" />
			</div>
		</label>
		<label class="label">
			<div class="label-text">Dark Mode</div>
			<div class="grid grid-cols-[auto_1fr] gap-2">
				<input class="input" type="color" value="#000000" />
				<input class="input" type="text" value="#000000" tabindex="-1" />
			</div>
		</label>
	</fieldset>
	<!-- --- -->
	<hr class="hr" />
	<!-- Palette -->
	<fieldset class="space-y-4 md:space-y-8">
		<h2 class="h4">Palette</h2>
		{#each seedColors as color}
			<div class="grid grid-cols-[1fr_auto_auto] gap-4">
				<label class="label">
					<div class="label-text capitalize">{color.label}</div>
					<div class="grid grid-cols-[auto_1fr] gap-2">
						<input class="input" type="color" value={color.hex} />
						<input class="input" type="text" value={color.hex} tabindex="-1" />
					</div>
				</label>
				<label class="label">
					<div class="label-text flex justify-center">&nbsp;<IconSun size={12} />&nbsp;</div>
					<input class="input" type="color" value="#000000" />
				</label>
				<label class="label">
					<div class="label-text flex justify-center">&nbsp;<IconMoon size={12} />&nbsp;</div>
					<input class="input" type="color" value="#FFFFFF" />
				</label>
				<label class="label col-span-3">
					<div class="label-text flex justify-between">
						<strong>Contrast</strong>
						<span>(value)</span>
					</div>
					<input class="input" type="range" name="contrast" value="6" min="1" max="11" step="1" />
				</label>
			</div>
			<hr class="hr" />
		{/each}
	</fieldset>
</div>
