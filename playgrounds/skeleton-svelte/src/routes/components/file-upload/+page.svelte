<script lang="ts">
	import { FileUpload } from '@skeletonlabs/skeleton-svelte';
	import X from '@lucide/svelte/icons/x';
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
						<FileUpload.ItemSizeText>{file.size} bytes</FileUpload.ItemSizeText>
						<FileUpload.ItemDeleteTrigger><X /></FileUpload.ItemDeleteTrigger>
					</FileUpload.Item>
				{/each}
			{/snippet}
		</FileUpload.Context>
	</FileUpload.ItemGroup>
</FileUpload>
