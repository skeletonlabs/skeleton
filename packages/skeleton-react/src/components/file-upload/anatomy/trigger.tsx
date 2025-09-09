import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { FileUploadRootContext } from '../modules/root-context';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface FileUploadTriggerProps extends PropsWithElement, ComponentProps<'button'> {}

export default function (props: FileUploadTriggerProps) {
	const rootContext = useContext(FileUploadRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getTriggerProps(), { className: classesFileUpload.trigger }, restAttributes);

	return element ? element({ attributes }) : <button {...attributes}>{children}</button>;
}
