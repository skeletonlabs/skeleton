import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { SliderRootContext } from '../modules/root-context.js';
import { SliderThumbContext } from '../modules/thumb-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SliderHiddenInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> {}

export default function HiddenInput(props: SliderHiddenInputProps) {
	const slider = use(SliderRootContext);
	const thumbProps = use(SliderThumbContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(slider.getHiddenInputProps(thumbProps), rest);

	return element ? element(attributes) : <input {...attributes} />;
}
