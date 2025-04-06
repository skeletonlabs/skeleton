import * as accordion from '@zag-js/accordion';
import type { HTMLAttributes, PropsWithChildren } from 'react';

interface AccordionRootProps
	extends PropsWithChildren,
		Omit<accordion.Props, 'id'>,
		Omit<HTMLAttributes<HTMLElement>, 'id' | 'defaultValue' | 'dir'> {}
interface AccordionItemProps extends PropsWithChildren, accordion.ItemProps, HTMLAttributes<HTMLElement> {}
interface AccordionTriggerProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {}
interface AccordionHeadingProps extends PropsWithChildren, HTMLAttributes<HTMLHeadingElement> {
	/**
	 * The level of the heading. This is used to determine the heading level for accessibility purposes.
	 *
	 * @defaultValue 3
	 */
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}
interface AccordionIndicatorProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {}
interface AccordionContentProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {}
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
