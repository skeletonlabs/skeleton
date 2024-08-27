import { FileUpload } from '@skeletonlabs/skeleton-react';
import { Upload as IconUpload } from 'lucide-react';

export const Page: React.FC = () => {
	return (
		<FileUpload name="example-button" accept="image/*" onFileChange={console.log} maxFiles={2}>
			<button className="btn preset-filled">
				<IconUpload className="size-4" />
				<span>Select File</span>
			</button>
		</FileUpload>
	);
};
