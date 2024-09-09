import { FileUpload, type FileUploadApi } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	// API Reference
	let apiRef: FileUploadApi;

	return (
		<section className="w-full space-y-4">
			<FileUpload name="example" accept="image/*" maxFiles={2} internalApi={(api) => (apiRef = api)} />
			<button
				type="button"
				className="btn preset-filled"
				onClick={() => {
					apiRef.clearFiles();
				}}
			>
				Clear Files
			</button>
		</section>
	);
};
