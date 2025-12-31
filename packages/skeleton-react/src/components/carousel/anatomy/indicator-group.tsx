import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface CarouselIndicatorGroupProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function IndicatorGroup(props: CarouselIndicatorGroupProps) {
	const carousel = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(carousel.getIndicatorGroupProps(), rest);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
