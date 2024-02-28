<script lang="ts">
	const scales = [
		{ value: '1.0', label: 'Base' },
		{ value: '1.067', label: 'Minor Second' },
		{ value: '1.125', label: 'Major Second' },
		{ value: '1.2', label: 'Minor Third' },
		{ value: '1.25', label: 'Major Third' },
		{ value: '1.333', label: 'Perfect Fourth' },
		{ value: '1.414', label: 'Augmented Fourth' },
		{ value: '1.5', label: 'Perfect Fifth' },
		{ value: '1.18', label: 'Golden Ratio' }
	];
	let factor = $state(0);
	let factoLabel = $derived(scales[factor].label);
	let factoValue = $derived(scales[factor].value);
</script>

<fieldset class="space-y-4 md:space-y-8">
	<!-- Factor -->
	<label class="label space-y-2">
		<div class="label-text flex justify-between">
			<strong>Typographic Scale</strong>
			<span>{factoValue} </span>
		</div>
		<input class="input" type="range" name="typography-scale-factor" bind:value={factor} min="0" max="8" step="1" />
		<div class="rounded p-4 text-center preset-filled-surface-200-800">{factoLabel}</div>
	</label>
	<!-- --- -->
	<hr class="hr" />
	<!-- Base -->
	<h2 class="h4">Base</h2>
	<div class="grid grid-cols-2 gap-4">
		<label class="label">
			<span class="label-text">Base Color</span>
			<div class="grid grid-cols-[auto_1fr] gap-2">
				<input class="input" type="color" value="#000000" />
				<input class="input" type="text" value="#000000" readonly tabindex="-1" />
			</div>
		</label>
		<label class="label">
			<span class="label-text">Dark Mode</span>
			<div class="grid grid-cols-[auto_1fr] gap-2">
				<input class="input" type="color" value="#FFFFFF" />
				<input class="input" type="text" value="#FFFFFF" readonly tabindex="-1" />
			</div>
		</label>
		<label class="label col-span-2">
			<span class="label-text">Font Family</span>
			<select name="" id="" class="select">
				<option value="">---</option>
			</select>
		</label>
		<label class="label">
			<span class="label-text">Font Size</span>
			<select name="" id="" class="select">
				<option value="">---</option>
			</select>
		</label>
		<label class="label">
			<span class="label-text">Line Height</span>
			<select name="" id="" class="select">
				<option value="">---</option>
			</select>
		</label>
		<label class="label">
			<span class="label-text">Font Style</span>
			<select name="" id="" class="select">
				<option value="">---</option>
			</select>
		</label>
		<label class="label">
			<span class="label-text">Letter Spacing</span>
			<select name="" id="" class="select">
				<option value="">---</option>
			</select>
		</label>
	</div>
	<!-- --- -->
	<hr class="hr" />
	<!-- Headings -->
	<h2 class="h4">Headings</h2>
	<div class="grid grid-cols-2 gap-4">
		<label class="label">
			<span class="label-text">Base Color</span>
			<div class="grid grid-cols-[auto_1fr] gap-2">
				<input class="input" type="color" value="#000000" />
				<input class="input" type="text" value="#000000" readonly tabindex="-1" />
			</div>
		</label>
		<label class="label">
			<span class="label-text">Dark Mode</span>
			<div class="grid grid-cols-[auto_1fr] gap-2">
				<input class="input" type="color" value="#FFFFFF" />
				<input class="input" type="text" value="#FFFFFF" readonly tabindex="-1" />
			</div>
		</label>
		<label class="label col-span-2">
			<span class="label-text">Font Family</span>
			<select name="" id="" class="select">
				<option value="">---</option>
			</select>
		</label>
		<label class="label">
			<span class="label-text">Font Size</span>
			<select name="" id="" class="select">
				<option value="">---</option>
			</select>
		</label>
		<label class="label">
			<span class="label-text">Line Height</span>
			<select name="" id="" class="select">
				<option value="">---</option>
			</select>
		</label>
		<label class="label">
			<span class="label-text">Font Style</span>
			<select name="" id="" class="select">
				<option value="">---</option>
			</select>
		</label>
		<label class="label">
			<span class="label-text">Letter Spacing</span>
			<select name="" id="" class="select">
				<option value="">---</option>
			</select>
		</label>
	</div>
	<!-- --- -->
	<hr class="hr" />
	<!-- Anchors -->
	<h2 class="h4">Anchors</h2>
	<div class="grid grid-cols-2 gap-4">
		<label class="label">
			<span class="label-text">Base Color</span>
			<div class="grid grid-cols-[auto_1fr] gap-2">
				<input class="input" type="color" value="#000000" />
				<input class="input" type="text" value="#000000" readonly tabindex="-1" />
			</div>
		</label>
		<label class="label">
			<span class="label-text">Dark Mode</span>
			<div class="grid grid-cols-[auto_1fr] gap-2">
				<input class="input" type="color" value="#FFFFFF" />
				<input class="input" type="text" value="#FFFFFF" readonly tabindex="-1" />
			</div>
		</label>
		<label class="label col-span-2">
			<span class="label-text">Font Family</span>
			<select name="" id="" class="select">
				<option value="">---</option>
			</select>
		</label>
		<label class="label">
			<span class="label-text">Font Size</span>
			<select name="" id="" class="select">
				<option value="">---</option>
			</select>
		</label>
		<label class="label">
			<span class="label-text">Line Height</span>
			<select name="" id="" class="select">
				<option value="">---</option>
			</select>
		</label>
		<label class="label">
			<span class="label-text">Font Style</span>
			<select name="" id="" class="select">
				<option value="">---</option>
			</select>
		</label>
		<label class="label">
			<span class="label-text">Letter Spacing</span>
			<select name="" id="" class="select">
				<option value="">---</option>
			</select>
		</label>
		<!-- --- -->
		<label class="label">
			<span class="label-text">Decoration</span>
			<select name="" id="" class="select">
				<option value="">---</option>
			</select>
		</label>
		<label class="label">
			<span class="label-text">Hover</span>
			<select name="" id="" class="select">
				<option value="">---</option>
			</select>
		</label>
		<label class="label">
			<span class="label-text">Active</span>
			<select name="" id="" class="select">
				<option value="">---</option>
			</select>
		</label>
		<label class="label">
			<span class="label-text">Focus</span>
			<select name="" id="" class="select">
				<option value="">---</option>
			</select>
		</label>
	</div>
</fieldset>
