import { RootContext } from '../modules/root-context.js';
import { ThumbContext } from '../modules/thumb-context';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesSlider } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SliderHiddenInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> {}

export default function HiddenInput(props: SliderHiddenInputProps) {
	const slider = use(RootContext);
	const thumbProps = use(ThumbContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		slider.getHiddenInputProps(thumbProps),
		{
			className: classesSlider.hiddenInput,
		},
		rest,
	);

	return element ? element(attributes) : <input {...attributes} />;
}
