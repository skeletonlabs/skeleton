import { ComboboxRootContext } from '../modules/root-context';
import ChevronDownIcon from '@/internal/components/chevron-down';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ComboboxTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function Trigger(props: ComboboxTriggerProps) {
	const combobox = use(ComboboxRootContext);

	const { element, children = <ChevronDownIcon />, ...rest } = props;

	const attributes = mergeProps(combobox.getTriggerProps(), rest, {
		className: classesCombobox.trigger,
	});

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
