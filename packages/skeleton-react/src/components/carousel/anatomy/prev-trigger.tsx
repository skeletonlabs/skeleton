import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface CarouselPrevTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function PrevTrigger(props: CarouselPrevTriggerProps) {
	const carousel = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(carousel.getPrevTriggerProps(), rest);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
