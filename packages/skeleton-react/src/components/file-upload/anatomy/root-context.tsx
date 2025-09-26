import type { useFileUpload } from '../modules/provider';
import { RootContext as RootContext_ } from '../modules/root-context';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface FileUploadRootContextProps {
	children: (fileUpload: ReturnType<typeof useFileUpload>) => ReactNode;
}

export default function RootContext(props: FileUploadRootContextProps) {
	const fileUpload = use(RootContext_);

	const { children } = props;

	return children(fileUpload);
}
