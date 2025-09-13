import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { RatingGroupRootContext } from '../modules/root-context';

export interface RatingGroupHiddenInputProps
	extends PropsWithElement<'input'>,
		HTMLAttributes<'input', 'id' | 'defaultValue' | 'dir' | 'children'> {}

export default function (props: RatingGroupHiddenInputProps) {
	const ratingGroup = useContext(RatingGroupRootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(ratingGroup.getHiddenInputProps(), { className: classesRatingGroup.hiddenInput }, rest);

	return element ? element(attributes) : <input {...attributes} />;
}
