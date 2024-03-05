<script lang="ts">
	import { genThemeCode } from '$lib/generator.svelte';
	let theme = $derived(genThemeCode());
</script>

<div class="space-y-4 md:space-y-8">
	<pre class="pre"><code>{JSON.stringify(theme.properties, null, 2)}</code></pre>
</div>
