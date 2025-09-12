import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { FileUploadRootContext } from '../modules/root-context';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface FileUploadDropzoneProps extends PropsWithElement, HTMLAttributes<'div'> {}

export default function (props: FileUploadDropzoneProps) {
	const rootContext = useContext(FileUploadRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getDropzoneProps(), { className: classesFileUpload.dropzone }, restAttributes);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
