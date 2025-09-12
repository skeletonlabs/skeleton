import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { FileUploadRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface FileUploadHiddenInputProps extends PropsWithElement, Omit<HTMLAttributes<'input'>, 'children'> {}

export default function (props: FileUploadHiddenInputProps) {
	const rootContext = useContext(FileUploadRootContext);

	const { element, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getHiddenInputProps(), { className: classesFileUpload.hiddenInput }, restAttributes);

	return element ? element({ attributes }) : <input {...attributes} />;
}
