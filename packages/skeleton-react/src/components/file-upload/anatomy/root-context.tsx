import { FileUploadRootContext } from '../modules/root-context';
import type { useFileUpload } from '../modules/use-file-upload';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface FileUploadRootContextProps {
	children: (fileUpload: ReturnType<typeof useFileUpload>) => ReactNode;
}

export default function RootContext(props: FileUploadRootContextProps) {
	const fileUpload = use(FileUploadRootContext);

	const { children } = props;

	return children(fileUpload);
}
