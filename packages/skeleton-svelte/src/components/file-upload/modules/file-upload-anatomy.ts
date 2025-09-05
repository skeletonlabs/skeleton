import FileUploadRoot from '../anatomy/file-upload-root.svelte';
import FileUploadRootContext from '../anatomy/file-upload-root-context.svelte';
import FileUploadDropzone from '../anatomy/file-upload-dropzone.svelte';
import FileUploadTrigger from '../anatomy/file-upload-trigger.svelte';
import FileUploadHiddenInput from '../anatomy/file-upload-hidden-input.svelte';
import FileUploadItemGroup from '../anatomy/file-upload-item-group.svelte';
import FileUploadItem from '../anatomy/file-upload-item.svelte';
import FileUploadItemContext from '../anatomy/file-upload-item-context.svelte';
import FileUploadItemName from '../anatomy/file-upload-item-name.svelte';
import FileUploadItemSizeText from '../anatomy/file-upload-item-size-text.svelte';
import FileUploadItemDeleteTrigger from '../anatomy/file-upload-item-delete-trigger.svelte';

export const FileUpload = Object.assign(FileUploadRoot, {
	Context: FileUploadRootContext,
	Dropzone: FileUploadDropzone,
	Trigger: FileUploadTrigger,
	HiddenInput: FileUploadHiddenInput,
	ItemGroup: FileUploadItemGroup,
	Item: FileUploadItem,
	ItemContext: FileUploadItemContext,
	ItemName: FileUploadItemName,
	ItemSizeText: FileUploadItemSizeText,
	ItemDeleteTrigger: FileUploadItemDeleteTrigger
});
