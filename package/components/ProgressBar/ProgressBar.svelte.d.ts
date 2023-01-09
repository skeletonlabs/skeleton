import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        label?: string | undefined;
        value?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        height?: string | undefined;
        rounded?: string | undefined;
        meter?: string | undefined;
        track?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ProgressBarProps = typeof __propDef.props;
export type ProgressBarEvents = typeof __propDef.events;
export type ProgressBarSlots = typeof __propDef.slots;
export default class ProgressBar extends SvelteComponentTyped<ProgressBarProps, ProgressBarEvents, ProgressBarSlots> {
}
export {};
