import { SvelteComponentTyped } from "svelte";
import type { Writable } from 'svelte/store';
declare const __propDef: {
    props: {
        [x: string]: any;
        value?: any;
        label?: string | undefined;
        selected?: Writable<any> | undefined;
        padding?: string | undefined;
        hover?: string | undefined;
        accent?: string | undefined;
        color?: string | undefined;
        fill?: string | undefined;
        rounded?: string | undefined;
    };
    events: {
        click: MouseEvent;
        keyup: KeyboardEvent;
        keypress: KeyboardEvent;
        keydown: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type RadioItemProps = typeof __propDef.props;
export type RadioItemEvents = typeof __propDef.events;
export type RadioItemSlots = typeof __propDef.slots;
export default class RadioItem extends SvelteComponentTyped<RadioItemProps, RadioItemEvents, RadioItemSlots> {
}
export {};
