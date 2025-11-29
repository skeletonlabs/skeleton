import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ListboxContentProps extends PropsWithElement<'ul'>, HTMLAttributes<'ul'> {}

export default function Content(props: ListboxContentProps) {
	const listbox = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		listbox.getContentProps(),
		rest,
	);

	return element ? element(attributes) : <ul {...attributes}>{children}</ul>;
}
