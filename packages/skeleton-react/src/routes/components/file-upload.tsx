// import { useState } from 'react';
import { FileUpload } from '$lib/components/FileUpload/FileUpload.js';

import { ImagePlus as IconDropzone, Paperclip as IconFile, Upload as IconUpload, XCircle as IconRemove } from 'lucide-react';

export function Component() {
	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">File Upload</h1>
			</header>
			<section className="space-y-4">
				<h2 className="h2">Dropzone</h2>
				<FileUpload
					maxFiles={2}
					dropzoneSubtext="Attach up to 2 files."
					iconDropzone={<IconDropzone className="size-8" />}
					iconFile={<IconFile className="size-4" />}
					iconFileRemove={<IconRemove className="size-4" />}
					onFileChange={console.log}
				/>
			</section>
			<section className="space-y-4">
				<h2 className="h2">Button</h2>
				<FileUpload onFileChange={console.log} maxFiles={2}>
					<button className="btn preset-filled">
						<IconUpload className="size-4" />
						<span>Select File</span>
					</button>
				</FileUpload>
			</section>
		</div>
	);
}
