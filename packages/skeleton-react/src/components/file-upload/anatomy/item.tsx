import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { type ItemProps, splitItemProps } from '@zag-js/file-upload';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { FileUploadItemContext } from '../modules/item-context';
import { FileUploadRootContext } from '../modules/root-context';

export interface FileUploadItemProps extends ItemProps, PropsWithElement<'li'>, HTMLAttributes<'li'> {}

export default function Item(props: FileUploadItemProps) {
	const fileUpload = use(FileUploadRootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(fileUpload.getItemProps(itemProps), rest, {
		className: classesFileUpload.item,
	});

	return (
		<FileUploadItemContext.Provider value={itemProps}>
			{element ? element(attributes) : <li {...attributes}>{children}</li>}
		</FileUploadItemContext.Provider>
	);
}
