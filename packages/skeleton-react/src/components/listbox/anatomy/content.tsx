import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { ListboxRootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ListboxContentProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Content(props: ListboxContentProps) {
	const listbox = use(ListboxRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(listbox.getContentProps(), rest);
	const listAttributes = listbox.getListProps();

	return <div {...attributes}>{element ? element(listAttributes) : <div {...listAttributes}>{children}</div>}</div>;
}
