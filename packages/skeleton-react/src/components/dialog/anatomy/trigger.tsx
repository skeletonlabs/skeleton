import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { DialogRootContext } from '../modules/root-context';
import { classesDialog } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface DialogTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function (props: DialogTriggerProps) {
	const dialog = useContext(DialogRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(dialog.getTriggerProps(), rest, {
		className: classesDialog.trigger
	});

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
