import type { useFileUpload } from '../modules/provider.js';
import { FileUploadRootContext as RootContext_ } from '../modules/root-context.js';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface FileUploadRootContextProps {
	children: (fileUpload: ReturnType<typeof useFileUpload>) => ReactNode;
}

export default function FileUploadRootContext(props: FileUploadRootContextProps) {
	const fileUpload = use(RootContext_);

	const { children } = props;

	return children(fileUpload);
}
