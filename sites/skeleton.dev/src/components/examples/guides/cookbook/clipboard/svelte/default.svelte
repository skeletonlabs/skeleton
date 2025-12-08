<script lang="ts">
	async function handleCopy() {
		const data = 'Hello World!';
		await navigator.clipboard.writeText(data);
		alert(`Copied "${data}" to clipboard!`);
	}
</script>

<button class="btn preset-filled" onclick={handleCopy}>Copy to Clipboard</button>
