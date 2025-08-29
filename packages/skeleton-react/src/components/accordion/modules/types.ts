import * as accordion from '@zag-js/accordion';
import type { PropsWithChildren, ComponentProps } from 'react';
import type { PropsWithElement } from '@/internal/props-with-child.js';

interface AccordionRootProps
	extends PropsWithChildren,
		PropsWithElement,
		Omit<accordion.Props, 'id'>,
		Omit<ComponentProps<'div'>, 'id' | 'defaultValue' | 'dir'> {}
interface AccordionItemProps extends PropsWithChildren, PropsWithElement, accordion.ItemProps, ComponentProps<'div'> {}
interface AccordionTriggerProps extends PropsWithChildren, PropsWithElement, ComponentProps<'button'> {}
interface AccordionHeadingProps extends PropsWithChildren, PropsWithElement, ComponentProps<'h3'> {
	/**
	 * The level of the heading. This is used to determine the heading level for accessibility purposes.
	 *
	 * @defaultValue 3
	 */
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}
interface AccordionIndicatorProps extends PropsWithChildren, PropsWithElement, ComponentProps<'div'> {}
interface AccordionContentProps extends PropsWithChildren, PropsWithElement, ComponentProps<'div'> {}
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
