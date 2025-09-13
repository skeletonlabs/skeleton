import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { ComboboxRootContext } from '../modules/root-context';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface ComboboxLabelProps extends PropsWithElement<'label'>, HTMLAttributes<'label'> {}

export default function (props: ComboboxLabelProps) {
	const combobox = useContext(ComboboxRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(combobox.getLabelProps(), rest, {
		className: classesCombobox.label
	});

	return element ? element(attributes) : <label {...attributes}>{children}</label>;
}
