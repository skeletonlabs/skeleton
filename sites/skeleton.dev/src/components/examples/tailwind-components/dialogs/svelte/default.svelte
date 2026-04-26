<script lang="ts">
	let dialogRef: HTMLDialogElement;

	function showModal() {
		dialogRef?.showModal();
	}

	function closeModal() {
		dialogRef?.close();
	}
</script>

<!-- Dialog -->
<dialog bind:this={dialogRef} class="dialog preset-filled-surface-100-900 animate-dialog">
	<header>
		<h2 class="h3">Hello world!</h2>
	</header>
	<article>
		<p>This is an example modal created using the native Dialog element.</p>
	</article>
	<footer class="flex justify-end">
		<form method="dialog">
			<button type="button" class="btn preset-tonal" onclick={closeModal}>Close</button>
		</form>
	</footer>
</dialog>

<!-- Trigger -->
<button class="btn preset-filled" onclick={showModal}>Open Dialog</button>
