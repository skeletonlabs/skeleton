<script lang="ts">
	let factor = $state(1.0);
</script>

<fieldset class="space-y-4 md:space-y-8">
	<label class="label">
		<div class="label-text flex justify-between">
			<strong>Factor</strong>
			<span>x {factor}</span>
		</div>
		<input class="input" type="range" name="space-scale-factor" bind:value={factor} min={0.5} max={1.5} step={0.1} />
	</label>
</fieldset>
