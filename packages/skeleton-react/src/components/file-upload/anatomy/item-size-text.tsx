import { FileUploadItemContext } from '../modules/item-context';
import { FileUploadRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface FileUploadItemSizeTextProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ItemSizeText(props: FileUploadItemSizeTextProps) {
	const fileUpload = use(FileUploadRootContext);
	const itemProps = use(FileUploadItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		fileUpload.getItemSizeTextProps(itemProps),
		{
			className: classesFileUpload.itemSizeText,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
