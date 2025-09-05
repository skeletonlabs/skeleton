import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { FileUploadRootContext } from '../modules/file-upload-root-context';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface FileUploadDropzoneProps extends PropsWithElement, ComponentProps<'div'> {}

export default function (props: FileUploadDropzoneProps) {
	const rootContext = useContext(FileUploadRootContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getDropzoneProps(),
		{
			className: classesFileUpload.dropzone
		},
		restAttributes
	);
	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
