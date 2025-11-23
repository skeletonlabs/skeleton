<script lang="ts">
	import { FileUpload, useFileUpload } from '@skeletonlabs/skeleton-svelte';

	const id = $props.id();
	const fileUpload = useFileUpload({
		id,
		defaultAcceptedFiles: [new File(['file'], 'example.png', { type: 'image/png' })],
	});
</script>

<div class="grid gap-4 w-full">
	<FileUpload.Provider value={fileUpload}>
		<FileUpload.Label>Upload your files</FileUpload.Label>
		<FileUpload.Dropzone>
			<FileUpload.Trigger>Browse Files</FileUpload.Trigger>
			<FileUpload.HiddenInput />
		</FileUpload.Dropzone>
		<FileUpload.ItemGroup>
			<FileUpload.Context>
				{#snippet children(fileUpload)}
					{#each fileUpload().acceptedFiles as file (file.name)}
						<FileUpload.Item {file}>
							<FileUpload.ItemName>{file.name}</FileUpload.ItemName>
							<FileUpload.ItemSizeText>{file.size} bytes</FileUpload.ItemSizeText>
							<FileUpload.ItemDeleteTrigger />
						</FileUpload.Item>
					{/each}
				{/snippet}
			</FileUpload.Context>
		</FileUpload.ItemGroup>
	</FileUpload.Provider>

	<!-- Clear Button -->
	<div class="card p-4 preset-outlined-primary-200-800 flex justify-center items-center">
		<button class="btn preset-filled-primary-500" onclick={() => fileUpload().clearFiles()}>Clear Files</button>
	</div>
</div>
