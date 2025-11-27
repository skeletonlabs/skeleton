import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface AvatarFallbackProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function Fallback(props: AvatarFallbackProps) {
	const avatar = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		avatar.getFallbackProps(),
		{
			className: classes.avatar.fallback,
		},
		rest,
	);

	return element ? element(attributes) : <span {...attributes}>{children}</span>;
}
