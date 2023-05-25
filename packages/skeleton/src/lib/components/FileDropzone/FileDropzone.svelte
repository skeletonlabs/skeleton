<script lang="ts">
	// Types
	import type { CssClasses } from '../..';

	// Props
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
	/** Provide classes to set the border styles. */
	export let border: CssClasses = 'border-2 border-dashed';
	/** Provide classes to set the padding styles. */
	export let padding: CssClasses = 'p-4 py-8';
	/** Provide classes to set the box radius styles. */
	export let rounded: CssClasses = 'rounded-container-token';

	// Props (regions)
	/** Provide arbitrary styles for the UI region. */
	export let regionInterface: CssClasses = '';
	/** Provide arbitrary styles for the UI text region. */
	export let regionInterfaceText: CssClasses = '';

	// Props (slots)
	/** Provide arbitrary styles for lead slot container. */
	export let slotLead: CssClasses = 'mb-4';
	/** Provide arbitrary styles for message slot container. */
	export let slotMessage: CssClasses = '';
	/** Provide arbitrary styles for meta text slot container. */
	export let slotMeta: CssClasses = 'opacity-75';

	const cBase = 'textarea relative flex justify-center items-center';
	const cInput = 'w-full absolute top-0 left-0 right-0 bottom-0 z-[1] opacity-0 disabled:!opacity-0 cursor-pointer';
	const cInterface = 'flex justify-center items-center text-center';

	// Reactive
	$: classesBase = `${cBase} ${border} ${padding} ${rounded} ${$$props.class ?? ''}`;
	$: classesInput = `${cInput}`;
	$: classesInterface = `${cInterface}`;

	// Pruned RestProps
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<div class="dropzone {classesBase}" class:opacity-50={$$restProps.disabled} data-testid="file-dropzone">
	<!-- Input: File (hidden) -->
	<!-- NOTE: keep `bind:files` here, unlike FileButton -->
	<input
		bind:files
		type="file"
		{name}
		class="dropzone-input {classesInput}"
		{...prunedRestProps()}
		on:change
		on:dragenter
		on:dragover
		on:dragleave
		on:drop
		on:click
		on:keydown
		on:keyup
		on:keypress
	/>
	<!-- Interface -->
	<div class="dropzone-interface {classesInterface} {regionInterface}">
		<div class="dropzone-interface-text {regionInterfaceText}">
			<!-- Lead -->
			{#if $$slots.lead}<div class="dropzone-lead {slotLead}"><slot name="lead" /></div>{/if}
			<!-- Message -->
			<div class="dropzone-message {slotMessage}">
				<slot name="message"><strong>Upload a file</strong> or drag and drop</slot>
			</div>
			<!-- Meta Text -->
			{#if $$slots.meta}<small class="dropzone-meta {slotMeta}"><slot name="meta" /></small>{/if}
		</div>
	</div>
</div>
