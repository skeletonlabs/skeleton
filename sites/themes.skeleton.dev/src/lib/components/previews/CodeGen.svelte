<script lang="ts">
	import { genThemeCode } from '$lib/generator.svelte';
	import { stateFormCore } from '$lib/state.svelte';

	let theme = $derived(genThemeCode());
</script>

<div class="space-y-4 md:space-y-8">
	<!-- Theme Name -->
	<label class="label">
		<span class="label-text">Name Your Theme</span>
		<input type="text" class="input" placeholder="ex: my-custom-theme" bind:value={stateFormCore.name} />
	</label>
	<!-- prettier-ignore -->
	<pre class="pre"><code>{`
const ${stateFormCore.name} = ${JSON.stringify(theme.properties, null, 2)}\n
export default ${stateFormCore.name};
	`.trim()}</code></pre>
</div>
