import { useContext, type ComponentProps } from 'react';
import { mergeProps, Portal } from '@zag-js/react';
import { DialogRootContext } from '../modules/dialog-root-context';
import { classesDialog } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface DialogBackdropProps extends PropsWithElement, ComponentProps<'div'> {}

export default function (props: DialogBackdropProps) {
	const rootContext = useContext(DialogRootContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(rootContext.api.getBackdropProps(), { className: classesDialog.backdrop }, restAttributes);
	return <Portal>{element ? element({ attributes }) : <div {...attributes}>{children}</div>}</Portal>;
}
