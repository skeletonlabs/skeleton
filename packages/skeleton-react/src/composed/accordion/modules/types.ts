import * as accordion from '@zag-js/accordion';
import type { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import type { PropsWithChildOrChildren } from '../../../internal/props-with-child-or-children.js';

interface AccordionRootProps
	extends PropsWithChildOrChildren,
		Omit<accordion.Props, 'id'>,
		Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'defaultValue' | 'dir'> {}
interface AccordionItemProps extends PropsWithChildOrChildren, accordion.ItemProps, HTMLAttributes<HTMLDivElement> {}
interface AccordionTriggerProps extends PropsWithChildOrChildren, ButtonHTMLAttributes<HTMLButtonElement> {}
interface AccordionHeadingProps extends PropsWithChildOrChildren, HTMLAttributes<HTMLHeadingElement> {
	/**
	 * The level of the heading. This is used to determine the heading level for accessibility purposes.
	 *
	 * @defaultValue 3
	 */
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}
interface AccordionIndicatorProps extends PropsWithChildOrChildren, HTMLAttributes<HTMLDivElement> {}
interface AccordionContentProps extends PropsWithChildOrChildren, HTMLAttributes<HTMLDivElement> {}
interface AccordionContext {
	api: accordion.Api;
}
interface AccordionItemContext {
	itemProps: accordion.ItemProps;
}

export type {
	AccordionRootProps,
	AccordionItemProps,
	AccordionTriggerProps,
	AccordionHeadingProps,
	AccordionIndicatorProps,
	AccordionContentProps,
	AccordionContext,
	AccordionItemContext
};
