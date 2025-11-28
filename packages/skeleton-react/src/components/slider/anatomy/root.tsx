import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { useSlider } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';
import { splitProps } from '@zag-js/slider';
import type { Props } from '@zag-js/slider';

export interface SliderRootProps
	extends Omit<Props, 'id'>,
		PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue' | 'aria-label' | 'aria-labelledby'> {}

export default function SliderRoot(props: SliderRootProps) {
	const [sliderProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const slider = useSlider(sliderProps);

	const attributes = mergeProps(
		slider.getRootProps(),
		{
			className: classes.slider.root,
		},
		rest,
	);

	return (
		<RootContext.Provider value={slider}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
