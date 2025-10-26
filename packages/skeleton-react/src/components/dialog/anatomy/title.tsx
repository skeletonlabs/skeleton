import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesDialog } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DialogTitleProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Title(props: DialogTitleProps) {
	const dialog = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		dialog.getTitleProps(),
		{
			className: classesDialog.title,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
