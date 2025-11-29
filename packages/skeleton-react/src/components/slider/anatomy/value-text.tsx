import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SliderValueTextProps extends PropsWithElement<'output'>, HTMLAttributes<'output'> {}

export default function ValueText(props: SliderValueTextProps) {
	const slider = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(slider.getValueTextProps(), rest);

	return element ? element(attributes) : <output {...attributes}>{children}</output>;
}
