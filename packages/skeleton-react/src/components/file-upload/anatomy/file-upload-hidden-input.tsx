import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { useContext, type ComponentProps } from 'react';
import { FileUploadRootContext } from '../modules/file-upload-root-context.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';

export interface FileUploadHiddenInputProps extends PropsWithElement, Omit<ComponentProps<'input'>, 'children'> {}

export default function (props: FileUploadHiddenInputProps) {
	const rootContext = useContext(FileUploadRootContext);
	const { element, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getHiddenInputProps(),
		{
			className: classesFileUpload.hiddenInput
		},
		restAttributes
	);
	return element ? element({ attributes }) : <input {...attributes} />;
}
