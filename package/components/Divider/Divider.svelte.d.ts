import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        vertical?: boolean | undefined;
        borderWidth?: string | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        margin?: string | undefined;
        opacity?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DividerProps = typeof __propDef.props;
export type DividerEvents = typeof __propDef.events;
export type DividerSlots = typeof __propDef.slots;
export default class Divider extends SvelteComponentTyped<DividerProps, DividerEvents, DividerSlots> {
}
export {};
