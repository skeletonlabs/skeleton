import { SvelteComponentTyped } from "svelte";
/**
     * @slot lead - Provides a leading position, which can be used for icons.
     */
import type { Writable } from 'svelte/store';
declare const __propDef: {
    props: {
        [x: string]: any;
        selected?: Writable<any> | undefined;
        borderWidth?: string | undefined;
        borderColor?: string | undefined;
        color?: string | undefined;
        fill?: string | undefined;
        hover?: string | undefined;
        rounded?: string | undefined;
        value?: any;
        label?: string | undefined;
    };
    events: {
        keyup: KeyboardEvent;
        keypress: KeyboardEvent;
        click: CustomEvent<any>;
        keydown: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        lead: {};
        default: {};
    };
};
export type TabProps = typeof __propDef.props;
export type TabEvents = typeof __propDef.events;
export type TabSlots = typeof __propDef.slots;
export default class Tab extends SvelteComponentTyped<TabProps, TabEvents, TabSlots> {
}
export {};
