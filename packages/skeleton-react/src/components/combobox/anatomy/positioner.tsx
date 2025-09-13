import { useContext } from 'react';
import { mergeProps, Portal } from '@zag-js/react';
import { ComboboxRootContext } from '../modules/root-context';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface ComboboxPositionerProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function (props: ComboboxPositionerProps) {
	const combobox = useContext(ComboboxRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(combobox.getPositionerProps(), rest, {
		className: classesCombobox.positioner
	});

	return <Portal>{element ? element(attributes) : <div {...attributes}>{children}</div>}</Portal>;
}
