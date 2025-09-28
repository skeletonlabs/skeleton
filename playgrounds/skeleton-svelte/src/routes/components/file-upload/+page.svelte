<script lang="ts">
	import { FileUpload, useFileUpload } from '@skeletonlabs/skeleton-svelte';

	const id = $props.id();
	const fileUpload = useFileUpload({ id, disabled: false });
</script>

<FileUpload.Provider value={fileUpload}>
	<FileUpload.Label>Label</FileUpload.Label>
	<FileUpload.Dropzone>
		<div>Select file or drag here.</div>
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

<button class="btn preset-outlined-error-500" onclick={() => fileUpload().clearFiles()}> Clear Files </button>
