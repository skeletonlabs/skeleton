import { FileUpload, useFileUpload } from '@skeletonlabs/skeleton-react';

export default function ClearFiles() {
	const fileUpload = useFileUpload({
		defaultAcceptedFiles: [new File(['file'], 'example.png', { type: 'image/png' })],
	});
	return (
		<div className="grid gap-4 w-full">
			<FileUpload.Provider value={fileUpload}>
				<FileUpload.Label>Upload your files</FileUpload.Label>
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

			{/* Clear Button */}
			<div className="card p-4 preset-outlined-primary-200-800 flex justify-center items-center">
				<button className="btn preset-filled-primary-500" onClick={() => fileUpload.clearFiles()}>
					Clear Files
				</button>
			</div>
		</div>
	);
}
