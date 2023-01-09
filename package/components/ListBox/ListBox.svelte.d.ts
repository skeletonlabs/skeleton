import { SvelteComponentTyped } from "svelte";
import { type Writable } from 'svelte/store';
declare const __propDef: {
    props: {
        [x: string]: any;
        selected?: Writable<any> | undefined;
        space?: string | undefined;
        height?: string | undefined;
        accent?: string | undefined;
        padding?: string | undefined;
        rounded?: string | undefined;
        hover?: string | undefined;
        regionLabel?: string | undefined;
        regionList?: string | undefined;
        label?: string | undefined;
        labelId?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ListBoxProps = typeof __propDef.props;
export type ListBoxEvents = typeof __propDef.events;
export type ListBoxSlots = typeof __propDef.slots;
export default class ListBox extends SvelteComponentTyped<ListBoxProps, ListBoxEvents, ListBoxSlots> {
}
export {};
