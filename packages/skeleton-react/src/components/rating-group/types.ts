import * as ratingGroup from '@zag-js/rating-group';
import type { ComponentProps, ReactNode } from 'react';
import type { PropsWithElement } from '../../internal/props-with-element.js';

interface RatingGroupHiddenInputProps extends PropsWithElement, Omit<ComponentProps<'input'>, 'id' | 'defaultValue' | 'dir' | 'children'> {}

interface RatingGroupItemContextProps {
	children: (itemState: ratingGroup.ItemState) => ReactNode;
}

export type { RatingGroupItemContextProps, RatingGroupHiddenInputProps };
