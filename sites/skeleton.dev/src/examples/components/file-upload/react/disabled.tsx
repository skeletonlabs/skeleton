import { FileUpload } from '@skeletonlabs/skeleton-react';
import { X } from 'lucide-react';

export default function Disabled() {
	return (
		<FileUpload disabled={true} className="w-full">
			<FileUpload.Dropzone>
				<FileUpload.Trigger>Upload</FileUpload.Trigger>
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
									<X />
								</FileUpload.ItemDeleteTrigger>
							</FileUpload.Item>
						))
					}
				</FileUpload.Context>
			</FileUpload.ItemGroup>
		</FileUpload>
	);
}
