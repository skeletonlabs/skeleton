import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface FileUploadHiddenInputProps extends PropsWithElement<'input'>, Omit<HTMLAttributes<'input'>, 'children'> {}

export default function HiddenInput(props: FileUploadHiddenInputProps) {
	const fileUpload = use(RootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		fileUpload.getHiddenInputProps(),
		{
			className: classesFileUpload.hiddenInput,
		},
		rest,
	);

	return element ? element(attributes) : <input {...attributes} />;
}
