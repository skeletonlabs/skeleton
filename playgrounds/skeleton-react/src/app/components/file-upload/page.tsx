'use client';

import { FileUpload, useFileUpload } from '@skeletonlabs/skeleton-react';
import { CircleXIcon } from 'lucide-react';

export default function Page() {
	const fileUpload = useFileUpload();

	return (
		<>
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
									<FileUpload.ItemDeleteTrigger>
										<CircleXIcon />
									</FileUpload.ItemDeleteTrigger>
								</FileUpload.Item>
							))
						}
					</FileUpload.Context>
				</FileUpload.ItemGroup>
			</FileUpload.Provider>
			<button className="btn preset-outlined-error-500" onClick={() => fileUpload.clearFiles()}>
				Clear Files
			</button>
		</>
	);
}
