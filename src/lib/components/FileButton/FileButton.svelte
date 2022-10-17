<script lang="ts">
	export let files: FileList;
	export let button: string = 'btn-filled-accent';

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
	<input bind:this={elemFileInput} bind:files type="file" {...prunedRestProps()} class="file-button-input hidden" on:change />
	<!-- Button -->
	<button class="file-button-btn btn {button}" on:click={onButtonClick}>
		<slot />
	</button>
</div>
