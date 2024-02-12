<form class="space-y-10">
	<!-- Spacing -->
	<fieldset class="space-y-4 md:space-y-8">
		<h2 class="font-bold type-scale-3">Scaling</h2>
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
		<h2 class="font-bold type-scale-3">Typography</h2>
		<label class="label">
			<div class="label-text flex justify-between">
				<strong>Factor</strong>
				<span>(value)</span>
			</div>
			<input class="input" type="range" name="space-scale-factor" value="3" min="1" max="9" step="1" />
		</label>
	</fieldset>
	<hr class="hr" />
	<!-- Backgrounds -->
	<fieldset class="space-y-4 md:space-y-8">
		<h2 class="font-bold type-scale-3">Backgrounds</h2>
		<label class="label">
			<div class="label-text">Base</div>
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
	<hr class="hr" />
	<!-- Edges -->
	<fieldset class="space-y-4 md:space-y-8">
		<h2 class="font-bold type-scale-3">Edges</h2>
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
	<hr class="hr" />
	<!-- Colors -->
	<fieldset class="space-y-4 md:space-y-8">
		<h2 class="font-bold type-scale-3">Colors</h2>
		<p>...</p>
	</fieldset>
</form>
