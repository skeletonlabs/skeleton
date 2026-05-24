import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { SliderRootContext } from '../modules/root-context.js';
import { SliderThumbContext } from '../modules/thumb-context.js';
import { mergeProps } from '@zag-js/react';
import { splitThumbProps, type ThumbProps } from '@zag-js/slider';
import { use } from 'react';

export interface SliderThumbProps extends ThumbProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Thumb(props: SliderThumbProps) {
	const slider = use(SliderRootContext);

	const [thumbProps, componentProps] = splitThumbProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(slider.getThumbProps(thumbProps), rest);

	return (
		<SliderThumbContext.Provider value={thumbProps}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</SliderThumbContext.Provider>
	);
}
