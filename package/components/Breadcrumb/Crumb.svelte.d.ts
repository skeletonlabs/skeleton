import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: string | undefined;
        separator?: string | undefined;
    };
    events: {
        click: MouseEvent;
        keydown: KeyboardEvent;
        keyup: KeyboardEvent;
        keypress: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        lead: {};
        default: {};
    };
};
export type CrumbProps = typeof __propDef.props;
export type CrumbEvents = typeof __propDef.events;
export type CrumbSlots = typeof __propDef.slots;
export default class Crumb extends SvelteComponentTyped<CrumbProps, CrumbEvents, CrumbSlots> {
}
export {};
