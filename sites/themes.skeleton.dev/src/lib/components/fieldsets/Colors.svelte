<script lang="ts">
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

<fieldset class="space-y-4 md:space-y-8">
	{#each seedColors as color}
		<div class="grid grid-cols-2 gap-4">
			<label class="label col-span-2">
				<div class="label-text capitalize">{color.label}</div>
				<div class="grid grid-cols-[auto_1fr] gap-2">
					<input class="input" type="color" value={color.hex} />
					<input class="input" type="text" value={color.hex} readonly tabindex="-1" />
				</div>
			</label>
			<label class="label">
				<div class="label-text capitalize">Light Contrast</div>
				<div class="grid grid-cols-[auto_1fr] gap-2">
					<input class="input" type="color" value="#000000" />
					<input class="input" type="text" value="#000000" readonly tabindex="-1" />
				</div>
			</label>
			<label class="label">
				<div class="label-text capitalize">Dark Contrast</div>
				<div class="grid grid-cols-[auto_1fr] gap-2">
					<input class="input" type="color" value="#FFFFFF" />
					<input class="input" type="text" value="#FFFFFF" readonly tabindex="-1" />
				</div>
			</label>
			<label class="label col-span-2">
				<div class="label-text flex justify-between">
					<strong>Breakpoint</strong>
					<span>(value)</span>
				</div>
				<input class="input" type="range" name="contrast" value="6" min="1" max="11" step="1" />
			</label>
		</div>
		<hr class="hr" />
	{/each}
</fieldset>
