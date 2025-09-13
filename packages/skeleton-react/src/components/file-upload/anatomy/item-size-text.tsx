import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { FileUploadRootContext } from '../modules/root-context';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { FileUploadItemContext } from '../modules/item-context';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface FileUploadItemSizeTextProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function (props: FileUploadItemSizeTextProps) {
	const fileUpload = useContext(FileUploadRootContext);
	const itemProps = useContext(FileUploadItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(fileUpload.getItemSizeTextProps(itemProps), rest, {
		className: classesFileUpload.itemSizeText
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
