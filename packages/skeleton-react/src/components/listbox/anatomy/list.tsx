import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { ListboxRootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ListboxListProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function List(props: ListboxListProps) {
	const listbox = use(ListboxRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(listbox.getListProps(), rest);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
