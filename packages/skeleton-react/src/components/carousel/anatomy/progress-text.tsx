import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { CarouselRootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface CarouselProgressTextProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ProgressText(props: CarouselProgressTextProps) {
	const carousel = use(CarouselRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(carousel.getProgressTextProps(), rest);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
