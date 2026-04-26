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
<dialog bind:this={dialogRef} closedby="any" class="dialog preset-filled-surface-100-900 animate-dialog">
	<header>
		<h2 class="h3">Click outside to close</h2>
	</header>
	<article>
		<p>This dialog supports light dismiss. Click the backdrop or press Esc to close.</p>
	</article>
	<footer class="flex justify-end">
		<form method="dialog">
			<button type="button" class="btn preset-tonal" onclick={closeModal}>Close</button>
		</form>
	</footer>
</dialog>

<!-- Trigger -->
<button class="btn preset-filled" onclick={showModal}>Open Dialog</button>
