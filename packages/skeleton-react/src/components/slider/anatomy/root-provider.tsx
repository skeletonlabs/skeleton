import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import type { useSlider } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';

export interface SliderRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
	value: ReturnType<typeof useSlider>;
}

export default function SliderRootProvider(props: SliderRootProviderProps) {
	const { element, children, value: slider, ...rest } = props;

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
