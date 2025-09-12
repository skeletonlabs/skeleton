import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { ComboboxRootContext } from '../modules/root-context';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ComboboxContentProps extends PropsWithElement, HTMLAttributes<'ul'> {}

export default function (props: ComboboxContentProps) {
	const rootContext = useContext(ComboboxRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getContentProps(), { className: classesCombobox.content }, restAttributes);

	return element ? element({ attributes }) : <ul {...attributes}>{children}</ul>;
}
