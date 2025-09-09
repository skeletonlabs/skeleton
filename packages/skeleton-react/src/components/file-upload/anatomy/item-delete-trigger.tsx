import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { FileUploadRootContext } from '../modules/root-context';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { FileUploadItemContext } from '../modules/item-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface FileUploadItemDeleteTriggerProps extends PropsWithElement, ComponentProps<'button'> {}

export default function (props: FileUploadItemDeleteTriggerProps) {
	const rootContext = useContext(FileUploadRootContext);
	const itemContext = useContext(FileUploadItemContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(
		rootContext.api.getItemDeleteTriggerProps(itemContext.itemProps),
		{ className: classesFileUpload.itemDeleteTrigger },
		restAttributes
	);

	return element ? element({ attributes }) : <button {...attributes}>{children}</button>;
}
