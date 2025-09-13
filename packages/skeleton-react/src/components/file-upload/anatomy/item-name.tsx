import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { FileUploadRootContext } from '../modules/root-context';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { FileUploadItemContext } from '../modules/item-context';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface FileUploadItemNameProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function (props: FileUploadItemNameProps) {
	const fileUpload = useContext(FileUploadRootContext);
	const itemProps = useContext(FileUploadItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(fileUpload.getItemNameProps(itemProps), rest, {
		className: classesFileUpload.itemName
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
