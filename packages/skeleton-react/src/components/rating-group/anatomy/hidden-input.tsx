import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { RatingGroupRootContext } from '../modules/root-context';

export interface RatingGroupHiddenInputProps
	extends PropsWithElement,
		Omit<HTMLAttributes<'input'>, 'id' | 'defaultValue' | 'dir' | 'children'> {}

export default function (props: RatingGroupHiddenInputProps) {
	const rootContext = useContext(RatingGroupRootContext);

	const { element, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getHiddenInputProps(), { className: classesRatingGroup.hiddenInput }, restAttributes);

	return element ? element({ attributes }) : <input {...attributes} />;
}
