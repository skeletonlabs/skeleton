import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { ComboboxRootContext } from '../modules/root-context';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ComboboxControlProps extends PropsWithElement, ComponentProps<'div'> {}

export default function (props: ComboboxControlProps) {
	const rootContext = useContext(ComboboxRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getControlProps(), { className: classesCombobox.control }, restAttributes);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
