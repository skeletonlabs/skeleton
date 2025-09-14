import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { FileUploadRootContext } from '../modules/root-context';

export interface FileUploadItemGroupProps extends PropsWithElement<'ul'>, HTMLAttributes<'ul'> {}

export default function ItemGroup(props: FileUploadItemGroupProps) {
	const fileUpload = use(FileUploadRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(fileUpload.getItemGroupProps(), rest, {
		className: classesFileUpload.itemGroup,
	});

	return element ? element(attributes) : <ul {...attributes}>{children}</ul>;
}
