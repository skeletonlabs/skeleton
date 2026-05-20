<script lang="ts">
	import FreeBlock from '$lib/tiers/free/free-block.svelte';
	import PremiumBlock from '$lib/tiers/premium/premium-block.svelte';
</script>

<div class="container-page">
	<p>Now viewing <code class="code">blocks</code></p>

	<FreeBlock />

	<PremiumBlock />
</div>
