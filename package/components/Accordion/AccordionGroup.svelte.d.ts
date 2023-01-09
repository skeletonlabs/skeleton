import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        collapse?: boolean | undefined;
        hover?: string | undefined;
        spacing?: string | undefined;
        padding?: string | undefined;
        rounded?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type AccordionGroupProps = typeof __propDef.props;
export type AccordionGroupEvents = typeof __propDef.events;
export type AccordionGroupSlots = typeof __propDef.slots;
/** The Accordion parent element. */
export default class AccordionGroup extends SvelteComponentTyped<AccordionGroupProps, AccordionGroupEvents, AccordionGroupSlots> {
}
export {};
