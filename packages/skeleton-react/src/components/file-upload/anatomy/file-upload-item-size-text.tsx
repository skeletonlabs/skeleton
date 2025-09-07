import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { FileUploadRootContext } from '../modules/file-upload-root-context';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { FileUploadItemContext } from '../modules/file-upload-item-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface FileUploadItemSizeTextProps extends PropsWithElement, ComponentProps<'div'> {}

export default function (props: FileUploadItemSizeTextProps) {
	const rootContext = useContext(FileUploadRootContext);
	const itemContext = useContext(FileUploadItemContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getItemSizeTextProps(itemContext.itemProps),
		{ className: classesFileUpload.itemSizeText },
		restAttributes
	);
	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
