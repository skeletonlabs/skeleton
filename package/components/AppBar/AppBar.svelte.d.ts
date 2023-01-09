import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        background?: string | undefined;
        border?: string | undefined;
        padding?: string | undefined;
        shadow?: string | undefined;
        space?: string | undefined;
        slotLead?: string | undefined;
        slotDefault?: string | undefined;
        slotTrail?: string | undefined;
        label?: string | undefined;
        labelledby?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        lead: {};
        default: {};
        trail: {};
    };
};
export type AppBarProps = typeof __propDef.props;
export type AppBarEvents = typeof __propDef.events;
export type AppBarSlots = typeof __propDef.slots;
export default class AppBar extends SvelteComponentTyped<AppBarProps, AppBarEvents, AppBarSlots> {
}
export {};
