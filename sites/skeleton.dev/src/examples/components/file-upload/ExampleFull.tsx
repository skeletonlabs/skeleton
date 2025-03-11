import { FileUpload } from '@skeletonlabs/skeleton-react';
import { ImagePlus as IconDropzone, Paperclip as IconFile, XCircle as IconRemove } from 'lucide-react';

export const Page: React.FC = () => {
	return (
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
			classes="w-full"
		/>
	);
};
