import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { useRatingGroup } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { splitProps } from '@zag-js/rating-group';
import type { Props } from '@zag-js/rating-group';
import { mergeProps } from '@zag-js/react';

export interface RatingGroupRootProps
	extends Omit<Props, 'id'>,
		PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {}

export default function Root(props: RatingGroupRootProps) {
	const [ratingGroupProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const ratingGroup = useRatingGroup(ratingGroupProps);

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
