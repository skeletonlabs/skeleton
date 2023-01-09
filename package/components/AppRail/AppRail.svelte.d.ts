import { SvelteComponentTyped } from "svelte";
import { type Writable } from 'svelte/store';
declare const __propDef: {
    props: {
        [x: string]: any;
        selected?: Writable<any> | undefined;
        background?: string | undefined;
        active?: string | undefined;
        hover?: string | undefined;
        width?: string | undefined;
        height?: string | undefined;
        gap?: string | undefined;
        regionLead?: string | undefined;
        regionDefault?: string | undefined;
        regionTrail?: string | undefined;
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
export type AppRailProps = typeof __propDef.props;
export type AppRailEvents = typeof __propDef.events;
export type AppRailSlots = typeof __propDef.slots;
/** A side navigation rail component. */
export default class AppRail extends SvelteComponentTyped<AppRailProps, AppRailEvents, AppRailSlots> {
}
export {};
