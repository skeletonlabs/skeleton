import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        checked?: boolean | undefined;
        size?: string | undefined;
        accent?: string | undefined;
        borderWidth?: string | undefined;
        borderColor?: string | undefined;
        rounded?: string | undefined;
        label?: string | undefined;
    };
    events: {
        click: MouseEvent;
        keydown: KeyboardEvent;
        keyup: KeyboardEvent;
        keypress: KeyboardEvent;
        mouseover: MouseEvent;
        change: Event;
        focus: FocusEvent;
        blur: FocusEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SlideToggleProps = typeof __propDef.props;
export type SlideToggleEvents = typeof __propDef.events;
export type SlideToggleSlots = typeof __propDef.slots;
export default class SlideToggle extends SvelteComponentTyped<SlideToggleProps, SlideToggleEvents, SlideToggleSlots> {
}
export {};
