import { RootContext } from '../modules/root-context.js';
import { ThumbContext } from '../modules/thumb-context';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesSlider } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { splitThumbProps, type ThumbProps } from '@zag-js/slider';
import { use } from 'react';

export interface SliderThumbProps extends ThumbProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Thumb(props: SliderThumbProps) {
	const slider = use(RootContext);

	const [thumbProps, componentProps] = splitThumbProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		slider.getThumbProps(thumbProps),
		{
			className: classesSlider.thumb,
		},
		rest,
	);

	return (
		<ThumbContext.Provider value={thumbProps}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</ThumbContext.Provider>
	);
}
