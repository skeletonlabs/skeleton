import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value?: number | undefined;
        stroke?: number | undefined;
        meter?: string | undefined;
        track?: string | undefined;
        fill?: string | undefined;
        font?: number | undefined;
        label?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ProgressRadialProps = typeof __propDef.props;
export type ProgressRadialEvents = typeof __propDef.events;
export type ProgressRadialSlots = typeof __propDef.slots;
export default class ProgressRadial extends SvelteComponentTyped<ProgressRadialProps, ProgressRadialEvents, ProgressRadialSlots> {
}
export {};
