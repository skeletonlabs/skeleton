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
<dialog
	bind:this={dialogRef}
	role="alertdialog"
	aria-labelledby="alertdialog-title"
	aria-describedby="alertdialog-description"
	class="dialog animate-dialog preset-filled-error-500 [--dialog-backdrop:color-mix(in_oklab,var(--color-error-50-950)_75%,transparent)]"
>
	<header>
		<h2 id="alertdialog-title" class="h3">Discard changes?</h2>
	</header>
	<article>
		<p id="alertdialog-description">You have unsaved changes that will be lost. This action cannot be undone.</p>
	</article>
	<footer class="flex justify-end gap-2">
		<button type="button" class="btn preset-tonal" onclick={closeModal}>Cancel</button>
		<button type="button" class="btn preset-filled" onclick={closeModal}>Discard</button>
	</footer>
</dialog>

<!-- Trigger -->
<button class="btn preset-filled" onclick={showModal}>Open Dialog</button>
