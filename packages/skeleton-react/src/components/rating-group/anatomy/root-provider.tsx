import { mergeProps } from '@zag-js/react';
import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { RatingGroupRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { useRatingGroup } from '../modules/use-rating-group';

export interface RatingGroupRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {
	value: ReturnType<typeof useRatingGroup>;
}

export default function (props: RatingGroupRootProviderProps) {
	const { element, children, value: ratingGroup, ...rest } = props;

	const attributes = mergeProps(ratingGroup.getRootProps(), rest, {
		className: classesRatingGroup.root
	});

	return (
		<RatingGroupRootContext.Provider value={ratingGroup}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</RatingGroupRootContext.Provider>
	);
}
