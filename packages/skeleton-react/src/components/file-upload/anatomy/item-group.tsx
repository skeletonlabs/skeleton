import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { FileUploadRootContext } from '../modules/root-context';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface FileUploadItemGroupProps extends PropsWithElement, HTMLAttributes<'ul'> {}

export default function (props: FileUploadItemGroupProps) {
	const rootContext = useContext(FileUploadRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(rootContext.api.getItemGroupProps(), { className: classesFileUpload.itemGroup }, rest);

	return element ? element({ attributes }) : <ul {...attributes}>{children}</ul>;
}
