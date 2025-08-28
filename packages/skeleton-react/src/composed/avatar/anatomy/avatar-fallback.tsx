import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { AvatarRootContext } from '../modules/context.js';
import type { AvatarFallbackProps } from '../modules/types.js';
import { classesAvatar } from '@skeletonlabs/skeleton-common';

export default function (props: AvatarFallbackProps) {
	const rootContext = useContext(AvatarRootContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getFallbackProps(),
		{
			className: classesAvatar.fallback
		},
		restAttributes
	);
	return element ? element({ attributes }) : <span {...attributes}>{children}</span>;
}
