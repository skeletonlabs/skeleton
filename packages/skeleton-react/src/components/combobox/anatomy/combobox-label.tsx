import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { ComboboxRootContext } from '../modules/combobox-root-context';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ComboboxLabelProps extends PropsWithElement, ComponentProps<'label'> {}

export default function (props: ComboboxLabelProps) {
	const rootContext = useContext(ComboboxRootContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(rootContext.api.getLabelProps(), { className: classesCombobox.label }, restAttributes);
	return element ? element({ attributes }) : <label {...attributes}>{children}</label>;
}
