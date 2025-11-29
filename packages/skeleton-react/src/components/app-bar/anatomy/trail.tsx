import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { mergeProps } from '@zag-js/react';

export interface AppBarTrailProps extends PropsWithElement<'nav'>, HTMLAttributes<'nav'> {}

export default function AppBarTrail(props: AppBarTrailProps) {
	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		rest,
	);

	return element ? element(attributes) : <nav {...attributes}>{children}</nav>;
}
