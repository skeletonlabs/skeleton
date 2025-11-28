import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';
import type { ItemProps } from '@zag-js/steps';
import { use } from 'react';

export interface StepsContentProps extends ItemProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Content(props: StepsContentProps) {
	const steps = use(RootContext);

	// @zag-js/steps does not currently provide a splitItemProps function, so manually destructure
	const { element, children, index, ...rest } = props;

	const attributes = mergeProps(
		steps.getContentProps({ index }),
		{
			className: classes.steps.content,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
