import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { TagsInputItemContext } from '../modules/item-context.js';
import { TagsInputRootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TagsInputItemDeleteTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function ItemDeleteTrigger(props: TagsInputItemDeleteTriggerProps) {
	const tagsInput = use(TagsInputRootContext);
	const itemProps = use(TagsInputItemContext);

	const { element, children = <>&times;</>, ...rest } = props;

	const attributes = mergeProps(tagsInput.getItemDeleteTriggerProps(itemProps), rest);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
