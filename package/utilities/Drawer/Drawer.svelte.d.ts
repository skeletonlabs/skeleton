import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        position?: "left" | "top" | "right" | "bottom" | undefined;
        duration?: number | undefined;
        bgBackdrop?: string | undefined;
        blur?: string | undefined;
        bgDrawer?: string | undefined;
        border?: string | undefined;
        rounded?: string | undefined;
        width?: string | undefined;
        height?: string | undefined;
        margin?: string | undefined;
        labelledby?: string | undefined;
        describedby?: string | undefined;
    };
    events: {
        keypress: KeyboardEvent;
        backdrop: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DrawerProps = typeof __propDef.props;
export type DrawerEvents = typeof __propDef.events;
export type DrawerSlots = typeof __propDef.slots;
export default class Drawer extends SvelteComponentTyped<DrawerProps, DrawerEvents, DrawerSlots> {
}
export {};
