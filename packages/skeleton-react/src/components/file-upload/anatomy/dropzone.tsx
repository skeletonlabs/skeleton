import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { FileUploadRootContext } from '../modules/root-context';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface FileUploadDropzoneProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function (props: FileUploadDropzoneProps) {
	const fileUpload = useContext(FileUploadRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(fileUpload.getDropzoneProps(), rest, {
		className: classesFileUpload.dropzone
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
