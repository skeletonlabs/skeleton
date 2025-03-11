<script lang="ts">
	import { FileUpload, type FileUploadApi } from '@skeletonlabs/skeleton-svelte';

	let api: FileUploadApi;
</script>

<section class="w-full space-y-4">
	<FileUpload name="example" accept="image/*" maxFiles={2} onApiReady={(_api) => (api = _api)} />
	<button type="button" class="btn preset-filled" onclick={() => api?.clearFiles()}>Clear Files</button>
</section>
