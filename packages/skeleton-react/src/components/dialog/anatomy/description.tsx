import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { DialogRootContext } from '../modules/root-context';
import { classesDialog } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface DialogDescriptionProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function (props: DialogDescriptionProps) {
	const dialog = useContext(DialogRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(dialog.getDescriptionProps(), rest, {
		className: classesDialog.description
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
