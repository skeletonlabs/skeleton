import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { FileUploadItemContext } from '../modules/item-context';
import { FileUploadRootContext } from '../modules/root-context';

export interface FileUploadItemNameProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ItemName(props: FileUploadItemNameProps) {
	const fileUpload = use(FileUploadRootContext);
	const itemProps = use(FileUploadItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(fileUpload.getItemNameProps(itemProps), rest, {
		className: classesFileUpload.itemName,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
