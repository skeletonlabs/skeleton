import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { ComboboxRootContext } from '../modules/combobox-root-context';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ComboboxInputProps extends PropsWithElement, Omit<ComponentProps<'input'>, 'children'> {}

export default function (props: ComboboxInputProps) {
	const rootContext = useContext(ComboboxRootContext);
	const { element, ...restAttributes } = props;
	const attributes = mergeProps(rootContext.api.getInputProps(), { className: classesCombobox.input }, restAttributes);
	return element ? element({ attributes }) : <input {...attributes} />;
}
