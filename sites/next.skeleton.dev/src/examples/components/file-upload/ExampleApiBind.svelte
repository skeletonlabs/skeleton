<script lang="ts">
	import { FileUpload, type FileUploadApi } from '@skeletonlabs/skeleton-svelte';

	// API Reference
	let apiRef: FileUploadApi;
</script>

<section class="w-full space-y-4">
	<FileUpload name="example" accept="image/*" maxFiles={2} bind:internalApi={apiRef} />
	<button type="button" class="btn preset-filled" onclick={apiRef.clearFiles}>Clear Files</button>
</section>
