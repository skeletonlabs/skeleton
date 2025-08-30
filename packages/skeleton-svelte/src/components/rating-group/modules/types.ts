import * as ratingGroup from '@zag-js/rating-group';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import type { PropsWithChildren } from '../../../internal/props-with-children.js';
import type { HTMLAttributes, HTMLInputAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

interface RatingGroupRootProps
	extends PropsWithChildren,
		PropsWithElement,
		Omit<ratingGroup.Props, 'id'>,
		Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'defaultValue' | 'dir'> {}

interface RatingGroupLabelProps
	extends PropsWithChildren,
		PropsWithElement,
		Omit<HTMLAttributes<HTMLLabelElement>, 'id' | 'defaultValue' | 'dir'> {}
interface RatingGroupControlProps
	extends PropsWithChildren,
		PropsWithElement,
		Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'defaultValue' | 'dir'> {}
interface RatingGroupItemProps
	extends PropsWithElement,
		ratingGroup.ItemProps,
		Omit<HTMLAttributes<HTMLSpanElement>, 'id' | 'defaultValue' | 'dir'> {}

interface RatingGroupHiddenInputProps extends PropsWithElement, Omit<HTMLInputAttributes, 'id' | 'defaultValue' | 'dir'> {}
interface RatingGroupRootContext {
	api: ratingGroup.Api;
}
interface RatingGroupItemContext {
	itemState: ratingGroup.ItemState;
}
interface RatingGroupRootContextProps {
	children: Snippet<[ratingGroup.Api]>;
}
interface RatingGroupItemContextProps {
	children: Snippet<[ratingGroup.ItemState]>;
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
