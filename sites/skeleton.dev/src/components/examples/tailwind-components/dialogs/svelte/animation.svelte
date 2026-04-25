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
<dialog bind:this={dialogRef} class="dialog animate-dialog preset-filled-surface-100-900">
	<header>
		<h2 class="h3">Hello world!</h2>
	</header>
	<article>
		<p>Opening and closing this dialog fades the surface and backdrop.</p>
	</article>
	<footer class="flex justify-end">
		<form method="dialog">
			<button type="button" class="btn preset-tonal" onclick={closeModal}>Close</button>
		</form>
	</footer>
</dialog>

<!-- Trigger -->
<button class="btn preset-filled" onclick={showModal}>Open Dialog</button>
