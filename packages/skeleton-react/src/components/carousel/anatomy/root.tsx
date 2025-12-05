import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { useCarousel } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { splitProps } from '@zag-js/carousel';
import type { Props } from '@zag-js/carousel';

export interface CarouselRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}

export default function Root(props: CarouselRootProps) {
	const [carouselProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const carousel = useCarousel({ ...carouselProps, slideCount: props.slideCount });

	const attributes = mergeProps(carousel.getRootProps(), rest);

	return (
		<RootContext.Provider value={carousel}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
