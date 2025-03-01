import { FileUpload, type FileUploadApi } from "@skeletonlabs/skeleton-react";
import { useState } from "react";

export const Page: React.FC = () => {
	const [api, setApi] = useState<FileUploadApi>();

	return (
		<section className="w-full space-y-4">
			<FileUpload
				name="example"
				accept="image/*"
				maxFiles={2}
				onApiReady={setApi}
			/>
			<button
				type="button"
				className="btn preset-filled"
				onClick={() => api?.clearFiles()}
			>
				Clear Files
			</button>
		</section>
	);
};
