<script lang="ts">
	let value = $state('Hello Skeleton');

	async function handleCopy() {
		await navigator.clipboard.writeText(value);
		alert(`Copied "${value}" to clipboard!`);
	}
</script>

<div class="flex items-center gap-4">
	<input type="text" class="input" bind:value />
	<button class="btn preset-filled" onclick={handleCopy}>Copy</button>
</div>
