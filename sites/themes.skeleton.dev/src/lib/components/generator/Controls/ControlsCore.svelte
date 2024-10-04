<script lang="ts">
	import { settingsCore } from '$lib/state/generator.svelte';
</script>

<div class="p-5">
	<input class="input" type="text" placeholder="Name your theme..." bind:value={settingsCore.name} />
</div>
