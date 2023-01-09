import { SvelteComponentTyped } from "svelte";
import type { Writable } from 'svelte/store';
declare const __propDef: {
    props: {
        [x: string]: any;
        selected: Writable<any>;
        rail?: boolean | undefined;
        justify?: string | undefined;
        borderWidth?: string | undefined;
        borderColor?: string | undefined;
        color?: string | undefined;
        fill?: string | undefined;
        hover?: string | undefined;
        rounded?: string | undefined;
        labeledby?: string | undefined;
        label?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TabGroupProps = typeof __propDef.props;
export type TabGroupEvents = typeof __propDef.events;
export type TabGroupSlots = typeof __propDef.slots;
export default class TabGroup extends SvelteComponentTyped<TabGroupProps, TabGroupEvents, TabGroupSlots> {
}
export {};
