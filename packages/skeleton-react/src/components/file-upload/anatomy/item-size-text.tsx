import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { ItemContext } from '../modules/item-context.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
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
			className: classes.fileUpload.itemSizeText,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
