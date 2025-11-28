import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SliderControlProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Control(props: SliderControlProps) {
	const slider = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		slider.getControlProps(),
		{
			className: classes.slider.control,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
