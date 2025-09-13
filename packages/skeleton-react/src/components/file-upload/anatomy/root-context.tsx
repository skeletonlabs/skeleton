import { useContext, type ReactNode } from 'react';
import { FileUploadRootContext } from '../modules/root-context';
import type { useFileUpload } from '../modules/use-file-upload';

export interface FileUploadRootContextProps {
	children: (fileUpload: ReturnType<typeof useFileUpload>) => ReactNode;
}

export default function (props: FileUploadRootContextProps) {
	const fileUpload = useContext(FileUploadRootContext);

	const { children } = props;

	return children(fileUpload);
}
