import { useContext, type ComponentProps } from 'react';
import { mergeProps, Portal } from '@zag-js/react';
import { DialogRootContext } from '../modules/dialog-root-context';
import { classesDialog } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface DialogPositionerProps extends PropsWithElement, Omit<ComponentProps<'div'>, 'children'> {}

export default function (props: DialogPositionerProps) {
	const rootContext = useContext(DialogRootContext);
	const { element, ...restAttributes } = props;
	const attributes = mergeProps(rootContext.api.getPositionerProps(), { className: classesDialog.positioner }, restAttributes);
	return <Portal>{element ? element({ attributes }) : <div {...attributes} />}</Portal>;
}
