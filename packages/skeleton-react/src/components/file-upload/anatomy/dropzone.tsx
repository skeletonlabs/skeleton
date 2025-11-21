import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface FileUploadDropzoneProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Dropzone(props: FileUploadDropzoneProps) {
	const fileUpload = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		fileUpload.getDropzoneProps(),
		{
			className: classesFileUpload.dropzone,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
