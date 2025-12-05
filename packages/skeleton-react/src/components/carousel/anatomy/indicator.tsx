import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { splitIndicatorProps } from '@zag-js/carousel';
import type { IndicatorProps } from '@zag-js/carousel';
import { use } from 'react';

export interface CarouselIndicatorProps extends IndicatorProps, PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function Indicator(props: CarouselIndicatorProps) {
	const carousel = use(RootContext);

	const [indicatorProps, componentProps] = splitIndicatorProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(carousel.getIndicatorProps(indicatorProps), rest);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
