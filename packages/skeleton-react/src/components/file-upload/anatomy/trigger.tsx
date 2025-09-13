import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { FileUploadRootContext } from '../modules/root-context';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface FileUploadTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function (props: FileUploadTriggerProps) {
	const fileUpload = useContext(FileUploadRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(fileUpload.getTriggerProps(), rest, {
		className: classesFileUpload.trigger
	});

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
