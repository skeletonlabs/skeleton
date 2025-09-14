import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { ComboboxRootContext } from '../modules/root-context';

export interface ComboboxLabelProps extends PropsWithElement<'label'>, HTMLAttributes<'label'> {}

export default function Label(props: ComboboxLabelProps) {
	const combobox = use(ComboboxRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(combobox.getLabelProps(), rest, {
		className: classesCombobox.label,
	});

	return element ? element(attributes) : <label {...attributes}>{children}</label>;
}
