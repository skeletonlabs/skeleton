<script lang="ts">
	import FileIcon from '@lucide/svelte/icons/file';
	import { FileUpload } from '@skeletonlabs/skeleton-svelte';
</script>

<FileUpload class="w-full">
	<FileUpload.Dropzone>
		<FileIcon class="size-10" />
		<span>Select file or drag here.</span>
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
</FileUpload>
