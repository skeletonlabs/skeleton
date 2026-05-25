import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { SegmentedControlItemContext } from '../modules/item-context.js';
import { SegmentedControlRootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SegmentedControlItemTextProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function ItemText(props: SegmentedControlItemTextProps) {
	const segmentedControl = use(SegmentedControlRootContext);
	const itemProps = use(SegmentedControlItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(segmentedControl.getItemTextProps(itemProps), rest);

	return element ? element(attributes) : <span {...attributes}>{children}</span>;
}
