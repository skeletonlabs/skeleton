import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { ItemContext } from '../modules/item-context.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SegmentedControlItemHiddenInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> {}

export default function ItemHiddenInput(props: SegmentedControlItemHiddenInputProps) {
	const segmentedControl = use(RootContext);
	const itemProps = use(ItemContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(segmentedControl.getItemHiddenInputProps(itemProps), rest);

	return element ? element(attributes) : <input {...attributes} />;
}
