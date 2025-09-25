import { FileUploadRootContext } from '../modules/root-context';
import { useFileUpload } from '../modules/use-file-upload';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { splitProps } from '@zag-js/file-upload';
import type { Props } from '@zag-js/file-upload';
import { mergeProps } from '@zag-js/react';

export interface FileUploadRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, Omit<HTMLAttributes<'div'>, 'id' | 'dir'> {}

export default function Root(props: FileUploadRootProps) {
	const [fileUploadProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const fileUpload = useFileUpload(fileUploadProps);

	const attributes = mergeProps(
		fileUpload.getRootProps(),
		{
			className: classesFileUpload.root,
		},
		rest,
	);

	return (
		<FileUploadRootContext.Provider value={fileUpload}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</FileUploadRootContext.Provider>
	);
}
