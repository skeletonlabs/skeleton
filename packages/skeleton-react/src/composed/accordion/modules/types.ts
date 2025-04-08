import * as accordion from '@zag-js/accordion';
import type { ButtonHTMLAttributes, HTMLAttributes, PropsWithChildren } from 'react';
import type { PropsWithElement } from '../../../internal/props-with-child.js';

interface AccordionRootProps
	extends PropsWithChildren,
		PropsWithElement,
		Omit<accordion.Props, 'id'>,
		Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'defaultValue' | 'dir'> {}
interface AccordionItemProps extends PropsWithChildren, PropsWithElement, accordion.ItemProps, HTMLAttributes<HTMLDivElement> {}
interface AccordionTriggerProps extends PropsWithChildren, PropsWithElement, ButtonHTMLAttributes<HTMLButtonElement> {}
interface AccordionHeadingProps extends PropsWithChildren, PropsWithElement, HTMLAttributes<HTMLHeadingElement> {
	/**
	 * The level of the heading. This is used to determine the heading level for accessibility purposes.
	 *
	 * @defaultValue 3
	 */
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}
interface AccordionIndicatorProps extends PropsWithChildren, PropsWithElement, HTMLAttributes<HTMLDivElement> {}
interface AccordionContentProps extends PropsWithChildren, PropsWithElement, HTMLAttributes<HTMLDivElement> {}
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
