import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { SliderRootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SliderLabelProps extends PropsWithElement<'label'>, HTMLAttributes<'label'> {}

export default function Label(props: SliderLabelProps) {
	const slider = use(SliderRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(slider.getLabelProps(), rest);

	return element ? element(attributes) : <label {...attributes}>{children}</label>;
}
