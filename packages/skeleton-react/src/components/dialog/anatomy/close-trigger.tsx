import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { DialogRootContext } from '../modules/root-context';
import { classesDialog } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface DialogCloseTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function (props: DialogCloseTriggerProps) {
	const dialog = useContext(DialogRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(dialog.getCloseTriggerProps(), rest, {
		className: classesDialog.closeTrigger
	});

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
