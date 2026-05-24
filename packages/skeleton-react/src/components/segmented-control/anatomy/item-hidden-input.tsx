import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { SegmentedControlItemContext } from '../modules/item-context.js';
import { SegmentedControlRootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SegmentedControlItemHiddenInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> {}

export default function ItemHiddenInput(props: SegmentedControlItemHiddenInputProps) {
	const segmentedControl = use(SegmentedControlRootContext);
	const itemProps = use(SegmentedControlItemContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(segmentedControl.getItemHiddenInputProps(itemProps), rest);

	return element ? element(attributes) : <input {...attributes} />;
}
