import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { FileUploadRootContext } from '../modules/root-context';

export interface FileUploadHiddenInputProps extends PropsWithElement<'input'>, Omit<HTMLAttributes<'input'>, 'children'> {}

export default function HiddenInput(props: FileUploadHiddenInputProps) {
	const fileUpload = use(FileUploadRootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(fileUpload.getHiddenInputProps(), rest, {
		className: classesFileUpload.hiddenInput,
	});

	return element ? element(attributes) : <input {...attributes} />;
}
