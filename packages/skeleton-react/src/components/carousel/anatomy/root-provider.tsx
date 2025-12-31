import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import type { useCarousel } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';

export interface CarouselRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
	value: ReturnType<typeof useCarousel>;
}

export default function RootProvider(props: CarouselRootProviderProps) {
	const { element, children, value: carousel, ...rest } = props;

	const attributes = mergeProps(carousel.getRootProps(), rest);

	return (
		<RootContext.Provider value={carousel}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
