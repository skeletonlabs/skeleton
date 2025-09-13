import { mergeProps } from '@zag-js/react';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { FileUploadRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { useFileUpload } from '../modules/use-file-upload';

export interface FileUploadRootProviderProps extends PropsWithElement<'div'>, Omit<HTMLAttributes<'div'>, 'id' | 'dir'> {
	value: ReturnType<typeof useFileUpload>;
}

export default function (props: FileUploadRootProviderProps) {
	const { element, children, value: fileUpload, ...rest } = props;

	const attributes = mergeProps(fileUpload.getRootProps(), rest, {
		className: classesFileUpload.root
	});

	return (
		<FileUploadRootContext.Provider value={fileUpload}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</FileUploadRootContext.Provider>
	);
}
