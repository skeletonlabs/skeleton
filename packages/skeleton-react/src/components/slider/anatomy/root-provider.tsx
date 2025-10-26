import type { useSlider } from '../modules/provider';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesSlider } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface SliderRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
	value: ReturnType<typeof useSlider>;
}

export default function SliderRootProvider(props: SliderRootProviderProps) {
	const { element, children, value: slider, ...rest } = props;

	const attributes = mergeProps(
		slider.getRootProps(),
		{
			className: classesSlider.root,
		},
		rest,
	);

	return (
		<RootContext.Provider value={slider}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
