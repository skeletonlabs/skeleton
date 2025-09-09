import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { useContext, type ComponentProps } from 'react';
import { RatingGroupRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface RatingGroupHiddenInputProps extends PropsWithElement, ComponentProps<'input'> {}

export default function (props: RatingGroupHiddenInputProps) {
	const rootContext = useContext(RatingGroupRootContext);

	const { element, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getHiddenInputProps(), { className: classesRatingGroup.hiddenInput }, restAttributes);

	return element ? element({ attributes }) : <input {...attributes} />;
}
