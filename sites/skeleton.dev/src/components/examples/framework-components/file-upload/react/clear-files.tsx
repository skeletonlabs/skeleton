import { FileUpload, useFileUpload } from '@skeletonlabs/skeleton-react';

export default function ClearFiles() {
	const fileUpload = useFileUpload({
		defaultAcceptedFiles: [new File(['file'], 'example.png', { type: 'image/png' })],
	});
	return (
		<div className="grid gap-4 w-full">
			<FileUpload.Provider value={fileUpload}>
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
			</FileUpload.Provider>
			<button className="btn preset-filled hover:preset-filled-error-500 w-fit" onClick={() => fileUpload.clearFiles()}>
				Clear Files
			</button>
		</div>
	);
}
