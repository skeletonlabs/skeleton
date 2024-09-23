<script lang="ts">
	import { settingsSpacing } from '$lib/state/generator.svelte';
</script>

<div class="space-y-4">
	<!-- prettier-ignore -->
	<p class="opacity-60">
		Set a scale factor for all <a href="https://tailwindcss.com/docs/customizing-spacing" target="_blank" class="anchor text-primary-700-300">Tailwind Spacing</a> utility classes.
	</p>
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
