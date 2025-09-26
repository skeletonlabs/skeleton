import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ComboboxLabelProps extends PropsWithElement<'label'>, HTMLAttributes<'label'> {}

export default function Label(props: ComboboxLabelProps) {
	const combobox = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		combobox.getLabelProps(),
		{
			className: classesCombobox.label,
		},
		rest,
	);

	return element ? element(attributes) : <label {...attributes}>{children}</label>;
}
