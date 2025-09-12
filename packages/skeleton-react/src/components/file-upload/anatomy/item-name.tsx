import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { FileUploadRootContext } from '../modules/root-context';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { FileUploadItemContext } from '../modules/item-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface FileUploadItemNameProps extends PropsWithElement, HTMLAttributes<'div'> {}

export default function (props: FileUploadItemNameProps) {
	const rootContext = useContext(FileUploadRootContext);
	const itemContext = useContext(FileUploadItemContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(
		rootContext.api.getItemNameProps(itemContext.itemProps),
		{ className: classesFileUpload.itemName },
		restAttributes
	);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
