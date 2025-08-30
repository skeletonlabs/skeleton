import * as accordion from '@zag-js/accordion';
import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import type { Snippet } from 'svelte';

interface AccordionRootProps
	extends PropsWithElement,
		Omit<accordion.Props, 'id'>,
		Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'defaultValue' | 'dir'> {}
interface AccordionItemProps extends PropsWithElement, accordion.ItemProps, HTMLAttributes<HTMLDivElement> {}
interface AccordionHeadingProps extends PropsWithElement, HTMLAttributes<HTMLHeadingElement> {
	/**
	 * The level of the heading. This is used to determine the heading level for accessibility purposes.
	 *
	 * @defaultValue 3
	 */
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}
interface AccordionTriggerProps extends PropsWithElement, HTMLButtonAttributes {}
interface AccordionIndicatorProps extends PropsWithElement, HTMLAttributes<HTMLDivElement> {}
interface AccordionContentProps extends PropsWithElement, HTMLAttributes<HTMLDivElement> {}
interface AccordionRootContext {
	api: accordion.Api;
}
interface AccordionItemContext {
	itemProps: accordion.ItemProps;
	itemState: accordion.ItemState;
}
interface AccordionRootContextProps {
	children: Snippet<[accordion.Api]>;
}
interface AccordionItemContextProps {
	children: Snippet<[accordion.ItemState]>;
}

export type {
	AccordionRootProps,
	AccordionItemProps,
	AccordionTriggerProps,
	AccordionHeadingProps,
	AccordionIndicatorProps,
	AccordionContentProps,
	AccordionRootContext,
	AccordionItemContext,
	AccordionRootContextProps,
	AccordionItemContextProps
};
