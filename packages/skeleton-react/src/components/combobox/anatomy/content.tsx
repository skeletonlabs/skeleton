import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ComboboxContentProps extends PropsWithElement<'ul'>, HTMLAttributes<'ul'> {}

export default function Content(props: ComboboxContentProps) {
	const combobox = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(combobox.getContentProps(), rest);

	return element ? element(attributes) : <ul {...attributes}>{children}</ul>;
}
