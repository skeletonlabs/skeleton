import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { type Props, splitProps } from '@zag-js/file-upload';
import { mergeProps } from '@zag-js/react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { FileUploadRootContext } from '../modules/root-context';
import { useFileUpload } from '../modules/use-file-upload';

export interface FileUploadRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, Omit<HTMLAttributes<'div'>, 'id' | 'dir'> {}

export default function Root(props: FileUploadRootProps) {
	const [fileUploadProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const fileUpload = useFileUpload(fileUploadProps);

	const attributes = mergeProps(fileUpload.getRootProps(), rest, {
		className: classesFileUpload.root,
	});

	return (
		<FileUploadRootContext.Provider value={fileUpload}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</FileUploadRootContext.Provider>
	);
}
