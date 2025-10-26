<script lang="ts">
	import { FileUpload } from '@/index.js';
</script>

<FileUpload data-testid="root">
	<FileUpload.Label data-testid="label" />
	<FileUpload.Dropzone data-testid="dropzone">
		<FileUpload.Trigger data-testid="trigger" />
		<FileUpload.HiddenInput data-testid="hidden-input" />
	</FileUpload.Dropzone>
	<FileUpload.ItemGroup data-testid="item-group">
		<FileUpload.Item file={new File(['test'], 'test.txt', { type: 'text/plain' })} data-testid="item">
			<FileUpload.ItemName data-testid="item-name" />
			<FileUpload.ItemSizeText data-testid="item-size-text" />
			<FileUpload.ItemDeleteTrigger data-testid="item-delete-trigger" />
		</FileUpload.Item>
	</FileUpload.ItemGroup>
</FileUpload>
