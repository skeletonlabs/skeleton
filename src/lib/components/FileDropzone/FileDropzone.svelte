<script lang="ts">
	import { createEventDispatcher } from 'svelte/internal';

	// Event Dispatcher
	const dispatch = createEventDispatcher();

	// Props
	export let files: FileList;
	export let name: string | undefined = undefined;
	export let accept: string | undefined = undefined;
	export let multiple: boolean = false;
	export let notes: string | undefined = undefined;
	// Props (Styles)
	export let width: string = 'w-full';
	export let height: string = 'h-24';
	export let padding: string = 'p-4';
	export let color: string | undefined = undefined;

	// Classes
	const cBase: string = 'relative';
	const cMessage: string = 'absolute top-0 left-0 right-0 bottom-0 z-[1] max-w-[480px] mx-auto flex justify-center items-center !pointer-events-none';
	const cInput: string = '!border-2 border-dashed cursor-pointer';

	// Local
	let elemIcon: HTMLElement;

	// Drag and Drop Event Handlers
	// Handles icon animation and passes events up
	function onDragOver(event: DragEvent): void {
		dispatch('dragover', event);
		elemIcon?.classList.add('animate-bounce');
	}
	function onDragLeave(event: DragEvent): void {
		dispatch('dragleave', event);
		elemIcon?.classList.remove('animate-bounce');
	}
	function onDrop(event: DragEvent): void {
		dispatch('drop', event);
		elemIcon?.classList.remove('animate-bounce');
	}

	// Reactive
	$: classesBase = `${cBase} ${width} ${$$props.class ?? ''}`;
	$: classesMessage = `${cMessage} ${color} ${height} ${padding}`;
	$: classesInput = `${cInput} ${height} ${padding}`;
</script>

<div class="file-dropzone {classesBase}" data-testid="file-dropzone" on:dragenter on:dragover={onDragOver} on:dragleave={onDragLeave} on:drop={onDrop}>
	<!-- Message -->
	<div class="file-dropzone-message {classesMessage}">
		<!-- Slot: Default -->
		<slot>
			<!-- Default Message -->
			<div class="grid grid-cols-[auto_1fr] gap-4">
				<!-- Icon -->
				<div class="text-4xl flex justify-center items-center" bind:this={elemIcon}>&darr;</div>
				<!-- Text -->
				<div class="flex flex-col justify-center items-start space-y-0">
					<div class="text-base font-bold">Drop files or click to select.</div>
					{#if notes}<div class="text-sm opacity-70">{@html notes}</div>{/if}
				</div>
			</div>
		</slot>
	</div>
	<!-- Input: File -->
	<input bind:files type="file" {name} {accept} {multiple} class="file-dropzone-input {classesInput}" on:change />
</div>

<style lang="postcss">
	/* Hide Input:File Content */
	input[type='file'] {
		@apply text-transparent;
	}
	::-webkit-file-upload-button {
		@apply hidden;
	}
	::file-selector-button {
		@apply hidden;
	}
</style>
