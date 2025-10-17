import { FileUpload } from '@skeletonlabs/skeleton-react';

export default function Disabled() {
	return (
		<FileUpload disabled>
			<FileUpload.Dropzone>
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
		</FileUpload>
	);
}
