import * as accordion from '@zag-js/accordion';
import type { HTMLAttributes } from 'svelte/elements';
import type { PropsWithChildren } from '../../../internal/props-with-children.js';

interface AccordionRootProps
	extends PropsWithChildren,
		Omit<accordion.Props, 'id'>,
		Omit<HTMLAttributes<HTMLElement>, 'id' | 'defaultValue' | 'dir'> {}
interface AccordionItemProps extends PropsWithChildren, accordion.ItemProps, HTMLAttributes<HTMLElement> {}
interface AccordionTriggerProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {}
interface AccordionIndicatorProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {}
interface AccordionContentProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {}
interface AccordionRootContext {
	api: accordion.Api;
}
interface AccordionItemContext {
	itemProps: accordion.ItemProps;
}

export type {
	AccordionRootProps,
	AccordionItemProps,
	AccordionTriggerProps,
	AccordionIndicatorProps,
	AccordionContentProps,
	AccordionRootContext,
	AccordionItemContext
};
