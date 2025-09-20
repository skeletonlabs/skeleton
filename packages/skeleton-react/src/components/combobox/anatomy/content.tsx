import { ComboboxRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ComboboxContentProps extends PropsWithElement<'ul'>, HTMLAttributes<'ul'> {}

export default function Content(props: ComboboxContentProps) {
	const combobox = use(ComboboxRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(combobox.getContentProps(), rest, {
		className: classesCombobox.content,
	});

	return element ? element(attributes) : <ul {...attributes}>{children}</ul>;
}
