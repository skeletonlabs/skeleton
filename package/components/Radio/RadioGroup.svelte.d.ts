import { SvelteComponentTyped } from "svelte";
import { type Writable } from 'svelte/store';
declare const __propDef: {
    props: {
        [x: string]: any;
        selected?: Writable<any> | undefined;
        display?: string | undefined;
        background?: string | undefined;
        borderWidth?: string | undefined;
        borderColor?: string | undefined;
        padding?: string | undefined;
        hover?: string | undefined;
        accent?: string | undefined;
        color?: string | undefined;
        fill?: string | undefined;
        rounded?: string | undefined;
        label?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type RadioGroupProps = typeof __propDef.props;
export type RadioGroupEvents = typeof __propDef.events;
export type RadioGroupSlots = typeof __propDef.slots;
export default class RadioGroup extends SvelteComponentTyped<RadioGroupProps, RadioGroupEvents, RadioGroupSlots> {
}
export {};
