<script lang="ts">
	/**
	 * Required. Set a unique name for the file input.
	 * @type {string}
	 */
	export let name: string;
	/** Provide a button variant or other class styles. */
	export let button = 'variant-filled';

	let elemFileInput: HTMLElement;

	function onButtonClick(): void {
		elemFileInput.click();
	}

	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<div class="file-button {$$props.class ?? ''}" data-testid="file-button">
	<!-- Input: File -->
	<input
		type="file"
		bind:this={elemFileInput}
		files={$$restProps.files}
		{name}
		{...prunedRestProps()}
		class="file-button-input hidden"
		on:change
	/>
	<!-- Button -->
	<button
		type="button"
		class="file-button-btn btn {button}"
		disabled={$$restProps.disabled}
		on:click={onButtonClick}
		on:keydown
		on:keyup
		on:keypress
	>
		<slot>Select a File</slot>
	</button>
</div>
