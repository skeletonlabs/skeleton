import { useContext, type ReactNode } from 'react';
import { FileUploadItemContext, type FileUploadItemContextType } from '../modules/item-context';

export interface FileUploadItemContextProps {
	children: (context: FileUploadItemContextType) => ReactNode;
}

export default function (props: FileUploadItemContextProps) {
	const itemContext = useContext(FileUploadItemContext);

	return props.children(itemContext);
}
