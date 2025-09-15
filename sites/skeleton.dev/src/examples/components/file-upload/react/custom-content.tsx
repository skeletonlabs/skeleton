import { FileUpload } from '@skeletonlabs/skeleton-react';
import { CircleXIcon, FileIcon } from 'lucide-react';

export default function Default() {
	return (
		<FileUpload className="w-full">
			<FileUpload.Dropzone>
				<FileIcon className="size-10" />
				<p>Select file or drag here.</p>
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
								<FileUpload.ItemDeleteTrigger>
									<CircleXIcon />
								</FileUpload.ItemDeleteTrigger>
							</FileUpload.Item>
						))
					}
				</FileUpload.Context>
			</FileUpload.ItemGroup>
		</FileUpload>
	);
}
