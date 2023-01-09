import { SvelteComponentTyped } from "svelte";
import type { Writable } from 'svelte/store';
declare const __propDef: {
    props: {
        [x: string]: any;
        id?: string | undefined;
        selected?: Writable<any> | undefined;
        accent?: string | undefined;
        padding?: string | undefined;
        rounded?: string | undefined;
        hover?: string | undefined;
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
        trail: {};
    };
};
export type ListBoxItemProps = typeof __propDef.props;
export type ListBoxItemEvents = typeof __propDef.events;
export type ListBoxItemSlots = typeof __propDef.slots;
export default class ListBoxItem extends SvelteComponentTyped<ListBoxItemProps, ListBoxItemEvents, ListBoxItemSlots> {
}
export {};
