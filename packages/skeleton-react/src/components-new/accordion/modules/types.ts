import * as accordion from '@zag-js/accordion';
import type { HTMLAttributes, PropsWithChildren } from 'react';

interface AccordionRootProps
	extends PropsWithChildren,
		Omit<accordion.Props, 'id'>,
		Omit<HTMLAttributes<HTMLElement>, 'id' | 'defaultValue' | 'dir'> {}
interface AccordionItemProps extends PropsWithChildren, accordion.ItemProps, HTMLAttributes<HTMLElement> {}
interface AccordionTriggerProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {}
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
	AccordionIndicatorProps,
	AccordionContentProps,
	AccordionContext,
	AccordionItemContext
};
