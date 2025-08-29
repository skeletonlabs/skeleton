import * as ratingGroup from '@zag-js/rating-group';
import type { ComponentProps, PropsWithChildren } from 'react';
import type { PropsWithElement } from '../../../internal/props-with-child.js';

interface RatingGroupRootProps
	extends PropsWithChildren,
		PropsWithElement,
		Omit<ratingGroup.Props, 'id'>,
		Omit<ComponentProps<'div'>, 'id' | 'defaultValue' | 'dir'> {}
interface RatingGroupLabelProps extends PropsWithChildren, PropsWithElement, Omit<ComponentProps<'label'>, 'id' | 'defaultValue' | 'dir'> {}
interface RatingGroupControlProps extends PropsWithChildren, PropsWithElement, Omit<ComponentProps<'div'>, 'id' | 'defaultValue' | 'dir'> {}
interface RatingGroupItemProps
	extends PropsWithChildren,
		PropsWithElement,
		ratingGroup.ItemProps,
		Omit<ComponentProps<'span'>, 'id' | 'defaultValue' | 'dir'> {}
interface RatingGroupHiddenInputProps extends PropsWithElement, Omit<ComponentProps<'input'>, 'id' | 'defaultValue' | 'dir'> {}
interface RatingGroupRootContext {
	api: ratingGroup.Api;
}

export type {
	RatingGroupRootProps,
	RatingGroupLabelProps,
	RatingGroupControlProps,
	RatingGroupItemProps,
	RatingGroupHiddenInputProps,
	RatingGroupRootContext
};
