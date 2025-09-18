import { DialogRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesDialog } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DialogDescriptionProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Description(props: DialogDescriptionProps) {
	const dialog = use(DialogRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(dialog.getDescriptionProps(), rest, {
		className: classesDialog.description,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
