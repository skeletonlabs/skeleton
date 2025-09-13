import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { FileUploadRootContext } from '../modules/root-context';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { FileUploadItemContext } from '../modules/item-context';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface FileUploadItemDeleteTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function (props: FileUploadItemDeleteTriggerProps) {
	const fileUpload = useContext(FileUploadRootContext);
	const itemProps = useContext(FileUploadItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(fileUpload.getItemDeleteTriggerProps(itemProps), rest, {
		className: classesFileUpload.itemDeleteTrigger
	});

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
