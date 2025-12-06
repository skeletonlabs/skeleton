import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { splitItemProps } from '@zag-js/carousel';
import type { ItemProps } from '@zag-js/carousel';
import { use } from 'react';

export interface CarouselItemProps extends ItemProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Item(props: CarouselItemProps) {
	const carousel = use(RootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(carousel.getItemProps(itemProps), rest);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
