import { ComboboxRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ComboboxControlProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Control(props: ComboboxControlProps) {
	const combobox = use(ComboboxRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(combobox.getControlProps(), rest, {
		className: classesCombobox.control,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
