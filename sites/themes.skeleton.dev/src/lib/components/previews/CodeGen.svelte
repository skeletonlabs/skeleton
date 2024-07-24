<script lang="ts">
	import { genThemeCode } from '$lib/generator.svelte';
	import { stateFormCore } from '$lib/state.svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	// FIXME: this will need a major refactor
	let theme = $derived(genThemeCode());

	const formatThemeName: HTMLInputAttributes['oninput'] = (e) => {
		if (!e.currentTarget.value) return;
		stateFormCore.name = e.currentTarget.value.replace(/[^\w]/g, ''); // [A-Za-z0-9_]
	};
</script>

<div class="space-y-4 md:space-y-8">
	<!-- Theme Name -->
	<label class="label">
		<span class="label-text">Name Your Theme</span>
		<input type="text" class="input" placeholder="ex: myCustomTheme" bind:value={stateFormCore.name} oninput={formatThemeName} />
	</label>
	<!-- prettier-ignore -->
	<pre class="pre !bg-neutral-950"><code>{`
import type { Theme } from '@skeletonlabs/skeleton/themes';\n
const ${stateFormCore.name} = ${JSON.stringify({name: stateFormCore.name, properties: theme.properties}, null, 2)} satisfies Theme;\n
export default ${stateFormCore.name};
	`.trim()}</code></pre>
</div>
