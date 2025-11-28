import { ItemContext } from '../modules/item-context.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface StepsSeparatorProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Separator(props: StepsSeparatorProps) {
	const steps = use(RootContext);
	const itemProps = use(ItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		steps.getSeparatorProps(itemProps),
		{
			className: classes.steps.separator,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
