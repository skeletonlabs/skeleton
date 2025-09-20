import { SliderRootContext } from '../modules/root-context';
import { SliderThumbContext } from '../modules/thumb-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesSlider } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SliderHiddenInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> {}

export default function HiddenInput(props: SliderHiddenInputProps) {
	const slider = use(SliderRootContext);
	const thumbProps = use(SliderThumbContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(slider.getHiddenInputProps(thumbProps), rest, {
		className: classesSlider.hiddenInput,
	});

	return element ? element(attributes) : <input {...attributes} />;
}
