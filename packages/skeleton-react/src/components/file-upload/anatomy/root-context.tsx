import { useContext, type ReactNode } from 'react';
import { FileUploadRootContext } from '../modules/root-context';

export interface FileUploadRootContextProps {
	children: (fileUpload: ReturnType<typeof useContext>) => ReactNode;
}

export default function (props: FileUploadRootContextProps) {
	const fileUpload = useContext(FileUploadRootContext);

	const { children } = props;

	return children(fileUpload);
}
