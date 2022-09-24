<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let name: string | undefined = '';
	export let accept: string | undefined = '';
	export let multiple: boolean = false;

	let elemFileInput: HTMLElement;
	let files: any;
	$: value = multiple ? files || [] : files && files[0];

	const dispatch = createEventDispatcher();

	function onButtonClick(): void {
		elemFileInput.click();
	}
</script>

<div class="file-picker" data-testid="file-picker">
	<input {name} {accept} {multiple} bind:files bind:this={elemFileInput} type="file" class="hidden" on:change={(e) => dispatch('change', { value, nativeEvent: e })} />
	<button on:click={onButtonClick} class="btn {$$props.class}"><slot /></button>
</div>
