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
				{/* Simple */}
				<FileUpload name="example" accept="image/*" maxFiles={2} onFileChange={console.log} onFileReject={console.error} />
				{/* Customized */}
				<FileUpload
					name="example"
					accept="image/*"
					maxFiles={2}
					subtext="Attach up to 2 files."
					iconInterface={<IconDropzone className="size-8" />}
					iconFile={<IconFile className="size-4" />}
					iconFileRemove={<IconRemove className="size-4" />}
					onFileChange={console.log}
					onFileReject={console.error}
				/>
			</section>
			<section className="space-y-4">
				<h2 className="h2">Button</h2>
				<FileUpload name="example-button" accept="image/*" onFileChange={console.log} maxFiles={2}>
					<button className="btn preset-filled">
						<IconUpload className="size-4" />
						<span>Select File</span>
					</button>
				</FileUpload>
			</section>
			<section className="space-y-4">
				<h2 className="h2">Disabled</h2>
				{/* Deafult */}
				<FileUpload name="example" disabled />
				<FileUpload name="example" disabled>
					<button className="btn preset-filled">Disabled</button>
				</FileUpload>
			</section>
			<section className="space-y-4">
				<h2 className="h2">RTL</h2>
				<FileUpload name="example" dir="rtl" />
			</section>
		</div>
	);
}
