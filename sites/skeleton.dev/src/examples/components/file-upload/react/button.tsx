import { FileUpload } from '@skeletonlabs/skeleton-react';

export default function Button() {
	return (
		<FileUpload className="w-full">
			<FileUpload.Trigger>Browse Files</FileUpload.Trigger>
			<FileUpload.HiddenInput />
		</FileUpload>
	);
}
