import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { ComboboxRootContext } from '../modules/root-context';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ComboboxContentProps extends PropsWithElement, ComponentProps<'ul'> {}

export default function (props: ComboboxContentProps) {
	const rootContext = useContext(ComboboxRootContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(rootContext.api.getContentProps(), { className: classesCombobox.content }, restAttributes);
	return element ? element({ attributes }) : <ul {...attributes}>{children}</ul>;
}
