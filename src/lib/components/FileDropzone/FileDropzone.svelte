<script lang="ts">
	// Props
	/**
	 * Required. Set a unique name for the file input.
	 * @type {string}
	 */
	export let name: string;
	/** Provide classes to set the border styles. */
	export let border = 'border-2 border-dashed';
	/** Provide classes to set the padding styles. */
	export let padding = 'p-4 py-8';
	/** Provide classes to set the box radius styles. */
	export let rounded = 'rounded-container-token';

	// Props (regions)
	/** Provide abitrary styles for the UI region. */
	export let regionInterface = '';
	/** Provide abitrary styles for the UI text region. */
	export let regionInterfaceText = '';
	/** Provide abitrary styles for lead slot container. */
	export let slotLead = 'mb-4';
	/** Provide abitrary styles for message slot container. */
	export let slotMessage = '';
	/** Provide abitrary styles for meta text slot container. */
	export let slotMeta = 'opacity-75';

	const cBase = 'relative input-cell';
	const cInput = 'absolute top-0 left-0 right-0 bottom-0 z-[1] opacity-0 cursor-pointer';
	const cInterface = 'flex justify-center items-center text-center';

	// Reactive
	$: classesBase = `${cBase} ${border} ${padding} ${rounded}`;
	$: classesInput = `${cInput}`;
	$: classesInterface = `${cInterface}`;

	// Pruned RestProps
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<div class="dropzone {classesBase}">
	<!-- Input: File (hidden) -->
	<input
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
