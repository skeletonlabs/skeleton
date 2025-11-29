import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { ItemContext } from '../modules/item-context.js';
import { RootContext } from '../modules/root-context.js';
import { splitItemProps } from '@zag-js/file-upload';
import type { ItemProps } from '@zag-js/file-upload';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface FileUploadItemProps extends ItemProps, PropsWithElement<'li'>, HTMLAttributes<'li'> {}

export default function Item(props: FileUploadItemProps) {
	const fileUpload = use(RootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		fileUpload.getItemProps(itemProps),
		rest,
	);

	return (
		<ItemContext.Provider value={itemProps}>{element ? element(attributes) : <li {...attributes}>{children}</li>}</ItemContext.Provider>
	);
}
