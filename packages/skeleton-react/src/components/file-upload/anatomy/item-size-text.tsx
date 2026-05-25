import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { FileUploadItemContext } from '../modules/item-context.js';
import { FileUploadRootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface FileUploadItemSizeTextProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ItemSizeText(props: FileUploadItemSizeTextProps) {
	const fileUpload = use(FileUploadRootContext);
	const itemProps = use(FileUploadItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(fileUpload.getItemSizeTextProps(itemProps), rest);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
