<script lang="ts">
	export let files: FileList;
	export let name: string | undefined = '';
	export let accept: string | undefined = '';
	export let multiple: boolean = false;

	let elemFileInput: HTMLElement;

	function onButtonClick(): void {
		elemFileInput.click();
	}
</script>

<div class="file-button" data-testid="file-button">
	<!-- Input: File -->
	<input bind:this={elemFileInput} bind:files type="file" {name} {accept} {multiple} class="file-button-input hidden" on:change />
	<!-- Button -->
	<button class="file-button-btn btn {$$props.class}" on:click={onButtonClick}>
		<slot />
	</button>
</div>
