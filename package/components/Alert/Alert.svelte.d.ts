import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        visible?: boolean | undefined;
        background?: string | undefined;
        border?: string | undefined;
        color?: string | undefined;
        rounded?: string | undefined;
        duration?: number | undefined;
        slotLead?: string | undefined;
        slotContent?: string | undefined;
        slotTrail?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        lead: {};
        title: {};
        default: {};
        trail: {};
    };
};
export type AlertProps = typeof __propDef.props;
export type AlertEvents = typeof __propDef.events;
export type AlertSlots = typeof __propDef.slots;
export default class Alert extends SvelteComponentTyped<AlertProps, AlertEvents, AlertSlots> {
}
export {};
