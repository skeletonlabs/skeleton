import * as ratingGroup from '@zag-js/rating-group';
import type { ComponentProps, ReactNode } from 'react';
import type { PropsWithElement } from '../../../internal/props-with-element.js';

interface RatingGroupRootProps
	extends PropsWithElement,
		Omit<ratingGroup.Props, 'id'>,
		Omit<ComponentProps<'div'>, 'id' | 'defaultValue' | 'dir'> {}

interface RatingGroupLabelProps extends PropsWithElement, Omit<ComponentProps<'label'>, 'id' | 'defaultValue' | 'dir'> {}
interface RatingGroupControlProps extends PropsWithElement, Omit<ComponentProps<'div'>, 'id' | 'defaultValue' | 'dir'> {}
interface RatingGroupItemProps
	extends PropsWithElement,
		ratingGroup.ItemProps,
		Omit<ComponentProps<'span'>, 'id' | 'defaultValue' | 'dir'> {}

interface RatingGroupHiddenInputProps extends PropsWithElement, Omit<ComponentProps<'input'>, 'id' | 'defaultValue' | 'dir' | 'children'> {}
interface RatingGroupRootContext {
	api: ratingGroup.Api;
}
interface RatingGroupItemContext {
	itemState: ratingGroup.ItemState;
}
interface RatingGroupRootContextProps {
	children: (api: ratingGroup.Api) => ReactNode;
}
interface RatingGroupItemContextProps {
	children: (itemState: ratingGroup.ItemState) => ReactNode;
}

export type {
	RatingGroupRootProps,
	RatingGroupRootContextProps,
	RatingGroupLabelProps,
	RatingGroupControlProps,
	RatingGroupItemProps,
	RatingGroupItemContextProps,
	RatingGroupHiddenInputProps,
	RatingGroupRootContext,
	RatingGroupItemContext
};
