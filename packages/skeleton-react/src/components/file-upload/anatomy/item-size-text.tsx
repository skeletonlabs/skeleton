import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { ItemContext } from '../modules/item-context.js';
import { RootContext } from '../modules/root-context.js';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface FileUploadItemSizeTextProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ItemSizeText(props: FileUploadItemSizeTextProps) {
	const fileUpload = use(RootContext);
	const itemProps = use(ItemContext);

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
