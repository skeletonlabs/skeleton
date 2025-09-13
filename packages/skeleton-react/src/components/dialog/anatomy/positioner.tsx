import { useContext } from 'react';
import { mergeProps, Portal } from '@zag-js/react';
import { DialogRootContext } from '../modules/root-context';
import { classesDialog } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface DialogPositionerProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function (props: DialogPositionerProps) {
	const dialog = useContext(DialogRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(dialog.getPositionerProps(), rest, {
		className: classesDialog.positioner
	});

	return <Portal>{element ? element(attributes) : <div {...attributes}>{children}</div>}</Portal>;
}
