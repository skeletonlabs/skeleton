<script lang="ts">
	import FreeBlockReact from '$lib/content/free/blocks/example/react/free-block?raw';
	import FreeBlock from '$lib/content/free/blocks/example/svelte/free-block.svelte';
	import PremiumBlockReact from '$lib/content/premium/blocks/example/react/premium-block?raw';
	import PremiumBlock from '$lib/content/premium/blocks/example/svelte/premium-block.svelte';
</script>

<div class="container-page">
	<p>Now viewing <code class="code">blocks</code></p>

	<h2>Free Block (Svelte + Rendered)</h2>

	<FreeBlock />

	<h2>Free Block (React)</h2>

	<code class="code">
		{FreeBlockReact}
	</code>

	<h2>Premium Block (Svelte + Rendered)</h2>

	<PremiumBlock />

	<h2>Premium Block (React)</h2>

	<code class="code">
		{PremiumBlockReact}
	</code>
</div>
