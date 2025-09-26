import type { useRatingGroup } from '../modules/provider';
import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface RatingGroupRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {
	value: ReturnType<typeof useRatingGroup>;
}

export default function RootProvider(props: RatingGroupRootProviderProps) {
	const { element, children, value: ratingGroup, ...rest } = props;

	const attributes = mergeProps(
		ratingGroup.getRootProps(),
		{
			className: classesRatingGroup.root,
		},
		rest,
	);

	return (
		<RootContext.Provider value={ratingGroup}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
