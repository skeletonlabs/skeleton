import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        open?: boolean | undefined;
        summaryId?: string | undefined;
        contentId?: string | undefined;
        regionSummary?: string | undefined;
        regionContent?: string | undefined;
        hover?: string | undefined;
        spacing?: string | undefined;
        padding?: string | undefined;
        rounded?: string | undefined;
    };
    events: {
        click: MouseEvent;
        keydown: KeyboardEvent;
        keyup: KeyboardEvent;
        keypress: KeyboardEvent;
        toggle: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        lead: {};
        summary: {};
        content: {};
    };
};
export type AccordionItemProps = typeof __propDef.props;
export type AccordionItemEvents = typeof __propDef.events;
export type AccordionItemSlots = typeof __propDef.slots;
/** The Accordion child element. */
export default class AccordionItem extends SvelteComponentTyped<AccordionItemProps, AccordionItemEvents, AccordionItemSlots> {
}
export {};
