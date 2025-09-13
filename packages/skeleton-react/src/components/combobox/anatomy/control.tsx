import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { ComboboxRootContext } from '../modules/root-context';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ComboboxControlProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function (props: ComboboxControlProps) {
	const combobox = useContext(ComboboxRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(combobox.getControlProps(), rest, {
		className: classesCombobox.control
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
