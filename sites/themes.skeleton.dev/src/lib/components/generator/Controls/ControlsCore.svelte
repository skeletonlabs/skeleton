<script lang="ts">
	import { settingsCore } from '$lib/state/generator.svelte';
</script>

<div class="p-5">
	<div class="field-group grid-cols-[auto_1fr]">
		<label class="label label-text preset-tonal" for="theme-name">Theme Name</label>
		<input class="input" type="text" id="theme-name" placeholder="Enter name..." bind:value={settingsCore.name} />
	</div>
</div>
