<script lang="ts">
	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	// Base Classes
	const cBase = 'relative';
</script>

<!-- @component This example creates an embedded video modal. -->

<div class="modal-example-form {cBase}">
	<button class="absolute -top-4 -right-4 z-1 btn-icon btn-filled" on:click={parent.onClose}>✕</button>
	<iframe
		class="w-full aspect-video rounded-container-token overflow-hidden"
		src="https://www.youtube.com/embed/vOGhAV-84iI"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
</div>
