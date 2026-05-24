import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { ListboxRootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ListboxLabelProps extends PropsWithElement<'label'>, HTMLAttributes<'label'> {}

export default function Label(props: ListboxLabelProps) {
	const listbox = use(ListboxRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(listbox.getLabelProps(), rest);

	return element ? element(attributes) : <label {...attributes}>{children}</label>;
}
