<script lang="ts">
	import { FileUpload } from '../../../src/index.js';
</script>

<FileUpload data-testid="root">
	<FileUpload.Dropzone data-testid="dropzone">
		<FileUpload.HiddenInput data-testid="hidden-input" />
	</FileUpload.Dropzone>
	<FileUpload.Trigger data-testid="trigger" />
	<FileUpload.ItemGroup data-testid="item-group">
		<FileUpload.Item file={new File(['test'], 'test.txt', { type: 'text/plain' })} data-testid="item">
			<FileUpload.ItemName data-testid="item-name" />
			<FileUpload.ItemDeleteTrigger data-testid="item-delete-trigger" />
		</FileUpload.Item>
	</FileUpload.ItemGroup>
</FileUpload>
