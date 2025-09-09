import { useContext, type ComponentProps } from 'react';
import { mergeProps, Portal } from '@zag-js/react';
import { DialogRootContext } from '../modules/root-context';
import { classesDialog } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface DialogPositionerProps extends PropsWithElement, ComponentProps<'div'> {}

export default function (props: DialogPositionerProps) {
	const rootContext = useContext(DialogRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getPositionerProps(), { className: classesDialog.positioner }, restAttributes);

	return <Portal>{element ? element({ attributes }) : <div {...attributes}>{children}</div>}</Portal>;
}
