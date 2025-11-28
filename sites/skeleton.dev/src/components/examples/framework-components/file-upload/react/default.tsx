import { FileUpload } from '@skeletonlabs/skeleton-react';
import { FileIcon } from 'lucide-react';

export default function Default() {
	return (
		<FileUpload>
			<FileUpload.Label>Upload your files</FileUpload.Label>
			<FileUpload.Dropzone>
				<FileIcon className="size-10" />
				<span>Select file or drag here.</span>
				<FileUpload.Trigger>Browse Files</FileUpload.Trigger>
				<FileUpload.HiddenInput />
			</FileUpload.Dropzone>
			<FileUpload.ItemGroup>
				<FileUpload.Context>
					{(fileUpload) =>
						fileUpload.acceptedFiles.map((file) => (
							<FileUpload.Item key={file.name} file={file}>
								<FileUpload.ItemName>{file.name}</FileUpload.ItemName>
								<FileUpload.ItemSizeText>{file.size} bytes</FileUpload.ItemSizeText>
								<FileUpload.ItemDeleteTrigger />
							</FileUpload.Item>
						))
					}
				</FileUpload.Context>
			</FileUpload.ItemGroup>
			<FileUpload.ClearTrigger>Clear Files</FileUpload.ClearTrigger>
		</FileUpload>
	);
}
