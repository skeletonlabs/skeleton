import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { FileUploadRootContext } from '../modules/file-upload-root-context';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface FileUploadItemGroupProps extends PropsWithElement, ComponentProps<'ul'> {}

export default function (props: FileUploadItemGroupProps) {
	const rootContext = useContext(FileUploadRootContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getItemGroupProps(),
		{
			className: classesFileUpload.itemGroup
		},
		restAttributes
	);
	return element ? element({ attributes }) : <ul {...attributes}>{children}</ul>;
}
