<script lang="ts">
	let dialogRef: HTMLDialogElement;

	function toggle() {
		if (!dialogRef) return;
		if (dialogRef.open) {
			dialogRef.close();
		} else {
			dialogRef.show();
		}
	}
</script>

<div class="relative">
	<!-- Dialog -->
	<dialog
		bind:this={dialogRef}
		closedby="any"
		class="dialog preset-filled-surface-100-900 animate-dialog bottom-full mb-2 whitespace-nowrap [--dialog-left:50%] [--dialog-top:auto] [--dialog-translate:-50%_0]"
	>
		<p>This acts as a tooltip.</p>
	</dialog>

	<!-- Trigger -->
	<button class="btn preset-filled" onclick={toggle}>Toggle Dialog</button>
</div>
