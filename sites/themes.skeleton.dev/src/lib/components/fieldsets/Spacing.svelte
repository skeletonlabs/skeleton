<script lang="ts">
	import { stateFormSpacing } from '$lib/state.svelte';
</script>

<fieldset class="space-y-4 md:space-y-8">
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
			min={0.5}
			max={1.5}
			step={0.1}
		/>
	</label>
	<!-- <hr class="hr" /> -->
	<!-- <div class="text-center opacity-60">(preview diagram)</div> -->
</fieldset>
