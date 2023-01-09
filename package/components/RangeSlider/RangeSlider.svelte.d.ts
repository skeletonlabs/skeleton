import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        step?: number | undefined;
        ticked?: boolean | undefined;
        accent?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        label?: string | undefined;
    };
    events: {
        click: MouseEvent;
        change: Event;
        blur: FocusEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        trail: {};
    };
};
export type RangeSliderProps = typeof __propDef.props;
export type RangeSliderEvents = typeof __propDef.events;
export type RangeSliderSlots = typeof __propDef.slots;
export default class RangeSlider extends SvelteComponentTyped<RangeSliderProps, RangeSliderEvents, RangeSliderSlots> {
}
export {};
