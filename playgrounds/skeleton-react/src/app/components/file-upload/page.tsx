'use client';

import { FileUpload } from '@skeletonlabs/skeleton-react';
import { X } from 'lucide-react';

export default function Page() {
	return (
		<FileUpload>
			<FileUpload.Dropzone>
				<FileUpload.Trigger>Upload</FileUpload.Trigger>

				<FileUpload.HiddenInput />
			</FileUpload.Dropzone>
			<FileUpload.ItemGroup>
				<FileUpload.Context>
					{(ctx) =>
						ctx.api.acceptedFiles.map((file) => (
							<FileUpload.Item key={file.name} file={file}>
								<FileUpload.ItemName>{file.name}</FileUpload.ItemName>
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
