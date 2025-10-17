<script lang="ts">
	import { FileUpload } from '@skeletonlabs/skeleton-svelte';
</script>

<FileUpload class="w-fit" onFileAccept={console.log}>
	<FileUpload.Trigger>Browse Files</FileUpload.Trigger>
	<FileUpload.HiddenInput />
</FileUpload>
