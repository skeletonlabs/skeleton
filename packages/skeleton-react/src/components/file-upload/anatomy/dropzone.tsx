import { FileUploadRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface FileUploadDropzoneProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Dropzone(props: FileUploadDropzoneProps) {
	const fileUpload = use(FileUploadRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(fileUpload.getDropzoneProps(), rest, {
		className: classesFileUpload.dropzone,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
