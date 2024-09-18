<script lang="ts">
	import { settingsCore } from '$lib/state/state.svelte';
</script>

<div class="p-5">
	<input class="input" type="text" placeholder="Enter theme name..." bind:value={settingsCore.name} />
</div>
