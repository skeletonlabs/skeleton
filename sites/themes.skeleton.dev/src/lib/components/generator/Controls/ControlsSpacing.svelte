<script lang="ts">
	import { settingsSpacing } from '$lib/state/generator.svelte';
</script>

<div class="space-y-4">
	<p class="opacity-60">Define the scale factor for properties like padding, margin, width, height, gap, space, and more.</p>
	<label class="label">
		<div class="label-text flex justify-between items-center">
			<span>Scale Factor</span>
			<span class="opacity-60">x {settingsSpacing['--space-scale-factor']}</span>
		</div>
		<input
			class="input"
			type="range"
			name="space-scale-factor"
			bind:value={settingsSpacing['--space-scale-factor']}
			min={0.75}
			max={1.25}
			step={0.05}
		/>
	</label>
</div>
