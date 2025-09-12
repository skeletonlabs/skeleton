<script lang="ts">
	import { FileUpload, useFileUpload } from '@skeletonlabs/skeleton-svelte';
	import X from '@lucide/svelte/icons/x';

	const id = $props.id();
	const fileUpload = useFileUpload({ id });
</script>

<FileUpload.Provider value={fileUpload}>
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
</FileUpload.Provider>

<button class="btn preset-outlined-error-500" onclick={() => fileUpload().clearFiles()}> Clear Files </button>
