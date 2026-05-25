import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { ComboboxItemContext } from '../modules/item-context.js';
import { ComboboxRootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ComboboxItemTextProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function ItemText(props: ComboboxItemTextProps) {
	const combobox = use(ComboboxRootContext);
	const itemProps = use(ComboboxItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(combobox.getItemTextProps(itemProps), rest);

	return element ? element(attributes) : <span {...attributes}>{children}</span>;
}
