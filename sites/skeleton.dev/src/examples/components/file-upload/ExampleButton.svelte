<script lang="ts">
	import { FileUpload } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconUpload from '@lucide/svelte/icons/upload';
</script>

<FileUpload name="example-button" accept="image/*" onFileChange={console.log} maxFiles={2}>
	<button class="btn preset-filled">
		<IconUpload class="size-4" />
		<span>Select File</span>
	</button>
</FileUpload>
