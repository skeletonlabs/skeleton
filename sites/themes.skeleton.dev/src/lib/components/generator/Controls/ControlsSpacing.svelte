<script lang="ts">
	import { settingsSpacing } from '$lib/state/generator.svelte';
</script>

<div class="space-y-4">
	<!-- prettier-ignore -->
	<p class="opacity-60">
		Set the scale factor for <a href="https://tailwindcss.com/docs/customizing-spacing" target="_blank" class="text-inherit underline">Tailwind Spacing</a> utilities.
	</p>
	<label class="label">
		<div class="label-text flex justify-between items-center">
			<span>Scale Factor</span>
			<span class="opacity-60">x {settingsSpacing['--spacing']}</span>
		</div>
		<input class="input" type="range" name="space-scale-factor" bind:value={settingsSpacing['--spacing']} min={0.1} max={0.5} step={0.05} />
	</label>
</div>
