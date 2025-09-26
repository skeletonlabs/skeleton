import { ItemContext } from '../modules/item-context';
import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface FileUploadItemNameProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ItemName(props: FileUploadItemNameProps) {
	const fileUpload = use(RootContext);
	const itemProps = use(ItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		fileUpload.getItemNameProps(itemProps),
		{
			className: classesFileUpload.itemName,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
