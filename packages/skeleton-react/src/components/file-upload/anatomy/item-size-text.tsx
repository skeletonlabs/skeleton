import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { FileUploadRootContext } from '../modules/root-context';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { FileUploadItemContext } from '../modules/item-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface FileUploadItemSizeTextProps extends PropsWithElement, HTMLAttributes<'div'> {}

export default function (props: FileUploadItemSizeTextProps) {
	const rootContext = useContext(FileUploadRootContext);
	const itemContext = useContext(FileUploadItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		rootContext.api.getItemSizeTextProps(itemContext.itemProps),
		{ className: classesFileUpload.itemSizeText },
		rest
	);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
