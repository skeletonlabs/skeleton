import { useContext } from 'react';
import { splitItemProps, type ItemProps } from '@zag-js/file-upload';
import { mergeProps } from '@zag-js/react';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { FileUploadRootContext } from '../modules/root-context';
import { FileUploadItemContext } from '../modules/item-context';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface FileUploadItemProps extends ItemProps, PropsWithElement<'li'>, HTMLAttributes<'li'> {}

export default function (props: FileUploadItemProps) {
	const fileUpload = useContext(FileUploadRootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(fileUpload.getItemProps(itemProps), rest, {
		className: classesFileUpload.item
	});

	return (
		<FileUploadItemContext.Provider value={itemProps}>
			{element ? element(attributes) : <li {...attributes}>{children}</li>}
		</FileUploadItemContext.Provider>
	);
}
