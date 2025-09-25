import { SliderRootContext } from '../modules/root-context';
import type { useSlider } from '../modules/use-slider';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
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
		<SliderRootContext.Provider value={slider}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</SliderRootContext.Provider>
	);
}
