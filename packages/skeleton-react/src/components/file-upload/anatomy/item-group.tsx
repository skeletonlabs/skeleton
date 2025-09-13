import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { FileUploadRootContext } from '../modules/root-context';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface FileUploadItemGroupProps extends PropsWithElement<'ul'>, HTMLAttributes<'ul'> {}

export default function (props: FileUploadItemGroupProps) {
	const fileUpload = useContext(FileUploadRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(fileUpload.getItemGroupProps(), rest, {
		className: classesFileUpload.itemGroup
	});

	return element ? element(attributes) : <ul {...attributes}>{children}</ul>;
}
