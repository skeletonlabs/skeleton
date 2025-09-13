import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { FileUploadRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface FileUploadHiddenInputProps extends PropsWithElement<'input'>, Omit<HTMLAttributes<'input'>, 'children'> {}

export default function (props: FileUploadHiddenInputProps) {
	const fileUpload = useContext(FileUploadRootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(fileUpload.getHiddenInputProps(), rest, {
		className: classesFileUpload.hiddenInput
	});

	return element ? element(attributes) : <input {...attributes} />;
}
