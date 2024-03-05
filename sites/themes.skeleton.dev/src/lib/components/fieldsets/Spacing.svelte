<script lang="ts">
	import { stateFormSpacing } from '$lib/state.svelte';
</script>

<fieldset class="space-y-4 md:space-y-8">
	<header>
		<h2 class="h2">Spacing</h2>
		<p class="opacity-60">
			Define the scale factor for properties like padding, margin, width, height, gap, space, and more.
		</p>
	</header>
	<label class="label">
		<div class="label-text flex justify-between">
			<strong>Scale Factor</strong>
			<span>x {stateFormSpacing.factor}</span>
		</div>
		<input
			class="input"
			type="range"
			name="space-scale-factor"
			bind:value={stateFormSpacing.factor}
			min={0.75}
			max={1.25}
			step={0.05}
		/>
	</label>
	<!-- <hr class="hr" /> -->
	<!-- <div class="text-center opacity-60">(preview diagram)</div> -->
</fieldset>
