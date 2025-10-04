import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesListbox } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ListboxLabelProps extends PropsWithElement<'label'>, HTMLAttributes<'label'> {}

export default function Label(props: ListboxLabelProps) {
	const listbox = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		listbox.getLabelProps(),
		{
			className: classesListbox.label,
		},
		rest,
	);

	return element ? element(attributes) : <label {...attributes}>{children}</label>;
}
