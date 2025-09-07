import { useContext, type ComponentProps, type PropsWithChildren } from 'react';
import { splitItemProps, type ItemProps } from '@zag-js/file-upload';
import { mergeProps } from '@zag-js/react';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { FileUploadRootContext } from '../modules/file-upload-root-context';
import { FileUploadItemContext } from '../modules/file-upload-item-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface FileUploadItemProps extends PropsWithChildren, PropsWithElement, ItemProps, ComponentProps<'li'> {}

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
