import { FileUpload } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	return (
		<FileUpload name="example" accept="image/*" maxFiles={2} onFileChange={console.log} onFileReject={console.error} classes="w-full" />
	);
};
