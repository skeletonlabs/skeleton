<script lang="ts">
	// Types
	import type { CssClasses } from '$lib';

	/**
	 * Required. Set a unique name for the file input.
	 * @type {string}
	 */
	export let name: string;
	/** Provide a button variant or other class styles. */
	export let button: CssClasses = 'variant-filled';

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
	<!-- NOTE: Don't use `hidden` as it prevents `required` from operating -->
	<div class="h-0 overflow-hidden">
		<input type="file" bind:this={elemFileInput} files={$$restProps.files} {name} {...prunedRestProps()} on:change />
	</div>
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
