<script lang="ts">
	// Types
	import type { CssClasses } from '../..';

	//Props
	/**
	 * Bind FileList to the file input.
	 * @type {FileList}
	 */
	export let files: FileList | undefined = undefined;
	/**
	 * Required. Set a unique name for the file input.
	 * @type {string}
	 */
	export let name: string;
	/** Provide classes to set the width. */
	export let width: CssClasses = '';
	/** Provide a button variant or other class styles. */
	export let button: CssClasses = 'variant-filled';

	// Classes
	const cButton = 'btn';

	// Local
	let elemFileInput: HTMLElement;

	function onButtonClick(): void {
		elemFileInput.click();
	}

	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}

	// Reactive
	$: classesBase = `${$$props.class ?? ''}`;
	$: classesButton = `${cButton} ${button} ${width}`;
</script>

<div class="file-button {classesBase}" data-testid="file-button">
	<!-- NOTE: Don't use `hidden` as it prevents `required` from operating -->
	<div class="w-0 h-0 overflow-hidden">
		<input type="file" bind:this={elemFileInput} bind:files {name} {...prunedRestProps()} on:change />
	</div>
	<!-- Button -->
	<button
		type="button"
		class="file-button-btn {classesButton}"
		disabled={$$restProps.disabled}
		on:click={onButtonClick}
		on:keydown
		on:keyup
		on:keypress
	>
		<slot>Select a File</slot>
	</button>
</div>
