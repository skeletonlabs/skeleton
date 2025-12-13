import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface CarouselAutoplayTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function AutoplayTrigger(props: CarouselAutoplayTriggerProps) {
	const carousel = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(carousel.getAutoplayTriggerProps(), rest);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
