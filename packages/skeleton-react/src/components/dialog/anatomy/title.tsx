import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { DialogRootContext } from '../modules/root-context';
import { classesDialog } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface DialogTitleProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function (props: DialogTitleProps) {
	const dialog = useContext(DialogRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(dialog.getTitleProps(), rest, {
		className: classesDialog.title
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
