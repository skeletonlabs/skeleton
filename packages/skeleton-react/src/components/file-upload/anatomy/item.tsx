import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { splitItemProps, type ItemProps } from '@zag-js/file-upload';
import { mergeProps } from '@zag-js/react';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { FileUploadRootContext } from '../modules/root-context';
import { FileUploadItemContext } from '../modules/item-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface FileUploadItemProps extends PropsWithElement, ItemProps, HTMLAttributes<'li'> {}

export default function (props: FileUploadItemProps) {
	const rootContext = useContext(FileUploadRootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...restAttributes } = componentProps;

	const attributes = mergeProps(rootContext.api.getItemProps(itemProps), { className: classesFileUpload.item }, restAttributes);

	return (
		<FileUploadItemContext.Provider value={{ itemProps }}>
			{element ? element({ attributes }) : <li {...attributes}>{children}</li>}
		</FileUploadItemContext.Provider>
	);
}
