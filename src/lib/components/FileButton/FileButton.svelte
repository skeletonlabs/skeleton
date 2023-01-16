<script lang="ts">
	/**
	 * Bind your file data for the file input.
	 * @type {FileList}
	 */
	export let files: FileList;
	/** Provide a button variant or other class styles. */
	export let button = 'btn-filled-secondary';

	// Props (class)
	let klass = '';
	export { klass as class };

	export let disabled = false;

	let elemFileInput: HTMLElement;

	function onButtonClick(): void {
		elemFileInput.click();
	}
</script>

<div class="file-button {klass}" data-testid="file-button">
	<!-- Input: File -->
	<input bind:this={elemFileInput} bind:files type="file" {disabled} {...$$restProps} class="file-button-input hidden" on:change />
	<!-- Button -->
	<button class="file-button-btn btn {button}" type="button" {disabled} on:click={onButtonClick} on:keydown on:keyup on:keypress>
		<slot />
	</button>
</div>
