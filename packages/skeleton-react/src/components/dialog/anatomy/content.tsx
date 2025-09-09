import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { DialogRootContext } from '../modules/root-context';
import { classesDialog } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface DialogContentProps extends PropsWithElement, ComponentProps<'div'> {}

export default function (props: DialogContentProps) {
	const rootContext = useContext(DialogRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getContentProps(), { className: classesDialog.content }, restAttributes);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
