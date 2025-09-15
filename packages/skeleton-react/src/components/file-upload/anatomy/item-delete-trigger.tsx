import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { FileUploadItemContext } from '../modules/item-context';
import { FileUploadRootContext } from '../modules/root-context';

export interface FileUploadItemDeleteTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function ItemDeleteTrigger(props: FileUploadItemDeleteTriggerProps) {
	const fileUpload = use(FileUploadRootContext);
	const itemProps = use(FileUploadItemContext);

	const { element, children = <>&times;</>, ...rest } = props;

	const attributes = mergeProps(fileUpload.getItemDeleteTriggerProps(itemProps), rest, {
		className: classesFileUpload.itemDeleteTrigger,
	});

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
