import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        position?: string | undefined;
        max?: number | undefined;
        duration?: number | undefined;
        background?: string | undefined;
        width?: string | undefined;
        color?: string | undefined;
        padding?: string | undefined;
        spacing?: string | undefined;
        rounded?: string | undefined;
        shadow?: string | undefined;
        buttonAction?: string | undefined;
        buttonDismiss?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ToastProps = typeof __propDef.props;
export type ToastEvents = typeof __propDef.events;
export type ToastSlots = typeof __propDef.slots;
export default class Toast extends SvelteComponentTyped<ToastProps, ToastEvents, ToastSlots> {
}
export {};
