<script lang="ts">
	let dialogRef: HTMLDialogElement;
	let result = $state('—');

	function showModal() {
		dialogRef?.showModal();
	}

	function onClose() {
		result = dialogRef.returnValue || '(dismissed)';
	}
</script>

<!-- Dialog -->
<dialog bind:this={dialogRef} onclose={onClose} class="dialog preset-filled-surface-100-900 animate-dialog">
	<header>
		<h2 class="h3">Confirm action</h2>
	</header>
	<article>
		<p>Submitting either button closes the dialog and exposes its value via the dialog's returnValue.</p>
	</article>
	<footer class="flex justify-end gap-2">
		<form method="dialog" class="flex gap-2">
			<button type="submit" value="cancel" class="btn preset-tonal">Cancel</button>
			<button type="submit" value="confirm" class="btn preset-filled">Confirm</button>
		</form>
	</footer>
</dialog>

<!-- Trigger -->
<div class="flex flex-col items-center gap-3">
	<button class="btn preset-filled" onclick={showModal}>Open Dialog</button>
	<p class="text-sm opacity-75">Last result: <code>{result}</code></p>
</div>
