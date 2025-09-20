import { ComboboxRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ComboboxPositionerProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Positioner(props: ComboboxPositionerProps) {
	const combobox = use(ComboboxRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(combobox.getPositionerProps(), rest, {
		className: classesCombobox.positioner,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
