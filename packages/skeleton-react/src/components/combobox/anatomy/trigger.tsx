import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { ComboboxRootContext } from '../modules/root-context';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ComboboxTriggerProps extends PropsWithElement, HTMLAttributes<'button'> {}

export default function (props: ComboboxTriggerProps) {
	const rootContext = useContext(ComboboxRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getTriggerProps(), { className: classesCombobox.trigger }, restAttributes);

	return element ? element({ attributes }) : <button {...attributes}>{children}</button>;
}
