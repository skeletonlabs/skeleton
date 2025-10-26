import { RootContext } from '../modules/root-context.js';
import ChevronDownIcon from '@/internal/components/chevron-down.jsx';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ComboboxTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function Trigger(props: ComboboxTriggerProps) {
	const combobox = use(RootContext);

	const { element, children = <ChevronDownIcon />, ...rest } = props;

	const attributes = mergeProps(
		combobox.getTriggerProps(),
		{
			className: classesCombobox.trigger,
		},
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
