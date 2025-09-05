<script lang="ts">
	import { FileUpload } from '@skeletonlabs/skeleton-svelte';
</script>

<FileUpload>
	<FileUpload.Dropzone>
		<FileUpload.Trigger>Upload</FileUpload.Trigger>
		<FileUpload.HiddenInput />
	</FileUpload.Dropzone>
	<FileUpload.ItemGroup>
		<FileUpload.Context>
			{#snippet children(ctx)}
				{#each ctx.api.acceptedFiles as file (file.name)}
					<FileUpload.Item {file}>
						<FileUpload.ItemName>{file.name}</FileUpload.ItemName>
						<FileUpload.ItemDeleteTrigger>Delete</FileUpload.ItemDeleteTrigger>
					</FileUpload.Item>
				{/each}
			{/snippet}
		</FileUpload.Context>
	</FileUpload.ItemGroup>
</FileUpload>
