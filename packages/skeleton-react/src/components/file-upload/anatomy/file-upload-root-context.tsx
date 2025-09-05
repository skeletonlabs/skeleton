import { useContext, type ReactNode } from 'react';
import { FileUploadRootContext, type FileUploadRootContextType } from '../modules/file-upload-root-context';

export interface FileUploadRootContextProps {
	children: (context: FileUploadRootContextType) => ReactNode;
}

export default function (props: FileUploadRootContextProps) {
	const rootContext = useContext(FileUploadRootContext);
	return props.children(rootContext);
}
