import FileUploadRoot from '../anatomy/file-upload-root';
import FileUploadRootContext from '../anatomy/file-upload-root-context';
import FileUploadDropzone from '../anatomy/file-upload-dropzone';
import FileUploadHiddenInput from '../anatomy/file-upload-hidden-input';
import FileUploadTrigger from '../anatomy/file-upload-trigger';
import FileUploadItemGroup from '../anatomy/file-upload-item-group';
import FileUploadItem from '../anatomy/file-upload-item';
import FileUploadItemName from '../anatomy/file-upload-item-name';
import FileUploadItemDeleteTrigger from '../anatomy/file-upload-item-delete-trigger';

export const FileUpload = Object.assign(FileUploadRoot, {
	Context: FileUploadRootContext,
	Dropzone: FileUploadDropzone,
	HiddenInput: FileUploadHiddenInput,
	Trigger: FileUploadTrigger,
	ItemGroup: FileUploadItemGroup,
	Item: FileUploadItem,
	ItemName: FileUploadItemName,
	ItemDeleteTrigger: FileUploadItemDeleteTrigger
});
