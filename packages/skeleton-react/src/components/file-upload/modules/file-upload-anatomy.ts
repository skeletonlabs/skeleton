import FileUploadRoot from '../anatomy/file-upload-root';
import FileUploadRootContext from '../anatomy/file-upload-root-context';
import FileUploadDropzone from '../anatomy/file-upload-dropzone';
import FileUploadHiddenInput from '../anatomy/file-upload-hidden-input';
import FileUploadTrigger from '../anatomy/file-upload-trigger';
import FileUploadItemGroup from '../anatomy/file-upload-item-group';
import FileUploadItem from '../anatomy/file-upload-item';
import fileUploadItemContext from '../anatomy/file-upload-item-context';
import FileUploadItemName from '../anatomy/file-upload-item-name';
import FileUploadItemSizeText from '../anatomy/file-upload-item-size-text';
import FileUploadItemDeleteTrigger from '../anatomy/file-upload-item-delete-trigger';

export const FileUpload = Object.assign(FileUploadRoot, {
	Context: FileUploadRootContext,
	Dropzone: FileUploadDropzone,
	Trigger: FileUploadTrigger,
	HiddenInput: FileUploadHiddenInput,
	ItemGroup: FileUploadItemGroup,
	Item: FileUploadItem,
	ItemContext: fileUploadItemContext,
	ItemName: FileUploadItemName,
	ItemSizeText: FileUploadItemSizeText,
	ItemDeleteTrigger: FileUploadItemDeleteTrigger
});
