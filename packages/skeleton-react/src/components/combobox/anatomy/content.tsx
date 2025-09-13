import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { ComboboxRootContext } from '../modules/root-context';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ComboboxContentProps extends PropsWithElement<'ul'>, HTMLAttributes<'ul'> {}

export default function (props: ComboboxContentProps) {
	const combobox = useContext(ComboboxRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(combobox.getContentProps(), rest, {
		className: classesCombobox.content
	});

	return element ? element(attributes) : <ul {...attributes}>{children}</ul>;
}
