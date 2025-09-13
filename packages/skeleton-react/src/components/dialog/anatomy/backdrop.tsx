import { useContext } from 'react';
import { mergeProps, Portal } from '@zag-js/react';
import { DialogRootContext } from '../modules/root-context';
import { classesDialog } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface DialogBackdropProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'children'> {}

export default function (props: DialogBackdropProps) {
	const dialog = useContext(DialogRootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(dialog.getBackdropProps(), rest, {
		className: classesDialog.backdrop
	});

	return <Portal>{element ? element(attributes) : <div {...attributes} />}</Portal>;
}
