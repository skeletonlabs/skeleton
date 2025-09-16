import { FileUploadRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface FileUploadTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function Trigger(props: FileUploadTriggerProps) {
	const fileUpload = use(FileUploadRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(fileUpload.getTriggerProps(), rest, {
		className: classesFileUpload.trigger,
	});

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
