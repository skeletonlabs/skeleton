import { ItemContext } from '../modules/item-context.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface StepsIndicatorProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Indicator(props: StepsIndicatorProps) {
	const steps = use(RootContext);
	const itemProps = use(ItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		steps.getIndicatorProps(itemProps),
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
