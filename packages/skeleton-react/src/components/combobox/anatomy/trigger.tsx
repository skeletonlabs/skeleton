import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { ComboboxRootContext } from '../modules/root-context';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ComboboxTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function (props: ComboboxTriggerProps) {
	const combobox = useContext(ComboboxRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(combobox.getTriggerProps(), rest, {
		className: classesCombobox.trigger
	});

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
